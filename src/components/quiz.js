import React, { useState, useEffect } from 'react';
import image from "../images/22.jpeg";
import news from "../images/final2.JPG";
import colour from "../images/colour.jpeg";
import monkey from "../images/monkey.jpeg";
import './quiz.css';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const Quiz = () => {
    const [ans, setAns] = useState(0);
    const [color, setColor] = useState('');
    const [result, setResult] = useState('');
    const [freeTimeActivities, setFreeTimeActivities] = useState([]); // State to store selected activities
    const [personalityValue, setPersonalityValue] = useState(10);


    const handleColorClick = (colorValue) => { // Handle color click logic here
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
    const handleFreeTimeCheckbox = (activity) => { // Clone the current list of selected activities
        const updatedActivities = [...freeTimeActivities];

        // Check if the activity is already selected
        const index = updatedActivities.indexOf(activity);

        if (index === -1) { // Activity is not selected, add it to the list
            updatedActivities.push(activity);
        } else { // Activity is already selected, remove it from the list
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
            'nap': 0
        };

        // Calculate the total score for selected activities
        const activityScore = freeTimeActivities.reduce((totalScore, activity) => {
            return totalScore + activityScores[activity];
        }, 0);

        // Calculate the final result
        setAns(color ? activityScore + parseInt(color) + personalityValue : activityScore);
        console.log("new " + ans);
        const animalData = determineAnimal(ans);
        console.log(animalData.animal);
        // Display the result (similar to previous code)
        // ...
        setResult(
            <div className="resultSection">
                <h1 className="resultTitle">Result</h1>
                <section className="resultText">
                    <p>After crunching the numbers, you are a...</p>
                    <img className="animalPic"
                        src={
                            animalData.imageSrc
                        }
                        alt={
                            animalData.imageSrc
                        } />
                    <h1 className="resultAnimal">
                        {
                            animalData.animal
                        }</h1>
                    <p> {
                        animalData.description
                    } </p>
                </section>
            </div>
        );
    };
    const determineAnimal = (ans) => {
        if (ans <= 8) {
            return { animal: 'Rabbit', imageSrc: 'https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are calm and peaceful ! Like to keep things organised ! Artistic person' };
        } else if (ans > 8 && ans <= 14) {
            return { animal: 'Meerkat', imageSrc: 'https://images.pexels.com/photos/1454786/pexels-photo-1454786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are selfless and caring ! little anxious and introvert' };
        } else if (ans > 14 && ans <= 20) {
            return { animal: 'Fox', imageSrc: 'https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are mischievous, skilful and self-assured' };
        } else if (ans > 20 && ans <= 25) {
            return { animal: 'Bear', imageSrc: 'https://images.pexels.com/photos/1466592/pexels-photo-1466592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are empathetic but a little fearful' };
        } else if (ans > 25 && ans <= 100) {
            return { animal: 'Lion', imageSrc: 'https://images.pexels.com/photos/5306143/pexels-photo-5306143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You can be a great Leader ! Fearless and Brave' };
        }
    };

    const handlePersonalityChange = (event) => {
        setPersonalityValue(parseInt(event.target.value));
        console.log(personalityValue);
    };


    return (< div className='quizdiv' > <div>
        <header id="topHeader">
            <div className="arrowDiv">
                <a href="#colorSection">
                    <svg width="100" height="180" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow">
                            <title>Downward Arrow</title>
                            <line stroke="#000000" transform="rotate(-0.14894883334636688 28.93478393554643,25.999999999999236)" id="svg_1" y2="34" x2="37.43478" y1="18" x1="20.43478" strokeWidth="5" fill="none" />
                            <line stroke="#000000" id="svg_3" y2="17.09239" x2="49.875" y1="33.03261" x1="34.80978" strokeWidth="5" fill="none" />
                        </g>
                    </svg>
                </a>
            </div>
        </header>
    </div>


        <div>

        <article className="bg-gray-100 p-4" id="colorSection">
    <div
        className="bg-cover bg-center relative p-8"
        id='maincolour'
        style={{ backgroundImage: `url(${colour})`, minHeight: '100vh'}}
    >
        <div className="text-center" style={{position: 'relative', top:'80px'}}>
            <h1 className="text-2xl font-bold text-gray-800">
                What is your favorite color?
            </h1>
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center space-x-1" style={{position: 'relative', top: '145px'}}>
            <div className="space-x-4">
                <label className="colorBlockSelection red">
                    <input
                        type="radio"
                        id="red"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-red-600 font-bold">red</p>
                </label>
                <label className="colorBlockSelection blue">
                    <input
                        type="radio"
                        id="blue"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-blue-600 font-bold">blue</p>
                </label>
                <label className="colorBlockSelection green">
                    <input
                        type="radio"
                        id="green"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-green-600 font-bold">green</p>
                </label>
            </div>
            <div className="space-x-4">
                <label className="colorBlockSelection purple">
                    <input
                        type="radio"
                        id="purple"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-purple-600 font-bold">purple</p>
                </label>
                <label className="colorBlockSelection yellow">
                    <input
                        type="radio"
                        id="yellow"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-yellow-600 font-bold">yellow</p>
                </label>
                <label className="colorBlockSelection orange">
                    <input
                        type="radio"
                        id="orange"
                        name="color"
                        value="5"
                        onClick={() => handleColorClick(5)}
                        className="hidden"
                    />
                    <span className="radio-custom"></span>
                    <p className="text-orange-600 font-bold">orange</p>
                </label>
            </div>
        </div>
    </div>
</article>

<article className="mt-20 mx-auto px-4 lg:pl-1/4" id="timeSection" >
  
    <div
      className="bg-cover bg-center relative p-8"
      style={{ backgroundImage: `url(${monkey})`, minHeight: '100vh',position: 'relative', top: '795px'}}  
    >

    <div className="mt-12 m-12 text-center" >
      <h1 className="text-2xl font-bold text-gray-700">What do you like to do in your free time?</h1>
    </div>
    
    <div className="mx-12 mt-12 text-left">
      <form action="index.html" method="post">
        <label className="mb-4 lg:inline-block mr-4 font-bold cursor-pointer">
          <input
            type="checkbox"
            id="jog"
            name="time"
            value="jog"
            onChange={() => handleFreeTimeCheckbox('jog')}
            className="hidden"
          />
          <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full cursor-pointer mr-2"></span>
          <span className="text-gray-700 cursor-pointer">A jog in the park</span>

        </label>
      
        <label className="mb-4 lg:inline-block mr-4 font-bold cursor-pointer">
          <input
            type="checkbox"
            id="catchUp"
            name="time"
            value="catchUp"
            onChange={() => handleFreeTimeCheckbox('catchUp')}
            className="hidden"
          />
          <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full cursor-pointer mr-2"></span>
          <span className="text-gray-700 cursor-pointer">Catching up with friends</span>

        </label>
        
        <label className="mb-6 lg:inline-block mr-20 font-bold cursor-pointer">
          <input
            type="checkbox"
            id="art"
            name="time"
            value="art"
            onChange={() => handleFreeTimeCheckbox('art')}
            className="hidden"
          />
          <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full cursor-pointer mr-2"></span>
          <span className="text-gray-700 cursor-pointer">Creating art</span>

        </label>

        <label className="mb-4 lg:inline-block mr-20 font-bold cursor-pointer">
          <input
            type="checkbox"
            id="skill"
            name="time"
            value="skill"
            onChange={() => handleFreeTimeCheckbox('skill')}
            className="hidden"
          />
          <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full cursor-pointer mr-2"></span>
          <span className="text-gray-700 cursor-pointer">Learning a new skill</span>

        </label>

        <label className="mb-4 lg:inline-block mr-20 font-bold cursor-pointer">
          <input
            type="checkbox"
            id="nap"
            name="time"
            value="nap"
            onChange={() => handleFreeTimeCheckbox('nap')}
            className="hidden"
          />
          <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full cursor-pointer mr-2"></span>
          <span className="text-gray-700 cursor-pointer">Taking a nap</span>

        </label>
      </form>
    </div>
  </div>
</article>

<article className="mt-20 mx-auto px-4 lg:pl-1/4 relative">
  {/* Background Image */}
  <div
    className="absolute inset-0 h-full w-full  bg-cover bg-center"
    style={{ backgroundImage: `url(${monkey})`, minHeight: '100vh',position: 'relative', top: '695px'}}
  >

<div className="mt-12 text-center" >
      <h1 className="text-2xl font-bold text-gray-700">What do you like to do in your free time?</h1>
    </div>

  <div className="mx-auto mt-48 text-center">
    <form action="index.html" method="post">
      <input
        type="range"
        min="0"
        max="20"
        value={personalityValue}
        onChange={handlePersonalityChange}
        className="w-full"
      />

      <div className="flex justify-between mt-2">
        <p className="introvert-label bg-black text-white p-2 rounded-lg">Introvert</p>
        <p className="extrovert-label bg-black text-white p-2 rounded-lg">Extrovert</p>
      </div>
    </form>
  </div>

  <div className="text-center mt-8">
    <a href="#resArrow">
      <button className="submit">Submit</button>
    </a>
  </div>
  </div>
</article>


            <div className="result ">
                {result} </div>
        </div>
    </div>
    );
}

export default Quiz;
