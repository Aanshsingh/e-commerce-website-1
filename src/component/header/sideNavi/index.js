import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';


const SideNavi = () => {

return(
 
          <Button className="allcattab d-flex align-items-center">
            <span className='icon1 mr-2'><BsList /> </span>
            <span className="text">All categories</span>
            <span className='icon2 ml-2'><FaAngleDown /></span>
          </Button>

        

)

}

export default SideNavi();