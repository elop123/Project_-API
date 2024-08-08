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

    results.forEach(job => {
        const displayedData = document.createElement('div');
        displayedData.className = 'displayed';

        displayedData.innerHTML = `
             <fieldset class="box">
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company.display_name}</p>
            <p><strong>Location:</strong> ${job.location.display_name}</p>
            <p><strong>Salary:</strong> ${job.salary_min ? `£${job.salary_min} - £${job.salary_max}` : 'Not specified'}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <a href="${job.redirect_url}" target="_blank">View More</a>
             </fieldset>
          `;  
    //Append div to the container
        container.appendChild(displayedData);  

    });
        
}
fetchData();
        

        
 function search(){
    const inputElem = document.getElementById('');
    const searchButton = document.getElementById('searchBtn');
    searchButton.addEventListener('click', ()=>{
      console.log('click');
      
    });
    container.appendChild(searchButton); 
    }
   
 
     
    



// function searchJobTitle() {
//     const jobTitle = document.getElementById('jobTitle');
    
//     if (jobTitle.value.length > 3) {
//         const htmlResult = document.createElement('p');
//         container.appendChild(htmlResult);
//     } else {
//         console.log('Please enter at least 3 characters');
//     }
// }

     

// function searchBtn() {
//    //console.log('click');
//     };

// // Create the select dropdown
// const selectCategory = document.createElement('select');
// selectCategory.id = 'jobCategory';
// selectCategory.innerHTML = `
// <option value="">Select a category</option>
// <option value="IT">IT</option>
// <option value="Finance">Finance</option>
// <option value="Marketing">Marketing</option>
// `;
