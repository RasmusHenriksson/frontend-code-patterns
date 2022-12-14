import React from 'react'

const Product = ({product}) => {
  return (
    <>
   
        <div className='product-wrapper'>
            <img className='product-img' src={product.imgUrl} alt=''></img>
                <div className='product-category'>{product.category}</div>
                    <div className='product-title'>{product.title}</div>
                        <img src="https://th.bing.com/th/id/R.3ea51cc2bc741c7436931a7a9da72632?rik=2hYsL7OyuLY57A&riu=http%3a%2f%2f360play.co.uk%2fwp-content%2fuploads%2f2014%2f12%2f5-star-rating.png&ehk=Rs1Tn2%2bjsoN2%2boGkV0XxR82G%2bijDFs3gaHhnUHlOVko%3d&risl=&pid=ImgRaw&r=0" alt="" className='product-stars'></img>
                <div className='product-price'>${product.price}</div>
        </div>  
       
    </>

    

  )
}

export default Product