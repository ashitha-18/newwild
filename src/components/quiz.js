import React, { useState } from 'react';
import image from "../images/22.jpeg";
import './quiz.css'; 


const Quiz = () => {
  const [ans, setAns] = useState(0);
  const [color, setColor] = useState('');
  const [result, setResult] = useState('');
  const [freeTimeActivities, setFreeTimeActivities] = useState([]); // State to store selected activities
  const [personalityValue, setPersonalityValue] = useState(10);
 

  const handleColorClick = (colorValue) => {
    // Handle color click logic here
    setColor(colorValue);
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    // For example, you can show the result based on 'ans' state
    if (ans === 0) {
      alert("Please select a color before submitting.");
    } else {
      // Perform any necessary actions based on the user's selections and 'ans' state
      // You can display the result, navigate to a new page, or make an API call here
      // For now, let's just display the result in an alert
      alert(`You selected color value: ${ans}`);
    }
  };
  const handleFreeTimeCheckbox = (activity) => {
    // Clone the current list of selected activities
    const updatedActivities = [...freeTimeActivities];

    // Check if the activity is already selected
    const index = updatedActivities.indexOf(activity);

    if (index === -1) {
      // Activity is not selected, add it to the list
      updatedActivities.push(activity);
    } else {
      // Activity is already selected, remove it from the list
      updatedActivities.splice(index, 1);
    }

    // Update the state with the updated list of selected activities
    setFreeTimeActivities(updatedActivities);
  };

  const handleSubmit = () => {
    // Calculate the result based on color and free time activities
    // You can add more logic for other quiz questions here

    // For demonstration purposes, let's assume a simple scoring system based on selected activities
    const activityScores = {
      'jog': 10,
      'catchUp': 8,
      'art': 2,
      'skill': 3,
      'nap': 0,
    };

    // Calculate the total score for selected activities
    const activityScore = freeTimeActivities.reduce((totalScore, activity) => {
      return totalScore + activityScores[activity];
    }, 0);

    // Calculate the final result
    setAns(color ? activityScore + parseInt(color) + personalityValue : activityScore) ;
    console.log( "new " + ans);
    const animalData = determineAnimal(ans);
    console.log(animalData.animal);
    // Display the result (similar to previous code)
    // ...
    setResult(
      <div className="resultSection">
        <h1 className="resultTitle">Result</h1>
        <section className="resultText">
          <p>After crunching the numbers, you are a...</p>
          <img className="animalPic" src={animalData.imageSrc} alt={animalData.imageSrc} />
          <h1 className="resultAnimal">{animalData.animal}</h1>
          <p>
            {animalData.description}
          </p>
        </section>
      </div>
    );
  };
  const determineAnimal = (ans) => {
    if (ans <= 8) {
      return {
        animal: 'Rabbit',
        imageSrc: 'https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'You are calm and peaceful ! Like to keep things organised ! Artistic person',
      };
    } else if (ans > 8 && ans <= 14) {
      return {
        animal: 'Meerkat',
        imageSrc: 'https://images.pexels.com/photos/1454786/pexels-photo-1454786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'You are selfless and caring ! little anxious and introvert',
      };
    } else if (ans > 14 && ans <= 20) {
      return {
        animal: 'Fox',
        imageSrc: 'https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'You are mischievous, skilful and self-assured',
      };
    } else if (ans > 20 && ans <= 25) {
      return {
        animal: 'Bear',
        imageSrc: 'https://images.pexels.com/photos/1466592/pexels-photo-1466592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'You are empathetic but a little fearful',
      };
    } else if (ans > 25 && ans <= 100) {
      return {
        animal: 'Lion',
        imageSrc: 'https://images.pexels.com/photos/5306143/pexels-photo-5306143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'You can be a great Leader ! Fearless and Brave',
    
      };
    }
  };

  const handlePersonalityChange = (event) => {
    // Update the state with the new personality value
    setPersonalityValue(parseInt(event.target.value));
    console.log(personalityValue);
  };
  


  return (
    <div  style={{ backgroundImage: `url(${image})` ,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <header>
        <div className="circleDeco" id="circleDeco"></div>
        <h1 className="headerTitle">What animal<br />are you?</h1>
        <section className="headerText">
          <p>
            Ever wonder what animal you are? Well, today is your lucky day!!
            <br /><br />After minutes of researching (aka reading up Wikipedia) about human psychology, I present to you the not-that-accurate 'What animal are you?' quiz!!
          </p>
        </section>
        <div className="arrowDiv">
          <a href="#questionSection">
            <svg width="100" height="180" xmlns="http://www.w3.org/2000/svg" >
              <g id="arrow">
                <title>Downward Arrow</title>
                <line stroke="#000000" transform="rotate(-0.14894883334636688 28.93478393554643,25.999999999999236)" id="svg_1" y2="34" x2="37.43478" y1="18" x1="20.43478" stroke-width="5" fill="none" />
                <line stroke="#000000" id="svg_3" y2="17.09239" x2="49.875" y1="33.03261" x1="34.80978" stroke-width="5" fill="none" />
              </g>
            </svg>
          </a>
        </div>
      </header>
      <section className="questions" id="questionSection">
        <article className="colorSection">
          <div className="colorTitle title">
            <h1>What is your favorite color?</h1>
          </div>
          <div className="colorSelection">
  <form action="index.html" method="post">
    <label className="colorBlockSelection red">
      <input
        type="radio"
        id="red"
        name="color"
        value="5"
        onClick={() => handleColorClick(5)}
      />
      <p>red</p>
    </label>
    <label className="colorBlockSelection blue">
      <input
        type="radio"
        id="blue"
        name="color"
        value="3"
        onClick={() => handleColorClick(3)}
      />
      <p>blue</p>
    </label>
    <label className="colorBlockSelection green">
      <input
        type="radio"
        id="green"
        name="color"
        value="2"
        onClick={() => handleColorClick(2)}
      />
      <p>green</p>
    </label>
    <label className="colorBlockSelection purple">
      <input
        type="radio"
        id="purple"
        name="color"
        value="0"
        onClick={() => handleColorClick(0)}
      />
      <p>purple</p>
    </label>
    <label className="colorBlockSelection yellow">
      <input
        type="radio"
        id="yellow"
        name="color"
        value="1"
        onClick={() => handleColorClick(1)}
      />
      <p>yellow</p>
    </label>
    <label className="colorBlockSelection orange">
      <input
        type="radio"
        id="orange"
        name="color"
        value="4"
        onClick={() => handleColorClick(4)}
      />
      <p>orange</p>
    </label>
  </form>
</div>

        </article>
        <article className="timeSection">
        <div className="timeTitle title">
            <h1>What do you like to do in your free time?</h1>
          </div>
          <div className="timeSelection">
            <form action="index.html" method="post">
              <input type="checkbox" id="jog" name="time" value="jog" onChange={() => handleFreeTimeCheckbox('jog')} />
              <label className="timeOption" htmlFor="jog">A jog in the park</label><br />

              <input type="checkbox" id="catchUp" name="time" value="catchUp" onChange={() => handleFreeTimeCheckbox('catchUp')} />
              <label className="timeOption" htmlFor="catchUp">Catching up with friends</label><br />

              <input type="checkbox" id="catchUp" name="time" value="art" onChange={() => handleFreeTimeCheckbox('art')} />
              <label className="timeOption" htmlFor="catchUp">Creating art</label><br />

              <input type="checkbox" id="catchUp" name="time" value="skill" onChange={() => handleFreeTimeCheckbox('skill')} />
              <label className="timeOption" htmlFor="catchUp">learning new skill</label><br />

              <input type="checkbox" id="catchUp" name="time" value="nap" onChange={() => handleFreeTimeCheckbox('nap')} />
              <label className="timeOption" htmlFor="catchUp">Taking nap</label><br />

            </form>
            </div>
        </article>
        <article className="personalitySection">
        <div className="personalityTitle title">
          <h1>What is your perceived personality?</h1>
        </div>
        <div className="personalitySelection">
          <form action="index.html" method="post">
            <input
              type="range"
              min="0"
              max="20"
              value={personalityValue}
              onChange={handlePersonalityChange}
            />
      <div className="slider-labels">
      <p className="introvert-label">Introvert</p>
      <p className="extrovert-label">Extrovert</p>
    </div>
          </form>
        </div>
      </article>
        <article className="finalSubmit">
          <a href="#resArrow">
            <input className="submit" type="button" name="submit" value="Submit" onClick={handleSubmit} />
          </a>
        </article>
      </section>
      <div className="result " id="result">
      {result}
      </div>
    </div>
  );
}

export default Quiz;
