import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import { Flex, Text, Button } from '@radix-ui/themes';
import * as Accordion from '@radix-ui/react-accordion';


const RootLayout = () => {
  // const [isExpanded, setExpanded] = useState(true);

  // const toggleSidebar = () => {
  //   setExpanded((prevState) => !prevState);
  // };

  return (
    <div className='flex flex-row'>
      <Sidebar>
        <NavLink to="/app/dashboard"><SidebarItem text={"Home"} /></NavLink>
        <Link to="/app/inventory"><SidebarItem text={"Form1"} /></Link>
      </Sidebar>

      <Outlet />
    </div>
  );
};

export default RootLayout;