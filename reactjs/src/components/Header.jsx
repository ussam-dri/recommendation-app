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
            <a href="reactjs\src\components\Home.jsx" >Home</a> 
            <a href="reactjs\src\components\Cafe.jsx" >Cafe</a>
            <a href="reactjs\src\components\Librairy.jsx" >Librairy</a> 
            <a href="reactjs\src\components\Hotel.jsx" >Hotel</a> 
            <a href="reactjs\src\components\Gym.jsx" >Gym</a> 
            <a href="reactjs\src\components\Account.jsx" >My profile</a> 
            <a href="reactjs\src\components\Contact.jsx" >Contact us</a> 
            <h1 onClick={leHeader} className={logo ? 'hidden' : 'block'}>LDApp.</h1>
            <h2 style={{paddingleft: '50px', margin:'100px' , backgroundcolor: '#646824', color: 'white', border: '3px double #D7A14E', width: '80%', maxwidth: '400px'}}>LOCAL.DISCOVERY.APP</h2>
        </div>
    )
}

export default Header