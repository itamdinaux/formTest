import React from "react"

const Home = () => {
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
          <label htmlFor="checkbox">CheckBox:</label>

          <div className="box">
            <input
              type="checkbox"
              name="checkbox-1"
              aria-label="checkbox-1"
              id="checkbox-1"
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
            />
            <label htmlFor="checkbox-2" for="checkbox-2">
              Second Check Box
            </label>
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
