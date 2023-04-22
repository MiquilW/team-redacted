import {useState} from 'react';
import {getAnimal} from './NatureApi.mjs'
import Species from './Species.js';


const Input = () =>{

    const [place, setPlace] = useState('');
    const [animal, setAnimal] = useState('');
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        const textInput = document.getElementById('location').value;
        console.log('User input:', textInput);
      };

       async function runScriptWithInput(event) {
        console.log("DO API STUFF EVENTUALLY, Argument is " + event);
        //set visibility of form to off
        let result =  await getAnimal(event);
        setAnimal(result)
        setVisible(true);
        
        console.log(result);
      }

      function handleSubmit(event) {
        event.preventDefault();
        console.log("form submitted")
        

        // Call function to run script with input data
        runScriptWithInput(place); 
      }

      // Resets all values
      function handleBack() {
        setPlace('');
        setAnimal('');
        setVisible(false);
      }
      
    return(
      <div>
        { 
        visible ? (
          <div>
            <button className='back' onClick={handleBack}>Back</button>
            <Species
              image=''
              name={animal}
            >
            </Species>
          </div>
        ) : null
        }
        {
          visible ? null : (
            <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="location">Enter location:</label>
              <input type="text" id="location" value={place} onChange={(event) => setPlace(event.target.value)} />
              <button id="submit" type="submit" onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
          )
        }
      </div>
    
    );
}


export default Input




