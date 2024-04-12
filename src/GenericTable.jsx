
import { AgGridReact } from 'ag-grid-react'; 
import '@ag-grid-community/styles/ag-grid.css'
import "@ag-grid-community/styles/ag-theme-quartz.css";
import carData from './MOCK_DATA.json';


const cols = [{ field: "make" },
{ field: "model" },
{ field: "price" },
{ field: "electric" }]

const autoSizeStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,

};

const gridOptions = {
    pagination: true, // Enable pagination

  };

const GenericTable = () => {
    
    return (
        <div
            className="ag-theme-quartz"
            style={{ height: "100%", width: "100%" }}

        >
            <AgGridReact
                rowData={carData}
                columnDefs={cols}
                autoSizeStrategy={autoSizeStrategy}
                gridOptions={gridOptions}
            />
        </div>
    );
};

export default GenericTable;
