import React, {useState, useEffect} from 'react';
import image from "../images/22.jpeg";
import news from "../images/final2.JPG";
import colour from "../images/colour.jpeg";
import './quiz.css';


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
            setResult (
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
                            }/>
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
                return {animal: 'Rabbit', imageSrc: 'https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are calm and peaceful ! Like to keep things organised ! Artistic person'};
            } else if (ans > 8 && ans <= 14) {
                return {animal: 'Meerkat', imageSrc: 'https://images.pexels.com/photos/1454786/pexels-photo-1454786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are selfless and caring ! little anxious and introvert'};
            } else if (ans > 14 && ans <= 20) {
                return {animal: 'Fox', imageSrc: 'https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are mischievous, skilful and self-assured'};
            } else if (ans > 20 && ans <= 25) {
                return {animal: 'Bear', imageSrc: 'https://images.pexels.com/photos/1466592/pexels-photo-1466592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You are empathetic but a little fearful'};
            } else if (ans > 25 && ans <= 100) {
                return {animal: 'Lion', imageSrc: 'https://images.pexels.com/photos/5306143/pexels-photo-5306143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', description: 'You can be a great Leader ! Fearless and Brave'};
            }
        };
        /*
        useEffect(() => {
            console.log(personalityValue); // This will log the updated value
        }, [personalityValue]);
        */
        const handlePersonalityChange = (event) => {
          // Update the state with the new personality value
          setPersonalityValue(parseInt(event.target.value));
          console.log(personalityValue);
        };


        return(< div className = 'quizdiv' style = {{ backgroundImage: `url(${news})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} > <div>
            <header id="topHeader">
                <div className="arrowDiv">
                    <a href="#colorSection">
                        <svg width="100" height="180" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow">
                                <title>Downward Arrow</title>
                                <line stroke="#000000" transform="rotate(-0.14894883334636688 28.93478393554643,25.999999999999236)" id="svg_1" y2="34" x2="37.43478" y1="18" x1="20.43478" strokeWidth="5" fill="none"/>
                                <line stroke="#000000" id="svg_3" y2="17.09239" x2="49.875" y1="33.03261" x1="34.80978" strokeWidth="5" fill="none"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </header>
        </div>


        <div>
            <article className="colorSection" id="colorSection">
                <div className="colorTitle title">
                    <h1>What is your favorite color?</h1>
                </div>
                <div className="colorSelection">
                    <form action="index.html" method="post">
                        <label className="colorBlockSelection red">
                            <input type="radio" id="red" name="color" value="5"
                                onClick={
                                    () => handleColorClick(5)
                                }
                                style={
                                    {display: 'none'}
                                }
                                // Hide the default radio input
                            />
                            <span className="radio-custom"></span>
                            <p>red</p>
                        </label>
                        <label className="colorBlockSelection blue">
                            <input type="radio" id="blue" name="color" value="3"
                                onClick={
                                    () => handleColorClick(3)
                                }
                                style={
                                    {display: 'none'}
                                }/>
                            <span className="radio-custom"></span>
                            <p>blue</p>
                        </label>
                        <label className="colorBlockSelection green">
                            <input type="radio" id="green" name="color" value="2"
                                onClick={
                                    () => handleColorClick(2)
                                }
                                style={
                                    {display: 'none'}
                                }/>
                            <span className="radio-custom"></span>
                            <p>green</p>
                        </label>
                        <label className="colorBlockSelection purple">
                            <input type="radio" id="purple" name="color" value="0"
                                onClick={
                                    () => handleColorClick(0)
                                }
                                style={
                                    {display: 'none'}
                                }/>
                            <span className="radio-custom"></span>
                            <p>purple</p>
                        </label>
                        <label className="colorBlockSelection yellow">
                            <input type="radio" id="yellow" name="color" value="1"
                                onClick={
                                    () => handleColorClick(1)
                                }
                                style={
                                    {display: 'none'}
                                }/>
                            <span className="radio-custom"></span>
                            <p>yellow</p>
                        </label>
                        <label className="colorBlockSelection orange">
                            <input type="radio" id="orange" name="color" value="4"
                                onClick={
                                    () => handleColorClick(4)
                                }
                                style={
                                    {display: 'none'}
                                }/>
                            <span className="radio-custom"></span>
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

                    <div className="timeSelection">

                        <form action="index.html" method="post">
                            <label className="timeOption" htmlFor="jog">
                                <input type="checkbox" id="jog" name="time" value="jog"
                                    onChange={
                                        () => handleFreeTimeCheckbox('jog')
                                    }/>
                                <span className="custom-checkbox"></span>
                                <span className="checkbox-text"
                                    style={
                                        {marginLeft: '10px'}
                                }>A jog in the park</span>
                            </label>
                            <br/>

                            <label className="timeOption" htmlFor="catchUp">
                                <input type="checkbox" id="catchUp" name="time" value="catchUp"
                                    onChange={
                                        () => handleFreeTimeCheckbox('catchUp')
                                    }/>
                                <span className="custom-checkbox"></span>
                                <span className="checkbox-text"
                                    style={
                                        {marginLeft: '10px'}
                                }>Catching up with friends</span>
                            </label>
                            <br/>

                            <label className="timeOption" htmlFor="art">
                                <input type="checkbox" id="art" name="time" value="art"
                                    onChange={
                                        () => handleFreeTimeCheckbox('art')
                                    }/>
                                <span className="custom-checkbox"></span>
                                <span className="checkbox-text"
                                    style={
                                        {marginLeft: '10px'}
                                }>Creating art</span>
                            </label>
                            <br/>

                            <label className="timeOption" htmlFor="skill">
                                <input type="checkbox" id="skill" name="time" value="skill"
                                    onChange={
                                        () => handleFreeTimeCheckbox('skill')
                                    }/>
                                <span className="custom-checkbox"></span>
                                <span className="checkbox-text"
                                    style={
                                        {marginLeft: '10px'}
                                }>Learning a new skill</span>
                            </label>
                            <br/>

                            <label className="timeOption" htmlFor="nap">
                                <input type="checkbox" id="nap" name="time" value="nap"
                                    onChange={
                                        () => handleFreeTimeCheckbox('nap')
                                    }/>
                                <span className="custom-checkbox"></span>
                                <span className="checkbox-text"
                                    style={
                                        {marginLeft: '10px'}
                                }>Taking a nap</span>
                            </label>
                            <br/>
                        </form>
                    </div>


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
            <div className="finalSubmit">
                <a href="#resArrow">
                    <input className="submit" type="button" name="submit" value="Submit"
                        onClick={handleSubmit}/>
                </a>
            </div>
            <div className="result ">
                {result} </div>
        </div>
    </div>
    );
}

export default Quiz;
