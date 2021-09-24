import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { validStreet } from 'helpers'
import { StreetInput } from 'components'

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

const wrapper = shallow(<ThemeProvider theme={theme}> <StreetInput /> </ThemeProvider>);

describe('<StreetInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});


it('validates the street input correctly with characters', () => {
    const input = 'Main'
    expect(input).toMatch(validStreet)
});

it('validates the street input correctly with whitespace', () => {
  const input = 'Main Street'
  expect(input).toMatch(validStreet)
});

it('validates the street input correctly with numbers', () => {
  const input = 'Main21'
  expect(input).not.toMatch(validStreet)
});

it('validates the street input correctly with hyphen', () => {
  const input = 'Main-Street'
  expect(input).toMatch(validStreet)
});

it('validates the street input correctly with period', () => {
  const input = 'Main.Street'
  expect(input).toMatch(validStreet)
});

it('validates the street input correctly with apostrohpe', () => {
  const input = "Main'Street"
  expect(input).not.toMatch(validStreet)
});

it('validates the street input correctly with combination', () => {
  const input = "Main-Street."
  expect(input).toMatch(validStreet)
});

it('validates the street input correctly with combination and whitespace', () => {
  const input = "Main. Street-"
  expect(input).toMatch(validStreet)
});