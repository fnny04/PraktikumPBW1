const app = document.getElementById("app");
const output = document.getElementById("output");
const btnNama = document.getElementById("btn-2");
const input = document.getElementById("input");

const generateColor = () => {
  var result = input.value.toLowerCase();
  console.log(result);

  if (result == "merah") {
    output.style.color = "red";
    (output.innerText = "Merah"), input.value;
  } else if (result == "hijau") {
    output.style.color = "green";
    (output.innerText = "Hijau"), input.value;
  } else if (result == "biru") {
    output.style.color = "blue";
    (output.innerText = "Biru"), input.value;
  } else {
    output.style.color = "black";
    output.innerText = "warna";
  }
};

btnNama.addEventListener("click", generateColor);
