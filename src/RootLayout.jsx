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
        <NavLink to="/app/store/view">
          {({ isActive }) => (
            <SidebarItem text="Store" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/sitelocation/view">
          {({ isActive }) => (
            <SidebarItem text="Site Locations" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/division/view">
          {({ isActive }) => (
            <SidebarItem text="Divisions" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/paymentmode/view">
          {({ isActive }) => (
            <SidebarItem text="Payment Modes" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/materialcategory/view">
          {({ isActive }) => (
            <SidebarItem text="Material Category" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/boqmaster/view">
          {({ isActive }) => (
            <SidebarItem text="BOQMaster" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/supplier/view">
          {({ isActive }) => (
            <SidebarItem text="Supplier" isActive={isActive} />
          )}
        </NavLink>
        <NavLink to="/app/subcontractor/view">
          {({ isActive }) => (
            <SidebarItem text="Sub Contractor" isActive={isActive} />
          )}
        </NavLink>
      </Sidebar>

      
      <div className='flex-grow h-full'>
      {!isExpanded && <button onClick={toggleSidebar}>Openbtn</button>}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;