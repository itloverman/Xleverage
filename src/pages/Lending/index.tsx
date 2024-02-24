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
import LendFormContain from 'components/LendFormContain';
import LendingTableRow from 'components/LendingTableRow';
import BorrowingTableRow from 'components/BorrowingTableRow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
      minHeight: '115vh',
      backgroundColor: '#000210',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '170vh',
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
        height: '300px'
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
        display: 'flex',
        flexDirection: 'column',
        height: '159vh',
      }
    },
    dialogComplex: {
      paddingTop: '3rem',
      [theme.breakpoints.down('sm')]: {
        paddingTop: 'unset',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    dialog: {
      width: '100%',
      height: '85vh',
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
        background: 'none',
      }
    },
    titleTextMobile: {
      color: '#FFF',
      /* Typography/Button 2 */
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.25rem',
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
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
    tabsStyle: {
      border: '0.3px solid #1D2025',
      borderRadius: '0.5rem'
    },
    walletButton: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%'
    },
    lendingTableComplex: {
      paddingTop: '3rem'
    },
    lendingTable: {
      width: '100%',
      height: '85vh',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 5, 18, 0.60)',
      padding: '1.5rem 0rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      overflow: 'auto',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        background: 'none',
        padding: '0.5rem 1.25rem',
        height: '60vh',
      }
    },
    lendingTableHeader: {
      color: '#23F7DD',
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.25rem', /* 200% */
      padding: '0.5rem 2rem',
      [theme.breakpoints.down('sm')]: {
        padding: '0rem'
      }
    },
    lendingTableContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    dialogHeader: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
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


const LendingPage = () => {

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
  const [navigatePage, setNavigatePage] = React.useState('lend');

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
                {/* leftspace */}
              </div>
              <div className={classes.dialogComplex}>
                <MenuButton />
                <div className={classes.dialog}>
                  <div className={classes.dialogHeader}>
                    <div className={classes.titleText}>Choose token</div>
                    <div className={classes.titleTextMobile}>Token</div>
                    <SelectBox />
                  </div>
                  <Box className={classes.dialogContain}>
                    <Box>
                      <Tabs value={value} onChange={handleTabChange} aria-label="icon position tabs example"
                        sx={{
                          '& button.Mui-selected': {
                            backgroundColor: '#03C7BD', color: 'black', border: '0.5px solid rgba(0, 0, 0, 0.04)',
                            borderRadius: '0.4rem'
                          },
                          '& button': {
                            color: 'white', backgroundColor: '#080D1C', textTransform: 'capitalize', fontFamily: 'SF Pro Text', height: '3.5rem !important',
                            minHeight: 'unset !important', fontSize: '1rem', fontStyle: 'normal', fontWeight: '600', lineHeight: '1.25rem',
                          }
                        }} className={classes.tabsStyle}>
                        <Tab icon={<ArrowDropUpIcon />} iconPosition="end" label="Lend" sx={{ width: '50%' }} />
                        <Tab icon={<ArrowDropDownIcon />} iconPosition="end" label="Borrow" sx={{ width: '50%' }} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0} >
                      <LendFormContain />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <LendFormContain />
                    </CustomTabPanel>
                  </Box>
                  <div className={classes.walletButton}>
                    <ConnectWalletBtn />
                  </div>
                </div>
              </div>
              <div className={classes.lendingTableComplex}>
                <div className={classes.lendingTable}>
                  {/* className={classes.lendingPart} */}
                  <div className={classes.lendingTableContent}>
                    <div className={classes.lendingTableHeader}>
                      Lending Orders
                    </div>
                    <LendingTableRow />
                    <LendingTableRow />
                    <LendingTableRow />
                    <LendingTableRow />
                  </div>
                  {/* className={classes.borrowingPart} */}
                  <div className={classes.lendingTableContent}>
                    <div className={classes.lendingTableHeader} style={{ color: '#FF3A69' }}>
                      Borrowing Orders
                    </div>
                    <BorrowingTableRow />
                    <BorrowingTableRow />
                    <BorrowingTableRow />
                    <BorrowingTableRow />
                  </div>
                </div>
              </div>
              <div>
                {/* rightspace */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lending = () => (
  <LendingPage />
);
