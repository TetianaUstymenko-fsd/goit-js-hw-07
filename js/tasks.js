// Завдання 1

document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll("#categories .item");
    console.log(`Number of categories: ${categories.length}`);
  
    categories.forEach((category) => {
      const title = category.querySelector("h2").textContent;
      const elementsCount = category.querySelectorAll("ul li").length;
  
      console.log(`Category: ${title}`);
      console.log(`Elements: ${elementsCount}`);
    });
  });
  


// Завдання 2
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      alt: "Alpine Spring Meadows",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      alt: "Nature Landscape",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      alt: "Lighthouse Coast Sea",
    },
  ];
  const gallery = document.querySelector(".gallery");
  const galleryItems = images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join("");
  gallery.insertAdjacentHTML("beforeend", galleryItems);
  
  // Завдання 3
  const input = document.querySelector("#name-input");
  const output = document.querySelector("#name-output");
  input.addEventListener("input", () => {
    const name = input.value.trim();
    output.textContent = name === "" ? "Anonymous" : name;
  });
  
  // Завдання 4
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;
  
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
  
    if (emailValue === "" || passwordValue === "") {
      return alert("All form fields must be filled in");
    }
  
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
  
    console.log(formData);
    form.reset();
  });
  
  // Завдання 5
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const changeColorBtn = document.querySelector(".change-color");
  const colorValue = document.querySelector(".color");
  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorValue.textContent = randomColor;
  });

  // Ім'я користувача
const nameInput = document.getElementById('nameInput');
const userName = document.getElementById('userName');

nameInput.addEventListener('input', () => {
  userName.textContent = nameInput.value || 'Anonymous!';
});

// Зміна кольору фону
function changeColor() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Створення/видалення боксів
function createBoxes() {
  const count = parseInt(document.getElementById('boxCount').value);
  const boxContainer = document.getElementById('boxes');
  boxContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    boxContainer.appendChild(box);
  }
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}