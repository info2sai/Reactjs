import React from "react";
function Sai(){
    let product_Name="macbook Air";
    let price = "$1100";
    let brand = "Apple";
    let image ="data:image/jpeg;base64,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"
         return(
             <div>
                 <img src={image} alt="v"/>
                 <h1>{product_Name}</h1>
                 <h2>{price}</h2>
                 <h3>{brand}</h3> 
             </div> 
         )
}
export default Sai