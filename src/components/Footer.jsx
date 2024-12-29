import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 
        <a className=' ms-2' href='https://mdbootstrap.com/'>
        2019 All Rights Reserved By Free Html Templates
        </a>
      </div>
    </MDBFooter>
  );
}