import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')


  return (
    <div className='App'>
    <Form>
      <Form.Group className="mb-3" controlId="formOrganization">
        <Form.Label>Organization Name</Form.Label>
        <Form.Control type="username" placeholder="Enter Organization Name" value={name} onChange={(e) => {setName(e.target.value)}} />
        <Form.Text className="text-muted">
          Please enter the full name of your organization.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      {console.log(name)}
      <Button variant="primary" type="submit" href={'http://localhost:3000/loggedIn/home/'+name}>
        Login
      </Button>
    </Form>
    
    </div>
  );
}

export default Login;