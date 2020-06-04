import React, {Component} from 'react';

import  Tarea from './Tarea';

class Tareas extends Component{
    render() {
        return this.props.peliculas.map(pelicula =>
            <Tarea
                pelicula={pelicula} key={pelicula.id}
                eliminarPelicula={this.props.eliminarPelicula}
            />)
    }
}

export default Tareas;