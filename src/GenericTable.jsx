import { useCallback } from 'react';
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



const GenericTable = ({ data, cols }) => {
    
    //  const onFirstDataRendered = useCallback((params) => {
        // const onGridReady = useCallback((params) => {
        //     const gridApi = params.api;
        //     const rowCounts = gridApi.getDisplayedRowCount();
        //       console.log(rowCounts);
        //       if (rowCounts < 20) {
        //         gridApi.updateGridOptions({ domLayout: "autoHeight" })
        //       }
        //       else {
        //         gridApi.updateGridOptions({ domLayout: "normal" })
        //         document.getElementById('myGrid').style.height = "100%";
        //       }
        
        // }, []);
    return (
        <div
            id="myGrid"
            className="ag-theme-quartz"
            style={{ height: "100%", width: "100%" }}

        >
            <AgGridReact
                rowData={data}
                columnDefs={cols}
                autoSizeStrategy={autoSizeStrategy}
                gridOptions={gridOptions}
                // getRowHeight={getRowHeight}
                // onGridReady={onGridReady}
                // onFirstDataRendered={onFirstDataRendered}
                // onGridSizeChanged={onGridSizeChanged}
            />
        </div>
    );
};

export default GenericTable;
