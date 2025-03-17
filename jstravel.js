let bookings = [];

// Open Booking Popup
function openPopup() {
    document.getElementById('bookingPopup').style.display = 'block';
}

// Close Booking Popup
function closePopup() {
    document.getElementById('bookingPopup').style.display = 'none';
}

// Booking Calculation & Confirmation
function bookTrip() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let destination = document.getElementById('destination').value;
    let days = document.getElementById('days').value;

    // Price per destination
    let prices = {
        "Paris": 1500,
        "Bali": 1200,
        "New York": 1800,
        "Tokyo": 2000
    };

    if (name && email && destination && days) {
        days = parseInt(days); // Convert days input to a number
        let baseCost = prices[destination]; // Get base price from object
        let totalCost = baseCost * days; // Calculate total cost

        // Use +=, *=, and arithmetic operators
        totalCost += totalCost * 0.1; // Add 10% tax
        let discount = (days >= 7) ? totalCost * 0.15 : 0; // 15% discount for 7+ days
        totalCost -= discount; // Apply discount

        bookings.push({ name, email, destination, days, totalCost });

        alert(Booking Confirmed!\nName: ${name}\nDestination: ${destination}\nTotal Cost: $${totalCost.toFixed(2)});
        closePopup();
    } else {
        alert("Please fill in all fields.");
    }
}

// Search Destinations
function searchDestinations() {
    let query = document.getElementById('searchBox').value.toLowerCase();
    let destinations = document.querySelectorAll('.destination');

    destinations.forEach(dest => {
        let destName = dest.dataset.name.toLowerCase();
        dest.style.display = destName.includes(query) ? "block" : "none";
    });
}