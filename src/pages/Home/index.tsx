import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { routeNames } from 'routes';
import {
  useNavigate
} from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { collapseClasses, Theme } from '@mui/material';
import RoundIcon1 from 'assets/img/Round1.png';
import RoundIcon2 from 'assets/img/Round2.png';
import RoundIcon3 from 'assets/img/Round3.png';
import RoundIcon4 from 'assets/img/Round4.png';
import homeback from 'assets/img/MainPage.svg';
import gradientCircle from 'assets/img/Eclipse.svg';
import zIndex from '@mui/material/styles/zIndex';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeContainer: {
      marginTop: '-5.5rem',
      minHeight: '150vh',
      backgroundColor: '#000210',
      width: '100%',
      // height:'fit-content',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100vh',
        minHeight: 'unset !important'
      }
    },
    firstLayer: {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
      zIndex: '1',
      [theme.breakpoints.down('sm')]: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }
    },
    gradientTopCircle: {
      position: 'absolute',
      opacity: '100%',
      width: '80%',
      height: '800px',
      [theme.breakpoints.down('sm')]: {
        // display:'none'
        width: '120%',
        height: '600px',
      }
    },
    gradientCircleContain: {
      display: 'flex',
      justifyContent: 'center'
    },
    roundIcon1: {
      position: 'absolute',
      top: '24%',
      left: '31%',
      angle: '-52.37 deg',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    roundIcon4: {
      position: 'absolute',
      top: '13%',
      right: '26%',
      angle: '36.94 deg',
      opacity: '50%',
      boxShadow: '0px 4px 4px 0px #00000040',
      [theme.breakpoints.down('sm')]: {
        top: '18%',
        right: 'unset',
      }
    },
    roundIcon2: {
      position: 'absolute',
      top: '40%',
      left: '25%',
      opacity: '80%',
      boxShadow: '0px 4px 4px 0px #00000040',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    roundIcon3: {
      position: 'absolute',
      top: '38%',
      right: '27%',
      zIndex: '1',
      angle: '-52.37 deg',
      [theme.breakpoints.down('sm')]: {
        top: '15%',
        right: 'unset',
        transform: 'rotate(87.5deg)',
        zIndex: '1'
      }
    },
    secondLayer: {
      top: '105px',
      position: 'relative',
      width: '100%',
      height: '140vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: '2',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-end',
        height: '83vh',
      }
    },
    textBox: {
      marginTop: '9rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        lineHeight: '3.5rem',
        padding:'0rem 0.5rem'
      }
    },
    homeTitleText: {
      fontFamily: 'Inter',
      fontSize: '4rem',
      fontWeight: '300',
      lineHeight: '4.5rem',
      letterSpacing: '-3%',
      textAlign: 'center',
      color: 'white',
      gap: '1rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    homeTitleTextMobile: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        fontFamily: 'Inter',
        fontWeight: '300',
        letterSpacing: '-3%',
        textAlign: 'center',
        color: 'white',
        gap: '1rem',
        fontSize: '3.5rem',
        width: '100%',
        paddingBottom: '1.5rem',
        lineHeight: '4.5rem',
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    homeTitleDescriptText: {
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontWeight: '300',
      lineHeight: '1.5rem',
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      gap: '0.5rem',
      paddingBottom: '3rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      }
    },
    gradientText: {
      background: 'var(--Gradient, linear-gradient(91deg, #143649 45.23%, #14F1FE 55.41%, #03D2BA 65.38%))',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      display: 'flex',
      margin: 'unset !important',
    },

    homeButton: {
      width: '18rem',
      height: '4rem',
      borderRadius: '1rem',
      fontFamily: 'Inter',
      fontWeight: '300',
      fontSize: '1.3rem',
      color: 'white',
      background: 'var(--Gradient, radial-gradient(724.74 % 84.92 % at 27.98 % 39.19 %, #FFF 0 %, #86C1D4 50.06 %, rgba(57, 43, 80, 0.37) 100 %))',
      backgroundClip: 'text',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
      border: '1px solid #071915',
      lineHeight: '117%'
    },
    homebackImg: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('md')]: {
        // display: 'none',
      }
    },
    headingTop: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      // [theme.breakpoints.down('sm')]: {
      //   lineHeight: '3.5rem',
      //   flexDirection: 'column',
      //   alignItems: 'center'
      // }
    },
  })
);

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className='row w-100'>
        <div className='col-12 col-md-12 col-lg-12 mx-auto'>
          <div className={classes.homeContainer}>
            <div className={classes.firstLayer}>
              <div className={classes.gradientCircleContain}>
                <img src={gradientCircle} className={classes.gradientTopCircle}></img>
              </div>
              <img src={RoundIcon1} className={classes.roundIcon1}></img>
              <img src={RoundIcon2} className={classes.roundIcon2}></img>
              <img src={RoundIcon3} className={classes.roundIcon3}></img>
              <img src={RoundIcon4} className={classes.roundIcon4}></img>
            </div>
            <div className={classes.secondLayer}>
              <div className={classes.textBox}>
                <div className={classes.homeTitleText}>
                  <div className={classes.headingTop}>
                    Empower
                    <p className={classes.gradientText}>Your Trades</p>
                  </div>
                  <div>Decentralize Your Gains</div>
                </div>
                <div className={classes.homeTitleTextMobile}>
                  Empower
                  <p className={classes.gradientText}>Your Trades</p>
                  <div>Decentralize</div>
                  <div>Your Gains</div>
                </div>
                <div className={classes.homeTitleDescriptText}>
                  <p>Leverage the Future with</p>
                  <div style={{ color: '#03C7BD' }}>X</div>
                  <p>-Leverage</p>
                </div>
                <button className={classes.homeButton} onClick={() => navigate('/swap')}>Open App</button>
              </div>
              <img src={homeback} className={classes.homebackImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => (
  <HomePage />
);
