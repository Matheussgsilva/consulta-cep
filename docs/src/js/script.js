var cep = document.querySelector("#cep")
var btn = document.querySelector("#form-btn")
var clearBtn = document.querySelector("#clear-btn")
var alert = document.querySelector("#alert")

btn.addEventListener("click", function event() {
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
        alert.insertAdjacentHTML('afterbegin', "<p>CEP inválido!</p>")
        console.log(error.message)
    })
})

function showData(result) {
    alert.innerHTML = ""
    for(resultData in result) {
        if(document.querySelector(`#${resultData}`)) {
            document.querySelector(`#${resultData}`).value = result[resultData]
        }
    }
}

clearBtn.addEventListener("click", function clear () {
    document.querySelector("#cep").value = ""
    document.querySelector("#logradouro").value = ""
    document.querySelector("#bairro").value = ""
    document.querySelector("#localidade").value = ""
    document.querySelector("#uf").value = ""
    alert.innerHTML = ""
})