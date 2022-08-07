import React, { useMemo} from 'react'
import { rowData, columnDefs, frameworkComponents } from './ProductCol'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export default function ProductsList(){
    const defaultColDef = useMemo(() => ({
        sortable: true,
        wrapText: true,
        unSortIcon: true,
      }),[])
    
    return <>
     <div className='ag-theme-alpine' style={{height: 200, width: 1000}}>
         <AgGridReact
             rowData={rowData}
             columnDefs={columnDefs}
             defaultColDef={defaultColDef}
             frameworkComponents={frameworkComponents}
         />
     </div>
    </>
}