import './styles.css';
// import { Bike } from './bike.js';

$(document).ready(function() {
  $('#bike').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=%E2%80%9CPortland%2C%20OR%E2%80%9D&distance=10&stolenness=proximity&access_token=api_key`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      let date = new Date();
      let oneWeekBefore = date - 604000000;
      // console.log(oneWeekBefore);
      let result = [];
      for (let i = 0; i < 99; i++) {
        if (parseInt(`${response.bikes[i].date_stolen}`)*1000 > oneWeekBefore) {
          result.push(`${response.bikes[i].date_stolen}`);
          console.log(result.length);
        }
      }
      // $('#result').text(`The stolen bikes are ${response.bikes.date_stolen}`);
      // console.log(result.length);
    };
  });
});
