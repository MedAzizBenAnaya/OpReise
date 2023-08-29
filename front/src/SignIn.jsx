import React from 'react';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useNavigate } from 'react-router-dom'; 




import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {

    const navigate = useNavigate();
    const handlelogin = () =>{

    
        const email = document.getElementById('form1').value;
        const password = document.getElementById('form2').value;
    
        const loginData = {email,password};
        axios.post('http://localhost:4000/auth/login', loginData).then(response => {
          console.log('login was successful:', response.data);
          navigate('/dashboard')
        })
        .catch(error => {
          console.error('login error:', error);
        });
    
      }
    
  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handlelogin}>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default App;