import React from 'react'
import Product from './Product'


const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for work and play',
            price: '$999',
            imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
            name: 'Shoes',
            description: 'comfy and stylish puma shoes',
            price: '$500',
            imageUrl: 'https://images.unsplash.com/photo-1715693754047-4c0b56576495?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
            name: 'Watch',
            description: 'expensive and classic rolex watch',
            price: '$5000',
            imageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
            name: 'motorcycle',
            description: 'heavyweight cruiser and touring Harley Davidson.',
            price: '$50000',
            imageUrl: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },


        {
            name: 'headphones',
            description: 'sleek and modern over-ear headphones',
            price: '$320',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    return (
        <>
            <h1>Product List</h1>
            {
                products.map((product, index) => {
                    return <Product key={index} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl}/>
                })
            }
        </>
    )
}

export default ProductList