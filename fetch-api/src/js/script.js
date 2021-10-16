var cep = document.querySelector("#cep")

cep.addEventListener("blur", function event() {
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(function response(res) {
        res.json()
        .then(function dataResponse(data) {
            showData(data)
        })
    })
    .catch(function error() {
        console.log(error.message)
    })
})

function showData(result) {
    for(resultData in result) {
        if(document.querySelector(`#${resultData}`)) {
            document.querySelector(`#${resultData}`).value = result[resultData]
        }
    }
}