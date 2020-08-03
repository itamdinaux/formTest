import React, { useState } from "react"
import "../css/contact.css"
const Home = () => {
  const [counter, setCounter] = useState(1)
  const plus = () => {
    setCounter(counter + 1)
  }
  const zero = () => {
    setCounter(counter => 0)
  }
  console.log(counter)
  return (
    <div>
      <h2>Contact form</h2>
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input
          type="hidden"
          name="form-name"
          value="contact"
          aria-label="contact"
        />

        <div className="element">
          <label htmlFor="mail">Your Email:</label>
          <input type="email" name="email" aria-label="mail" />
        </div>

        <div className="element">
          <label htmlFor="list">List Option:</label>
          <select name="list-option">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
        </div>

        <div className="element">
          <h3>CheckBox:</h3>
          <div className="box">
            <input
              type="checkbox"
              name="checkbox-1"
              aria-label="checkbox-1"
              id="checkbox-1"
              value="ok"
            />
            <label htmlFor="checkbox-1" for="checkbox-1">
              First Check Box
            </label>
          </div>
          <div className="box">
            <input
              type="checkbox"
              name="checkbox-2"
              aria-label="checkbox-2"
              id="checkbox-2"
              value="ok"
            />
            <label htmlFor="checkbox-2" for="checkbox-2">
              Second Check Box
            </label>
          </div>
        </div>

        <div className="element">
          <label htmlFor="radio">Radio List</label>
          <div className="box">
            <input
              type="radio"
              name="radioChoice"
              aria-label="radio-1"
              id="radio-1"
              value="ok 1"
              onClick={plus}
            />
            <label htmlFor="radio-1" for="radio-1">
              First Radio choice
            </label>
          </div>
          <div className="box">
            <input
              type="radio"
              name="radioChoice"
              aria-label="radio-2"
              id="radio-2"
              value="ok 2"
              onClick={plus}
            />
            <label htmlFor="radio-2" for="radio-2">
              Second Radio choice
            </label>
          </div>
          <div className="box">
            <input
              type="radio"
              name="radioChoice"
              aria-label="radio-3"
              id="radio-3"
              value="ok 3"
              onClick={zero}
            />
            <label htmlFor="radio-3" for="radio-3">
              Third Radio choice
            </label>
          </div>
          <div className={counter === 0 ? "open" : "closed"}>
            <label htmlFor="subcheckbox">Radio 2 Sub element:</label>

            <div className="box">
              <input
                type="checkbox"
                name="checkbox-1"
                aria-label="checkbox-sub-1"
                id="checkbox-sub-1"
                value="ok 1"
              />
              <label htmlFor="checkbox-sub-1" for="checkbox-sub-1">
                First SubCheck Box
              </label>
            </div>
            <div className="box">
              <input
                type="checkbox"
                name="checkbox-sub-2"
                aria-label="checkbox-sub-2"
                id="checkbox-sub-2"
                value="ok 2"
              />
              <label htmlFor="checkbox-sub-2" for="checkbox-sub-2">
                Second SubCheck Box
              </label>
            </div>
          </div>
        </div>

        <div className="element">
          <label htmlFor="msg">Message:</label>
          <textarea name="message" aria-label="msg" />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Home
