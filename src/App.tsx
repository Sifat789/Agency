import { useState } from 'react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className='sm:w-[98vw] w-[100vw] flex flex-col items-center justify-center'>
      <Navigation />
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
