document
  .getElementById("image-input")
  .addEventListener("change", function (event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageUrl = event.target.result;
      document.getElementById("selected-image").src = imageUrl;
    };

    reader.readAsDataURL(selectedFile);
  });
