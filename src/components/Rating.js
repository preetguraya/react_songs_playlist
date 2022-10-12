import React from "react";

const Rating = (props) => {
return(
    <div class="rating">
       { [...Array( props.stars > 0 ? props.stars : 0 )].map(() =>
       <div className="star"></div>
      )
       }
      
    </div>
)

}


export default Rating;
