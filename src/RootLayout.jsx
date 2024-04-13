import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';


const RootLayout = () => {
  const [isExpanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className='flex flex-row'>
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar}>
        <NavLink to="/app/dashboard">
          {({ isActive }) => (
            <SidebarItem text="Home" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/project/view">
          {({ isActive }) => (
            <SidebarItem text="Projects" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/project/create">
          {({ isActive }) => (
            <SidebarItem text="Create Projects" isActive={isActive} />
          )}
        </NavLink>
      </Sidebar>


      <div className='flex-grow h-screen'>
        {!isExpanded && <button onClick={toggleSidebar}>Openbtn</button>}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;