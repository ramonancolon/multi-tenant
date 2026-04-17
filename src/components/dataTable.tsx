import React, { useState, useMemo } from 'react';
import  { user } from '../lib/types';
import Pagination from './ui/pagination';

interface DataTableProps {
  data: user[];
  itemsPerPage?: number;
}


const  DataTable: React.FC<DataTableProps> = ({ data, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages =  Math.ceil(data.length / itemsPerPage);


  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
            <h2>Data Table</h2>
<table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
<thead>
          <tr style={{ borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '8px' }}>ID</th>
            <th style={{ padding: '8px' }}>Name</th>
            <th style={{ padding: '8px' }}>Email</th>
            <th style={{ padding: '8px' }}>Role</th>
          </tr>
</thead>
<tbody>
 {currentData.length > 0 ? (

  currentData.map((user) => (
<tr key={user.id} style={{ borderBottom: '1px solid #ccc' }}>
  <td style={{ padding: '8px' }}>{user.id}</td>
  <td style={{ padding: '8px' }}>{user.name}</td>
  </tr>
  ))
)  : (

  <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>
                No data available.
              </td>
            </tr>

)}
</tbody>

</table>
{totalPages > 1 && (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={(page) => setCurrentPage(page)}
  />
)}
      </div>
  );
};
export default DataTable;