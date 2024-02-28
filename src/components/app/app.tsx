import { Link, Outlet } from 'react-router-dom';

import classes from './app.module.scss';

export const App = () => {
  return (
    <div className='app'>
      <h1>Webpack Sandbox</h1>
      <div className={classes.nav}>
        <Link to={`/`}>Main page</Link>
        <Link to={`/about`}>About page</Link>
        <Link to={`/shop`}>Shop page</Link>
      </div>
      <Outlet />
    </div>
  );
};
