import '../components/HeroNavbar.css'
import images from '../constants/images';

import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';


function HeroNavbar() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const Links = [
    {name: 'Link', link: '/'},
    {name: 'Link', link: '/'},
    {name: 'Link', link: '/'},
    {name: 'Link', link: '/'},
    {name: 'Link', link: '/'},
    {name: 'Link', link: '/'}
  ]

  return (
    <Navbar 
      expand="lg">      
      <Container>
        <a className='navbar-brand' href="#1">
          <img 
            src={images.logo}
            className="ms-5" 
            alt="adrespect"
          />
        </a>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav 
          className="ms-auto" 
        >             
          
          {/* LINKS */}
          <div className='d-flex align-items-center'>
            {Links.map((link)=>(
            <>
              <Nav.Link 
                id='nav_link'
                className='show_arrow_down ml-3 ml-sm-5'
                href={link.link} 
                key={link.index}
              >
                {link.name}             
              </Nav.Link>
              <div className='arrow_down'>
                <IoIosArrowDown/> 
              </div> 
            </>
            ))}           
            
            {/* SEARCH */}
            {toggleSearch && (
              <input
              id='search_box'
              className="form ml-3" 
              type="search" 
              placeholder="Search" 
              aria-label="Search">
            </input>)}           
            <button 
              id='btn_search'
              className='ml-md-5 ml-3'
              onClick={() => setToggleSearch(!toggleSearch)}
            >
              <AiOutlineSearch />           
            </button>
            
            {/* DROPDOWN */}           
            <button 
              id='btn_menu' 
              className='mx-md-3 mx-0'               
            >
              <HiOutlineMenuAlt4/>
            </button>  
          </div>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeroNavbar;
