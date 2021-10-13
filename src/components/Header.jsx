import React from 'react';

function Header({time}) {

    return (
    <header> 
      <div className="header-title"> 
       <h1 className="title">TODO List</h1> 
      </div> 
      <div className="header-date"> 
       <p className="title-date">{time}</p> 
      </div> 
     </header> 
    )
}

export default Header;
