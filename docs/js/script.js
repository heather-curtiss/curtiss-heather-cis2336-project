document.addEventListener("DOMContentLoaded", function () {

    let searchBox = document.getElementById("search");
    if (searchBox) {
        searchBox.addEventListener("keyup", function () {
            let filter = searchBox.value.toLowerCase();
            let items = document.querySelectorAll("#galleryContainer .item");

            items.forEach(item => {
                let text = item.innerText.toLowerCase();
                item.style.display = text.includes(filter) ? "" : "none";
            });
        });
    }

    let imageInput = document.getElementById("artwork");
    let previewBox = document.getElementById("preview");

    if (imageInput && previewBox) {
        imageInput.addEventListener("change", function () {
            let file = this.files[0];

            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    previewBox.innerHTML = "<img src='" + e.target.result + "'>";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    let events = document.querySelectorAll(".event");
    let details = document.getElementById("eventDetails");

    if (events && details) {
        events.forEach(event => {
            event.addEventListener("click", function () {
                details.innerHTML = "<p><strong>Event:</strong> " + this.innerText + "</p>";
            });
        });
    }
});

function toggleFAQ(element) {
    let answer = element.querySelector(".ANSWER");
    if (!answer) return;

    answer.style.display = answer.style.display === "block" ? "none" : "block";
}

function validateForm() {

    const artworkData = {
        name: document.getElementById("artistname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phonenumber").value,
        title: document.getElementById("title").value,
        medium: document.getElementById("artworkmedium").value,
        genre: document.getElementById("artworkgenre").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        aboutArtist: document.getElementById("abtartist").value
    };

    for (let key in artworkData) {
        if (!artworkData[key]) {
            alert("Please fill out all fields.");
            return;
        }
    }

    if (!artworkData.email.includes("@") || !artworkData.email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (isNaN(artworkData.price)) {
        alert("Price must be a number.");
        return;
    }

    fetch("http://localhost:3000/submit-art", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artworkData)
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        console.log("Backend received:", data.received);
    });
}

function toggleFAQ(element) {
    let answer = element.querySelector(".ANSWER");
    if (!answer) return;

    answer.style.display = answer.style.display === "block" ? "none" : "block";
    element.classList.toggle("open");
}


/* this should work, come back to this if malfunction given new info in faq, homepage, etc */