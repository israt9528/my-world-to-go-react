import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'


const countriesData = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())


function App() {

  return (
    <>
      <Suspense fallback='Loading.....'>
      <Countries countriesData={countriesData} ></Countries>
        
        </Suspense>       
      
    </>
  )
}

export default App
