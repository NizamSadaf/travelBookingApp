import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import tourData from '../../assets/data/tours'
const FeaturedTourList = () => {
  return (
      <>
          {
              tourData?.map((tour) => (
                  <Col lg='3' key={tour.id}>
                      <TourCard tour={ tour } />
                  </Col>
              ))
          }
      </>
  )
}

export default FeaturedTourList
