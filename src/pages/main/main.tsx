import avatarPNG from '@/assets/avatar.png';
import avatarJPG from '@/assets/avatar.jpg';
import AvatarSVG from '@/assets/avatar.svg';

import classes from './main.module.scss';

const MainPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <div className={classes.avatars}>
        <img src={avatarPNG} width={100} height={100} alt='Avatar' />
        <img src={avatarJPG} width={100} height={100} alt='Avatar' />
        <AvatarSVG width={100} height={100} color='red' />
      </div>
    </div>
  );
};

export default MainPage;
