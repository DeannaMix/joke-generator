import '../styles/main.scss';
import axios from 'axios';
// import firebase from 'firebase/app';
import firebaseKeys from './data/firebaseKeys.json';

const baseUrl = firebaseKeys.databaseURL;

const init = () => {
  $('#app').html('<h1>Joke Generator!</h1> ');
  $('#joke').click(() => {
    axios.get(`${baseUrl}/jokes.json`).then((response) => {
      const jokeObject = response.data[Math.floor(Math.random() * response.data.length)];
      const { joke, punchline } = jokeObject;
      $('#viewJoke').replaceWith(
        `<p>${joke}</p> <button type="button" class="btn btn-secondary" id="getPunchline"> Show Me The Punchline</button>`
      );
      $('#getPunchline').click(() => {
        $('#viewPunchline').replaceWith(`<p>${punchline}</p>`);
      });
    });
  });
};

init();
