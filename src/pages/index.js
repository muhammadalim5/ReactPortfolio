import React from "react";
import Muhammadresume from "./assets/MuhammadAlimResume.pdf"
import photo from "./assets/Muhammad.jpg"

function AboutMe() {
    return (


      <div class="container" style={{color: 'white'}}>
    <div class="col-3"></div>
    <div class="col-6" style={{margin: 'auto', marginTop: '5%'}}>
    <div class="row"><h1 style={{textAlign: 'center'}}>About</h1></div>
    <div class="row">
        <div class="card mb-3" style={{maxWidth:' 540px'}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={photo} alt="..." style={{width:'150px',height:'150px'}}/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text" style={{color:' black', textAlign:' center'}}>
                    Welcome to my page! My name is Muhammad Alim!
                     Currently studying at the University of Toronto Coding Bootcamp. Looking forward to gaining the neccessary skills
                     to work as a full stack developer.
                       .</p>
                </div>
              </div>
            </div>
            <div class="row" style={{backgroundColor: 'rgb(20, 20, 77)', textAlign: 'center'}}>
               <h5>Fluent in English and Somali.</h5> </div>
            <div>
              
            <div style={{textAlign:' center'}}> 
             <a target="_blank" href=" https://www.linkedin.com/in/muhammad-alim-3148141a2/" class="fa fa-linkedin"></a>
             <a target="_blank" href=" https://github.com/muhammadalim5" class="fa fa-github"style={{marginRight:'5%', marginLeft:'5%'}}></a>
             <a target="_blank" href="mailto:  muhammadalim3435@gmail.com " class="fa fa-google"></a>
             <a href="./assets/Muhammad Alim Resume.pdf" target="__blank" style={{marginRight:'5%', marginLeft:'5%'}}>Resume</a>
             <a href="tel:4372376940">phone:4372376940</a>
          
           </div>
          </div></div>  
         
    </div></div>
    <div class="col-3"></div>
</div>

    )
}

export default AboutMe;