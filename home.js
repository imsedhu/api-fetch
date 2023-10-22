/* const uname = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const row = document.querySelector('.row');
const showCard = document.querySelector('#showCard');


function apiFetch(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((allDatas) => displayData(allDatas));
};
apiFetch();


function displayData(data){
  data.forEach((e) => {
    uname.innerHTML = e.name;
    email.innerHTML = e.email;
    comment.innerHTML = e.body;
    row.innerHTML += showCard.innerHTML;
  });
}; */

const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const row = document.querySelector(".row");
const showCard = document.querySelector("#showCard");

function apiFetch() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((allDatas) => displayData(allDatas));
}
apiFetch();

function displayData(data) {
  data.forEach((e) => {
    uname.innerHTML = e.name;
    email.innerHTML = e.email;
    comment.innerHTML = e.body;
    row.innerHTML += showCard.innerHTML;
  });
}
