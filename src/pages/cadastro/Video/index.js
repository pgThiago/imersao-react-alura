import React, { useState, useEffect, useRef } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import url_top from '../../../config';
const { URL_TOP } = url_top;

const CadastroVideo = () => {
    
    const [ categorias, setCategorias] = useState([]);    
    const { handleChange, valores } = useForm({});
    
    const history = useHistory();

    let categoryTitles = useRef([]);
    
    // let categoryTitles = [];
    
    categoryTitles = categorias.map(( { titulo } ) => titulo);     
    useEffect(() => {
        async function loadCategorias(){
            const URL = `${URL_TOP}/categorias`;
            const response = await (await fetch(URL, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            })).json();
            setCategorias(response);
        }
        loadCategorias();
    }, []);

    console.log('categoryTitles: ', categoryTitles)

    function create(){
        const URL = `${URL_TOP}/videos`;

        const categoId = categorias.find((categoria) => {
            return categoria.titulo === valores.categoria;
        });

        valores.categoriaId = categoId.id;

        fetch(URL, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(valores),
        });        
    }    
        
    return (
        <PageDefault>
            <h1>Cadastrar video</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                            
                create();
                history.push('/');
            }}>

                <FormField
                    label="Título do vídeo"
                    name="titulo"
                    type="input"
                    value={valores.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    type="input"
                    value={valores.url}
                    onChange={handleChange}
                />

                <FormField
                    suggestions={categoryTitles}
                    label="Categoria"
                    name="categoria"
                    type="input"
                    value={valores.categoria}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </form>
        
            <div style={{ fontSize: 20, marginTop: 50, marginBottom: 50 }}>
                {window.location.hostname.includes('localhost') ? 
                <Link style={{ marginBottom: 20 }} to="/cadastro/categoria">
                    Cadastrar categoria
                </Link>
                : 
                <Link style={{ marginBottom: 20 }} to="/">
                    Cadastrar categoria
                </Link> 
                }
            </div>
    </PageDefault>)
}

export default CadastroVideo;