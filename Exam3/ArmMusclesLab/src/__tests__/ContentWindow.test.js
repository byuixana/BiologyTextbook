import { render, screen } from '@testing-library/react';
import ContentWindow from '../lib/ContentWindow';
import SelectionContextProvider from '../context/SelectionContext';

function renderWithContext(selectedItem) {
  return render(
    <SelectionContextProvider initialSelectedItem={selectedItem}>
      <ContentWindow />
    </SelectionContextProvider>
  );
}

test('shows fallback message when no item is selected', () => {
  renderWithContext(null);
  expect(screen.getByText(/select/i)).toBeInTheDocument();
});

test('renders ImgWindow for type "img"', () => {
  const item = {
    id: 1,
    label: 'Frontal Bone',
    type: 'img',
    buttons: [{ label: 'Anterior', img: 'Images/frontal-ant.jpg' }],
    children: []
  };
  renderWithContext(item);
  // ImgWindow renders the item label
  expect(screen.getByText('Frontal Bone')).toBeInTheDocument();
});

test('renders VideoPlayer for type "video"', () => {
  const item = {
    id: 2,
    label: 'Anterior View Video',
    type: 'video',
    child_items: [{ video_link: 'https://cdnapisec.kaltura.com/test' }],
    children: []
  };
  renderWithContext(item);
  expect(screen.getByTitle(/muscles|anterior|video/i)).toBeInTheDocument();
});

test('renders Lecture iframe for items without a type', () => {
  const item = {
    id: 3,
    label: 'Intro Page',
    load: 'Pages/intro.html',
    children: []
  };
  renderWithContext(item);
  // Lecture renders an iframe — check it exists in the DOM
  expect(document.querySelector('iframe')).toBeInTheDocument();
});
