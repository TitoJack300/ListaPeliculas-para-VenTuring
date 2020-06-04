import React, {Component} from 'react';

class FormularioBuscarPelicula extends Component{

    state ={
        tituloBuscado: '',
        //descripcion: '',
        añoBuscado: ''
    }


    onSubmit = e => {
        this.props.buscarPelicula(this.state.tituloBuscado,this.state.añoBuscado);
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

                <br/>
                <br/>
                <input type="text"
                       name="tituloBuscado"
                       placeholder="Buscar Nombre de la pelicula"
                       onChange={this.onChange}
                       value={this.state.tituloBuscado}
                />


                <input type="text"
                       name="añoBuscado"
                       placeholder="Buscar Nombre de la pelicula"
                       onChange={this.onChange}
                       value={this.state.añoBuscado}
                />

                <button>
                       "Buscar"
                </button>

            </form>
        )
    }
}

export default FormularioBuscarPelicula;