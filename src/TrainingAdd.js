import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const AddTraining = () => {
  const initialFormState = {
    name: '',
    link: '',
    duration: '',
    topic: '',
    entity: '',
    AVG_rating: ''
  };
  const [group, setGroup] = useState(initialFormState);
  // setnew = useState();
  const navigate = useNavigate();

  useEffect(() => {

      fetch(`/api/training/new`)
        .then(response => response.json())
        .then(data => setGroup(data));
  });  

  /* const handleChange = (event) => {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  }; */

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/training', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
      });

      if (response.ok) {
        // Training data added successfully
        console.log('Training data added successfully');
        // Reset the form and navigate
        setGroup(initialFormState);
        navigate('/training');
      } else {
        // Handle error scenario
        console.error('Failed to add training data');
      }
    } catch (error) {
      console.error('Error adding training data:', error);
    }
  };

  return (
    <div>
      <AppNavbar />
      <Container>
        <h2>Add Training</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={group.name}
              onChange={(event) => {setGroup(event.target.value)}}
              autoComplete="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link</Label>
            <Input
              type="text"
              name="link"
              id="link"
              value={group.link}
              onChange={(event) => {setGroup(event.target.value)}}
              autoComplete="link"
            />
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration</Label>
            <Input
              type="text"
              name="duration"
              id="duration"
              value={group.duration}
              onChange={(event) => {setGroup(event.target.value)}}
              autoComplete="duration"
            />
          </FormGroup> 
          <FormGroup>
            <Label for="topic">Topic</Label>
            <Input
              type="text"
              name="topic"
              id="topic"
              value={group.topic}
              onChange={(event) => {setGroup(event.target.value)}}
              autoComplete="topic"
            />
          </FormGroup>
          <FormGroup>
            <Label for="entity">Entity</Label>
            <Input
              type="text"
              name="entity"
              id="entity"
              value={group.entity}
              onChange={(event) => {setGroup(event.target.value)}}
              autoComplete="entity"
            />
          </FormGroup>
          {/* Similarly, add FormGroups for link, duration, topic, entity, AVG_rating */}
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="secondary" tag={Link} to="/training">Cancel</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddTraining;