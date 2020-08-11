import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/App';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);