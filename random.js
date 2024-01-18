const userPhoto = document.querySelector('#userPhoto');
const userName = document.querySelector('#userName');
const gender = document.querySelector('#gender');
const dob = document.querySelector('#dob');
const email = document.querySelector('#email');
const address = document.querySelector('#address');



async function serviceGetUsers(numberOfUsers, searchName) {
    try {
        
        const response = await fetch(`https://randomuser.me/api/?results=${numberOfUsers}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();

       
        document.querySelector('.userSection').innerHTML = '';

        
        data.results.forEach(user => {
            const userButton = document.createElement('button');
            userButton.classList.add('userButton');

            userButton.innerHTML = `
                <img src="${user.picture.large}" alt="Foto usuario" id="userPhoto">
                <div class="userContent">
                    <h2> <span id="userName">${user.name.first} ${user.name.last}</span></h2>
                    <p>Genero: <span id="gender">${user.gender}</span></p>
                    <p>Fecha de nacimiento: <span id="dob">${user.dob.date}</span></p>
                    <p>Correo electrónico: <span id="email">${user.email}</span></p>
                    <p>Dirección: <span id="address">${user.location.street.name}, ${user.location.city}, ${user.location.country}</span></p>
                </div>
            `;

            document.querySelector('.userSection').appendChild(userButton);
        });
    } catch (error) {
        console.error('Error', error);
    }
}

serviceGetUsers(1000);

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const searchBox = document.getElementById("searchBox");

    document.querySelectorAll("#userName").forEach(userName => {
        userName.textContent.toLowerCase().includes(searchBox.value.toLowerCase())
            ? userName.classList.remove("filtro")
            : userName.classList.add("filtro");
    });
});