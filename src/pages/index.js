import React, { useState } from "react"
import "../css/contact.css"
const Home = () => {
  const [checkBoxTwo, setCheckBoxTwo] = useState(1)
  const checkTheBoxTwo = () => {
    setCheckBoxTwo(checkBoxTwo => !checkBoxTwo)
  }

  return (
    <div>
      <h1>Contact form</h1>
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input
          type="hidden"
          name="form-name"
          value="contact"
          aria-label="contact"
        />
        <div>
          <h2>Coordonées</h2>
          <p>
            <label htmlFor="name">
              Nom :
              <input type="text" name="name" aria-label="name" />
            </label>
          </p>
          <p>
            <label htmlFor="mail">
              Mail :
              <input type="mail" name="mail" aria-label="mail" />
            </label>
          </p>
        </div>
        <div>
          <h2>Au sujet de la demande</h2>
          <p>
            <label>
              List of subject
              <select name="Sujet">
                <option value="sujet-1">Subject 1</option>
                <option value="sujet-2">Subject 2</option>
              </select>
            </label>
          </p>
        </div>
        <div>
          <h2>Selection option</h2>
          <p>
            <label htmlFor="select-1">
              <input
                type="checkbox"
                name="select"
                aria-label="select-1"
                id="select-1"
                value="select 1"
              />
              select 1
            </label>
          </p>
          <p>
            <label htmlFor="select-2">
              <input
                type="checkbox"
                name="select"
                aria-label="select-2"
                id="select-2"
                value="select 2"
              />
              select 2
            </label>
          </p>
        </div>
        <div className={!checkBoxTwo ? "open" : "closed"}>
          <h3>element of CheckBox 2</h3>
          <p>
            <label htmlFor="radio-1">
              <input
                type="radio"
                name="select"
                aria-label="radio-1"
                id="radio-1"
                value="selection radio 1"
              />
              Selection radio 1
            </label>
          </p>
          <p>
            <label htmlFor="radio-2">
              <input
                type="radio"
                name="select"
                aria-label="radio-2"
                id="radio-2"
                value="selection radio 2"
              />
              Selection radio 2
            </label>
          </p>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Home
