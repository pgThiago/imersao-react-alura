import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => (
    <PageDefault>
        <h1>Cadastro Categoria</h1>

        <form>
            <label>Npme da categoria</label>
            <input type="text"/>

            <button>Cadastrar</button>
        </form>

        <Link to="/">
            Ir para home
        </Link>
    </PageDefault>
)

export default CadastroCategoria;