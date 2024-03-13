import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Carousel } from 'rsuite';
import testPic from '../asset/pic/test1.png';
import 'rsuite/Carousel/styles/index.css';

function CarouselHero({ children }) {
  return (
    <Carousel autoplay className='custom-slider'>
      <img src={testPic} height='250' alt='' className=' object-cover' />
      <img
        src='https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2'
        height='200'
        alt=''
        className=' object-cover'
      />
      <img
        src='https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3'
        height='200'
        alt=''
      />
      <img
        src='https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4'
        height='200'
        alt=''
      />
      <img
        src='https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5'
        height='200'
        alt=''
      />
    </Carousel>
  );
}

export default CarouselHero;
