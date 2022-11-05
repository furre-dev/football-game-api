

async function getData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6498704633mshcc1b8b7a4d0b752p18da08jsnfd5a1ea0c22c',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=203&season=2022&from=2022-11-04&to=2022-11-08', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}