//Fetch data from an URL

function fetchData() {
    //const url = 'https://sheets.googleapis.com/v4/spreadsheets/1owGcfKZRHZq8wR7Iw6PVh6-ueR0weIVQMjxWW_0M6a8/values/Sheet1!A1:N10?key=AIzaSyDErRezqW2klWRYKwQkzuOIMGJ5AeD5GSY';
     const url = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d013790e&app_key=8ece576edf6cc8a2c507d716437198cf';
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Converting response to JSON format
            return response.json();  
        })
        .then(data => 
           {
            console.log(data); 
            displayData(data.results); 
          
        })
        .catch(error => {
            console.error('Error fetching data:', error); 
        });
}

 // Function to display data
function displayData(results) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    
        const displayedData = document.createElement('div');
        displayedData.className = 'myDiv';
        
        displayedData.innerHTML = `<fieldset>
            <h2 class="gradient-text">One Search.<span> Millions of jobs<span></h2>
            <input id="jobTitle" type="search" placeholder="Job Title">
            <input id="location" type="search" placeholder="Location">
            ${selectCategory.outerHTML}
            <button id="searchBtn" onclick="searchBtn()">Search</button>
            <p>${results[0].location.area[1]}</p>
            </fieldset>
             
          `;  
    //Append div to the container
        container.appendChild(displayedData);  

        const searchButton = document.getElementById('searchBtn');
    searchButton.addEventListener('click', searchJobTitle);
    };

fetchData();

function searchJobTitle() {
    const jobTitle = document.getElementById('jobTitle');
    
    if (jobTitle.value.length > 3) {
        const htmlResult = document.createElement('p');
        container.appendChild(htmlResult);
    } else {
        console.log('Please enter at least 3 characters');
    }
}

     

function searchBtn() {
   //console.log('click');
    };

// Create the select dropdown
const selectCategory = document.createElement('select');
selectCategory.id = 'jobCategory';
selectCategory.innerHTML = `
<option value="">Select a category</option>
<option value="IT">IT</option>
<option value="Finance">Finance</option>
<option value="Marketing">Marketing</option>
`;

