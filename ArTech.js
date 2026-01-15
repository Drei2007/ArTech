const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  document.querySelector('.menu').classList.toggle( 'show' );
});

document.querySelectorAll('.closeBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.container, .container2, .container3').classList.remove('show');
  });
});

function showContainer(containerClass) {
  document.querySelector(containerClass).classList.add('show');
  document.querySelector('.menu').classList.remove('show');
}

document.getElementById("abt").addEventListener("click", () => showContainer('.container'));
document.getElementById("crdts").addEventListener("click", () => showContainer('.container2'));
document.getElementById("mbrs").addEventListener("click", () => showContainer('.container3'));

const GetStr = document.getElementById("GetStr");
  
GetStr.addEventListener("click", () => {
  document.querySelector('.data-container').classList.add( 'show' ) ;
});

const form = document.querySelector('.data-modal');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nameValue = document.getElementById("NameInput").value;
  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.includes(nameValue)) {
    window.location.href = 'main.html';
  } else {
    users.push(nameValue);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('lastName', nameValue);
    alert(`Hi, ${nameValue}`);
    window.location.href = 'main.html';
  }
});

window.onload = function() {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let nameValue = localStorage.getItem('lastName');
  if (users.includes(nameValue)) {
    window.location.href = 'main.html';
  }
};

const cancelBtn = document.getElementById("cancelBtn");
const NameInput = document.getElementById("NameInput");
const menu2 = document.getElementById("menu2");

cancelBtn.addEventListener("click", () => {
  document.querySelector('.data-container').classList.remove( 'show' );
});
