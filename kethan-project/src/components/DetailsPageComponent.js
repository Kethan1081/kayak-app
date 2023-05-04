import React from 'react'
import { useSearchParams, Link, useLocation } from 'react-router-dom'
import './DetailsPageStyles.css';

function DetailsPageComponent() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const airline = location.state;
    // console.log(airline.name, "rohiit");
    // console.log(airline.phone, "gouri");
    // console.log(airline.logoUrl, "deva");
    // console.log(airline.site, "dutta");
    return (
        <div className='big-div'>
      <div className='list-dev'>
          {/* <div>DetailsPageComponent</div> */}
          <Link className="back-class" to="/">&lt; Back to Main</Link>
    </div>
        <div className="logo-container">
        <div className="values-container">
          <p herf={airline.site} class="value">{airline.name}</p>
          <p className="value">{airline.phone === null ? "NaN" : airline.phone}</p>
        <p className="value"><a className='orange' title='website' href={airline.site}> {airline.site}</a></p>
        </div>
        <img src={searchParams.get("logoUrl")} alt="Logo" className="logo-image"></img>
        </div>
        <p className='orange'>Check Flight Status</p>
        <div className="search-container">
      <input type="text" placeholder="Enter Flight Number..." className="search-box"/>
      <button type="submit" className="search-button">Search</button>
    </div>
        </div>
    )
}

export default DetailsPageComponent