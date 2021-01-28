import React, { useState, useEffect } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import url_top from '../../config';

function Home() {

  const [ videos, setVideos ] = useState([]);
  const [ categorias, setCategorias ] = useState([]);

  useEffect(() => {
    const { URL_TOP } = url_top;
    async function loadVideos(){
      try{
        const URL = `${URL_TOP}/videos`;
        const response = await (await fetch(URL, {
          mode: 'no-cors'
        })).json();
        setVideos(response);
      }
      catch(error){
        console.log(error);
      }
    }
    loadVideos();
  }, []);

  useEffect(() => {
    const { URL_TOP } = url_top;
    async function loadCategorias(){
      try{
        const URL = `${URL_TOP}/categorias`;
        const response = await (await fetch(URL, {
          mode: 'no-cors'
        })).json();
        setCategorias(response);
      }
      catch(error){
        console.log(error);
      }
    }
    loadCategorias();
  }, []);
  
  return (
    <PageDefault paddingAll={0}>
      {videos.length === 0 && (
        <div 
        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>
      )}
      
      {
        videos.map((video, indice) => {
          if(indice === 0){
            return (
              <div key={video.id}>
                <BannerMain
                  videoTitle={video.titulo}
                  url={video.url}
                  videoDescription=""
                />
              </div>)
            }
          }
        )
      }             
      {videos && (<Carousel
        ignoreFirstVideo
        videoArray={videos}
        categoriaArray={categorias}
      />)}
    </PageDefault>
  );
}

export default Home;
