import React,{useEffect, useState} from 'react';
import { searchName, searchId } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

//import css
import './searchbar.css'


export default function SearchBar() {
    


    const dispatch = useDispatch();


    const [datos , setDatos] = useState({
        name: '',
    }); 
    

    
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validarId(datos.name);
    }
    
    const validarId = async  (parametro)=>{
        const arrayCaracteres = parametro.split('');
        
        if(Number(arrayCaracteres[0])){
            dispatch(searchId(parametro));
        }else{
          dispatch(searchName(parametro.toLowerCase()));
        }
    }


    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit}  >
                <div className="form-group">
                    {/* <label htmlFor="" className="label">Buscar:</label> */}
                    <input type="text"  name="name" placeholder="INGRESE NOMBRE O ID"  onChange={handleChange} value={datos.name}  className="input-bar"/>     
                    <input type="submit" value='search' onClick={handleChange} className="boton-bar" />
                </div>
            </form>
        </div>
    )

}
