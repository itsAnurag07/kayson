export default function Contact2() {
    return (
      <>
      <div className="contact_section contact_section2 p-4">
          <div className="container">
            <div className="row mt-2">
              <div className="col-md-4 d-none d-md-block">
                <div className="contact_right">
                  <div className="contact_img">
                    <img src="Assets/img/Screenshot 2024-04-10 171105.png" className="contact_img1" alt="Kayson Logo"  />
                  </div>
                </div>
              </div>
  
              <div className="col-md-8">
                <form action="https://api.web3forms.com/submit" method="POST">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <input type="hidden" name="access_key" value="//////////////////////" />
                     
                        <input type="text" placeholder="Full Name" className="form-control" id="fullName" name="fullName" />
                      </div>
                    </div>
  
                    <div className="col-md-4">
                      <div className="mb-3">
                       
                        <input type="email" placeholder="Email" className="form-control" id="email" name="email" />
                        <div className="invalid-feedback">Please enter a valid email address.</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
            
                        <input type="" placeholder="Mobile.No"className="form-control" id="number" name="number" />
                   
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-8">
                  <div className="mb-3">
                   
                    <textarea className="form-control" placeholder="Message" id="message" rows="2" name="message"></textarea>
                  </div>
                  </div>
                  <div className="col-md-2">
                  <div className="mt-2">
                  <button type="submit" className="show-more-btn2">Submit</button>
                  </div>
                  </div>
                  </div>
                </form>
              </div>
            </div>   
          </div>
        </div>
      </>
    );
  }
  