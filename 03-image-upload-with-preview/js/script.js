const handleUpload = () => {
  let inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "image/*";
  inputElement.style.display = "none";

  inputElement.addEventListener("change", function (event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
      let imagePreview = document.getElementById("image-preview");
      imagePreview.style.backgroundImage = "url(" + e.target.result + ")";
    };

    reader.readAsDataURL(file);
  });

  document.body.appendChild(inputElement);
  inputElement.click();
  document.body.removeChild(inputElement);
};
