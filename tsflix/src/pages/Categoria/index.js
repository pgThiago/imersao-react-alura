import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

const CadastroCategoria = () => {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [ categorias, setCategorias ] = useState([]);
    const [ valores, setValores ] = useState(valoresIniciais);

    function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, valores])
        setValores(valoresIniciais);
    }

    function setValor(chave, valor){

        setValores({
            ...valores,
            [chave]: valor
        })

    }

    function handleChange(event){
        setValor(
            event.target.getAttribute('name'),
            event.target.value
        )
    }

    return (
 
        <PageDefault>
            <h1>Cadastro Categoria: {valores.nome}</h1>

            <form onSubmit={handleSubmit}>
                
                <FormField 
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                    
                />

                 <FormField 
                    label="Descrição"
                    type="areaDoTexto"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handleChange}
                    
                /> 

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={handleChange}
                />
                {/* <div>
                    <label> 
                        Nome da categoria
                        <input 
                        type="text"
                        value={valores.nome} 
                        name="nome"
                        onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label> 
                        Descrição
                        <textarea 
                        type="text"
                        value={valores.descricao} 
                        name="descricao"
                        onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label> 
                        Cor
                        <input 
                        type="text"
                        value={valores.cor} 
                        name="cor"
                        onChange={handleChange} />
                    </label>
                </div> */}
            
                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => (
                    <li key={indice}>{categoria.nome}</li>
                ))}                
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}
export default CadastroCategoria;