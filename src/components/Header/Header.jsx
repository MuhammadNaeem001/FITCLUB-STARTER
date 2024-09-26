import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

export default function Header() {
const mobile =window. innerWidth<=768 ?true :false;
const [menuopened,setmenuopened]=useState(false)

  return (
    <div className='header' id='header'> 
        <img src={Logo} alt="" className='logo'/>
        {menuopened=== false && mobile== true?(
          <div style={{
            backgroundcolor:'var(--appColor)',
            padding:'0.5rem',
            borderRadius:'5px',
          }}
            onClick={()=>setmenuopened(true)}>
            <img src={Bars}alt='' style={{height:'1.5rem',width:'1.5rem'}}/>
          </div>
        ):(
        <ul className='Header-menu'>
        <li onClick={()=>setmenuopened(false)}>
        <Link onClick={()=>setmenuopened(false)}
          to='header'
          activeClass='active'
          spy={true}
          smooth={true}  
        >Home</Link>

        </li>
         <li onClick={()=>setmenuopened(false)}><Link
          onClick={()=>setmenuopened(false)}
          to="Programs"
          spy={true}
          smooth={true} 
        
         
         
         
         >Programs</Link></li>



          <li onClick={()=>setmenuopened(false)}><Link 
            onClick={()=>setmenuopened(false)}
            to="reasons"
            spy={true}
            smooth={true} 
          
          
          >Why us</Link></li>


          <li onClick={()=>setmenuopened(false)}><Link
          onClick={()=>setmenuopened(false)}
          to="plans"
          spy={true}
          smooth={true} 
        >Plans</Link></li>




          <li onClick={()=>setmenuopened(false)}><Link
          onClick={()=>setmenuopened(false)}
          to="testimonials"
          spy={true}
          smooth={true}  
          >Testimonials</Link>
        </li>
    </ul>
)}
        
</div>
  )
}
