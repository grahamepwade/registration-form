import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import {validName} from 'helpers'
import { FirstNameInput } from 'components'

const theme = createTheme({
    palette: {
        primary: {
            main: '#00b79b',
        },
        secondary: {
            main: '#222b3b',
        }
    },
})

const wrapper = shallow(<ThemeProvider theme={theme}> <FirstNameInput /> </ThemeProvider>);

describe('<FirstNameInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});


it('validates the name input correctly with characters', () => {
    const input = 'John'
    expect(input).toMatch(validName)
});

it('validates the name input correctly with whitespace', () => {
  const input = 'John Hancock'
  expect(input).not.toMatch(validName)
});

it('validates the name input correctly with numbers', () => {
  const input = 'John21'
  expect(input).not.toMatch(validName)
});

it('validates the name input correctly with hyphen', () => {
  const input = 'John-'
  expect(input).toMatch(validName)
});

it('validates the name input correctly with period', () => {
  const input = 'John.'
  expect(input).toMatch(validName)
});

it('validates the name input correctly with apostrohpe', () => {
  const input = "John'Hancock"
  expect(input).toMatch(validName)
});

it('validates the name input correctly with combination', () => {
  const input = "John'Hancock-Smith."
  expect(input).toMatch(validName)
});

it('validates the name input correctly with combination and whitespace', () => {
  const input = "John. Hancock-"
  expect(input).not.toMatch(validName)
});