import React from 'react';

import { AuthRoute, NoneAuthRoute } from '../routes';

function Main(): JSX.Element {
  const isLogin = false;

  return isLogin ? <AuthRoute /> : <NoneAuthRoute />;
}

export default Main;
