import { render, screen } from '@testing-library/react';
import SectionMenu from '../lib/SectionMenu';
import SelectionContextProvider from '../context/SelectionContext';

const mockSections = [
  {
    id: 'week1',
    title: 'Week 4.1: Skull Bone Anatomy',
    data: [
      { id: 1, label: 'Frontal Bone', type: 'img', buttons: [], children: [] }
    ]
  },
  {
    id: 'week2',
    title: 'Week 4.2: Practice',
    data: [
      { id: 101, label: 'Practice Descriptions', load: 'Pages/desc.html', children: [] }
    ]
  }
];

const initialItem = mockSections[0].data[0];

function renderMenu(sections = mockSections) {
  return render(
    <SelectionContextProvider initialSelectedItem={initialItem}>
      <SectionMenu sections={sections} />
    </SelectionContextProvider>
  );
}

test('renders all section titles', () => {
  renderMenu();
  expect(screen.getByText('Week 4.1: Skull Bone Anatomy')).toBeInTheDocument();
  expect(screen.getByText('Week 4.2: Practice')).toBeInTheDocument();
});

test('renders tree items from section data', () => {
  renderMenu();
  expect(screen.getByText('Frontal Bone')).toBeInTheDocument();
  expect(screen.getByText('Practice Descriptions')).toBeInTheDocument();
});

test('renders a single section when only one is provided', () => {
  renderMenu([mockSections[0]]);
  expect(screen.getByText('Week 4.1: Skull Bone Anatomy')).toBeInTheDocument();
  expect(screen.queryByText('Week 4.2: Practice')).not.toBeInTheDocument();
});

test('renders three sections when three are provided', () => {
  const thirdSection = { id: 'week3', title: 'Week 4.3: Review', data: [] };
  renderMenu([...mockSections, thirdSection]);
  expect(screen.getByText('Week 4.3: Review')).toBeInTheDocument();
});
