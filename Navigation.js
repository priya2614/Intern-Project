
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css"
import { Container } from 'react-bootstrap';

function Navigation() {
  return (

         <Navbar>
       <Container className='flex'>
            <h4 className='at'>A®T G@||€®¥</h4>
           <Nav >
            <Nav.Link className='text' href="#home">Home</Nav.Link>
            <Nav.Link className='text' href="#collection">Collection</Nav.Link>
            <Nav.Link className='text' href="#about">About Us</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
  )
}
// const Navigation = ()=>{
// return(
// <> 
// <div className="display">
//         <div id="division">
//            <h6>Home</h6>
//            <h6>Collection</h6>
//            <h6>Events</h6>
//            <h6>About Us</h6>
//             <h2 id="art"><i>Art Gallery</i></h2> 
//         </div>
//         <div className="btn">
//            <button className="btns"><b>Sign up</b></button>
//         </div>
        
// </div>
// </>
// )
// }
export default Navigation