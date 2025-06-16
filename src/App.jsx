import "./App.css";
import { useState } from "react";

export default function App() {
  const [rate, setRate] = useState(null);
  const [loadAppreciation, setLoadAppreciation] = useState(false);

  function addRate(selectedRating) {
    setRate(selectedRating);
    console.log(rate);
  }
  function appreciation() {
    setLoadAppreciation(true)
  }
  return (
    <div className="app">
      {!loadAppreciation ? (
        <>
          <div className="star-container">
            <img src="/images/icon-star.svg" alt="star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul aria-label="rating numbers" className="rating-container">
            <li onClick={() => addRate(1)} className="rating-number">
              1
            </li>
            <li onClick={() => addRate(2)} className="rating-number">
              2
            </li>
            <li onClick={() => addRate(3)} className="rating-number">
              3
            </li>
            <li onClick={() => addRate(4)} className="rating-number">
              4
            </li>
            <li onClick={() => addRate(5)} className="rating-number">
              5
            </li>
          </ul>
          <button  onClick={appreciation}>SUBMIT</button>
        </>
      ) : (
        <div className="appreciation-container">
          <img src="/images/illustration-thank-you.svg" alt="appreciation" />
          <p className="selected-rating-container">
            {`You selected ${rate} out of 5`}
          </p>
          <h1>Thank you!</h1>
          <p className="appreciation-main-p">
            We appreciate you taking the time to give a rating. If you ever need
            more support. don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
