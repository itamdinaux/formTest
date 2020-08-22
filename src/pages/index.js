import React, { useState } from "react"
import "../css/contact.css"
const Home = () => {
  const [field1, setField1] = useState(false)
  const checkField1 = () => {
    setField1(field1 => !field1)
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
          <h2>Select</h2>
          <label htmlFor="select1">
            Select 1
            <input
              type="radio"
              name="select"
              aria-label="select1"
              onClick={() => {
                checkField1()
              }}
            />
          </label>
          <label htmlFor="select2">
            Select 2
            <input type="radio" name="select" aria-label="select2" />
          </label>
          <label htmlFor="select3">
            Select 3
            <input type="radio" name="select" aria-label="select3" />
          </label>
        </div>
        {field1 ? (
          <>
            <div>
              <h2>Sub 1</h2>
              <label htmlFor="sub1">
                SubElement 1
                <input type="text" name="sub1" aria-label="sub1" />
              </label>
            </div>
          </>
        ) : (
          ""
        )}

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Home
