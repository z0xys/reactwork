// InventoryLayout.jsx
import { Outlet } from 'react-router-dom';
import GenericTable from './GenericTable.jsx'

const InventoryLayout = () => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name', // Replace with your data key
    },
    {
      Header: 'Age',
      accessor: 'age', // Replace with your data key
    },
    // Add more columns as needed...
  ];

  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
  ]

  return (
    <div>
      <h1>Invertory layout page</h1>
      <div>
        <GenericTable columns={columns} data={data}/>
      </div>
      <Outlet />
    </div>
  );
};

export default InventoryLayout;