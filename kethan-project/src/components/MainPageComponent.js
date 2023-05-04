import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import { createSearchParams, useNavigate } from 'react-router-dom';
import './MainPageStyles.css'

function MainPage() {
    const navigate = useNavigate();
    const [airlines, setAirlines] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);


    const getAirLinesData = useCallback(async () => {
        let data = await axios.get("http://localhost:8080/airlines");
        setAirlines(data.data);
      }, []);
      
      useEffect(() => {
        getAirLinesData();
      }, [getAirLinesData]);
      

    const filteredAirlines = airlines.filter((airline) =>
        airline.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const maxPageNumber = Math.ceil(filteredAirlines.length / pageSize);
    const safePageNumber = Math.max(1, Math.min(pageNumber, maxPageNumber));

    const startIndex = (safePageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const itemsToDisplay = filteredAirlines.slice(startIndex, endIndex);

    const handlePageSizeChange = (event) => {
        const newPageSize = event.target.value;
        setPageSize(newPageSize);
      };

    const routeToNextPage = (airline) => {
        navigate({
            pathname:'/details',
            search: createSearchParams({
                logoUrl: airline.logoURL
            }).toString()
        }, {state: airline });
    }
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Airline filter..."
                    value={searchTerm}
                    className="search"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
            <div class="airline-list">
                <ul style={{ listStyleType: "none", padding: "0" }}  onChange={handlePageSizeChange}>
                    {itemsToDisplay.map((airline) => (
                        <li
                            key={airline.code}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                borderBottom: "1px solid #cacaca",
                                cursor: "pointer"
                            }}
                            className="detailView"
                            onClick={() => routeToNextPage(airline)}
                        >
                            <img
                                src={airline.logoURL}
                                alt={airline.name}
                                style={{ marginRight: "10px", width: "50px", height: "50px" }}
                            />
                            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                {airline.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='page-button' onClick={() => setPageNumber(safePageNumber - 1)}>Previous</button>
            <button className='page-button' onClick={() => setPageNumber(safePageNumber + 1)}>Next</button>
            </div>
            <div className='page-items'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Page {safePageNumber} of {maxPageNumber}</p>
            </div>
            <div className="centered-text">
                Airlines {filteredAirlines.length}
            </div>
            </div>
        </div>
    )
}

export default MainPage

