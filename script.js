const studentName = document.getElementById("name"),
    email = document.getElementById("email"),
    website = document.getElementById("website"),
    image = document.getElementById("image"),
    gender = document.querySelectorAll("input[type='radio']"),
    skills = document.querySelectorAll("input[type = 'checkbox']"),
    detailsContainer = document.querySelector('.details-container'),
    imageTag = document.querySelector("img");

let inputName;
studentName.addEventListener('input', () =>{
    inputName = studentName.value;
});

let inputEmail;
email.addEventListener('input', () =>{
    inputEmail = email.value;
});

let inputWebsite;
website.addEventListener('input', () =>{
    inputWebsite = website.value;
});

let inputImage;
image.addEventListener('input', () =>{
    inputImage = image.value;
});
let genderSelect;
gender.forEach(function(item){
    item.addEventListener('change', ()=>{
        genderSelect = item.value;
    });
})
const checkboxValues = [];
skills.forEach(function(item){
    item.addEventListener('change', ()=>{
        if(item.checked){
            checkboxValues.push(item.value);
        }
        else{
            const index = checkboxValues.indexOf(item.value);

            if(index > -1){
                checkboxValues.splice(index, 1);
            }
        }
    })
})

const imageVerify = () =>{
    if(inputImage === ""){
        if(genderSelect == "Male"){
            inputImage = "https://pratapgauravkendra.org/wp-content/uploads/2021/06/dummy-image-.jpg";
            return inputImage;
        }
        else{
            inputImage = "https://enertechups.com/wp-content/uploads/2023/02/girl.png";
            return inputImage;
        }
    }   
    else{
        return inputImage;
    }   
}

function createDetailsCard() {

    const newElement = document.createElement("div");

    newElement.innerHTML = `<div class="details">

        <div class="name-field">
            <i class="bx bxs-user"></i>
            <span>${inputName}</span>
        </div>

        <div class="email-field">
            <i class="bx bx-envelope" ></i>
            <a href="mailto:${inputEmail}">${inputEmail}</a>
        </div>

        <div class="website-url-field">
            <i class="bx bx-link" ></i>
            <a href="${inputWebsite}">${inputWebsite}</a>
        </div>

        <div class="gender-field">
            <img src="./Assets/male-female-outline.svg" class="gender-icon">
            <span>${genderSelect}</span>
        </div>

        <div class="skills-field">
            <i class="bx bx-cog"></i>
            <span>${checkboxValues}</span>
        </div>

    </div>
    <div class="image">
        <img src="${imageVerify()}">
        
    </div>`
checkboxValues.length = 0;
newElement.setAttribute('class', 'details-box');
detailsContainer.classList.remove("empty");
detailsContainer.appendChild(newElement);

}
