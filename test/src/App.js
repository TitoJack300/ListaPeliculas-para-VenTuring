import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


//import tasks from './components/tasks.json';
//import Tasks from './components/Tasks';

import peliculas from './components/peliculas.json';
import Tareas from  './components/Tareas';

import FormularioPeliculas from './components/FormularioPeliculas';
import FormularioBuscarPelicula from "./components/FormularioBuscarPelicula";
import FormularioBuscarPeliculaTiempo from "./components/FormularioBuscarPeliculaTiempo";

//import tasks from './components/leerCSV.js';
//console.log(tasks);

//import counter from './components/counter';
//import MiComponente from './components/MiComponente';

//import { csv } from 'd3';

//import tasks from 'peliculas.csv';

/*function helloworld(props){
    return(
        <div id="hello">{props.mytext}

        </div>
    )
}*/


class App extends Component{

    state = {
        //tasks: tasks
        peliculas: peliculas
    }

    addPelicula = (titulo,descripcion,año) => {

        const nuevaPelicula ={
            titulo: titulo,
            descripcion: descripcion,
            año: año,
            id:this.state.peliculas.length
        }
        this.setState({
            peliculas: [...this.state.peliculas, nuevaPelicula]
            }
        )
    }

    eliminarPelicula = (id) =>{
        const nuevasPeliculas = this.state.peliculas.filter(pelicula => pelicula.id !== id);
        this.setState({peliculas: nuevasPeliculas})

    }

    //buscarPelicula=(tituloBuscar) => {
    //    const nuevasPeliculas = this.state.peliculas.filter(pelicula => pelicula.titulo == tituloBuscar);
    //}

    buscarPelicula = (tituloBuscar,añoBuscado) => {
        if((tituloBuscar=="") || (añoBuscado=="")){
            const peliculasBuscadas = this.state.peliculas.filter( pelicula => pelicula.titulo === tituloBuscar || pelicula.año === añoBuscado);
            this.setState({peliculas: peliculasBuscadas})
        } else  {
            const peliculasBuscadas = this.state.peliculas.filter( pelicula => pelicula.titulo === tituloBuscar && pelicula.año === añoBuscado);
            this.setState({peliculas: peliculasBuscadas})
        }

        //this.setState({peliculas: peliculasBuscadas})

    }

    buscarPeliculaTiempo = (tituloBuscar,añoBuscado) => {

        const peliculasBuscadasTiempo = this.state.peliculas.filter(pelicula => pelicula.año === añoBuscado);
        this.setState({peliculas: peliculasBuscadasTiempo})
    }

render() {

  return <div>

      <FormularioPeliculas addPelicula={this.addPelicula}/>
      <FormularioBuscarPelicula buscarPelicula={this.buscarPelicula}/>
      <FormularioBuscarPeliculaTiempo buscarPeliculaTiempo={this.buscarPeliculaTiempo}/>
      <Tareas peliculas={this.state.peliculas} eliminarPelicula={this.eliminarPelicula}/>
     </div>
    }
}
export default App;
