import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import HeadingSearch from './headingSearch/HeadingSearch'
import CardContainer from './cardContainer/CardContainer'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <HeadingSearch/>
    <CardContainer/>
    <Footer/>
    </>
  )
}

export default App
