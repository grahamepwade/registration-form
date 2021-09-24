import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { validZIP } from 'helpers'
import { ZIPInput } from 'components'

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

const wrapper = shallow(<ThemeProvider theme={theme}> <ZIPInput /> </ThemeProvider>);

describe('<ZIPInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

it('validates the zip input correctly with numbers', () => {
    const input = '12345'
    expect(input).toMatch(validZIP)
});

it('validates the zip input correctly with whitespace', () => {
  const input = '12 345'
  expect(input).not.toMatch(validZIP)
});

it('validates the zip input correctly with characters', () => {
  const input = '123Main'
  expect(input).not.toMatch(validZIP)
});

it('validates the zip input correctly with hyphen', () => {
  const input = '123-45'
  expect(input).not.toMatch(validZIP)
});