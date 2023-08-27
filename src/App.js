import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainingList from './TrainingList';
import TrainingEdit from './TrainingEdit';
import TrainingAdd from './TrainingAdd';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/training' exact={true} element={<TrainingList/>}/>
        <Route path='/training/edit/:id' element={<TrainingEdit/>}/>
        <Route path="/training/new" element={<TrainingAdd/>} />
      </Routes>
    </Router>
  )
}

export default App;