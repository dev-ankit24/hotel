import React from 'react'

export default function CorporateQuery() {
  return (
   <>
    <div className="container">
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col-md-6">
                    <div className="corporate-query-left">
                        <img src="" alt="" />
                    </div>
                </div> */}

                <div className="col-md-12">
                    <form>
                      <div className="row">
                        <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label"> Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share  email with anyone else.</div> */}
                      </div>
                        <div class="mb-3 col-md-6">
                           <label for="exampleInputPassword1" class="form-label"> Email</label>
                           <input type="email" class="form-control" id="exampleInputPassword1"/>
                        </div>
                      </div>
                      <div className="row">
                        <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                      </div>
                        <div class="mb-3 col-md-6">
                           <label for="exampleInputPassword1" class="form-label"></label>
                           <input type="email" class="form-control" id="exampleInputPassword1"/>
                        </div>
                      </div>
                      <div className="row">
                        <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Your Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                      </div>
                        <div class="mb-3 col-md-6">
                           <label for="exampleInputPassword1" class="form-label">Your Email</label>
                           <input type="email" class="form-control" id="exampleInputPassword1"/>
                        </div>
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>



   </> 
  )
}
