import Header from '../../Components/Header/Header';
import './Home.css';
import poster1 from '../../Assets/poster1.jpg';
import poster2 from '../../Assets/poster2.jpg';
import poster3 from '../../Assets/poster3.jpg';

import ImageGallery from '../../Components/ImageGallery/ImageGallery';

import book1 from '../../Assets/book1.jpg';
import book2 from '../../Assets/book2.jpg';
import book3 from '../../Assets/book3.jpg';
import book4 from '../../Assets/book4.jpg';
import book5 from '../../Assets/book5.jpg';
import book6 from '../../Assets/book6.jpg';

import school1 from '../../Assets/school1.jpg';
import school2 from '../../Assets/school2.jpg';
import school3 from '../../Assets/school3.jpg';
import school4 from '../../Assets/school4.jpg';
import school5 from '../../Assets/school5.jpg';
import school6 from '../../Assets/school6.jpeg';
import Footer from '../../Components/Footer/Footer.js';
import { useEffect, useState } from 'react';

function Home()
{
  const poster = [poster1, poster2, poster3];
  const lengthPoster = poster.length;
  let i = 0;
  let posterSwitch=poster1;
  
  const [posterImg,setImagePoster]=useState(poster1);
  useEffect(() => {
    const intervalId = setInterval(sliding, 3000);
    
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [i]);
  
  const sliding = () => {
    // Update i for sliding through posters
    i++;
    if(i>lengthPoster-1)
     i=0;
     setImagePoster(poster[i]);
  };

  return (
    <div className='HomeContainer'>
       <Header/>
       <img src={posterImg} width="100%" height="100%"/>
       <ImageGallery img1={{img:book1,textOne:"New Arrivals",textTwo:"250 Euro",id:"1"}}
        img2={{img:book2,textOne:"Being Hindu",textTwo:"220 Euro",id:"2"}}
        img3={{img:book3,textOne:"Shesh Kitna Tamas",textTwo:"210 Euro",id:"3"}}
        img4={{img:book4,textOne:"10 Languages",textTwo:"255 Euro",id:"4"}}
        img5={{img:book5,textOne:"Action",textTwo:"210 Euro",id:"5"}}
        img6={{img:book6,textOne:"Take your Time & Hurry",textTwo:"250 Euro",id:"6"}}
        heading="New Arrivals"
        />
            <ImageGallery img1={{img:school1,textOne:"Madhu Mukhar",textTwo:"250 Euro",id:"7"}}
        img2={{img:school2,textOne:"Financial Statements",textTwo:"220 Euro",id:"8"}}
        img3={{img:school3,textOne:"GK Planet",textTwo:"210 Euro",id:"9"}}
        img4={{img:school4,textOne:"JoyFull",textTwo:"255 Euro",id:"10"}}
        img5={{img:school5,textOne:"Artificial Intelligence",textTwo:"210 Euro",id:"11"}}
        img6={{img:school6,textOne:"Begin With Art",textTwo:"250 Euro",id:"12"}}
        heading="School Books"
        />
             <ImageGallery img1={{img:school1,textOne:"New Arrivals",textTwo:"250 Euro",id:"13"}}
        img2={{img:school2,textOne:"Being Hindu",textTwo:"220 Euro",id:"14"}}
        img3={{img:school3,textOne:"Shesh Kitna Tamas",textTwo:"210 Euro",id:"15"}}
        img4={{img:school4,textOne:"10 Languages",textTwo:"255 Euro",id:"16"}}
        img5={{img:school5,textOne:"Action",textTwo:"210 Euro",id:"17"}}
        img6={{img:school6,textOne:"Take your Time & Hurry",textTwo:"250 Euro",id:"18"}}
        heading="Bestseller Books"
        />
        <Footer/>
    </div>
  );
}

export default Home;