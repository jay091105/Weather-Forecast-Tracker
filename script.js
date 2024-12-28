// Array to store weather data
let data = [
    { name: "Kutch", temp: 20, condition: "Sunny" },
    { name: "Gujarat", temp: 15, condition: "Cloudy" },
    { name: "Bangal", temp: 25, condition: "Rainy" },
];

// Function to add a new city
function f1(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const cityName = document.getElementById("name").value.trim();
    const temp = parseFloat(document.getElementById("temp").value.trim());
    const condition = document.getElementById("condition").value.trim();

    // Validate inputs
    if (!cityName || isNaN(temp) || !condition) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Add new city to data array
    data.push({ name: cityName, temp, condition });

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("temp").value = "";
    document.getElementById("condition").value = "";

    // Render the updated weather data
    renderWeatherData();
}

// Function to render the weather data list
function renderWeatherData() {
    const weatherList = document.getElementById("Weatherlist");
    weatherList.innerHTML = ""; // Clear the current list

    // Populate the list with weather data
    data.forEach(city => {
        const li = document.createElement("li");
        li.textContent = `City: ${city.name}, Temp: ${city.temp}°C, Condition: ${city.condition}`;
        weatherList.appendChild(li);
    });
}

// Function to find the hottest city
function findHottestCity() {
    if (data.length === 0) {
        alert("No data available.");
        return;
    }

    // Find the city with the highest temperature
    const hottestCity = data.find(
        city => city.temp === Math.max(...data.map(c => c.temp))
    );

    // Display the hottest city
    const hottestCityDisplay = document.getElementById("hottestCity");
    hottestCityDisplay.textContent = `Hottest City: ${hottestCity.name}, Temp: ${hottestCity.temp}°C, Condition: ${hottestCity.condition}`;
}

// Function to filter cities by condition
function filterByCondition() {
    const conditionInput = document.getElementById("filterCondition").value.trim();

    if (!conditionInput) {
        alert("Please enter a condition to filter.");
        return;
    }

    // Filter cities based on condition
    const filteredCities = data.filter(
        city => city.condition.toLowerCase() === conditionInput.toLowerCase()
    );

    // Display the filtered cities
    const filteredCitiesList = document.getElementById("filteredCities");
    filteredCitiesList.innerHTML = ""; // Clear previous results

    if (filteredCities.length === 0) {
        filteredCitiesList.innerHTML = `<li>No cities match the condition "${conditionInput}".</li>`;
    } else {
        filteredCities.forEach(city => {
            const li = document.createElement("li");
            li.textContent = `City: ${city.name}, Temp: ${city.temp}°C, Condition: ${city.condition}`;
            filteredCitiesList.appendChild(li);
        });
    }
}

// Initial render of weather data
renderWeatherData();
