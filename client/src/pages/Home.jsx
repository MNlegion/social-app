import React from 'react'

function Home() {
  return (
    <>
    <section className='heading'>
      <h1>Home</h1>
    </section>

    <section className='content'>
      <p>Welcome to the home page</p>
    </section>

    <div className="home-container">
      <section className='home-section'>
        <h2>Section 1</h2>
        <p>Content for section 1</p>
      </section>
      <section className='home-section'>
        <h2>Section 2</h2>
        <p>Content for section 2</p>
      </section>
    </div>
    </>
  )
}

export default Home