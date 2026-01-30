import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';


const Searchbar = () => {
    return(
 <div className="headerserch ml-3 mr-3">
                     <input type="text" placeholder="Serch for product..."></input>
                     <Button><IoMdSearch /></Button>
                     </div>
    )
}

export default Searchbar;