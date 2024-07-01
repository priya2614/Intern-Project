import "./Main3.css"
import Card from 'react-bootstrap/Card';


const Main3 =()=>{
    return(
    <div >
        <div className="hear">
            <div>
             <button className="Testimonial">Testimonial</button>
             <h2>Hear from the enthusiasm <br/>of our happy visitors</h2>
            </div>
            <div>
            <p className="paras">Here, you will find a selection of testimonials that say alot <br/> about the quality of our products/services and the impact <br/>we have on our customer's lives. </p>
            </div>
        </div>
         <div className="hear" >

    <Card className="cards">
      <Card.Body>
        <div className="making-card" >
        <img className="designer-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjJYrCky26A1Q4uH1VuAqLnbJWaKnVnEM9La36nrHpm4esa0s2X330DHe3fcGR8g5j_o&usqp=CAU" alt="pic"/>
        <Card.Title>Jason Struick
            <br/> <p className="designer"><u>Designer</u></p>
        </Card.Title>
        </div>
        <Card.Text>
            <p className="design-para"><i>I'm constantly inspried by the unique per showcased in this gallery.It's refreshing to pushing boundaries and exploring new form expression.</i></p>
       
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className="cards">
      <Card.Body>
        <div className="making-card" >
        <img  className="designer-img" src="data:image/jpeg;base64,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" alt="pic"/>
        <Card.Title>William
            <br/> <p className="designer"><u>Designer</u></p>
        </Card.Title>
        </div>
        <Card.Text>
        <p className="design-para"><i>"The attention to detail in each artwork is simply remarkable. You can feel the dedication and skill that went into creating these masterpieces"</i></p>
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className="cards">
      <Card.Body>
        <div className="making-card" >
        <img className="designer-img" src="data:image/jpeg;base64,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" alt="pic"/>
        <Card.Title>Liam Noah
            <br/> <p className="designer"><u>Designer</u></p>
        </Card.Title>
        </div>
        <Card.Text>
            <p className="design-para"><i>I hope you guys will like it."I really like your use of red in this piece and I wonder if there's a way to use the entire composition."</i></p>
       
        </Card.Text>
      </Card.Body>
      </Card>
            </div> 
            <div className="questions">
                <div>
                    <button className="Testimonial">FAQ's</button>
                    <h2>Frequently Ask <br/>Question</h2>
                </div>
                <div>
                    <div className="plus">
                    <p  className="question-para">How does the landing page engege and interact with visitors ?</p>
                    <h4>+</h4>
                    </div>
                    <hr/>

                    <div className="plus">
                    <p  className="question-para">What kind of artwork does the landing page show ?</p>
                    <h4>-</h4>
                    </div>
                    <hr/>
                    <div className="plus">
                    <p  className="question-para"> Are there interactives that enchance the user experience?</p>
                    <h4>+</h4>
                    </div>
                    <hr/>
                    <div className="plus">
                    <p  className="question-para"> How does the landing page ouyout reflect the aesthetic?</p>
                    <h4>-</h4>
                    </div>
                    <hr/>
                </div>

            </div>

        </div>
    )

}
export default Main3