import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { validCity } from 'helpers'
import { CityInput } from 'components'

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

const wrapper = shallow(<ThemeProvider theme={theme}> <CityInput /> </ThemeProvider>);

describe('<CityInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

it('validates the city input correctly with characters', () => {
    const input = 'Road'
    expect(input).toMatch(validCity)
  });

it('validates the city input correctly with whitespace', () => {
  const input = 'Old Georgetown Road'
  expect(input).toMatch(validCity)
  });

it('validates the city input correctly with numbers', () => {
  const input = '1234 Old Georgetown Rd'
  expect(input).not.toMatch(validCity)
  });