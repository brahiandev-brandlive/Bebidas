import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// Create Context

export const CategoriasContext = createContext()

// Provider es donde se encunetran las funciones y state

const CategoriasProvider =  ( props ) => {
    // Crear State
    const [ categorias, guardarCategorias ] = useState([])

    // Ejecutar llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios(url)

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias()
    }, []);

    return  (
        <CategoriasContext.Provider
            value={
                {
                    categorias
                }
            }
        >
            { props.children }
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider