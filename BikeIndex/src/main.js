import './styles.css';
// import { Triangle } from './triangle.js';

$(document).ready(function() {
  $('#bike').click(function() {
    console.log("It works");
    // const city = $('#location').val();
    // $('#location').val("");

    let request = new XMLHttpRequest();
    // const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=api_key`;
    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=1&location=IP&distance=10&stolenness=stolen&access_token=api_key`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('#result').text(`The stolen bikes are ${response.bikes[0].title}`);
      console.log(response.bikes[0].title);
    };
  });
});
