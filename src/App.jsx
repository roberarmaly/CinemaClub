import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

function App() 
{
  const title = "CinemaClub";
  const year = 2026;

  return (
    <main>
      <Header/>
      <MovieList/>
      <Footer/>
    </main>
  );
}
export default App
