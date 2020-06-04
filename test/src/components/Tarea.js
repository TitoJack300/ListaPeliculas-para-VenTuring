import React, {Component} from  'react';
import Tareas from "./Tareas";

class Tarea extends Component{
    render() {
        return <div>
            <p>
            {this.props.pelicula.titulo}-
            {this.props.pelicula.descripcion}-
            {this.props.pelicula.año}-

                <button onClick={this.props.eliminarPelicula.bind(this, this.props.pelicula.id)}>
                    Eliminar una Pelicula
                </button>
            </p>
        </div>
    }
}

export default Tarea;