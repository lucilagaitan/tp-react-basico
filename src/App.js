import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'reactstrap';
import './style.css';

var pasajeros = [];

class App extends React.Component {
  render() {
    return (
      <>
        <div className="form formulario">
          <div className="conteiner">
            <div className="row g-3 ">
              <div className="col-4">
                <img
                  src="https://play-lh.googleusercontent.com/1eLdzJKlvN1E7oVY9PLnvH7C9YqZqTnmeqzhoI13Xo3pj-HF8DB9yxp9rUoXICkknVQ"
                  width="100"
                  height="100"
                  align="right"
                />
              </div>
              <div className="col-8 align-text-center">
                <h1>Aeronileas Argentinas</h1>
                <p>OnBoarding de Pasajeros</p>
              </div>
            </div>
          </div>
          <div className="row g-3 justify-content-center text-center">
            <div className="col-5">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputApellidoNombre"
                name="nombre"
                onChange={this.handleChange}
                value={this.state.dato.nombre}
                placeholder="Ingrese su Nombre "
              />
            </div>

            <div className="col-5">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="inputApellidoNombre"
                name="apellido"
                onChange={this.handleChange}
                value={this.state.dato.apellido}
                placeholder="Ingrese su Apellido"
              />
            </div>

            <div className="col-10">
              <label className="form-label">DNI</label>
              <input
                type="text"
                className="form-control"
                id="inputDNI"
                name="dni"
                onChange={this.handleChange}
                value={this.state.dato.dni}
                placeholder="Ingrese su Numero de Documento"
              />
            </div>

            <div className="col-md-10">
              <label className="form-label">Clase</label>
              <select
                id="inputClase"
                className="form-select form-control"
                name="clase"
                onChange={this.handleChange}
                value={this.state.dato.clase}
              >
                <option value="0">Seleccionela Clase de su Vuelo</option>
                <option value="First">First Class</option>
                <option value="Business">Business</option>
                <option value="Turist">Turist</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
            <div className="col-md-10">
              <label className="form-label">Butaca</label>
              <input
                type="text"
                className="form-control"
                id="inputButaca"
                name="butaca"
                onChange={this.handleChange}
                value={this.state.dato.butaca}
                placeholder="Ingrese el Num. de Butaca"
              />
            </div>
            <div className="d-grid gap-2 col-md-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => this.agregarNuevoCheckIn()}
              >
                Registrar Check-In
              </button>
            </div>
          </div>
          <div className="row g-3 justify-content-center text-center">
            <div className="col-md-9">
              <Table>
                <thead>
                  <tr>
                    <th>NOMBRE Y APELLIDO</th>
                    <th>DNI</th>
                    <th>CLASE</th>
                    <th>BUTACA</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pasajeros.map((datos) => (
                    <tr>
                      <td>{datos.nombre + '  ' + datos.apellido}</td>
                      <td>{datos.dni}</td>
                      <td>{datos.clase}</td>
                      <td>{datos.butaca}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }

  state = {
    pasajeros: pasajeros,
    dato: {
      nombre: '',
      apellido: '',
      dni: '',
      clase: '',
      butaca: '',
    },
  };

  handleChange = (event) => {
    this.setState({
      dato: {
        ...this.state.dato,
        [event.target.name]: event.target.value,
      },
    });
  };

  agregarNuevoCheckIn = () => {
    let ListadoCheckIn = this.state.pasajeros;
    let nuevoCheckIn = { ...this.state.dato };

    ListadoCheckIn.push(nuevoCheckIn);
    this.setState({
      pasajeros: ListadoCheckIn,
    });
  };
}

export default App;
