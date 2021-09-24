import { shallow } from 'enzyme';

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'
import { getDate, getMonth, getYear } from 'date-fns'

import { validDOB } from 'helpers'
import { DOBInput } from 'components'

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

const wrapper = shallow(<ThemeProvider theme={theme}> <DOBInput /> </ThemeProvider>);

describe('<DOBInput />', () => {
  it('should work', () => {
    expect(wrapper).toMatchSnapshot()
  });
});



it('validates the date input correctly with date 18 years ago', () => {
  const today = new Date()
  const cutOff = new Date(getYear(today) - 18, getMonth(today), getDate(today))
  const isvalidBirthDate = validDOB(cutOff)
  
  expect(isvalidBirthDate).toEqual(true)
});

it('validates the date correctly with todays date', () => {
  const today = new Date()
  const isvalidBirthDate = validDOB(today)
  
  expect(isvalidBirthDate).toEqual(false)
});