import { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBTabs,

  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const [justifyActive] = useState('tab1');



  const handleLogin = () => {
    const email = document.getElementById('form1').value;
    const password = document.getElementById('form2').value;

    const loginData = { email, password };

    axios.post('http://localhost:3000/api/login', loginData) // Replace with your server URL and route
      .then(response => {
        console.log('Login successful:', response.data);
        // Handle successful login, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        {/* ... Tab links ... */}
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />

          <div className="d-flex justify-content-between mx-4 mb-4">
            {/* ... Remember me checkbox and forgot password link ... */}
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
            Sign in
          </MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        {/* ... Tab 2 content ... */}
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default App;
