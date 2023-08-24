import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
     <div style={{ alignItems : "center" }} >
      <AppNavbar/>
      <Container fluid>
        <Button style={{fontSize : 40}} tag={Link} to="/training" >Manage Trainings</Button>
      </Container>
    </div>
  );
}

export default Home;