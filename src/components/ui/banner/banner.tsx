import banner1 from './../../../assets/banner1.jpeg';
import banner2 from './../../../assets/banner2.jpg';
import banner3 from './../../../assets/banner3.jpg';
import './banner.css';

type BannerProps = {
  banner: 'banner1' | 'banner2' | 'banner3';
};

export function Banner({ banner }: BannerProps) {
  let bannerImage = null;

  switch (banner) {
    case 'banner1':
      bannerImage = banner1;
      break;
    case 'banner2':
      bannerImage = banner2;
      break;
    case 'banner3':
      bannerImage = banner3;
      break;
    default:
      bannerImage = banner1;
  }

  return (
    <div className='banner'>
      <img className='banner__img' src={bannerImage} alt='brewdog' />
    </div>
  );
}
