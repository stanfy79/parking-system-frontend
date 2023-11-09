
const displayName = document.querySelector('.displayName');
const input = document.querySelector('.fileInput');
const fileURL = document.querySelector('.fileURL');


input.addEventListener("change", (e)=>{
    const fileName = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
        console.log(reader.result);
        fileURL.value = reader.result;
    });

    reader.readAsDataURL(fileName);
    displayName.innerText = fileName.name;
});

