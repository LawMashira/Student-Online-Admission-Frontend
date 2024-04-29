import React from "react";

function GoogleMap() {
     return(
  <div>
        <iframe
          
          frameborder="0"
          style={{width:"100% ",height:"400px"}}
          src="https://www.google.com/maps/embed/v1/place?q=Bulawayo+Polytechnic,+Caravan+Way,+Bulawayo,+Zimbabwe&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
     
     </div>
  );
}

export default GoogleMap;
