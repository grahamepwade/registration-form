import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { formatPhoneNumber } from 'helpers'
import { PhoneInput } from 'components'

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

const wrapper = shallow(<ThemeProvider theme={theme}> <PhoneInput /> </ThemeProvider>);

describe('<PhoneInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

it('formats the phone number correctly with 3 numbers', () => {
    const formatted = formatPhoneNumber('123')
    expect(formatted).toBe('(123')
  });

  it('formats the phone number correctly with 5 numbers', () => {
    const formatted = formatPhoneNumber('12345')
    expect(formatted).toBe('(123) 45')
  });

  it('formats the phone number correctly with 10 numbers', () => {
    const formatted = formatPhoneNumber('1234567890')
    expect(formatted).toBe('(123) 456-7890')
  });

