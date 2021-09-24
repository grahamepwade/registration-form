function formatPhoneNumber(number) {
    const numberLength = number.length
    let formatted = ''

    if (numberLength >= 7) {
        formatted = number.replace(
            /(\d{3})(\d{3})(\d+)/,
            '($1) $2-$3'
        )
    }
    else if (numberLength >= 4) {
        formatted = number.replace(
            /(\d{3})(\d+)/,
            '($1) $2'
        )
    }
    else if (numberLength >= 1) {
        formatted = number.replace(
            /(\d+)/,
            '($1'
        )
    }

    return formatted
}

export default formatPhoneNumber