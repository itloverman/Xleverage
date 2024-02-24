import React, { useContext, useEffect, useState, useRef, } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { FormControl, Stack, } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        tradeFormContain: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        input: {
            width: '100%',
            borderRadius: '0.6rem',
            border: '0.2px solid #323232',
            background: '#080D1C',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
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
            width: '50%',
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
        triggerInput: {
            background: '#000515 !important',
            border: 'unset',
            minWidth: '4rem',
            width: 'fit-content',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '2.25rem', /* 180% */
            fontFamily: 'Inter',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            '&:focus-visible': {
                outline: 'unset !important',
            },
        },
        dataList: {
            color: 'white',
            width: '100%',
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '2.25rem', /* 300% */
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #1F2328',
        },
        dataListChild: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        tradeFormLabel: {
            width: '100%',
            borderRadius: '0.625rem',
            border: '0.2px solid #323232',
            background: '#080D1C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.8rem 1.5rem',
            color: 'white',
        },
        profitLabel: {
            width: '100%',
            borderRadius: '0.625rem',
            border: '0.2px solid #323232',
            background: '#080D1C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.8rem 1.5rem',
            color: 'white',
            marginBottom: '5rem',
            [theme.breakpoints.down('sm')]: {
                marginBottom: 'unset'
            }
        },
        labelContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
        },
        triggerPriceInput: {
            width: '100%',
            borderRadius: '0.625rem',
            border: '0.1px solid #08F6F1',
            background: '#000515',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1.5rem',
            marginBottom: '1rem'
        }
    })
);

const marks = [
    {
        value: 0,
        label: '',
    },
    {
        value: 10,
        label: '2x',
    },
    {
        value: 20,
        label: '3x',
    },
    {
        value: 30,
        label: '4x',
    },
    {
        value: 40,
        label: '5x',
    },
    {
        value: 50,
        label: '6x',
    },
    {
        value: 60,
        label: '7x',
    },
    {
        value: 70,
        label: '8x',
    },
    {
        value: 80,
        label: '9x',
    },
    {
        value: 90,
        label: '10x',
    },
    {
        value: 100,
        label: '11x',
    },
    {
        value: 110,
        label: '12x',
    },
];

function valuetext(value: number) {
    return `${value}x`;
}

const TradeFormContain = () => {

    const classes = useStyles();
    const [inputAmount, setInputAmount] = useState('');
    const [inputTriggerPrice, setInputTriggerPrice] = useState('');
    const [flag, setFlag] = useState(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount(event.target.value);
        setFlag(true);
    };
    const handleTriggerPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTriggerPrice(event.target.value);
        setFlag(true);
    };

    return (
        <div className={classes.tradeFormContain}>
            <div className={classes.input}>
                <div className={classes.explainText}>Collateral in ONE</div>
                <input type='text' placeholder='0.0' className={classes.inputBar} value={inputAmount} onChange={handleInputChange}>
                </input>
            </div>
            <Box sx={{ width: '100%' }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    max={110}
                    sx={{
                        color: '#1F2328',
                        '& .MuiSlider-thumb': {
                            background: '#03C7BD !important',
                            width: '1rem !important',
                            height: '1rem !important'
                        },
                        '& .MuiSlider-rail': {
                            borderRadius: '1.74394rem !important',
                            background: '#1F2328 !important'
                        },
                        '& .MuiSlider-track': {
                            borderRadius: '1.74394rem !important',
                            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) -20.66%, #03C7BD 99.19%) !important',
                            height: '0.5rem !important'
                        },
                        '& .MuiSlider-markLabel': {
                            color: '#7B7B7B !important'
                        },
                        '& .MuiSlider-mark': {
                            backgroundColor: 'unset !important'
                        },
                    }}
                />
            </Box>
            <div className={classes.dataList}>
                <div className={classes.dataListChild}>
                    <div>Pos.Size</div>
                    <div>$0</div>
                </div>
                <div className={classes.dataListChild}>
                    <div>Pos.Qty</div>
                    <div>0 EGLD</div>
                </div>
                <div className={classes.dataListChild}>
                    <div>Current Price</div>
                    <div>$50.45</div>
                </div>
                <div className={classes.dataListChild}>
                    <div>Liq.Price</div>
                    <div>$0.00</div>
                </div>
                <div className={classes.dataListChild}>
                    <div>Open Pos.Fees (0.0800%)</div>
                    <div>$0</div>
                </div>
                <div className={classes.dataListChild}>
                    <div>Spread</div>
                    <div>0.000%</div>
                </div>
            </div>
            <div className={classes.labelContainer}>
                <div className={classes.tradeFormLabel}>
                    <div>Take Profit</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M10.3333 5.66669L5.66667 1.00002L1 5.66669" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className={classes.triggerPriceInput}>
                    <input type='text' placeholder='Trigger price in ONE' className={classes.triggerInput} value={inputTriggerPrice} onChange={handleTriggerPriceChange}>
                    </input>
                    <div style={{ color: '#08F6F1', display: 'flex', alignItems: 'center' }}>Set</div>
                </div>
                <div className={classes.profitLabel}>
                    <div>Stop Loss</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M10.3333 1L5.66667 5.66667L1 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TradeFormContain;