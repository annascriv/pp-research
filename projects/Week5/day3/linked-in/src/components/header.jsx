import React from "react";
import './header.css'


const Header = () => {

    return (
        <div className="header">
            <div className="header__left">
                <img src="./src/images/linkedinlogo.png" id="logo"></img>
                <div className="header__search">
                    <button>
                    <img src="./src/images/searchicon.png" className="button" alt="search"></img>
                    </button>
                   
                    {/* <input id="searchbar "placeholder="Search" type="text"></input> */}
                    <button>
                    <img src="./src/images/homeicon.png" className='button'></img>
                    </button>
                    <button>
                        <img src="./src/images/notifications.png" className="button"></img>
                    </button>
                </div>
            </div>
            <div className="header__right"></div>
        </div>

    )
}

export default Header;