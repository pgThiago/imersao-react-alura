import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

import url_top from '../../config';

const { URL_TOP } = url_top;

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {    
    async function loadData(){
      const URL = `${URL_TOP}/categorias`;
      const response = await (await fetch(URL)).json();
      setCategorias(response);
    }
    loadData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);
    const URL = `${URL_TOP}/categorias`;
    fetch(URL, {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(valores),
    });
    
    clearForm();

  } 

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
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
          // onChange={(e) => console.log(e.target.value)}
        />  

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>Carregando...</div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria.titulo}</li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
        <Link style={{ marginBottom: 20 }} to="/cadastro/video">
          Ir para cadastro de video
        </Link>
        <Link style={{ marginBottom: 20 }} to="/">
          Ir para home
        </Link>
      </div>
    </PageDefault>
  );
};
export default CadastroCategoria;
