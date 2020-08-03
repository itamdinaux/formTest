import React from "react"

const Home = () => {
  return (
    <div>
      <h2>Contact form</h2>
      <form name="contact" method="POST" action="success" data-netlify="true">
        <p>
          <label htmlFor="name">
            Your Name: <input type="text" name="name" aria-label="name" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Home
