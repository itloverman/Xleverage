import React, { useEffect, useState, useContext } from 'react';
import {
  AppBar, Box, Container,
  Divider, Drawer,
  IconButton, List,
  ListItem, ListItemButton,
  ListItemText, Toolbar,
  Typography, Button
} from '@mui/material';
import {
  faChartSimple,
  faFileSignature
} from '@fortawesome/free-solid-svg-icons';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { BsBootstrap, BsFillMenuButtonWideFill } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';
import { routeNames } from 'routes';
import { createStyles, makeStyles } from '@mui/styles';
import logobanner from 'assets/img/Logo.svg';
import BannerButton from 'components/ConnectWalletBtn/bannerButton';
import {
  Menu, Web
} from '@mui/icons-material';


const useStyles = makeStyles((theme: any) =>
  createStyles({
    navbarContain: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      zIndex:'4',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    topbar: {
      width: '100%',
      height: '30px',
      backgroundColor: '#030611',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #494949C2',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    },
    mainNavbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '0.5rem 6rem',
      backgroundColor: 'rgba(255, 255, 255, 0.01) !important',
      // backgroundColor:' !important',
      borderBottom: '0.3px solid #B3A8A8CC 80%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0rem 1rem',
        backgroundColor: 'unset !important',
      }
    },
    logo: {
      width: '180px',
      height: '61px',
      flexShrink: '0',
      marginLeft: '2rem',
      [theme.breakpoints.down('sm')]: {
        width: '128px',
        marginLeft: '0rem',
      }
    },
    bannerFont: {
      color: '#EDEDED',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '0.75rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1rem',
      textTransform: 'uppercase',
    },

    menu: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
        // width: '400px',
      }
    },
    topbarTextContain: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '0.75rem',
      textAlign: 'center',
      color: '#9A9A9A',
      lineHeight: '1.5rem',
      display: 'flex',
      gap: '0.5rem',
      height: '100%'
    },
    topbarText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    mainNavbarRightSide: {
      display: 'flex',
      alignItems: 'center',
      gap: '5rem'
    }
  })
);

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  const navigate = useNavigate();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <img src={logobanner} style={{ height: '3.5rem', padding: '0.5rem' }} onClick={() => {
        navigate('/');
      }} />
      <Divider sx={{ background: 'white', opacity: 0.8 }} />
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to={routeNames.trade}>
          <div className={classes.bannerFont}>Trade</div>
        </Link>
        <Link to={routeNames.swap}>
          <div className={classes.bannerFont}>Swap</div>
        </Link>
        <Link to={routeNames.lending}>
          <div className={classes.bannerFont}>Lending & Borrowing</div>
        </Link>
        <Link to={routeNames.activity}>
          <div className={classes.bannerFont}>My Activity</div>
        </Link>
        <Link to={routeNames.home}>
          <div className={classes.bannerFont}>Connect</div>
        </Link>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {/* <BsNavbar className='bg-transparent border-bottom'> */}
      <AppBar component='nav' position='static'>

        <div className='container-fluid container'>
          <Container >
            <Toolbar >
              <div className={classes.navbarContain}>
                <div className={classes.topbar}>
                  <div className={classes.topbarTextContain}>
                    <p className={classes.topbarText}>Scam/Phishing verification</p>
                    <p className={classes.topbarText} style={{ color: '#01D2C4' }}>http://x-leverage</p>
                  </div>
                </div>
                <div className={classes.mainNavbar}>
                  <img src={logobanner} className={classes.logo} onClick={() => {
                    navigate('/');
                  }} />
                  <div className={classes.mainNavbarRightSide}>
                    {/* <BsNavbar.Toggle aria-controls='responsive-navbar-nav' style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', color: 'white' }} >
                      <BsFillMenuButtonWideFill />
                    </BsNavbar.Toggle> */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} className={classes.menu}>
                      <Nav className='ml-auto'>
                        <Link to={routeNames.trade}>
                          <div className={classes.bannerFont}>Trade</div>
                        </Link>
                        <Link to={routeNames.swap}>
                          <div className={classes.bannerFont}>Swap</div>
                        </Link>
                        <Link to={routeNames.lending}>
                          <div className={classes.bannerFont}>Lending & Borrowing</div>
                        </Link>
                        <Link to={routeNames.activity}>
                          <div className={classes.bannerFont}>My Activity</div>
                        </Link>
                      </Nav>
                    </Box>

                    {isLoggedIn ? (
                      <NavItem>
                        <div className='eg-btn btn--primary2 capsule btn--md' style={{ cursor: 'pointer' }} onClick={handleLogout}>
                          <BannerButton />
                        </div>
                      </NavItem>
                    ) : (
                      <Nav.Link href={routeNames.home}>
                        <div className='eg-btn btn--primary2 capsule btn--md' style={{ cursor: 'pointer' }}>
                          <BannerButton />
                        </div>
                      </Nav.Link>
                    )}
                  </div>
                  {/* <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' }, color: 'black !important', width: '1rem', height: '1rem' }}
                  >
                    <Menu />
                  </IconButton> */}
                </div>
              </div>
            </Toolbar>
          </Container>
          {/* <Box component="nav">
            <Drawer
              anchor='right'
              container={document.body}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' }
              }}
            >
              {drawer}
            </Drawer>
          </Box> */}
        </div>
      </AppBar>

      {/* </BsNavbar> */}

    </React.Fragment>
  );
};
