const uname = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

function apiFetch(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((allDatas) => displayData(allDatas))
}
apiFetch();

let indexNo = 0;

function displayData(data){
  uname.innerHTML = data[0].name;
  email.innerHTML = data[0].email;
  comment.innerHTML = data[0].body;
}
