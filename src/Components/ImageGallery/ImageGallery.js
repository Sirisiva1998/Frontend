import './ImageGallery.css';
import background from '../../Assets/background.png';
import discountTag from '../../Assets/corner.png';

function ImageGallery({img1,img2,img3,img4,img5,img6,heading})
{
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
                <h6>{img1.textOne}</h6>
                <h5>{img1.textTwo}</h5>
             </div>
             <div className='ImageWithText' id='img2'>
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img2.img} width="130" height="160"/>
                <h6>{img2.textOne}</h6>
                <h5>{img2.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img3">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img3.img} width="130" height="160"/>
                <h6>{img3.textOne}</h6>
                <h5>{img3.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img4">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img4.img} width="130" height="160"/>
                <h6>{img4.textOne}</h6>
                <h5>{img4.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img5">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img5.img} width="130" height="160"/>
                <h6>{img5.textOne}</h6>
                <h5>{img5.textTwo}</h5>
             </div>
             <div className='ImageWithText' id="img6">
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={img6.img} width="130" height="160"/>
                <h6>{img6.textOne}</h6>
                <h5>{img6.textTwo}</h5>
             </div>
           </div>
        </div>
    );
}

export default ImageGallery;