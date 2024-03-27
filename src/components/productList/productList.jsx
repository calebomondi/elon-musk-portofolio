import React from 'react'
import './productList.css'
import { Product } from '../product/product'
import { MyProduct } from '../../data'

export const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">
                Develop to Inspire 
            </h1>
            <p className="pl-desc">
                I consistently push the boundaries of what is possible, not only for my own personal development but also to inspire others to dream big and pursue audacious goals.
            </p>
        </div>
        <div className="pl-list">
            {
                MyProduct.map(item => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))
            }
        </div>
    </div>
  )
}
