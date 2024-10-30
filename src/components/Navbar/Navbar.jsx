import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/not-found', name: 'Not Found' },
      ];
      
   
      
    return (
        <nav className="p-6 bg-pink-200">
           <div  className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ?<RxCross2></RxCross2> 
                 : <IoMenu></IoMenu>
            }
           
           
           </div>
            <ul className={`md:flex absolute md:static duration-1000 px-6 bg-pink-200 rounded-lg ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}> 
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;