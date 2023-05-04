import React from 'react';
// import logo from '../kklogo.svg';
import './HeaderCompStyles.css';

function HeaderComponent() {
  return (
    <div className='image-container'>
        {/* <img src={logo} alt="KAYAK Logo" width="204" height="64" /> */}
        <a title="kayak.com, Public domain, via Wikimedia Commons" href="https://kayak.com/"><img className='hl-class' width="250" alt="Kayak Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kayak_Logo.svg/512px-Kayak_Logo.svg.png"></img></a>
    </div>
  )
}

export default HeaderComponent