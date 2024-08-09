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
        

        
 function searchJob(){
    const inputElem = document.getElementById('jobTitle');
    const searchButton = document.getElementById('searchBtn');
    const jobResultsContainer = document.getElementById('jobResults');

    function fetchJobs(jobTitle) {
        const url2 = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d013790e&app_key=8ece576edf6cc8a2c507d716437198cf';
        const searchUrl = `${url2}&what=${encodeURIComponent(jobTitle)}`;
        
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                jobResultsContainer.innerHTML = '';
                if (data.results.length === 0) {
                    jobResultsContainer.innerHTML = '<p>No jobs found.</p>';
                } else {
                    data.results.forEach(job => {
                        const jobElement = document.createElement('div');
                        
                        jobElement.innerHTML = `
                            <h3>${job.title}</h3>
                            <p><b>Company: </b> ${job.company.display_name}</p>
                            <p><b>Location: </b> ${job.location.display_name}</p>
                            <p><b>Salary: </b> £${job.salary_min} - £${job.salary_max}</p>
                            <p><b>Description:</b>${job.description}</p>
                            <a href="${job.redirect_url}" target="_blank">View Job</a>
                            <hr>
                        `;
                        jobResultsContainer.appendChild(jobElement);
                    });
                }
            })
            .catch(error => {
                jobResultsContainer.innerHTML = '<p>There is no jobs available at the moment. Please try again later.</p>';
                console.error('Error fetching jobs:', error);
            });
    }

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const jobTitle = inputElem.value;
        if (jobTitle.trim()) {
            fetchJobs(jobTitle);
        } else {
            jobResultsContainer.innerHTML = '<p>Please enter a job title.</p>';
        }
    });

    inputElem.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
}

searchJob();
   
    
   
 
     
    


function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(emailValue)) {
        alert('Thank you for signing up!');
        emailInput.value = ''; 
    } else {
        errorMessage.style.display = 'block';
    }
}
