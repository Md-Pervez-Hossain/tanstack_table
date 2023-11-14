
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react';


const BasicTable = ({ tabelData, columns }) => {
  const data = useMemo(() => tabelData, [tabelData])
  const [filtering, setfiltering] = useState("")

  const table = useReactTable({
    data, columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering
    },
    onGlobalFilterChange: setfiltering
  })
  return (
    <div >
      <input type="text" value={filtering} onChange={(e) => setfiltering(e.target.value)} />
      <table className='w-full shadow-xl rounded-md' >
        <thead>
          {
            table?.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='bg-[#E5E7EB]'>
                {
                  headerGroup.headers.map(header => (
                    <th key={header.id} className='p-5 text-start'>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {
                  row.getVisibleCells().map(cell => (
                    <td key={cell.id} className='p-5 text-start' >
                      {
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='flex items-center gap-5 justify-end mt-8'>
        <button className='bg-gray-200 px-4 py-3 font-[500] rounded-lg shadow-lg' onClick={() => table.setPageIndex(0)}>First Page</button>
        <button className='bg-gray-200 px-4 py-3 font-[500] rounded-lg shadow-lg' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
        <button className='bg-gray-200 px-4 py-3 font-[500] rounded-lg shadow-lg' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
        <button className='bg-gray-200 px-4 py-3 font-[500] rounded-lg shadow-lg' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button>
      </div>
    </div>
  );
};

export default BasicTable;