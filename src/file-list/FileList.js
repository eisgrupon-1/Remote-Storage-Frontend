import React,  { Component } from "react";
import './FileList.css';
import '../global.css';

const endpoint = "http://localhost:6789/rsfiles";
const downloadEndpoint = "http://localhost:6790/download";

class FileList extends Component {

  constructor(props) {

    super(props);

    this.state = { result: [], filter: this.props.match.params.name}
    this.filterResults = this.filterResults.bind(this);
 }


  createDownloadBtn(uuid, filename){
      return (
          <form action={downloadEndpoint + "/" + uuid + "/" + filename} method="get">
            <button type="submit">
              Descargar
            </button>
          </form>
        );
  }

  filterResults(){
    if (this.state.filter){
      return this.state.result.filter(item => item.name == this.state.filter);
    }
    return this.state.result;
  }

  componentDidMount(){
    fetch(endpoint)
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
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Peso (bytes)</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody> 
              {this.filterResults().map(row => (
                  <tr key={this.state.result.indexOf(row)}>
                      <td>{row.name}</td>
                      <td>{row.sizeAsBytes}</td>
                      <td>{this.createDownloadBtn(row.uuid, row.name)}</td>
                  </tr>
              ))}
            </tbody>  
         </table>
         </div>
      </div>
    );
  } 
}


export default FileList;
