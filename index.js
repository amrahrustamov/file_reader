const uploadFileIcon = document.querySelector("span");
const fileInput = document.querySelector("input");
const showImg = document.querySelector(".showImg");
let imageUrl;


uploadFileIcon.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function (e) {

    const { files } = e.target;

    const fileReader = new FileReader();
    for (let file of files) {
        fileReader.onloadend = ({target: { result } }) => {
            showImg.innerHTML += `<div><img src="${result}"></div>`;
            console.log(result);           
        };

        fileReader.readAsDataURL(file);
    }
});