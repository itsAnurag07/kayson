// import { Link } from "react-router-dom";
import React from "react";
export default function InspirationHome() {
  return (
    <>
       <div class="container-fluid px-5">
       <h2 className="title text-center my-5">INSPIRATIONS</h2> 
  <div class="row ">
  <div class="col-lg-5 "> 
  <div className="position-relative mb-5">
      <img src="Assets/img/inspiration/wood-sideboard-red-living-room-with-copy-space.webp" alt="Earthy Elegance" class="img-fluid" style={{height:'380px', width:'100%'}}/>
      <p className="position-absolute bottom-0 end-0 inspiration_txt" > <strong> BEAUTIFUL AND BOLD</strong></p>
    </div>
    </div>
    <div class="col-lg-7">
    <div className="position-relative earth_elegance">
      <img src="Assets/img/inspiration/cozy-living-room-with-wood-furniture-clay-colored-walls.webp" alt="Beautiful and Bold" class="img-fluid" style={{height:'450px', width:'100%'}}/>
      <p className="position-absolute bottom-0 end-0 inspiration_txt" > <strong> EARTHY ELEGANCE</strong></p>
    </div>
    </div>
    
  </div>
  <div class="row">
  <div class="col-lg-5 ">
  <div className="position-relative">
      <img src="Assets/img/inspiration/illustration-living-room-interior.webp" alt="Earthy Elegance" class="img-fluid"  style={{height:'375px', width:'100%', marginTop:'-50px'}}/>
      <p className="position-absolute bottom-0 end-0 inspiration_txt" > <strong> NATURAL NATURE</strong></p>
    </div>
    </div>
    <div class="col mt-0">
    <div className="position-relative mt-4">
      <img src="Assets/img/inspiration/interior-decoration.webp" alt="Natural Nature" class="img-fluid"style={{height:'300px', width:'100%'}}/>
      <p className="position-absolute bottom-0 end-0 inspiration_txt" > <strong>VIBRANT VIBE</strong></p>
    </div>
    </div>
    <div class="col">
    <div className="position-relative mt-4">
      <img src="Assets/img/inspiration/sofa-purple-living-room-with-copy-space.webp" alt="Vibrant Vibe" class="img-fluid"style={{height:'300px', width:'100%'}}/>
      <p className="position-absolute bottom-0 end-0 inspiration_txt" > <strong>PASTEL PALLETE</strong></p>
    </div>
    </div>
   
    {/* <!-- Add more rows and columns as needed --> */}
  </div>
</div>
    </>
  );
}

