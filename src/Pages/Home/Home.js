import Header from '../../Components/Header/Header';
import './Home.css';
import poster1 from '../../Assets/poster1.jpg';
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

function Home()
{
  return (
    <div className='HomeContainer'>
       <Header/>
       <img src={poster1} width="100%" height="100%"/>
       <ImageGallery img1={{img:book1,textOne:"New Arrivals",textTwo:"Rs250"}}
        img2={{img:book2,textOne:"Being Hindu",textTwo:"Rs220"}}
        img3={{img:book3,textOne:"Shesh Kitna Tamas",textTwo:"Rs210"}}
        img4={{img:book4,textOne:"10 Languages",textTwo:"Rs255"}}
        img5={{img:book5,textOne:"Action",textTwo:"Rs210"}}
        img6={{img:book6,textOne:"Take your Time & Hurry",textTwo:"Rs250"}}
        heading="New Arrivals"
        />
            <ImageGallery img1={{img:school1,textOne:"Madhu Mukhar",textTwo:"Rs250"}}
        img2={{img:school2,textOne:"Financial Statements",textTwo:"Rs220"}}
        img3={{img:school3,textOne:"GK Planet",textTwo:"Rs210"}}
        img4={{img:school4,textOne:"JoyFull",textTwo:"Rs255"}}
        img5={{img:school5,textOne:"Artificial Intelligence",textTwo:"Rs210"}}
        img6={{img:school6,textOne:"Begin With Art",textTwo:"Rs250"}}
        heading="School Books"
        />
             <ImageGallery img1={{img:school1,textOne:"New Arrivals",textTwo:"Rs250"}}
        img2={{img:school2,textOne:"Being Hindu",textTwo:"Rs220"}}
        img3={{img:school3,textOne:"Shesh Kitna Tamas",textTwo:"Rs210"}}
        img4={{img:school4,textOne:"10 Languages",textTwo:"Rs255"}}
        img5={{img:school5,textOne:"Action",textTwo:"Rs210"}}
        img6={{img:school6,textOne:"Take your Time & Hurry",textTwo:"Rs250"}}
        heading="Bestseller Books"
        />
        <Footer/>
    </div>
  );
}

export default Home;