import React from 'react';
import {
  AuthRedirectWrapper,
} from 'components';
import { routeNames } from 'routes';
import { ClassNames } from '@emotion/react';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    
  })
);

const UnlockPage = () => {
  const commonProps = {
    callbackRoute: routeNames.home,
    nativeAuth: true // optional
  };
  const classes = useStyles();

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        
      </div>
    </div>
  );
};

export const Unlock = () => (
  <AuthRedirectWrapper>
    <UnlockPage />
  </AuthRedirectWrapper>
);
