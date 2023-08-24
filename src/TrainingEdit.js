import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const TrainingEdit = () => {
  const initialFormState = {
    name: '',
    link: '',
    duration: '',
    topic: '',
    entity: '',
    AVG_rating: ''
  };
  const [group, setGroup] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/training/edit/${id}`)
        .then(response => response.json())
        .then(data => setGroup(data));
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/training?id=${id}`, {
        method: id ? 'PATCH' : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
      });

      if (response.ok) {
        // Training data submitted successfully
        console.log('Training data submitted successfully');
        // Reset the form and navigate
        setGroup(initialFormState);
        navigate('/training');
      } else {
        // Handle error scenario
        console.error('Failed to submit training data');
      }
    } catch (error) {
      console.error('Error submitting training data:', error);
    }
  };

  const title = <h2>{group.id ? 'Edit Training' : 'Edit Training'}</h2>;

  return (
    <div>
      <AppNavbar />
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={group.name || ''}
              onChange={handleChange}
              autoComplete="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link</Label>
            <Input
              type="text"
              name="link"
              id="link"
              value={group.link || ''}
              onChange={handleChange}
              autoComplete="link"
            />
          </FormGroup>
          <FormGroup>
            <Label for="duration">Duration</Label>
            <Input
              type="text"
              name="duration"
              id="duration"
              value={group.duration || ''}
              onChange={handleChange}
              autoComplete="duration"
            />
          </FormGroup> 
          <FormGroup>
            <Label for="topic">Topic</Label>
            <Input
              type="text"
              name="topic"
              id="topic"
              value={group.topic || ''}
              onChange={handleChange}
              autoComplete="topic"
            />
          </FormGroup>
          <FormGroup>
            <Label for="entity">Entity</Label>
            <Input
              type="text"
              name="entity"
              id="entity"
              value={group.entity || ''}
              onChange={handleChange}
              autoComplete="entity"
            />
          </FormGroup>         
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="secondary" tag={Link} to="/training">Cancel</Button>
        </Form>
      </Container>
    </div>
  );
};

export default TrainingEdit;