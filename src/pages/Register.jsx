import React,{useState} from 'react'
import '../styles/login.css'
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { Link } from 'react-router-dom'
const Register = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,
    email: undefined,
    password:undefined
    })
    const handleChange = (e) => {
        setCredentials({...credentials,[e.target.id]:e.target.value})
    }
    const handleClick = (e) => {
      e.preventDefault()
      console.log(credentials)
    }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" srcset="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Username' id='username' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account <Link to={'/login'}>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register