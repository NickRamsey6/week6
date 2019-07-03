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
      let date = new Date(); //date in milliseconds
      let oneWeekBefore = date - 604000000;
      let result = [];
      for (let i = 0; i < 99; i++) {
        // ${response.bikes[i].date_stolen} in API is seconds not milliseconds and so need to 1000 times
        if (parseInt(`${response.bikes[i].date_stolen}`)*1000 > oneWeekBefore) {
          result.push(`${response.bikes[i].title}`);
        }
        $('#result').text("The model of " + result + " " + result.length + " bikes are stolen around portland area at last week!");
      }
    };
  });
});

// console.log(result.length);
// console.log(oneWeekBefore);
