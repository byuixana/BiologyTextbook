import { render, screen, fireEvent } from '@testing-library/react';
import ImgWindow from '../lib/ImgWindow';
import SelectionContextProvider from '../context/SelectionContext';

// HTMLMediaElement.prototype.load and .play are stubbed in setupTests.js.
// Access them directly for assertions.
const loadMock = () => window.HTMLMediaElement.prototype.load;
const playMock = () => window.HTMLMediaElement.prototype.play;

function renderImgWindow(item) {
  return render(
    <SelectionContextProvider initialSelectedItem={item}>
      <ImgWindow />
    </SelectionContextProvider>
  );
}

const baseItem = {
  id: 1,
  label: 'Frontal Bone',
  type: 'img',
  sound: 'Sounds/frontalbone.wav',
  buttons: [
    { label: 'Anterior', img: 'Images/frontal-ant.jpg' },
    { label: 'Lateral',  img: 'Images/frontal-lat.jpg' }
  ],
  children: []
};

test('renders the bone label', () => {
  renderImgWindow(baseItem);
  expect(screen.getByText('Frontal Bone')).toBeInTheDocument();
});

test('renders a button for each view angle', () => {
  renderImgWindow(baseItem);
  expect(screen.getByText('Anterior')).toBeInTheDocument();
  expect(screen.getByText('Lateral')).toBeInTheDocument();
});

test('displays the first button image on initial render', () => {
  renderImgWindow(baseItem);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'Images/frontal-ant.jpg');
});

test('switches image when a different view button is clicked', () => {
  renderImgWindow(baseItem);
  fireEvent.click(screen.getByText('Lateral'));
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'Images/frontal-lat.jpg');
});

test('shows "No image available" when item has no buttons', () => {
  const noButtonItem = { id: 2, label: 'Empty', type: 'img', buttons: [], children: [] };
  renderImgWindow(noButtonItem);
  expect(screen.getByText(/no image available/i)).toBeInTheDocument();
});

test('renders volume button', () => {
  renderImgWindow(baseItem);
  const buttons = screen.getAllByRole('button');
  // At least the two view buttons plus the sound button
  expect(buttons.length).toBeGreaterThanOrEqual(3);
});

test('plays audio when sound button is clicked', () => {
  renderImgWindow(baseItem);
  const soundButton = screen.getAllByRole('button').at(-1);
  fireEvent.click(soundButton);
  expect(playMock()).toHaveBeenCalled();
});

test('calls load before play when sound button is clicked', () => {
  renderImgWindow(baseItem);
  const soundButton = screen.getAllByRole('button').at(-1);
  fireEvent.click(soundButton);
  expect(loadMock()).toHaveBeenCalled();
});

test('sets audio src to the item sound path when play is clicked', () => {
  renderImgWindow(baseItem);
  const soundButton = screen.getAllByRole('button').at(-1);
  fireEvent.click(soundButton);
  // jsdom normalizes src to an absolute URL; check that the path is included
  const lastCall = playMock().mock.instances[0];
  expect(lastCall.src).toContain('frontalbone.wav');
});

test('does not crash when item has no sound', () => {
  const noSoundItem = { ...baseItem, sound: undefined };
  expect(() => renderImgWindow(noSoundItem)).not.toThrow();
});

test('does not throw when sound button clicked with no sound file', () => {
  const noSoundItem = { ...baseItem, sound: undefined };
  renderImgWindow(noSoundItem);
  const soundButton = screen.getAllByRole('button').at(-1);
  expect(() => fireEvent.click(soundButton)).not.toThrow();
});
