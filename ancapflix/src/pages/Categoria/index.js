import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function loadData(){
      const URL = `http://localhost:8080/categorias`;
      const response = await (await fetch(URL)).json();
      setCategorias([...response]);
    }
    
    loadData();

  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);
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
  

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading</div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};
export default CadastroCategoria;
