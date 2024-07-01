 import "./Footer.css"
 
 const Footer = ()=>{
    return(
        <div className="fg">
        <div className="footer">
            <div>
                <h4 className="head4">Art Gallery</h4>
                
                <p className="para6">Art project,gallery,publishing</p>
                
                <h6 className="head6">3902 Ranchview Mrs.Queen,<br/>USA</h6>
            </div>
            <div>
                <p className="para6">About Us</p>
                <p className="para7" >Carrers</p>
                <p className="para7">Services</p>
                <p className="para7">Project</p>

            </div>

            <div>
                <p className="para6">Pricing</p>
                <p className="para7" >About Pricing</p>
                <p className="para7">Management</p>
                <p className="para7">Knowledge</p>

            </div>

            <div>
                <p className="para6">Company</p>
                <p className="para7" >Blog</p>
                <p className="para7">Carrers</p>
        
            </div>

            <div>
                <p className="para6">Contact</p>
                <p className="para7" >cs_artgallery.com</p>
                <p className="para7">(908) 555-0033</p>
        
            </div>
        </div>
         
         <div>
             <h6 style={{color: 'white',
                textAlign: 'center',

             }}>Sign Up for newsletters to stay up to date</h6>
             <input className="input" placeholder="Enter your email address"/>
         </div>
         <hr/>
         <hr/>
         <div className="final">
            <div>
              <p>2024 Allright reserved</p>
            </div>
            <div className="help" >
            <p className="pe-5">Help center</p>
            <p className="pe-5">Terms of Use</p>
            <p className="pe-5">Privacy Policy</p>
            </div>
         </div>

    </div>
    )
 }

export default Footer