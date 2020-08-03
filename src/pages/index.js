import React from "react"

const Home = () => {
  return (
    <div>
      <h2>Contact form</h2>
      <form name="contact" method="POST" action="/success">
        <p className="name">
          <label htmlFor="name">Name</label>
          <input type="text" aria-label="name" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Home
