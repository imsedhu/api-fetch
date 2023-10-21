const uname = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const uname1 = document.querySelector('#name1');
const email1 = document.querySelector('#email1');
const comment1 = document.querySelector('#comment1');
const uname2 = document.querySelector('#name2');
const email2 = document.querySelector('#email2');
const comment2 = document.querySelector('#comment2');
const uname3 = document.querySelector('#name3');
const email3 = document.querySelector('#email3');
const comment3 = document.querySelector('#comment3');
const uname4 = document.querySelector('#name4');
const email4 = document.querySelector('#email4');
const comment4 = document.querySelector('#comment4');
const uname5 = document.querySelector('#name5');
const email5 = document.querySelector('#email5');
const comment5 = document.querySelector('#comment5');
const uname6 = document.querySelector('#name6');
const email6 = document.querySelector('#email6');
const comment6 = document.querySelector('#comment6');
/* const card = document.querySelector('#card'); */

function apiFetch(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((allDatas) => displayData(allDatas))
}
apiFetch();


function displayData(data){
  uname.innerHTML = data[0].name;
  email.innerHTML = data[0].email;
  comment.innerHTML = data[0].body;

  uname1.innerHTML = data[1].name;
  email1.innerHTML = data[1].email;
  comment1.innerHTML = data[1].body;

  uname2.innerHTML = data[2].name;
  email2.innerHTML = data[2].email;
  comment2.innerHTML = data[2].body;

  uname3.innerHTML = data[120].name;
  email3.innerHTML = data[120].email;
  comment3.innerHTML = data[120].body;

  uname4.innerHTML = data[110].name;
  email4.innerHTML = data[110].email;
  comment4.innerHTML = data[110].body;

  uname5.innerHTML = data[5].name;
  email5.innerHTML = data[5].email;
  comment5.innerHTML = data[5].body;

  uname6.innerHTML = data[6].name;
  email6.innerHTML = data[6].email;
  comment6.innerHTML = data[6].body;
}

/* fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => { 
  data.forEach((user) => {
        const commentSection = document.querySelector('.comment-section')
        const commentBox = document.createElement('div')
        commentBox.classList.add('comment-box')
        commentBox.innerHTML = `<img src='images/pic.png'><div class='username'>Name: <span>${user.name}</span></div>
                                <div class='email'>Email: <span>${user.email}</span></div>
                                <div class='comment'>${user.body}</div>`
        commentSection.appendChild(commentBox)

    }) 
})

.catch(error => console.error('Error', error)) */




/* let container = document.getElementById("con") 

function apiFetch(){
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then(data => { 
      data.forEach((user) => {
  card = document.createElement("div")
  cardHead = document.createElement("div")
  cardCon1 = document.createElement("div")
  cardCon2 = document.createElement("div")
  cardBody = document.createElement("div")
  cardIconUser = document.createElement("i");
  cardIconEmail = document.createElement("i");
  cardName = document.querySelector("p");
  cardEmail = document.querySelector("p");
  cardContent = document.querySelector("p");
  cardTitle = document.createElement("p");

  card.className = "card text-bg-primary mb-3"
  cardHead.className = "card-header row"
  cardCon1.className = "col-12 d-flex align-items-center"
  cardCon2.className = "col-12 d-flex align-items-center"
  cardBody.className = "card-body"
  cardIconUser.className = "fa fa-user text-white me-1"
  cardIconEmail.className = "fa fa-envelope me-1 text-white"
  cardName.className = "mb-0"
  cardEmail.className = "mb-0"
  cardContent.className = "card-text"
  cardTitle.className = "card-title fw-medium"
  
  uname.innerHTML = user.name;
  email.innerHTML = user.email;
  comment.innerHTML = user.body;
  
  container.appendChild(card)
  card.appendChild(cardHead)
  cardHead.appendChild(cardCon1)
  cardCon1.appendChild(cardIconUser)
  cardCon1.appendChild(cardName)
  cardHead.appendChild(cardCon2)
  cardCon2.appendChild(cardIconEmail)
  cardCon2.appendChild(cardEmail)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardContent)
  
})
    
})
} */