let img_qr = document.querySelector("#img-qr");
let bd = document.querySelector("#btn-download");

$("form").submit(function (event) {
  let search = document.querySelector("#search").value;

  if (search == "") {
  } else {
    event.preventDefault();
    document.getElementById("img-qr").style.display = "block";
    document.getElementById("button-btn").style.display = "block";

    let api = `https://api.qrserver.com/v1/create-qr-code/?&data=${search}`;
    img_qr.src = api;
    bd.addEventListener("click", () => {
      let impath = img_qr.getAttribute("src");
      let fn = getFileName("Qr");
      saveAs(impath, fn);
    });
    function getFileName(str) {
      return str.substring(str.lastIndexOf("/") + 1);
    }
  }
});
