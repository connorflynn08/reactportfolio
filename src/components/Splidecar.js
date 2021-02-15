import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const Splidecar = () => {
    return (
        <div>
             <h1 id="projects">Projects</h1>

            <div class="splidebox">
            <Splide
            options={ {
                rewind : true,
                width  : 800,
                gap    : '1rem',
              } }>
  <SplideSlide>
    <img src="https://dummyimage.com/640x360/fff/aaa" alt="Image 1"/>
    <p> This is the first paragraph test</p>
  </SplideSlide>
  <SplideSlide>
    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Image 2"/>
    <p> This is the second paragraph test</p>
  </SplideSlide>
</Splide>
</div>
        </div>
    )
}

export default Splidecar
