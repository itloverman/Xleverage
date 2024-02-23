import * as React from 'react';
import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        connectWalletButton: {
            display: 'flex',
            width: '100%',
            padding: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: '0',
            borderRadius: '0.625rem',
            background: '#03C7BD',
            border: 'none'
        }
    })
);
const ConnectWalletBtn = () => {
    const classes = useStyles();

    return (
        <button className={classes.connectWalletButton}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                Connect Wallet
            </div>
        </button>
    );
};

export default ConnectWalletBtn;