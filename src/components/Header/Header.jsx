import React, { useContext, useEffect, useRef } from 'react'
import { Container, Button, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
const Header = () => {
  const navLink = [
    {
      path: '/home',
      display:'Home'
    },
    {
      path: '/tours',
      display:'Tours'
    },
    {
      path: '/about',
      display:'About'
    },
  ]
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      {
        headerRef.current.classList.add("sticky__header")  
      }
      else {
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener("scroll",stickyHeaderFunc)
  })
  const toggleMenu=()=>menuRef.current.classList.toggle("show__menu")
  return (
    
    <Container>
      <header className='header' ref={headerRef}>
        <Row>
          <div className="nav__link d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to={'/'}><img src={logo} alt="" /></Link>
              
            </div>
            {/* ========Menu Start======== */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  navLink.map((item,index) => (
                    <li key={index} className="nav__item">
                     <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink></li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn'><Link to={'/login'}>Login</Link></Button>
                <Button className='btn primary__btn'><Link to={'/register'}>Register</Link></Button>
              </div>
              <span className='mobile__menu' onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
      </Row>
      </header>
      </Container>
    
  )
}

export default Header