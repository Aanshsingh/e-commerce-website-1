import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

const [openCat, setOpenCat] = useState(false);


    return(

     <nav>
    <div className="container">
        <div className="row">
        <div className="navpart1 col-sm-2 ">
          <div className='catwrapper'>

            <Button className="allcattab d-flex align-items-center" onClick={() => setOpenCat(prev => !prev)} >
            <span className='icon1 mr-2'><BsList /> </span>
            <span className="text">All categories</span>
            <span className='icon2 ml-2'><FaAngleDown /></span>
          </Button>
          <div className={`sideBarNav ${openCat ? "open" : ""}`}>
               <ul>
                <li><Link to={'/'}><Button>Fruit& Vegetable 
                                                <FaAngleRight  className='ml-auto'/>
                                                               </Button></Link>
                         <div className='submenu shadow'>
                         <Link to="/"><Button>Cuts & Sprouts</Button></Link>
                         <Link to="/"><Button>Fresh Fruits</Button></Link>
                         <Link to="/"><Button>Fresh Vegetables</Button></Link>
                         <Link to="/"><Button>Herbs & Seasoning</Button></Link>
                   

                </div>
                
                
                </li>
                <li><Link to={'/'}><Button>Meat& SeaFood</Button></Link></li>
                <li><Link to={'/'}><Button>Breakfast& Diary</Button></Link></li>
                <li><Link to={'/'}><Button>Bevergers <FaAngleRight  className='ml-auto'/>
                                                                       </Button></Link>
                
                         <div className='submenu shadow'>
                         <Link to="/"><Button>T-shirt</Button></Link>
                         <Link to="/"><Button>Shirt</Button></Link>
                         <Link to="/"><Button>Pant</Button></Link>
                         <Link to="/"><Button>Saree</Button></Link>
                         <Link to="/"><Button>Shoes</Button></Link>
                         <Link to="/"><Button>Socks</Button></Link>
                         <Link to="/"><Button>Makeup</Button></Link>

                </div>

                </li>
                <li><Link to={'/'}><Button>Breads& Backery</Button></Link></li>
                <li><Link to={'/'}><Button>Frozen Foods</Button></Link></li>
                <li><Link to={'/'}><Button>Biscuits and Snacks</Button></Link></li>
                             
                               <div className='line'></div>

                <li ><Link to={'/'}><Button className='sidebarnavl'>Values of the Day</Button></Link ></li>
                <li><Link to={'/'}><Button className='sidebarnavl'>New Arivals</Button></Link></li>
                <li><Link to={'/'}><Button className='sidebarnavl'>Top Selling</Button></Link></li>

               </ul>
             </div>
          </div>
        </div>
        <div className='navpart2 col-sm-10 d-flex align-=items-center'>
            <ul className='list list-inline '>
               <li className='list-inline-item list'> <Link to={'/'}><Button>Home</Button></Link>
               <div className='submenu'>
                  <Link></Link>  

               </div>

               </li>
                <li className='list-inline-item list'> <Link to={'/'}><Button>Fashion</Button></Link>
                <div className='SubMenu shadow'>
                         <Link to="/"><Button>T-shirt</Button></Link>
                         <Link to="/"><Button>Shirt</Button></Link>
                         <Link to="/"><Button>Pant</Button></Link>
                         <Link to="/"><Button>Saree</Button></Link>
                         <Link to="/"><Button>Shoes</Button></Link>
                         <Link to="/"><Button>Socks</Button></Link>
                         <Link to="/"><Button>Makeup</Button></Link>

                </div>
                
                </li>
                <li className='list-inline-item list'> <Link to={'/'}><Button>Backery</Button></Link>
                
                     <div className='SubMenu shadow'>
                         <Link to="/"><Button>T-shirt</Button></Link>
                         <Link to="/"><Button>Shirt</Button></Link>
                         <Link to="/"><Button>Pant</Button></Link>
                         <Link to="/"><Button>Saree</Button></Link>
                         <Link to="/"><Button>Shoes</Button></Link>
                         <Link to="/"><Button>Socks</Button></Link>
                         <Link to="/"><Button>Makeup</Button></Link>

                </div>


                </li>
                <li className='list-inline-item list'> <Link to={'/'}><Button>Electronics</Button></Link>
                     <div className='SubMenu shadow'>
                         <Link to="/"><Button>T-shirt</Button></Link>
                         <Link to="/"><Button>Shirt</Button></Link>
                         <Link to="/"><Button>Pant</Button></Link>
                         <Link to="/"><Button>Saree</Button></Link>
                         <Link to="/"><Button>Shoes</Button></Link>
                         <Link to="/"><Button>Socks</Button></Link>
                         <Link to="/"><Button>Makeup</Button></Link>

                </div>

                </li>
                <li className='list-inline-item list'> <Link to={'/'}><Button>Blog</Button></Link></li>
                <li className='list-inline-item list'> <Link to={'/'}><Button>Contact-us</Button></Link></li>
            </ul>
        </div>
        </div>
    </div>
        </nav>     
    )
}

export default Navigation;