const enterMainScreen = () => {
    document.getElementById('introduction-screen').style.display = 'none'
    document.getElementById('main-screen').style.display = 'block'
    document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
    document.body.style.backgroundSize = '400% 400%'
    document.body.style.animation = 'gradient 10s ease infinite'
}

//Spirited Away Functions//

const enterDetailScreen = () => {
    document.getElementById('main-screen').style.display = 'none'
    document.getElementById('detail-screen').style.display = 'block'
    document.body.style.background = '#E2CE45'
}

async function retrieveFilmData(urlToSend) {
let data = await fetch(urlToSend)
    let result = await data.json()
    console.log(result)
    return result
}

