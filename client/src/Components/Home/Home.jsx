import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <>
        <Header/>
        <Main />
        <Footer />
        <Toaster />
    </>
  )
}

export default Home