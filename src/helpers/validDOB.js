import { getDate, getMonth, getYear, isValid } from 'date-fns'

function validDOB(userInput) {
    const today = new Date()
    const cutOff = new Date(getYear(today) - 18, getMonth(today), getDate(today))

    const isDateValid = isValid(userInput)
    const isOldEnough = userInput <= cutOff
    const fullYear = getYear(userInput).toString().length === 4

    return isDateValid && isOldEnough && fullYear ? true : false

}

export default validDOB