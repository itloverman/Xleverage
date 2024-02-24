import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { createStyles, makeStyles } from '@mui/styles';
import gradientCircle from 'assets/img/Eclipse.svg';
import ConnectWalletBtn from 'components/ConnectWalletBtn';
import SelectBox from 'components/SelectBox';
import { Box, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TradeFormContain from 'components/TradeFormContain';
import Chart from 'assets/img/chart.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {
  useNavigate
} from 'react-router-dom';
import MenuButton from 'components/MenuButton';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    homeContainer: {
      marginTop: '-5.5rem',
      height: '120vh',
      backgroundColor: '#000210',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: '115vh',
        width: '100%',
        marginTop: '-4.5rem',
      }
    },
    firstLayer: {
      position: 'absolute',
      width: '100%',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    gradientTopCircle: {
      position: 'absolute',
      opacity: '100%',
      width: '80%',
      height: '800px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height:'300px'
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
      justifyContent: 'center',
      left: '0',
      right: '0',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 8fr 1fr',
      gap: '1rem',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gridTemplateColumns: '1fr',
        height: '80vh',
      }
    },
    dialogComplex: {
      paddingTop: '3rem',
      [theme.breakpoints.down('sm')]: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop: '0rem',
      }
    },
    dialog: {
      width: '100%',
      flexShrink: '0',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 5, 18, 0.60)',
      // background: 'var(--text-background-dark-1, #141415)',
      padding: '1.5rem',
      display: 'grid',
      gridTemplateRows: '1fr 10fr 1.5fr',
      gap: '1rem',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        background: 'unset',
        gridTemplateRows: '0.5fr 4.5fr 0.5fr',
      }
    },
    titleText: {
      color: '#8C8C8C',
      /* Typography/Button 2 */
      fontFamily: 'Inter',
      fontSize: '0.9rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.25rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
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
      gap: '0.5rem'
    },
    dialogContain: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    tradeFormHeader: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    },
    tabsStyle: {
      border: '0.3px solid #1D2025',
      borderRadius: '0.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    chartComplex: {
      display: 'grid',
      gridTemplateRows: '7fr 3fr',
      paddingTop: '3rem',
      gap: '1rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    walletButton: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%'
    },
    logContain: {
      width: '100%',
      height: '100%',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 0, 0, 0.60)',
      padding: '0.5rem 1.5rem'
    },
    logContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    chartContain: {
      width: '100%',
      height: '100%',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 5, 18, 0.60)',
      display: 'grid',
      gridTemplateRows: '1fr 6.5fr'
    },
    chartImg: {
      width: '100%',
      height: '100%'
    },
    chartHeader: {
      borderBottom: '1px solid #1D2025',
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    chartHeaderChildTextBox: {
      display: 'flex',
      flexDirection: 'column',
      color: 'white'
    },
    chartHeaderDesciprtColor: {
      color: '#8C8C8C'
    },
    mobileRemove: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    }
  })
);


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TradePage = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [logTabValue, setLogTabValue] = React.useState(0);
  const handleLogTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setLogTabValue(newValue);
  };
  const [navigatePage, setNavigatePage] = React.useState('trade');

  const handleChangePageForMobile = (
    event: React.MouseEvent<HTMLElement>,
    newNavigatePage: string,
  ) => {
    setNavigatePage(newNavigatePage);
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
              <div className={classes.mobileRemove}>
              </div>
              <div className={classes.dialogComplex}>
                <MenuButton/>
                <div className={classes.dialog}>
                  <div className={classes.tradeFormHeader}>
                    <div className={classes.titleText}>Trade </div>
                    <SelectBox />
                  </div>
                  <Box className={classes.dialogContain}>
                    <Box>
                      <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example"
                        sx={{ 
                          '& button.Mui-selected': { backgroundColor: '#03C7BD', color: 'black', border: '0.5px solid rgba(0, 0, 0, 0.04)',
                            borderRadius: '0.4rem' },
                          '& button': { color: 'white', backgroundColor: '#080D1C', textTransform: 'capitalize', fontFamily: 'SF Pro Text',
                            fontSize: '1rem', fontStyle: 'normal', fontWeight: '600', lineHeight: '1.25rem' }  
                        }} className={classes.tabsStyle}>
                        <Tab label="Long" sx={{ width: '50%' }} />
                        <Tab label="Short" sx={{ width: '50%' }} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0} >
                      <TradeFormContain />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <TradeFormContain />
                    </CustomTabPanel>
                  </Box>
                  <div className={classes.walletButton}>
                    <ConnectWalletBtn />
                  </div>
                </div>
              </div>
              <div className={classes.chartComplex}>
                <div className={classes.chartContain}>
                  <div className={classes.chartHeader}>
                    <SelectBox />
                    <div className={classes.chartHeaderChildTextBox}>
                      <div style={{ color: '#08F6F1' }}>+1.54%</div>
                      <div>$50.24</div>
                    </div>
                    <div className={classes.chartHeaderChildTextBox}>
                      <div className={classes.chartHeaderDesciprtColor}>24h HIGH</div>
                      <div>0,025410</div>
                    </div>
                    <div className={classes.chartHeaderChildTextBox}>
                      <div className={classes.chartHeaderDesciprtColor}>24h LOW</div>
                      <div>0,023410</div>
                    </div>
                    <div className={classes.chartHeaderChildTextBox}>
                      <div className={classes.chartHeaderDesciprtColor}>Open Interest</div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div className={classes.chartHeaderDesciprtColor}>(L)</div>
                        4K/60K
                        <div className={classes.chartHeaderDesciprtColor}>(S)</div>
                        2K/60K
                      </div>
                    </div>
                    <div className={classes.chartHeaderChildTextBox}>
                      <div className={classes.chartHeaderDesciprtColor}>Borrow Rate</div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div className={classes.chartHeaderDesciprtColor}>(L)</div>
                        0.0050%
                        <div className={classes.chartHeaderDesciprtColor}>(S)</div>
                        0.0002%
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Chart} className={classes.chartImg}></img>
                  </div>
                </div>
                <div className={classes.logContain}>
                  <Tabs value={logTabValue} onChange={handleLogTabChange} aria-label="basic tabs example"
                    sx={{
                      '& button.Mui-selected': {
                        color: 'white'
                      },
                      '& button': {
                        color: '#666', textTransform: 'capitalize'
                      }
                    }}>
                    <Tab label="Open Positions(0)" />
                    <Tab label="Open Positions(0)" />
                    <Tab label="Closed Positions(0)" />
                    <Tab label="Trade Activities(0)" />
                  </Tabs>
                  <CustomTabPanel value={logTabValue} index={0}>
                    <div className={classes.logContent}>
                      <div style={{ padding: '3rem', color: '#666' }}>No open positions</div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={logTabValue} index={1}>
                  </CustomTabPanel>
                  <CustomTabPanel value={logTabValue} index={2}>
                  </CustomTabPanel>
                  <CustomTabPanel value={logTabValue} index={3}>
                  </CustomTabPanel>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Trade = () => (
  <TradePage />
);
