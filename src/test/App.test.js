import { render, screen } from '@testing-library/react';
import App from '../App';

test("Renders Squid Game's Rolls on Life Game Logo/Title", () => {
  render(<App />);
  let nameofGameShouldBeDisplayed = screen.getByText(/Squid Game/i);
  expect(nameofGameShouldBeDisplayed).toBeInTheDocument();
});

test("Should allow ", () => {
  render(<App />);
  let inputBoxOneShouldExist = screen.getAllByPlaceholderText('Enter name')[0];// as HTMLAnchorElement;
  const inputBoxTwoShouldExist = screen.getAllByPlaceholderText('Enter name')[1];
  expect(inputBoxOneShouldExist).toBeVisible();
  expect(inputBoxTwoShouldExist).toBeVisible();
});
