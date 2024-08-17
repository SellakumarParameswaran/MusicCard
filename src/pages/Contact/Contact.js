import React from 'react'
import { Element } from 'react-scroll';

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css';


const Contact = () => {
  return (
    <Element  className='Contact' id='contact'>
<h1>Contact</h1>
        <div className='contact__container'>
            
           
 <div className="contact__icon">
<a href='google.com'>
  
< InstagramIcon/>
<p>ig_praveen_sk</p>
</a>
<a href='google.com'>

< EmailIcon/>
<p>
  psellakumar2017@gmail.com
            </p>
  
</a>


</div> 
        </div>

    </Element>
  )
}

export default Contact
