import React from 'react'


function Product(props) {
    const {product, handleClick} = {...props}
    return (
        <div className= "Student">
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleClick(product)}>Add To Cart</button>
            <br></br>
            <br></br>
            <img src={product.img} alt='product'></img>
            <p>{product.description}</p>
        </div>
    )
}

export default Product;