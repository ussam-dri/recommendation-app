import React from 'react'
 

const Header = () => {
    return (
        <div>
            <nav style={{ border: '3px double #D7A14E', backgroundcolor: '#D7A14E' ,color:'white' }}>
                <a href="" style={{marginright: '25px'}}>Home</a> 
                <a href="" style={{marginright: '25px'}}>Cafe</a> 
                <a href="" style={{marginright: '25px'}}>Librairy</a>
                <a href="" style={{marginright: '25px'}}>Hotel</a>
                <a href="" style={{marginright: '25px'}}>Gym</a>
                <a href="" style={{marginright: '25px'}}>My profile</a>
                <a href="" style={{marginright: '25px'}}>Contact</a>
            </nav>
            <h2 style={{paddingleft: '50px', margin:'100px' , backgroundcolor: '#646824', color: 'white', border: '3px double #D7A14E', width: '80%', maxwidth: '400px'}}>LOCAL.DISCOVERY.APP</h2>
        </div>
    )
}

export default Header