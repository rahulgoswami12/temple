import React from 'react'
import "./App.css";
import  Layout from "./components/layout";
import Badri from './components/badri';
import Bottom from './components/botom';
import Badriii from './components/badriii';
import Home from './components/home';

const App = () => {
  return (
    <div>
    <Layout />
    <Home/>
   <Badri/>
   <Bottom />
   <Badriii />
  </div>
  )
}

export default App