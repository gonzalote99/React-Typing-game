import React from 'react';
import './result.css'

function Result({handleParent, wpm, correctWord}) {
  var advice;
  if(wpm === 0) {
    advice = '';
  } else if (wpm > 15 && wpm <= 35) {
    advice = 'keep practicing'
  } else if (wpm <= 15) {
    advice = 'practice hard'
  } else if( wpm > 40 && wpm <= 60) {
    advice = 'good speed'
  }
  else {
    advice = 'excellent speed'
  }
  return(
    <div>
    <button id='retry-btn' onClick={handleParent}>retry</button>
      <h4>total correct words:
      <span style={{fontWeight: 'bold', fontSize: '16px' }}>{correctWord.length}</span>
      </h4>
      <h4>
      analiyzing performance: {" "}
        <span style={{fontWeight: 'bold', fontSize: '16px'}}>
          {advice}
        </span>
      </h4>
    </div>
  )
}

export default Result;