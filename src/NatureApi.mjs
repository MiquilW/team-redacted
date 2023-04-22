// Import axios library

import axios from 'axios';




// Set the headers and body for the POST request
const headers = {
  'Accept': 'application/json', 
  'Content-Type': 'application/json',
  'Content-Length': '350'
};


const data = {
  
    "criteriaType" : "combined",
    
    "textCriteria" : [ 
  
      {
    "paramType" : "quickSearch",
    "searchToken" : "San Diego"
  }
  
  ],
    "statusCriteria" : [ ],
    "locationCriteria" : [ ],
    "pagingOptions" : {
      "page" : null,
      "recordsPerPage" : null
    },
    "recordSubtypeCriteria" : [ ],
    "modifiedSince" : null,
    "locationOptions" : null,
    "classificationOptions" : null,
    "recordTypeCriteria" : [ ] 
  }
  

console.log("api activated 0_0");

// Make a POST request to a URL
axios.post('https://explorer.natureserve.org/api/data/search', data, { headers })
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error);
    //console.log(error.response)
  });

