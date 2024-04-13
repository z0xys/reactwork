// import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';


const RootLayout = () => {
  // const [isExpanded, setExpanded] = useState(true);

  // const toggleSidebar = () => {
  //   setExpanded((prevState) => !prevState);
  // };

  return (
    <div className='flex flex-row'>
      <Sidebar>
        <NavLink to="/app/dashboard"><SidebarItem text={"Home"} /></NavLink>
        <Link to="/app/project/view"><SidebarItem text={"Projects"} /></Link>
      </Sidebar>

      <div className='flex-grow h-screen'>
      <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;