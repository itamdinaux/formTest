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
          <select name="role[]">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
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
