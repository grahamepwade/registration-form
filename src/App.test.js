import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'

import App from './App'

configure({ adapter: new Adapter() })

test('renders form title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders form title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Get my free samples/i)
    expect(linkElement).toBeInTheDocument();
})
