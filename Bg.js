import Carousel from 'react-bootstrap/Carousel';
import "./Bg.css"

const Background =()=>{
    return(


<Carousel>
  <Carousel.Item>
         <div className='bg'>
         <h4 className="bg-text">Art Gallery Platform</h4> 
         <h1 className="heading">Dive into Creativity with our <br/> gallery collection</h1>
         <div className="para">
            <p>Immerse yourself in the captivating stories behind<br/> each artwork, as our artists draw inspiration from<br/> cultures ,nature and everyday life.</p>
            <button className="btn-1">Visit Gallery</button>
         </div>
         </div>
  </Carousel.Item>

  <Carousel.Item>
         <div className='bg2'>
         <h4 className="bg-text">Art Gallery Platform</h4> 
         <h1 className="heading">Dive into Creativity with our <br/> gallery collection</h1>
         <div className="para">
            <p>Immerse yourself in the captivating stories behind<br/> each artwork, as our artists draw inspiration from<br/> cultures ,nature and everyday life.</p>
            <button className="btn-1">Visit Gallery</button>
         </div>
         </div>
  </Carousel.Item>

  <Carousel.Item>
         <div className='bg3'>
         <h4 className="bg-text">Art Gallery Platform</h4> 
         <h1 className="heading">Dive into Creativity with our <br/> gallery collection</h1>
         <div className="para">
            <p>Immerse yourself in the captivating stories behind<br/> each artwork, as our artists draw inspiration from<br/> cultures ,nature and everyday life.</p>
            <button className="btn-1">Visit Gallery</button>
         </div>
         </div>
  </Carousel.Item>

    </Carousel>


    )
}
export default Background