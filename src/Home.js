import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import backgroundImage from  './_VOIS.jpeg';

const Home = () => {
  const backgroundImageUrl = `url(${backgroundImage})`; // Replace with your direct image URL
  const buttonposition = {
    top : '500px',
    left : '575px',

  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: backgroundImageUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div
        style = {{
          position : 'absolute',
          ...buttonposition,
        }}
        >
        <Button style={{ fontSize: 40}}  tag={Link} to="/training">Manage Trainings</Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
