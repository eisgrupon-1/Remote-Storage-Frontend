import React,  { Component } from "react";
import './FileList.css';
import '../global.css';



class FileList extends Component {
  state = { result: [] };

  createDownloadBtn(){
      return (
          <button>
            Descargar
          </button>
        );
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    fetch("http://localhost:6789/rsfiles")
    .then(response => response.json())
    .then(result => this.setState({result}))
    .catch(e => console.log(e));
  }

  render(){
    return (
      <div className="Component">
       <span className="Title">Lista de archivos</span>
          <div className="Content">
          <table>    
          <tr>
          <th>Nombre</th>
          <th>Peso</th>
          <th>Accion</th>
          </tr>    
          {this.state.result.map(row => (
              <tr key={this.state.result.indexOf(row)}>
                  <td>{row.name}</td>
                  <td>{row.sizeAsBytes}</td>
                  <td>{this.createDownloadBtn()}</td>
              </tr>
           ))}
         </table>
         </div>
      </div>
    );
  } 
}


export default FileList;
