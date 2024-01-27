import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import close from "../assets/close.png";
import drawer from "../assets/drawer.png";
import ticket from "../assets/ticket.png";
import "./header.css";
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [panelVisible, setPanelVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminDropdownVisible, setAdminDropdownVisible] = useState(false);
    const [ownerDropdownVisible, setOwnerDropdownVisible] = useState(false);
    const panelRef = useRef(null);
    const navigate = useNavigate();

    const togglePanel = () => {
        setPanelVisible(!panelVisible);
    };

    const closePanel = () => {
        setPanelVisible(false);
    };

    const goToMainPage = () => {
        toast.success('Welcome!')
        navigate('/');
    };

    const goToOwnerPage = () => {
        setOwnerDropdownVisible(!ownerDropdownVisible);
    }

    const goToOwnerInitialLogin = () => {
        if (!isLoggedIn) {
            navigate('/OwnerInitialLogin');
            closePanel();
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                closePanel();
            }
        };

        if (panelVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [panelVisible]);




    return (
        <div className="App">
            <div className='header'>
                <div className='image'>
                    <img onClick={togglePanel} src={drawer} alt="drawer" />
                </div>
                <div className='name'>
                    <h1 onClick={goToMainPage} >Coin</h1>
                    <Toaster position="top-right"  reverseOrder={false}/>
                </div>
            </div>

            {panelVisible && (
                <div ref={panelRef} className="panel">
                    <div className="panelTool">
                        <div className='ticket'><img src={ticket} alt='Ticket' height="70" width="70" /></div>
                        <div className="close"><img onClick={closePanel} src={close} alt="close" height="30" width="30" /></div>
                    </div>
                    <div className='pannelContent'>
                        <h2 onClick={goToMainPage}>HOME</h2>

                        {adminDropdownVisible && (
                            <div className="adminDropdown">
                                {/* <p onClick={goToAdminLogin}>Admin-Login</p>
                                <p onClick={goToImageAddPage}>Theatre-Image</p>
                                <p onClick={goToOwnerCreation}>Owner-Creation</p> */}
                            </div>
                        )}
                        <h5 onClick={goToOwnerPage}>Owner</h5>
                        {ownerDropdownVisible && (
                            <div className="ownerDropdown">
                                <p onClick={goToOwnerInitialLogin}>owner-Initial-Login</p>
                                {/* <p onClick={goToOwnerLogin}>owner-Login</p>
                                <p onClick={goToTheatreCreation}>Theatre-Creation</p> */}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
