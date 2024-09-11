
import { Link } from "react-router-dom";


import { products } from "../data/data";
const ProductItems = ()=> {
  return (
    <div className="brand-products-wrapper">
    <div className="container">
    <div className="products-inner">
     <div className="row">
     {
          products.map((product)=>{
           return(
             <div id={product} key={product.id} className='col-md-3' >
              <div className="product-item-col">
              <img src={product.image} alt="" />
               <strong>{product.title}</strong>
               <p>{product.description}</p>

               <Link className="btn btn-primary" to="/">Add To Cart</Link>
              </div>

             </div>
           )
          })
       }
     </div>
     </div>
    </div>
 </div>
  )
}


export default ProductItems;
