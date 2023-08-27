import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  const backgroundImageUrl = 'url("https://i4.hurimg.com/i/hurriyet/75/750x422/5e1dacfc0f2544125445cb81.jpg")'; // Replace with your direct image URL

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
        <Button style={{ fontSize: 40 }} tag={Link} to="/training">Manage Trainings</Button>
      </Container>
    </div>
  );
}

export default Home;
