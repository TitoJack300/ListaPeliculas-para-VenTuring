import React, {Component} from 'react';

class FormularioBuscarPeliculaTiempo extends Component{

    state ={
        tituloBuscado: '',
        descripcion: '',
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

                <button>
                    "Reiniciar la lista"
                </button>

            </form>
        )
    }
}

export default FormularioBuscarPeliculaTiempo;