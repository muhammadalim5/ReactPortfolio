import React from "react";

function Contact() {
  return (
    <div class="container" style={{ color: ' white' }}>
      <div class="col-3"></div>
      <div class="col-6" style={{ margin: ' auto', marginTop: ' 5%' }}>
        <div class="row"><h1 style={{ textAlign: ' center' }}>Contact</h1></div>
        <div class="row">

          <div class="form" style={{ backgroundColor: 'rgb(20, 20, 71)', color: 'white' }}>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">Full Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
            </div><div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
            </div>
            <button type="button" class="btn btn-light" style={{ marginBottom: ' 5%' }}>Submit</button>

          </div>


        </div></div>
      <div class="col-3"></div>
    </div>

  )
}

export default Contact