import React, { useRef, useState } from 'react'
import '../styles/tour-details.css'
import { Container, Col, Row, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
const TourDetails = () => {
  const { id } = useParams()
  const tour = tourData.find(tour => tour.id === id)
  const { photo, title, desc, price, reviews,city,address, distance, maxGroupSize } = tour
  const { totalRating, avgRating } = calculateAvgRating(reviews)
  const options = { day: "numeric", month: 'long', year: "numeric" }
  const reviewMsgRef = useRef('')
  const [rating, setRating] = useState(0)
  const submitHandler = (e) => {
    const reviewMsg = reviewMsgRef.current.value
    alert(`${reviewMsg},${rating}`)
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" srcset="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className='tour__rating d-flex align-items-center gap-1'>
                          <i class="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>{avgRating} {" "}
                          {totalRating === 0 ? 'Not rated' :
                          (
                            <span>({reviews?.length})</span>
                          )}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill">{ address }</i>
                    </span>
                  </div>
                     <div className="tour__extra-details">
                      <span><i class="ri-map-pin-2-line"></i>{city }</span>
                      <span><i class="ri-money-dollar-circle-line"></i>${price} /per person</span>
                      <span><i class="ri-map-pin-time-line"></i>{distance} k/m</span>
                      <span><i class="ri-group-line"></i>{maxGroupSize }</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                  {/* tour reviews section  */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews )</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={()=>setRating(1)}>
                          1<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRating(2)}>
                          2<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRating(3)}>
                          3<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRating(4)}>
                          4<i class="ri-star-fill"></i>
                        </span>
                        <span onClick={()=>setRating(5)}>
                          5<i class="ri-star-fill"></i>
                        </span>
                      </div>
                      <div className="review__input">
                          <input type="text" placeholder='share your thought' ref={reviewMsgRef} required/>
                          <button type='submit' className='btn primary__btn text-white'>
                            Submit
                          </button>
                        </div>
                    </Form>
                    <ListGroup className='user__reviews'>
                      {reviews?.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt="" srcset="" />
                          <div className='w-100'>
                            <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>nizam</h5>
                              <p>
                                {new Date("08-11-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                             <span className="d-flex align-items-center">
                                5<i class="ri-star-s-fill"></i>
                              </span>
                          </div>
                          <h6>Beautiful Tour</h6>
                          </div>
                          
                        </div>
                        ))}
                    </ListGroup>
                  </div>
                  {/* tour reviews section end */}
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={ avgRating } />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails