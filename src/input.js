const Enter = () =>{

    const handleClick = () => {
        const textInput = document.getElementById('location').value;
        console.log('User input:', textInput);
      };
      
    return(
        <form>
          <label htmlFor="location">Enter location:</label>
          <input type="text" id="location" />
          <button id="submit" type="button" onClick={handleClick}>
            Submit
          </button>
        </form>
    );
}

export default Enter;