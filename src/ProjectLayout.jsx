// InventoryLayout.jsx
import { Outlet } from 'react-router-dom';
import GenericTable from './GenericTable.jsx'

const ProjectView = () => {
 
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProjectView;