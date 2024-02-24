import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { createStyles, makeStyles } from '@mui/styles';
import gradientCircle from 'assets/img/Eclipse.svg';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import VectorMark from 'assets/img/VectorMark.svg';
import MenuButton from 'components/MenuButton';
import clsx from 'clsx';
import {
  useNavigate
} from 'react-router-dom';

import './index.scss';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    homeContainer: {
      marginTop: '-5.5rem',
      minHeight: '110vh',
      backgroundColor: '#000210',
      width: '100%',
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
      gap: '1rem',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        gap: '0rem',
        flexDirection: 'column',
        alignItems: 'center',
      }
    },
    walletButton: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%'
    },
    activityContainer: {
      marginTop: '3rem',
      height: '100%',
      borderRadius: '0.625rem',
      border: '0.5px solid #1D2025',
      background: 'rgba(0, 5, 18, 0.60)',
      padding: '1.5rem 2rem ',
      gap: '2rem',
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      overflow: 'auto',
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        background: 'none',
        padding: 'unset',
        paddingLeft: '2rem',
        width: '100%',
        marginTop: '1.5rem',
      }
    },
    toogleCustomBtn: {
      width: '6rem',
      height: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        width: '5rem',
      }
    },
    toogleButtonGroup: {
      borderRadius: '0.6rem !important',
      border: '0.1px solid #1D2025 !important',
      background: '#000515',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '1.25rem !important',
        backgroundColor: '#000515'
      }
    },
    activityTableHeader: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    titleFont: {
      color: '#FFF',
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontHeight: '500',
      lineHeight: '2.25rem', /* 200% */
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    commonTableFont: {
      color: '#FFF',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontHeight: '500',
      lineHeight: '2.25rem', /* 400% */
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    filterPart: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    tableBorrowRow: {
      background: '#1D0606 !important'
    },
    lendingText: {
      color: '#03C7BD !important',
      fontWeight: '700',
    },
    borrowingText: {
      color: '#C60047 !important',
      fontWeight: '700',
    },
    statusText: {
      color: '#08F6F1 !important',
      fontSize: '1.2rem',
      fontWeight: '500',
      [theme.breakpoints.down('sm')]: {
      }
    },
    amountCell: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.3rem',
      [theme.breakpoints.down('sm')]: {
      }
    },
    mobileRemove: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
  })
);

const ActivityPage = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const [alignment, setAlignment] = React.useState('web');
  const handleChangeToogle = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const [navigatePage, setNavigatePage] = React.useState('activity');
  const handleChangePageForMobile = (
    event: React.MouseEvent<HTMLElement>,
    newNavigatePage: string,
  ) => {
    setNavigatePage(newNavigatePage);
  };

  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className='row w-100'>
        <div className='col-12 col-md-8 col-lg-12 mx-auto'>
          <div className={classes.homeContainer}>
            <div className={classes.firstLayer}>
              <div className={classes.gradientCircleContain}>
                <img src={gradientCircle} className={classes.gradientTopCircle}></img>
              </div>
            </div>
            <div className={classes.secondLayer}>
              <MenuButton />
              <div className={clsx(classes.activityContainer, 'activityContain')}>
                <div className={classes.activityTableHeader}>
                  <div className={classes.titleFont}>My Activity</div>
                  <div className={classes.filterPart}>
                    <div className={classes.commonTableFont}>Filters</div>
                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChangeToogle}
                      aria-label="Platform"
                      className={classes.toogleButtonGroup}
                      sx={{
                        '& button.Mui-selected': {
                          borderRadius: '0.6rem !important',
                          background: '#013D3C !important', color: 'white',
                        },
                        '& button': {
                          color: 'white', backgroundColor: '#000515', textTransform: 'capitalize'
                        },
                      }}
                    >
                      <ToggleButton value="web" className={classes.toogleCustomBtn}>All</ToggleButton>
                      <ToggleButton value="default" className={classes.toogleCustomBtn}>Active</ToggleButton>
                      <ToggleButton value="android" className={classes.toogleCustomBtn}>Inactive</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <div className='activityTable'>
                  <table>
                    <tr>
                      <th></th>
                      <th>Data Create</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Liq. at</th>
                      <th>APR</th>
                      <th>Time Left</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td style={{ color: '#868686' }}>1</td>
                      <td>21.01.2024 - 22:55:25</td>
                      <td className={classes.lendingText}>Lending</td>
                      <td className={classes.amountCell}>
                        101
                        <img src={VectorMark}></img>
                      </td>
                      <td>-</td>
                      <td>20.02%</td>
                      <td>20 Days</td>
                      <td className={classes.statusText}>Open</td>
                    </tr>
                    <tr>
                      <td style={{ color: '#868686' }}>1</td>
                      <td>21.01.2024 - 22:55:25</td>
                      <td className={classes.lendingText}>Lending</td>
                      <td className={classes.amountCell}>
                        101
                        <img src={VectorMark}></img>
                      </td>
                      <td>-</td>
                      <td>20.02%</td>
                      <td>20 Days</td>
                      <td className={classes.statusText}>Open</td>
                    </tr>
                    <tr className={classes.tableBorrowRow}>
                      <td style={{ color: '#868686' }}>1</td>
                      <td>21.01.2024 - 22:55:25</td>
                      <td className={classes.borrowingText}>Borrow</td>
                      <td className={classes.amountCell}>
                        101
                        <img src={VectorMark}></img>
                      </td>
                      <td>$50.48</td>
                      <td>20.02%</td>
                      <td>20 Days</td>
                      <td className={classes.statusText}>Open</td>
                    </tr>
                    <tr>
                      <td style={{ color: '#868686' }}>1</td>
                      <td>21.01.2024 - 22:55:25</td>
                      <td className={classes.lendingText}>Lending</td>
                      <td className={classes.amountCell}>
                        101
                        <img src={VectorMark}></img>
                      </td>
                      <td>-</td>
                      <td>20.02%</td>
                      <td>20 Days</td>
                      <td className={classes.statusText}>Open</td>
                    </tr>
                    <tr className={classes.tableBorrowRow}>
                      <td style={{ color: '#868686' }}>1</td>
                      <td>21.01.2024 - 22:55:25</td>
                      <td className={classes.borrowingText}>Borrow</td>
                      <td className={classes.amountCell}>
                        101
                        <img src={VectorMark}></img>
                      </td>
                      <td>$50.48</td>
                      <td>20.02%</td>
                      <td>20 Days</td>
                      <td className={classes.statusText}>Open</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div>
                {/* rightspace */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export const Activity = () => (
  <ActivityPage />
);
