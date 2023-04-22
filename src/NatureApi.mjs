// Import axios library and our input string
//import City2  from './input.js';
import axios from 'axios';

//let City2 = "San Diego";




export async function getAnimal(city) {
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
    "searchToken" : city,
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

// axios.post('https://explorer.natureserve.org/api/data/search', data, { headers })
//   .then(response => {
//     // Handle successful response


//     let animal = response.data.results[0].primaryCommonName;
//     console.log(animal);
//     return animal
//   })
//   .catch(error => {
//     // Handle error
//     console.log(error);
//     return error.response
//     //console.log(error.response)
//   });




  
try {
  const response = await axios.post('https://explorer.natureserve.org/api/data/search', data, { headers });
  let animal = response.data.results[0].primaryCommonName;
  console.log(animal);
  return animal;
} catch (error) {
  console.log(error);
  return error.response;
}
}

