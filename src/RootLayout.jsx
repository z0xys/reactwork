import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import { useLocation } from 'react-router-dom';


const RootLayout = () => {
  const [isExpanded, setExpanded] = useState(true);

  let location = useLocation();
  let createForm = location.pathname.replace('/view','/create');

  console.log("create form in root", createForm);

  const toggleSidebar = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className='flex flex-row'>
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} createForm={createForm} >
        <NavLink to="/app/dashboard">
          {({ isActive }) => (
            <SidebarItem text="Home" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/project/view">
          {({ isActive }) => (
            <SidebarItem text="Projects" isActive={isActive} createForm={createForm}/>
          )}
        </NavLink>
        <NavLink to="/app/store/view">
          {({ isActive }) => (
            <SidebarItem text="Store" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/sitelocation/view">
          {({ isActive }) => (
            <SidebarItem text="Site Locations" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/division/view">
          {({ isActive }) => (
            <SidebarItem text="Divisions" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/paymentmode/view">
          {({ isActive }) => (
            <SidebarItem text="Payment Modes" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/materialcategory/view">
          {({ isActive }) => (
            <SidebarItem text="Material Category" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/boqmaster/view">
          {({ isActive }) => (
            <SidebarItem text="BOQMaster" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/supplier/view">
          {({ isActive }) => (
            <SidebarItem text="Supplier" isActive={isActive} createForm={createForm} />
          )}
        </NavLink>
        <NavLink to="/app/subcontractor/view">
          {({ isActive }) => (
            <SidebarItem text="Sub Contractor" isActive={isActive} createForm={createForm} />
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