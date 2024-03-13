import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';

export default function Footer() {
  return (
    <div className='text-center flex flex-col gap-2 pb-4 pt-2 bg-primary text-white'>
      <span className='font-bold text-[1.5rem]'>LOGO</span>
      <div className='text-[0.7rem]'>
        <span>Copyright 2024 </span>
        <span>All Rights © | Reserved</span>
      </div>
      <div className='flex justify-center gap-3'>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedinIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}
