import './ImageGallery.css';
import background from '../../Assets/background.png';
import discountTag from '../../Assets/corner.png';
import { useEffect, useState } from 'react';

function ImageGallery({img1,img2,img3,img4,img5,img6,heading})
{
   const [cartItems,setCartItems]=useState([]);

   useEffect(()=>{
      console.log(localStorage.getItem("cartItems"));
   },[cartItems]);

   const addToCart=(data)=>{
      setCartItems([...cartItems,data]);
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
   }
    return(
        <div className='GalleryContainer'>
            <img src={background} className='background'/>
           <div className='GalleryHeading'>
              <h2>{heading}</h2>
              <hr/>
           </div>
           <div className='ImageContainer'>
             <div className='ImageWithText' id='img1'>
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img1.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img1.img,text1:img1.textOne,price:img1.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img1.textOne}</h6>
                <h5>{img1.textTwo}</h5>
             </div>
             <div className='ImageWithText' id='img2'>
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img2.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img2.img,text1:img2.textOne,price:img2.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img2.textOne}</h6>
                <h5>{img2.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img3">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img3.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img3.img,text1:img3.textOne,price:img3.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img3.textOne}</h6>
                <h5>{img3.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img4">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img4.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img4.img,text1:img4.textOne,price:img4.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img4.textOne}</h6>
                <h5>{img4.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img5">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img5.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img5.img,text1:img5.textOne,price:img5.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img5.textOne}</h6>
                <h5>{img5.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img6">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img6.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={()=>addToCart({img:img6.img,text1:img6.textOne,price:img6.textTwo})}>Add to cart</h4>
                </div>
                <h6>{img6.textOne}</h6>
                <h5>{img6.textTwo}</h5>
             </div>
           </div>
        </div>
    );
}

export default ImageGallery;