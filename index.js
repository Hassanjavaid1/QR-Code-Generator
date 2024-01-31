let slide_img = document.getElementById("slide_img");
let container = document.querySelector(".container");
let rightIndex = document.getElementById("right");
let leftIndex = document.getElementById("left");
// let dot = document.querySelector(".dot");
let dotsContainer = document.querySelector(".dots");
let index = 0;
rightIndex.addEventListener("click", () => {
  index++;
  fetchImages();
  updateDot();
});
leftIndex.addEventListener("click", () => {
  index--;
  fetchImages();
  updateDot();
});

const imgArr = [
  {
    img: "./Photos/slide1.jpg",
  },
  {
    img: "./Photos/slide2.jpg",
  },
  {
    img: "./Photos/slide3.jpg",
  },
  {
    img: "./Photos/slide4.jpg",
  },
  {
    img: "./Photos/slide5.jpg",
  },
  {
    img: "./Photos/slide6.jpg",
  },
];
const fetchImages = async () => {
  let element = document.createElement("span");
  if (index < imgArr.length) {
    const { img } = imgArr[index];
    element.innerHTML = `
          <img src=${img} id="slide_img" alt="">
          
          `;
    container.append(element);
  } else if (index >= imgArr.length) {
    index = -1;
  } else {
    index = imgArr.length - 1;
  }
};
fetchImages();

const updateDot = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const dotIndex = () => {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < imgArr.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      index = i;
      fetchImages();
      updateDot();
    });
  }
};
dotIndex();

const autoSlide = () => {
  setInterval(() => {
    index++;
    fetchImages();
    updateDot()
  }, 3000);
};
autoSlide();
