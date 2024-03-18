import React, {useState, useRef} from 'react';
import Result from './Result';
import './speedTester.css';

function SpeedTester() {
const [text, setText] = useState('');
  const [time, setTime] = useState(0);

  const ref = useRef(null);

  const wordCollection = [
    "Hospital",
      "Racism",
      "specialized",
      "Awesome",
      "Robotics",
      "Intellectual",
      "Isn't",
      "placeholder?",
      "technology",
      "generic",
      "something",
      "co-operative",
      "@gmail",
      "!okay",
  ];

  const changeHandler = (e) => {
    if(time < 30) {
      setText(e.target.value);
    }
  };

  const resetHandler = () => {
    setText("");
    setTime(0);
    ref.current.focus()
  };

  if(text.length > 0) {
    if(time < 30) {
      setTimeout(() => {
        setTime(time + 1)
      }, 1000);
    }
  }

  var i,j;
  var k = 0;
  var wpm;
  var userWord = [];
  var correctWord = [];
  if (text === "" || time === 0) {
    wpm = 0;
  } else {
    userWord = text.split(" ");

    for(i = k; i <= userWord.length; i++) {
      console.log('outer')
      for(j = 0; j <= wordCollection.length; j++) {
        console.log('inner');
        if(userWord[i] === wordCollection[j]) {
          correctWord[k] = userWord[i];
          k += 1;
        }
      }
      
    }

    console.log(correctWord);
    wpm = Math.ceil(correctWord.length / (time / 60));
  }

  

  return(
    <>
      <div className='speedTester'>
      <h3 style={{textDecoration: 'underline'}}>{" "}word displayed:</h3>
        <div className='writingContent'>
          {wordCollection.map((word, index) => (
      <b>
      <span style={{color: 'green', fontSize: '20px'}}>{word}</span>
      </b>
          )
      
          )}
        </div>
        <div className='start_time'>
        {time > 0 ? (
      <span style={{fontWeight: 'bold', fontSize: '55px'}}>
        {" "}
        {time}
      </span>
        ) : ( <h4>start time</h4>)
      
        }
        </div>
        <div className='inputTxtarea'>
        <textarea
          ref={ref}
          name=''
          id='txtarea'
          cols="70"
          rows='10'
          value={text}
          onChange={changeHandler}
          autoFocus
          
          ></textarea>
        </div>
        {time > 0 ? (
      <div className='st-bottom'>
      <span style={{fontWeight: 'bold', fontSize: '16px'}}>
        {" "}
        {wpm}wpm
      </span>
      </div>
        ) : (
      " "
        )}
      </div>
      {time === 30 ? (
      <Result 
         handleParent={resetHandler}
        wpm={wpm}
        correctWord={correctWord}
        />
      ) : ""}
      
    </>
  );
}

export default SpeedTester;