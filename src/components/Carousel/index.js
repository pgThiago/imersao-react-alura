import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';

import Slider, { SliderItem } from './components/Slider';

function Carousel({ ignoreFirstVideo, videoArray, categoriaArray }) {
  
  if(videoArray === undefined){
    return <div 
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>
  }

  return (
    <VideoCardGroupContainer>
      {categoriaArray.map(categoria => {
          return (
            <>
              <Title style={{ backgroundColor: '#000052' }}>
                <p>{categoria.titulo}</p>
              </Title>       
            
                <Slider>                
                    {
                      videoArray.map((video, indice) => {
                        if(ignoreFirstVideo && indice === 0)
                          return null
                        else{
                          return video.categoriaId === categoria.id && (
                            <SliderItem key={video.id}>
                              <VideoCard
                                videoTitle={video.titulo}
                                videoURL={video.url}
                              />
                            </SliderItem>
                          )
                        }
                      })
                    }                    
              </Slider>
          </>
        )
      })}      
    </VideoCardGroupContainer>
  );
}

export default Carousel;