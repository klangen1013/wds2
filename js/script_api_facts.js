const fact_result = document.getElementById('fact_result');
const catfact_result = document.getElementById('catfact_result');
const fact_btn = document.getElementById('fact_btn');
const catfact_btn = document.getElementById('catfact_btn');


fact_btn.addEventListener('click', getFact)
catfact_btn.addEventListener('click', getCatFact)

function getFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(res => res.json())
    .then (data => {
        fact_result.innerHTML = `<p>${data.text}</p>`
    })
}

function getCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
    .then(res => res.json())
    .then (data => {
        catfact_result.innerHTML = `<p>${data.data}</p>`
    })
}