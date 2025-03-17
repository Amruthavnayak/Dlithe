document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("registerPopup");
    const registerBtn = document.querySelector(".register-btn");
    const closeBtn = popup.querySelector("button:last-child");
    const submitBtn = popup.querySelector("button:first-of-type");
    const searchInput = document.createElement("input");
    const searchButton = document.createElement("button");
    let users = [];

    registerBtn.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", closePopup);
    submitBtn.addEventListener("click", registerUser);
    searchButton.addEventListener("click", searchNews);

    function openPopup() {
        popup.classList.add("show");
    }
    
    function closePopup() {
        popup.classList.remove("show");
        setTimeout(() => popup.style.display = "none", 300);
    }

    function registerUser() {
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        if(username && email && password) {
            let user = { username, email, password };
            users.push(user);
            alert("Registration Successful!");
            displayUser(username);
            closePopup();
        } else {
            alert("Please fill in all fields.");
        }
    }

    function displayUser(username) {
        let header = document.querySelector("header");
        let userDisplay = document.createElement("p");
        userDisplay.textContent = Welcome, ${username}!;
        userDisplay.style.marginTop = "10px";
        userDisplay.style.fontWeight = "bold";
        header.appendChild(userDisplay);
    }

    function searchNews() {
        let query = searchInput.value.toLowerCase();
        let newsItems = document.querySelectorAll(".news-item");
        
        newsItems.forEach(item => {
            let title = item.querySelector("h2").textContent.toLowerCase();
            let content = item.querySelector("p").textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Add search bar to header
    let header = document.querySelector("header");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search news...");
    searchInput.style.marginLeft = "10px";
    searchButton.textContent = "Search";
    searchButton.style.marginLeft = "5px";
    searchButton.style.padding = "5px 10px";
    searchButton.style.cursor = "pointer";
    
    header.appendChild(searchInput);
    header.appendChild(searchButton);
});