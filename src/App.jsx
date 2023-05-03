import React from 'react'
import Hero from './component/hero'
import Menu from './component/menu'
import Moviecard from './component/moviecard'
import Data from './server/data'
import './App.css'



function App() {
  return (
    <>
      <div className="frontMovie">
        <div className="container">
          
          <Menu/>
          <Hero/>

          <div className="movie-section">
              <div className="header-movie">
                  <h2>New Movies</h2> <div className="bindhu"></div>
          </div>
              <div className="all-movies">
                  <div className="cards-movies">
                    
                    {
                      Data.map((d) => <Moviecard data= {d}/>)
                    }
                  </div>
                  
              </div>
          </div>
        </div>
      </div>


      
    </>
  )
}

export default App
