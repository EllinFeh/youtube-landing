import React from 'react';
import './Styled.css';

const Navbar = () => {
  return (
    <div className="content-main">
      <div className="menu">
        <div className='hotbar'>
          <svg className="cursor" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="logo-yt">
          <img className="cursor" style={{ width: "90px", height: "20px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="" />
        </div>
      </div>
      
      <div className="search-bar">
        <div> 
        <input type="text" placeholder='Pesquisar' />
        </div>
        <div className='icon-search'>
          <button>
        <svg className="cursor" style={{alignItems:"center"}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 23 23" fill="none">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21L16.65 16.65" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
          </button>
        </div>
      </div>

      <div className="personal-items">

        <div>
          <svg className="cursor" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 23 23" fill="none">
            <path d="M23 7L16 12L23 17V7Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <svg className="cursor" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 23 23" fill="none">
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <img className="cursor" style={{ width: "40px", height: "40px", borderRadius: "50%" }} src="https://pbs.twimg.com/media/F1kmfgTakAA6tSL?format=jpg&name=4096x4096" alt="avatar" />
        </div>

      </div>

    </div>
  );
}

export default Navbar;
