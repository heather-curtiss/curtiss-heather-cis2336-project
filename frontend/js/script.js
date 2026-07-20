
document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.getElementById("search");

    if (searchBox) {
        searchBox.addEventListener("keyup", function () {
            let filter = searchBox.value.toLowerCase();
            let items = document.querySelectorAll("#galleryContainer .item");

            items.forEach(item => {
                let text = item.innerText.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
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


    let calendarDays = document.querySelectorAll(".event-day");
    let calendarInfo = document.getElementById("calendarEventInfo");

    if (calendarDays && calendarInfo) {
        calendarDays.forEach(day => {
            day.addEventListener("click", function () {
                calendarInfo.innerHTML =
                    "<p><strong>Event:</strong> " + this.dataset.event + "</p>";
            });
        });
    }
});


function showEvent(num) {
    let details = document.getElementById("eventDetails");

    if (!details) return;

    let info = {
        1: "Outdoor Art Festival – A full-day event featuring local artists.",
        2: "Showcase of Stars – An evening showcase of local creators.",
        3: "Creator Workshop – Beginner-friendly art workshop.",
        4: "Mixed Media Meetup – Collaborative mixed media event."
    };

    details.innerHTML = "<p><strong>Event:</strong> " + info[num] + "</p>";
}


function validateForm() {
    let name = document.getElementById("artistname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phonenumber").value;
    let title = document.getElementById("title").value;
    let medium = document.getElementById("artworkmedium").value;
    let genre = document.getElementById("artworkgenre").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let aboutArtist = document.getElementById("abtartist").value;
    let image = document.getElementById("artwork").files[0];
}

    let message = document.getElementById("formMessage");
    if (!message) {
        message = document.createElement("p");
        message.id = "formMessage";
        let form = document.getElementById("submitartform");
        if (form) form.appendChild(message);
    }


    if (!name || !email || !phone || !title || !medium || !genre ||
        !price || !description || !aboutArtist) {
        message.innerText = "Please fill out all fields.";
        return;
    }

    
    if (!email.includes("@") || !email.includes(".")) {
        message.innerText = "Please enter a valid email address.";
        return;
    }

    
    if (isNaN(price)) {
        message.innerText = "Price must be a number.";
        return;
    }

    
    if (!image) {
        message.innerText = "Please upload an image.";
        return;
    }

    message.innerText = "Artwork submitted successfully!"