import React, { useState } from "react"
import "../css/contact.css"
const Home = () => {
  const [field1, setField1] = useState(false)
  const checkField1 = () => {
    setField1(field1 => true)
  }
  const checkField2 = () => {
    setField1(field1 => false)
  }

  return (
    <>
      <form
        method="post"
        action="https://www.flexyform.com/f/59e9130b09ff53241979a03ab00ba74b9bb41f70"
      >
        <div>
          <label htmlFor="fullname">
            Fullname
            <input type="text" name="fullname" aria-label="fullname" />
          </label>
        </div>
        <di>
          <h2>Select</h2>
          <label htmlFor="element1">
            <input
              type="radio"
              name="select"
              value="element1"
              aria-label="element1"
              onClick={() => checkField1()}
            />
            Element 1
          </label>
          <label htmlFor="element2">
            <input
              type="radio"
              name="select"
              value="element2"
              aria-label="element2"
              onClick={() => checkField2()}
            />
            Element 2
          </label>
        </di>
        {field1 ? (
          <>
            <div>
              <label htmlFor="email">
                Email
                <input type="email" name="email" aria-label="email" />
              </label>
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="phone">
                Phone
                <input type="text" name="phone" aria-label="phone" />
              </label>
            </div>
          </>
        )}
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  )
}

export default Home
