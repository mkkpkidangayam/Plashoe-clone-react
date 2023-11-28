import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className='bg-light text-center text-lg-left'>
      &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link style={{textDecoration:'none'}} to={'/'}>
        <p style={{color:'#4F352A',fontWeight:'bold'}}>PLASHOE.COM</p>
        </Link>
        <p><a target='instagram' href="https://mkkpkidangayam.github.io/MKKP-Portfolio/" style={{textDecoration:'none',color:'black'}}>by: MKKP kidangayam</a></p>
      </footer>
    </div>
    
  );
}