import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const TrainingList = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
// get 
    fetch('api/training')
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
  }, []);
// delete
const remove = async (id) => {
  await fetch(`/api/training?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(() => {
    let updatedGroups = [...groups].filter(i => i.id !== id);
    setGroups(updatedGroups);
  });
}

  if (loading) {
    return <p>Loading...</p>;
  }

  const TrainingList = groups.map(group => {
    return <tr key={group.id}>
      <td style ={{whiteSpace: 'nowrap'}}>{group.name}</td>
      {/* <td style ={{whiteSpace: 'nowrap'}}><Button color="link"><Link to={group.link}>{group.link}</Link></Button></td> */}
      <td style ={{whiteSpace: 'nowrap'}}>{group.link}</td>      
      <td style ={{whiteSpace: 'nowrap'}}>{group.duration}</td>
      <td style ={{whiteSpace: 'nowrap'}}>{group.topic}</td>
      <td style ={{whiteSpace: 'nowrap'}}>{group.entity}</td>
      <td style ={{whiteSpace: 'nowrap'}}>{group.avgrating}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" tag={Link} to={"/training/edit/" + group.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(group.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/training/new">Add Training</Button>
        </div>
        <h3>All trainings</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="20%">Link</th>
            <th width="10%">Duration</th>
            <th width="15%">topic</th>
            <th width="15%">Entity</th>
            <th width="10%">Rating</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {TrainingList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TrainingList;
