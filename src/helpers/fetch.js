
const sendFormData = async (data) => {
    await fetch('/submit', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })
        .then(function(response) {
            return response.ok
        })
}

export default sendFormData