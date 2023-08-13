import React, { useState } from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import calculateAvgRating from '../../utils/avgRating'
import { useNavigate } from 'react-router-dom'

const Booking = ({ tour,avgRating }) => {
    //const { avgRating } = calculateAvgRating(reviews)
    const { price, reviews } = tour
    const navigate=useNavigate()
    const [credentials, setCredentials] = useState({
        userId:'01',
        fullname: '',
        phone: '',
        email:'example@gmail.com',
        bookingAt:"",
        guestSize:'1'
    })
    const handleChange = (e) => {
        setCredentials({...credentials,[e.target.id]:e.target.value})
    }
    const handleClick = e => {
        e.preventDefault()
        navigate('/thank-you')
    }
    const serviceFee = 10
    const totalWithoutServiceFee = credentials.guestSize * price
    const totalWithtServiceFee = totalWithoutServiceFee + serviceFee
    const personNumber=credentials.guestSize==0 ? 1 : credentials.guestSize
  return (
    <div className='booking'>
          <div className="booking__top d-flex align-items-center justify-content-between">
              <h3>
                  ${price} <span>/per person</span>
              </h3>
              <span className='tour__rating d-flex align-items-center'>
                  <i class="ri-star-s-fill"></i>
                  {avgRating===0?null:avgRating}({reviews?.length})
              </span>
          </div>
          {/* === Booking Form === */}
          <div className="booking__form">
              <h5>Information</h5>
              <Form className='booking__info-form' >
                  <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookingAt' required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                  </FormGroup>
              </Form>
          </div>
          {/* === Booking Form End === */}
          {/* ======Booking Bottom======= */}
          <div className="booking__bottom">
              <ListGroup>
                  <ListGroupItem className='border-0 px-0'>
                      <h5 className="d-flex align-items-center gap-1">
                          ${price} <i class='ri-close-line'></i>{personNumber} person
                      </h5>
                      <span>${ totalWithoutServiceFee }</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 px-0'>
                     <h5>
                          Service Charge
                      </h5>
                      <span>${ serviceFee }</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 px-0 total'>
                      <h5>
                          Total
                      </h5>
                      <span>${totalWithtServiceFee}</span>
                  </ListGroupItem>
              </ListGroup>
              <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
          </div>
          {/* ======Booking Bottom End======= */}
    </div>
  )
}

export default Booking
