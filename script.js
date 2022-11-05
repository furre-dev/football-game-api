const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");

async function getData() {
  //fetch func written for best compatibility for rapidapi.
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6498704633mshcc1b8b7a4d0b752p18da08jsnfd5a1ea0c22c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const football_url = "6498704633mshcc1b8b7a4d0b752p18da08jsnfd5a1ea0c22c";
  const response = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=203&season=2022&from=2022-11-04&to=2022-11-08",
    options
  )
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.error(err));

  console.log(data.response);

  const matches = data.response;

  //remove "example" element because it isnt connected to the API and has random values.
  cardContainer.removeChild(card);
  //create a clone for every match on the fixture and assing values
  matches.forEach((element) => {
    const clone = card.cloneNode(true);

    //setting the home and away team logos
    const homeTeamImage = clone.querySelector(".homeTeamImage");
    const awayTeamImage = clone.querySelector(".awayTeamImage");
    const homeTeamId = element.teams.home.id;
    const awayTeamId = element.teams.away.id;
    homeTeamImage.src =
      "https://media.api-sports.io/football/teams/" + homeTeamId + ".png";
    awayTeamImage.src =
      "https://media.api-sports.io/football/teams/" + awayTeamId + ".png";
    //
    //setting the home and away team names
    const homeTeamName = clone.querySelector(".home-team-name");
    const awayTeamName = clone.querySelector(".away-team-name");
    homeTeamName.textContent = element.teams.home.name;
    awayTeamName.textContent = element.teams.away.name;
    //
    //setting time and date
    const startTime = clone.querySelector(".match-time");
    const date = clone.querySelector(".date");

    const dateNtime = element.fixture.date;
    const time = dateNtime.slice(
      dateNtime.indexOf("T") + 1,
      dateNtime.indexOf("T") + 1 + 5
    );
    const dateText = dateNtime.slice(0, dateNtime.indexOf("T"));
    startTime.textContent = time;
    date.textContent = dateText;
    //
    //Setting league name
    const league = clone.querySelector(".league-image");
    league.src = element.league.logo;
    //
    //setting stadium name
    const stadium = clone.querySelector(".stadium");
    stadium.textContent = element.fixture.venue.name;
    //
    //setting referee name
    const referee = clone.querySelector(".referee");
    referee.textContent = element.fixture.referee;
    card.style.display = "block";

    //Set clone as a child to cardContainer
    cardContainer.appendChild(clone);
  });
}

//I have a limit of 100 requests/day to this api :D Please use responsibly
// remove '//' to make the script run.
//getData();
