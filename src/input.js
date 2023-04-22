import {useState} from 'react';
import {getAnimal} from './NatureApi.mjs'
import Species from './Species.js';



const Input = () =>{

  class Queue{
    constructor(cap){
          this.capacity = cap;
          this.items = Array(cap).fill(null);   //array for queue
          this.num_items = 0                 // number of items in stack
          this.front = 0                      //front index of queue (items removed from front)
          this.rear =0
    }
  
    is_empty(){
      if (this.num_items === 0){
        return true}
        return false 
    }
  
    is_full(){
      if(this.num_items === this.capacity){
        return true 
      } return false
    }
  
      enqueue(item){
        if (this.is_full() === true){
          throw new Error("queue is full")
        }
  
        this.items[this.rear] = item
        this.num_items++
        this.rear = (this.rear +1) % this.capacity
  
      }
  
      dequeue(){
          if (this.is_empty() === true){
            throw new Error("queue is empty")
          }
          let val = this.items[this.front]
          this.num_items--
          this.front = (this.front +1) % this.capacity
          return val
      }
    
  }
    let q = new Queue(3)
    q.enqueue(5)
    q.enqueue(6)
    q.enqueue(7)
    


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
        if (place === '') {
          return;
        }
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




