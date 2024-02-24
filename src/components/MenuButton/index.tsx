import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {
    useNavigate, useLocation
} from 'react-router-dom';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        toogleMobileButtonGroup: {
            display: 'none !important',
            [theme.breakpoints.down('sm')]: {
                width: '90% !important',
                display: 'block !important',
                borderRadius: '1.25rem !important',
                border: '0.1px solid #1D2025 !important',
                background: '#000515 !important'
            }
        },
        toogleMobileCustomBtn: {
            display: 'none',
            [theme.breakpoints.down('sm')]: {
                width: '25%',
                fontSize: '0.6rem !important',
                display: 'block',
                borderRadius: '1.25rem !important',
                background: 'none !important',
                marginLeft: 'unset !important'
            }
        },
    })
);

const MenuButton = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <ToggleButtonGroup
            color="primary"
            value={location.pathname}
            exclusive
            aria-label="Platform"
            className={classes.toogleMobileButtonGroup}
            sx={{
                '& button.Mui-selected': {
                    backgroundColor: '#007A74 !important', color: 'white',
                },
                '& button': {
                    color: 'white', backgroundColor: '#000515', textTransform: 'capitalize'
                }
            }}
        >
            <ToggleButton value="/swap" className={classes.toogleMobileCustomBtn} onClick={() => navigate('/swap')} > Swap </ToggleButton>
            <ToggleButton value="/trade" className={classes.toogleMobileCustomBtn} onClick={() => navigate('/trade')} > Trade </ToggleButton>
            <ToggleButton value="/lending" className={classes.toogleMobileCustomBtn} onClick={() => navigate('/lending')} > Lend & Borrow </ToggleButton>
            <ToggleButton value="/activity" className={classes.toogleMobileCustomBtn} onClick={() => navigate('/activity')} > My Activity </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default MenuButton;