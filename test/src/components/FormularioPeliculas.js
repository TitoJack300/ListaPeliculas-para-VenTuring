import React, {Component} from 'react';

 class FormularioPeliculas extends Component{

     state ={
         titulo: '',
         descripcion: '',
         año: ''
     }


     onSubmit = e => {
         this.props.addPelicula(this.state.titulo, this.state.descripcion,this.state.año);
         e.preventDefault();
     }

     onChange = e => {

    this.setState({
         [e.target.name] : e.target.value
    })
     }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       name="titulo"
                       placeholder="Nueva Pelicula"
                       onChange={this.onChange}
                       value={this.state.titulo}/>
                <br/>
                <br/>
                <textarea placeholder="Descripción de la película"
                          name="descripcion"
                          onChange={this.onChange}
                          value={this.state.descripcion}/>
                <br/>
                <br/>
                <input type="text"
                       name="año"
                       placeholder="año de la pelicula"
                       onChange={this.onChange}
                       value={this.state.año}/>
                <input type="submit"/>
                <br/>
                <br/>

            </form>
        )
    }
 }

export default FormularioPeliculas;