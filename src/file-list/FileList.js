import React from "react";
import './FileList.css';
import '../global.css';

let id = 0;

function createData(option, type) {
  id += 1;
  return { id, option, type };
}

function createDownloadBtn(){
    return (
        <button>
          Descargar
        </button>
      );
}

let columns = [
    'Nombre',
    'Peso',
    'Acción'
  ];

let rows = [
  createData('archivo1', '12 mb'),
  createData('archivo2', '22 mb'),
];

function FileList() {
  return (
    <div className="Component">
     <span className="Title">Lista de archivos</span>
        <div className="Content">
        <table>    
        <tr>
            {columns.map(column => (
                <th>{column}</th>
            ))}
        </tr>    
        {rows.map(row => (
            <tr key={row.id}>
                <td>{row.option}</td>
                <td>{row.type}</td>
                <td>{createDownloadBtn()}</td>
            </tr>
         ))}
       </table>
       </div>
    </div>
  );
}


export default FileList;
