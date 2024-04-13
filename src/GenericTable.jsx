
import { AgGridReact } from 'ag-grid-react'; 
import '@ag-grid-community/styles/ag-grid.css'
import "@ag-grid-community/styles/ag-theme-quartz.css";


const autoSizeStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,

};

const gridOptions = {
    pagination: true,
     // Enable pagination

  };

const GenericTable = ({data, cols}) => {
    
    return (
        <div
            className="ag-theme-quartz"
            style={{ height: "100%", width: "100%" }}

        >
            <AgGridReact
                rowData={data}
                columnDefs={cols}
                autoSizeStrategy={autoSizeStrategy}
                gridOptions={gridOptions}
            />
        </div>
    );
};

export default GenericTable;
