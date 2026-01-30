import { Link } from "react-router-dom";
import Logo from '../../assests/images/logo.png'
import Countrydrop from "./countrydropdown";
import Button from '@mui/material/Button';
import { FaUserCircle } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import Searchbar from "./searchbar";
import Navigation from "./Navigation";

const Header = () => {
    return(
<>
<div className="headerwraper">
    <div className="top-strip bg-blue">
         <div className="container ">          
          <p className="mb-0 mt-0 text-center"> Due to <b>COVID 19</b> orders may be deliverd with slightly delay</p>

         </div>

     </div>
     <header className="header">
        <div className="container">
           <div className="row">
            <div className="logowrapper d-flex align-items-center col-sm-2">
             <Link to="/"> <img src={Logo} alt="logo"/> </Link>
              </div>
                  <div className="d-flex align-items-center col-sm-10 part-2">
                    <Countrydrop/>
                    
                    
                    <Searchbar/>

                                   
                         <div className="part-3 d-flex align-items-center ml-auto">
                                       <Button className="circle">
                                                <FaUserCircle />
                                                          </Button> 

                                                             <span className="price">$3.25</span>

                                                             <Button className="cartBtn">   
                                                                                <IoBag />
                                                                                      </Button>
                                                                                        </div> 

                

               </div>
           </div>

        </div>
     </header>
     <Navigation />
  </div>
</>

    )
}

export default Header;
