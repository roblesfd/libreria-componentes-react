/*
    TODO
    
    - TableFooter
    - Implementar table en App con metodo map
*/


const TableContainer = ({children}) => (
    <div className={`max-w-screen-lg mx-auto mt-8`}>
        {children}
    </div>

);

const Table = ({bgColor, bordered=false,children}) => (
    <table className={`bg-${bgColor} ${bordered ? 'border border-gray-300' : ''} min-w-full border border-gray-300`}>
        {children}

    </table>
);

const TableHead = ({children}) => (
    <thead>
        {children}
    </thead>
);

const TableRow = ({children}) => (
    <tr>
        {children}
    </tr>
);

const TableHeadCell = ({bordered, children}) => (
    <th className={`${bordered ? 'border border-gray-300' : ''}`}>
        {children}
    </th>
);


const TableCell = ({bordered, children}) => (
    <td className={`${bordered ? 'border border-gray-300' : ''} py-2 px-4 border-b`}>
        {children}
    </td>
);

const TableBody = ({children}) => (
    <tbody>
        {children}
    </tbody>
);


// const TableFooter = ({ rowsPerPage, totalRows, currentPage, onPageChange }) => {
//     const totalPages = Math.ceil(totalRows / rowsPerPage);
  
//     const handlePageChange = (newPage) => {
//       if (newPage >= 1 && newPage <= totalPages) {
//         onPageChange(newPage);
//       }
//     };
  
//     const renderPaginator = () => {
//       const isFirstPage = currentPage === 1;
//       const isLastPage = currentPage === totalPages;
  
//       return (
//         <div className="flex items-center space-x-2">
//           {!isFirstPage && (
//             <button onClick={() => handlePageChange(currentPage - 1)}>
//               Anterior
//             </button>
//           )}
//           <span>
//             {currentPage}-{Math.min(currentPage + rowsPerPage - 1, totalRows)} de {totalRows}
//           </span>
//           {!isLastPage && (
//             <button onClick={() => handlePageChange(currentPage + 1)}>
//               Siguiente
//             </button>
//           )}
//         </div>
//       );
//     };
  
//     return (
//       <tfoot>
//         <tr>
//           <td colSpan="100%">
//             <div className="flex justify-between items-center">
//               <label htmlFor="rowsPerPage">Mostrar:</label>
//               <select
//                 id="rowsPerPage"
//                 onChange={(e) => onPageChange(1, parseInt(e.target.value, 10))}
//               >
//                 <option value="10">10</option>
//                 <option value="20">20</option>
//                 <option value="50">50</option>
//                 {/* ... más opciones según sea necesario */}
//               </select>
//               {renderPaginator()}
//             </div>
//           </td>
//         </tr>
//       </tfoot>
//     );
//   };


export {TableContainer, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell};
