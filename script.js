const listButton = document.getElementById("listButton");
listButton.addEventListener("click", loadFormInfo);

function loadFormInfo(event) {
    event.preventDefault();

    const rightBox = document.querySelector(".rightbottom-box");
    let photoUrl = document.getElementById("photo");
    let destinationName = document.getElementById("destinationName");
    let location = document.getElementById("location");
    let description = document.getElementById("description");
    let myWishList = document.getElementById("myWishList");

    myWishList.innerText = "My WishList";

    let card = document.createElement("div");
    card.className = "card m-2";
    card.style.width = "18rem";

    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = photoUrl.value;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.innerText = destinationName.value;
    title.className = "card-title";

    let subtitle = document.createElement("h6");
    subtitle.innerText = location.value;
    subtitle.className = "card-subtitle mb-2 text-muted";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = description.value;

    let editButton = document.createElement("a");
    editButton.className = "btn btn-warning m-2";
    editButton.innerText = "Edit";
    editButton.addEventListener("click", editCard);

    let removeButton = document.createElement("a");
    removeButton.id = "removeButton";
    removeButton.className = "btn btn-danger m-2";
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", removeCard);

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(editButton);
    cardBody.appendChild(removeButton);
    card.appendChild(cardImg);
    card.appendChild(cardBody);

    photoUrl.value = "";
    destinationName.value = "";
    location.value = "";
    description.value = "";

    rightBox.appendChild(card);
}

function editCard(event) {
    let photoUrl = prompt("Enter a new image url");
    let destinationName = prompt("Enter a new destination");
    let location = prompt("Enter a new location");
    let description = prompt("Enter a new description");
    const parentElement = event.currentTarget.parentElement;

    parentElement.parentElement.children[0].src = photoUrl;
    parentElement.children[0].innerText = destinationName;
    parentElement.children[1].innerText = location;
    parentElement.children[2].innerText = description;
}

function removeCard(event) {
    const parentElement = event.target.parentElement.parentElement;
    parentElement.remove();

    /*
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    */
}
