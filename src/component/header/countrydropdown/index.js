import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaArrowDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Countrydrop = () => {


const [isOpenmModel, setOpenModel] = useState(false);

    return(
    <>
    <Button className="countrydrop" onClick={()=>{setOpenModel(true)}}>
                      <div className="info d-flex flex-column">
                         <span className='label'>  Your Location</span>
                         <span className='name'>India</span>
                          </div>
                          <span className='ml-auto'><FaArrowDown /></span>
                    </Button>

                        <Dialog open={isOpenmModel} className='locationmodel' onClose={()=>{setOpenModel(false)}}    TransitionComponent={Transition}   keepMounted={false}
  TransitionProps={{ unmountOnExit: true }}>
                        <h4 className='heading'>Choose your Delivery Location</h4>
                        <p>Enter your address and we will specify the offer for your area.</p>
                        <button className='close_ ' aria-label="Close dialo"  onClick={()=>{setOpenModel(false)}} ><IoClose /></button>
                        <div className="headerserch w-100 ml-2 mr-1">
                        <input type="text" placeholder="Serch your area..."></input>
                        <Button ><IoMdSearch /></Button>
                        </div>

                        <ul className='citylist mt-3'>
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>  
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>   
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>    
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>  
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>   
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>    
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>  
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>   
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>               
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>  
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>   
                          <li> <Button>Delhi-NCR</Button></li>
                          <li> <Button>Faridabad</Button></li>
                          <li> <Button>Gurugram</Button></li>
                          <li> <Button>Rohtak</Button></li>    
                        </ul>
                        </Dialog>

    </>
      )
}

export default Countrydrop;





