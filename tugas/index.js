const app = document.getElementById("app");
const btnNama = document.getElementById("btn");
const input = document.getElementById("input");
const gambar = document.getElementById("image");

const generateColor = () => {
  var result = input.value.toLowerCase();
  if (result === "burung") {
    gambar.src =
      "https://cdn.pixabay.com/photo/2018/07/29/18/54/pigeon-3570784_960_720.png";
  } else if (result === "kucing") {
    gambar.src =
      "https://png.pngtree.com/png-vector/20200729/ourlarge/pngtree-cute-little-kitten-cartoon-png-image_2315730.jpg";
  } else if (result === "harimau") {
    gambar.src =
      "https://media.istockphoto.com/vectors/cartoon-tiger-isolated-on-white-background-vector-id1187730789";
  } else {
    gambar.src =
      "https://img2.pngdownload.id/20200628/ckb/transparent-cartoon-character-human-necktie-happiness-5ef890c5a42065.4349430015933482936723.jpg";
  }
};

btnNama.addEventListener("click", generateColor);
