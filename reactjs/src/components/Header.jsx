import React,{useState} from 'react'
 
const Header = () => {
    const [Hed, setHed] = useState(false);
    const [logo, setLogo] = useState(false)
    const leHeader = () => {
        setHed(!Hed);
        setLogo(!logo);
    };
    return (
        <div >
            <a href="" style={{marginright: '25px'}}>Home</a> 
            <a href="" style={{marginright: '25px'}}>Cafe</a>
            <a href="" style={{marginright: '25px'}}>Home</a> 
            <a href="" style={{marginright: '25px'}}>Librairy</a> 
            <a href="" style={{marginright: '25px'}}>Hotel</a> 
            <a href="" style={{marginright: '25px'}}>Gym</a> 
            <a href="" style={{marginright: '25px'}}>My profile</a> 
            <a href="" style={{marginright: '25px'}}>Contact us</a> 
            <h1 onClick={leHeader} className={logo ? 'hidden' : 'block'}>LDApp.</h1>
            <h2 style={{paddingleft: '50px', margin:'100px' , backgroundcolor: '#646824', color: 'white', border: '3px double #D7A14E', width: '80%', maxwidth: '400px'}}>LOCAL.DISCOVERY.APP</h2>
        </div>
    )
}

export default Header