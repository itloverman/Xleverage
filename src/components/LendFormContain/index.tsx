import React, { useContext, useEffect, useState, useRef, } from 'react';
import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { createStyles, makeStyles } from '@mui/styles';
import VectorMark from 'assets/img/VectorMark.svg';
import { FormControl, Stack, } from '@mui/material';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        tradeFormContain: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
        },
        input: {
            width: '100%',
            borderRadius: '0.6rem',
            border: '0.2px solid #323232',
            background: '#080D1C',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem'
        },
        inputDay: {
            width: '100%',
            borderRadius: '0.6rem',
            border: '0.2px solid #323232',
            background: '#080D1C',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1.5rem'
        },
        explainText: {
            color: '#BEBEBE',
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '2.25rem' /* 300% */
        },

        inputBar: {
            background: '#080D1C !important',
            border: 'unset',
            width: '4rem',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '400',
            lineHeight: '2.25rem', /* 180% */
            fontFamily: 'Inter',
            textAlign: 'right',
            '&:focus-visible': {
                outline: 'unset !important',
            },
        },
        inputDayBox: {
            background: '#080D1C !important',
            border: 'unset',
            minWidth: '4rem',
            width: 'fit-content',
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '400',
            lineHeight: '2rem', /* 180% */
            fontFamily: 'Inter',
            textAlign: 'left',
            '&:focus-visible': {
                outline: 'unset !important',
            },
        },
        gradientText: {
            color: '#03C7BD',
            fontFamily: 'Inter',
            fontSize: '0.8rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '2.25rem' /* 400% */
        },
        inputDayComplex: {
            width: '100%'
        }
    })
);

const LendFormContain = () => {

    const classes = useStyles();
    const [inputAmount, setInputAmount] = useState('');
    const [inputDay, setInputDay] = useState('');
    const [inputApr, setInputApr] = useState('');
    const [flag, setFlag] = useState(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount(event.target.value);
        setFlag(true);
    };
    const handleDayInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDay(event.target.value);
        setFlag(true);
    };
    const handleAprInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDay(event.target.value);
        setFlag(true);
    };

    return (
        <div className={classes.tradeFormContain}>
            <div className={classes.input}>
                <div className={classes.explainText}>Amount</div>
                <div style={{ display: 'flex' }}>
                    <div className={classes.gradientText}>Max</div>
                    <input type='text' placeholder='0.0' className={classes.inputBar} value={inputAmount} onChange={handleInputChange}>
                    </input>
                </div>
            </div>
            <div className={classes.inputDayComplex}>
                <div className={classes.explainText} style={{ fontSize: '0.7rem' }}>
                    Period of lending in days:
                </div>
                <div className={classes.inputDay}>
                    <input type='text' placeholder='0.0' className={classes.inputDayBox} value={inputDay} onChange={handleDayInputChange}>
                    </input>
                </div>
            </div>
            <div className={classes.inputDayComplex}>
                <div className={classes.explainText} style={{ fontSize: '0.7rem' }}>
                    APR%
                </div>
                <div className={classes.inputDay}>
                    <input type='text' placeholder='0.0' className={classes.inputDayBox} value={inputApr} onChange={handleAprInputChange}>
                    </input>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div className={classes.explainText} style={{ color: 'white' }}>
                    Receive:
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={classes.gradientText}>
                        After your offer is matched you will have boosted
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <div className={classes.explainText} style={{ color: 'white' }}>0</div>
                        <img src={VectorMark}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LendFormContain;