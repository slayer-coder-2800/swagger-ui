import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar(props) {
  const [showNavExternal2, setShowNavExternal2] = useState(false);
  const setFunc = (ind) => {
    props.cur_state(ind);
  };

  // Data array for rendering links
  const links = [
    { label: 'Delivery', index: 0 },
    { label: 'Iris', index: 1 },
    { label: 'Jamp', index: 2 },
    { label: 'L1', index: 3 },
    { label: 'L2', index: 4 },
    { label: 'MT', index: 5 },
    { label: 'Order', index: 6 },
    { label: 'Pharma', index: 7 },
  ];

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal2(!showNavExternal2)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal2}>
        <div className='bg-light shadow-3 p-4'>
          {/* Use map to render MDBBtn components */}
          {links.map((link, index) => (
            <MDBBtn
              key={index}
              block
              className='border-bottom m-0'
              color='link'
              onClick={() => setFunc(link.index)}
            >
              {link.label}
            </MDBBtn>
          ))}
        </div>
      </MDBCollapse>
    </>
  );
}
