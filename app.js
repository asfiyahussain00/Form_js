function readvalue() {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('father-name').value;
    const rollNo = document.getElementById('roll-no').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const zipCode = document.getElementById('zipcode').value;
    const city = document.getElementById('city').value;


    let gender = "";
    const maleCheckbox = document.getElementById('male');
    const femaleCheckbox = document.getElementById('female');
    if (maleCheckbox.checked) {
        gender = "Male";
    } else if (femaleCheckbox.checked) {
        gender = "Female";
    } else {
        gender = "Not Selected";
    }

    
    if (!name || !fatherName || !rollNo || !email || !password || !zipCode || gender === "Not Selected") {
        alert("Please fill your form!");
        return;
    }

    
    alert("Your Form is submitted");


    const outputContainer = document.createElement("div");
    outputContainer.className = "output-container";
    outputContainer.innerHTML = `
        <h2>Form Submitted Successfully</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father Name:</strong> ${fatherName}</p>
        <p><strong>Roll No:</strong> ${rollNo}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>ZIP Code:</strong> ${zipCode}</p>
        <p><strong>City:</strong> ${city}</p>
    `;
    document.body.innerHTML = ""; 
    document.body.appendChild(outputContainer);
}

function fillCity() {
    let cityName;
    let zipEnter = document.getElementById("zipcode").value;

    if (zipEnter === "4567") {
        cityName = "Islamabad";
    } else if (zipEnter === "1234") {
        cityName = "Karachi";
    } else if (zipEnter === "7890") {
        cityName = "Lahore";
    } else if (zipEnter === "6789") {
        cityName = "Quetta";
    } else {
        cityName = ""; 
    }

    document.getElementById("city").value = cityName;
}
