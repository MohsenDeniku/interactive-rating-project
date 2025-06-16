import "./App.css";
import { useState } from "react";

export default function App() {
  const [rate, setRate] = useState(null);
  const [loadAppreciation, setLoadAppreciation] = useState(false);

  function addRate(selectedRating) {
    setRate(selectedRating);
  }
  function appreciation() {
    setLoadAppreciation(true)
  }

  const ratings = [1, 2, 3, 4, 5];

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
            {ratings.map((num) => (
              <li
                key={num}
                onClick={() => addRate(num)}
                className={`rating-number${rate === num ? " active" : ""}`}
              >
                {num}
              </li>
            ))}
          </ul>
          <button onClick={appreciation}>SUBMIT</button>
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
