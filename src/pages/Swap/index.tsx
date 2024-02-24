import React, { useContext, useEffect, useState, useRef, } from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import gradientCircle from 'assets/img/Eclipse.svg';
import { createStyles, makeStyles } from '@mui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ConnectWalletBtn from 'components/ConnectWalletBtn';
import SwapInput from 'components/SwapInput';
import MenuButton from 'components/MenuButton';
import {
  useNavigate
} from 'react-router-dom';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    homeContainer: {
      marginTop: '-5.5rem',
      minHeight: '100vh',
      backgroundColor: '#000210',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100vh',
        minHeight: 'unset !important',
        marginTop: '-4.5rem',
      }
    },
    firstLayer: {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
    },
    gradientTopCircle: {
      position: 'absolute',
      opacity: '100%',
      width: '80%',
      height: '800px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '300px',
      }
    },
    gradientCircleContain: {
      display: 'flex',
      justifyContent: 'center'
    },
    secondLayer: {
      top: '105px',
      position: 'absolute',
      width: '100%',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        height: '78vh',
      }
    },
    dialog: {
      marginTop: '7%',
      width: '25%',
      flexShrink: '0',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 5, 18, 0.60)',
      padding: '1.5rem',
      display: 'grid',
      gridTemplateRows: '1fr 10fr 1.5fr',
      gap: '1.5rem',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexDirection: 'column',
        display: 'flex',
        border: 'unset',
        justifyContent: 'space-between',
        height: '100%',
        background: 'none',
      }
    },
    bigtext: {
      color: '#FFF',
      /* Typography/Button 2 */
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.25rem',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%'
    },
    toogleButtonContain: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem'
      }
    },

    toogleButtonText: {
      color: '#FFF',
      fontVariantNumeric: 'lining- nums proportional - nums',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.25rem' /* 300% */
    },
    toogleCustomBtn: {
      borderRadius: '0.3rem !important',
      border: '0.1px solid #27282C !important',
      padding: '0.5rem 1rem',
      [theme.breakpoints.down('sm')]: {
        padding: '0.4rem 1rem !important',
        width: '25%'
      }
    },
    selectForm: {
      background: '#080D1C !important',
      borderRadius: '0.625rem',
      display: 'flex',
      justifyContent: 'end',
      width: '20rem',
      border: 'unset !important',
      color: 'white'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    toogleButtonGroup: {
      display: 'flex',
      gap: '0.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        justifyContent: 'flex-start',
      }
    },

  })
);

const SwapPage = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [slipPage, setSlipPage] = React.useState('0.25');

  const handleChangeToogle = (
    event: React.MouseEvent<HTMLElement>,
    newSlipPage: string,
  ) => {
    setSlipPage(newSlipPage);
  };


  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className='row w-100'>
        <div className='col-12 col-md-12 col-lg-12 mx-auto'>
          <div className={classes.homeContainer}>
            <div className={classes.firstLayer}>
              <div className={classes.gradientCircleContain}>
                <img src={gradientCircle} className={classes.gradientTopCircle}></img>
              </div>
            </div>
            <div className={classes.secondLayer}>
              <MenuButton />
              <div className={classes.dialog}>
                <div className={classes.bigtext}>Swap </div>
                <div className={classes.dialogContent}>
                  <div className={classes.formContainer}>
                    <SwapInput />
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M18.4183 11.3329L16.2933 11.3329L16.2933 19.8329L13.46 19.8329L13.46 11.3329L11.335 11.3329L14.8766 7.08292L18.4183 11.3329ZM24.085 22.6663L21.96 22.6663L21.96 14.1663L19.1266 14.1663L19.1266 22.6663L17.0016 22.6663L20.5433 26.9163L24.085 22.6663Z" fill="#F8F8F8" />
                    </svg>
                    <SwapInput />
                  </div>
                  <div className={ classes.toogleButtonContain }>
                    <div className={classes.toogleButtonText}>Slippage</div>
                    <ToggleButtonGroup
                      color="primary"
                      value={slipPage}
                      exclusive
                      onChange={handleChangeToogle}
                      aria-label="Platform"
                      className={classes.toogleButtonGroup}
                      sx={{
                        '& button.Mui-selected': {
                          backgroundColor: '#03C7BD !important', color: 'black', border: '0.5px solid rgba(0, 0, 0, 0.04)',
                          borderRadius: '0.4rem'
                        },
                        '& button': {
                          color: 'white', backgroundColor: '#080D1C', textTransform: 'capitalize', fontFamily: 'SF Pro Text',
                          fontSize: '1rem', fontStyle: 'normal', fontWeight: '600', lineHeight: '1.25rem'
                        }
                      }}
                    >
                      <ToggleButton value="0.25" className={classes.toogleCustomBtn} >0.25%</ToggleButton>
                      <ToggleButton value="1" className={classes.toogleCustomBtn}>1%</ToggleButton>
                      <ToggleButton value="2.5" className={classes.toogleCustomBtn}>2.5%</ToggleButton>
                      <ToggleButton value="Custom" className={classes.toogleCustomBtn}>Custom</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <ConnectWalletBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Swap = () => (
  <SwapPage />
);
