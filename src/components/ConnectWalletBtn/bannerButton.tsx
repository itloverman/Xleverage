import React, { useEffect, useState, useContext } from 'react';

import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { createStyles, makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme: any) =>
    createStyles({
        bannerButtonStyle: {
            display: 'flex',
            // width: '180px',
            // height: '50px',
            padding: '19px 34px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: '0',
            borderRadius: '0.5rem',
            color: 'white',
            background: 'transparent linear-gradient(95deg, #131417 - 16.42 %, rgba(16, 77, 133, 0.00) 108.33 %)',
            // backgroundImage: 'linear-gradient(94.68deg, #131417 -16.42%, rgba(16, 77, 133, 0) 108.33%), linear-gradient(0deg, #1B1B1B, #1B1B1B)',
            backgroundClip: 'text',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            textAlign: 'center',
            leadingTrim: 'both',
            textEdge: 'cap',
            fontFamily: 'Inter',
            fontSize: '0.8rem',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '0.8rem', /* 17px */
            textTransform: 'uppercase',
            border: '0.2px solid #1B1B1B',
            gap: '1.5rem',
            [theme.breakpoints.down('sm')]: {
                display: 'block',
                fontSize: '0.7rem',
                padding: '0.9rem 1.4rem',
            }
        }
    })
);
const BannerButton = () => {
    const classes = useStyles();

    const { address, balance } = useGetAccount();
    const isLoggedIn = useGetIsLoggedIn();

    return (
        <button className={classes.bannerButtonStyle}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {isLoggedIn ? 'Disconnect' : 'Connect Wallet'}
            </div>
        </button>
    );
};

export default BannerButton;