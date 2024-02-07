let imgSrc = document.getElementById("imgSrc");
let input = document.getElementById("input");
const QR_Code = async () => {
  imgSrc.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${input.value}`;
  if (input.value == "") {
    input.classList.add("shakeInput");
    imgSrc.classList.remove("border");
  } else {
    imgSrc.classList.add("border");
    input.classList.remove("shakeInput");
  }
};
