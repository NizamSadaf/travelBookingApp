import React,{useState} from 'react'
import '../styles/login.css'
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { Link } from 'react-router-dom'
const Login = () => {
  const [credentials, setCredentials] = useState({
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
                <img src={loginImg} alt="" srcset="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account <Link to={'/register'}>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login