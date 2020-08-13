import React, { useState, useEffect, useRef } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroVideo = () => {

    
    const [ categorias, setCategorias] = useState([]);
    
    const { handleChange, valores } = useForm({});
    
    const history = useHistory();

    let categoryTitles = useRef([]);
    
    useEffect(() => {
        
        async function loadCategorias(){
            const URL = `https://ancapflix.vercel.app/categorias`;
            const response = await (await fetch(URL)).json();
            setCategorias(response);
        }
        
        categoryTitles.current = categorias.map(( { titulo } ) => titulo);
        loadCategorias();
        
    }, [categorias]);
    
    console.log('categoryTitles: ', categoryTitles);

    function create(){
        const URL = `http://localhost:8080/videos?_embed=videos`;

        const categoId = categorias.find((categoria) => {
            return categoria.titulo === valores.categoria;
        });

        valores.categoriaId = categoId.id;

        return fetch(URL, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
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
                    value={valores.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={valores.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={valores.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;