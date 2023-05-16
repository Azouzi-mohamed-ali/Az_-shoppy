import React from 'react'
import { notFound } from "next/navigation";
async function getProductDetails(id){
 try {
 const res = await fetch
(`https://api.escuelajs.co/api/v1/products/${id}`);
 const product = await res.json();
 return product;
 }
 catch (error) {
 console.log(error);
 }
}
const ProductDetails = async ({params}) => {
 const product = await getProductDetails(params.id);

 if (!product || !product?.title) notFound();

 return (
 <div className="container">
 <div className="row mt-5">
 <div className="col-5">
 <img
 src={product.images[0]}
 className="img-fluid rounded-start"
 height={500}
 width={500}
 alt={product.title}
 />

 </div>
 <div className="col-6 mt-5">
 <h2 className="my-4">{product.title}</h2>
 <h6 className="my-4">{product.category.name}</h6>
 <h3 className="my-4">${product.price}</h3>
 </div>
 <div >
 {product.images.map((image, index)=>(
 <img key={index} src={image}
 height={70}
 width={70}
 alt={product.title}
 />
 ))}
 </div>
 </div>
 </div>
 )
}
export default ProductDetails ; 
