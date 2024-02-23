import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import redditIcon from 'assets/img/ic_reddit.svg';
import telegramIcon from 'assets/img/ic_telegram.svg';
import discordIcon from 'assets/img/ic_discord.svg';
import twitterIcon from 'assets/img/ic_twitter.svg';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    footerText:{
      fontFamily: 'Inter',
      fontSize: '0.8rem',
      fontWeight: '500',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
      textAlign: 'left',
      margin: 'unset !important',
      color:'#9A9A9A'
    },
    footerContain:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'85%',
      alignItems:'center',
      margin: 'unset !important'
    },
    iconContain:{
      display:'flex',
      gap:'1rem',
      margin: 'unset !important'
    },
    footer:{
      backgroundColor: '#000210!important',
      display:'flex',
      justifyContent:'center',
      height:'5rem',
      width:'100%',
      margin:'unset !important',
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    },
    footerIcon:{
      height: '1.4rem', 
      width: '1.4rem', 
      padding: '0.2rem',
      cursor:'pointer'
    }
 })
);

export const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContain}>
        <p className={classes.footerText}>© 2024 X-Leverage</p>
        <div className={classes.iconContain}>
          <img src={telegramIcon} className={classes.footerIcon} onClick={() => { navigate('/'); }} />
          <img src={twitterIcon} className={classes.footerIcon} onClick={() => { navigate('/'); }} />
          <img src={discordIcon} className={classes.footerIcon} onClick={() => { navigate('/'); }} />
          <img src={redditIcon} className={classes.footerIcon} onClick={() => { navigate('/'); }} />
        </div>
      </div>
    </footer>
  );
};
