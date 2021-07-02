const filmUrl = 'https://ghibliapi.herokuapp.com/films/'
// const characterUrl = 'https://ghibliapi.herokuapp.com/people'
// const speciesUrl = 'https://ghibliapi.herokuapp.com/species'

document.getElementById('introduction-button').addEventListener('click', () => {
    enterMainScreen()
})

document.querySelectorAll('.show-more').forEach((button) => {
    button.addEventListener('click', (e) => {
        let urlSuffix = e.target.dataset.url
        console.log(urlSuffix)
        let urlToSend = filmUrl + urlSuffix
        retrieveFilmData(urlToSend).then((filmObject) => {
            fetch('template.hbs')
                .then((filmData)=> filmData.text())
                .then((filmTem) => {
                    const template = Handlebars.compile(filmTem)
                    let html = template(filmObject)
                    document.getElementById('detail-screen').innerHTML = html
                    document.getElementById('detail-back-button').addEventListener('click', () => {
                        document.getElementById('detail-screen').style.display = 'none'
                        enterMainScreen()
                    })
                })
        })
        enterDetailScreen()
    })
})

