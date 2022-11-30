import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('render App1, App2 and App3', () => {
  render(<App />);

  const linkApp1 = screen.getByText(/App1/i);
  expect(linkApp1).toBeInTheDocument();

  const linkApp2 = screen.getByText(/App2/i);
  expect(linkApp2).toBeInTheDocument();

  const linkApp3 = screen.getByText(/App3/i);
  expect(linkApp3).toBeInTheDocument();
});

test('add window App1, App2 and App3', async () => {
  render(<App />);

  const linkApp1 = screen.getByText(/App1/i);
  await userEvent.click(linkApp1);
  const appsApp1 = screen.getByText(/Apps->app1/i);
  expect(appsApp1).toBeInTheDocument();

  const linkApp2 = screen.getByText(/App2/i);
  await userEvent.click(linkApp2);
  const appsApp2 = screen.getByText(/Apps->app2/i);
  expect(appsApp2).toBeInTheDocument();

  const linkApp3 = screen.getByText(/App3/i);
  await userEvent.click(linkApp3);
  const appsApp3 = screen.getByText(/Apps->app3/i);
  expect(appsApp3).toBeInTheDocument();
});

test('remove window App1', async () => {
  const {container} = render(<App />);

  const linkApp1 = screen.getByText(/App1/i);
  await userEvent.click(linkApp1);
  const appsApp1 = screen.getByText(/Apps->app1/i);
  const removeButton = container.getElementsByClassName('remove').item(0);
  userEvent.click(removeButton);
  expect(appsApp1).not.toBeInTheDocument();
});

test('remove window App2', async () => {
  const {container} = render(<App />);

  const linkApp2 = screen.getByText(/App2/i);
  await userEvent.click(linkApp2);
  const appsApp2 = screen.getByText(/Apps->app2/i);
  const removeButton = container.getElementsByClassName('remove').item(0);
  userEvent.click(removeButton);
  expect(appsApp2).not.toBeInTheDocument();
});

test('remove window App3', async () => {
  const {container} = render(<App />);

  const linkApp3 = screen.getByText(/App3/i);
  await userEvent.click(linkApp3);
  const appsApp3 = screen.getByText(/Apps->app3/i);
  const removeButton = container.getElementsByClassName('remove').item(0);
  userEvent.click(removeButton);
  expect(appsApp3).not.toBeInTheDocument();
});
