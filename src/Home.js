import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Title from './Title';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Title />
      <Container fluid>
        <Button color="link"><Link to="/training" >Manage Trainings</Link></Button>
      </Container>

    </div>
  );
}

export default Home;