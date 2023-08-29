import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; 

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate();
  const handleRegister = () =>{
    
    const name = document.getElementById('form1').value;
    const email = document.getElementById('form2').value;
    const phone = document.getElementById('form3').value;
    const password = document.getElementById('form4').value;

    const registerData = {name, email, phone, password};
    axios.post('http://localhost:4000/auth/register', registerData).then(response => {
      console.log('registration was successful:', response.data);
      navigate('/signin');
      

    })
    .catch(error => {
      console.error('register error:', error);
    });

  }


  return (
    <MDBContainer fluid className='my-5'>
    
      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'  className='d-flex justify-content-center'>

          <MDBCard className='my-5 cascading-right' style={

            { width: '400px', 
              background: 'hsla(0, 0%, 100%, 0.55)',
              backdropFilter: 'blur(30px)'}}>

            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBInput wrapperClass='mb-4' label='Your name' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Phone number' id='form3' type='phone'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

             

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleRegister}>sign up</MDBBtn>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        

      </MDBRow>

    </MDBContainer>
  );
}

export default App;