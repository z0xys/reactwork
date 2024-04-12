// InventoryLayout.jsx
import { Outlet } from 'react-router-dom';
import GenericTable from './GenericTable.jsx'

const InventoryLayout = () => {
  const columns = [
    {
      Header: 'Name',
      accessorKey: 'name', // Replace with your data key
    },
    {
      Header: 'Age',
      accessorKey: 'age', // Replace with your data key
    },
    // Add more columns as needed...
  ];

  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
  ]

  return (
    <div>
      <div>
        <GenericTable columns={columns} data={data}/>
      </div>
      <Outlet />
    </div>
  );
};

export default InventoryLayout;