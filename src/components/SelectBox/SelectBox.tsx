import React, { useContext, useEffect, useState, useRef, } from 'react';
import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { createStyles, makeStyles } from '@mui/styles';
import { convertBigNumberValueToLocalString, convertWeiToEsdt } from 'utils';
import VectorMark from 'assets/img/VectorMark.svg';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, Stack, } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import onedexIcon from 'assets/img/one.svg';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        inputBoxContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            // alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            background: '#080D1C',
            textAlign: 'left',
            /* Typography/Button 2 */
            fontFamily: 'Inter',
            fontSize: '1.1rem',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '2.25rem', /* 171.429% */
            color: '#FFF',
            border: 'none',
            width: '100%',
            alignItems: 'center'
        },
        selectbox: {
            color: 'white !important',
            background: 'unset !important',
        },
        menuItem: {
            display: 'flex',
            alignItems: 'flex-start !important',
            gap: '0.3rem'
        },
        icon: {
            width: '1.5rem',
            height: '1rem'
        },
        onedexIcon: {
            width: '1.9rem',
            height: '1.5rem'
        },
        egldText: {
            fontSize: '1.3rem'
        },
        iconBox: {
            display: 'flex',
            gap: '0.2rem',
            alignItems: 'center',
        },

    })
);
const SelectBox = () => {

    const classes = useStyles();
    const [selectedToken, setSelectedToken] = React.useState('');
    const [flag, setFlag] = useState(false);
    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setSelectedToken(value);
    };

    return (

        <FormControl>
            <Select
                value={selectedToken}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className={classes.selectbox}
            >
                <MenuItem value="" className={classes.menuItem}>
                    <div className={classes.iconBox}>
                        <img src={VectorMark} className={classes.icon}></img>
                        <img src={onedexIcon} className={classes.onedexIcon}></img>
                    </div>
                    <div>
                        <div className={classes.egldText}>ONE / EGLD</div>
                    </div>
                </MenuItem>
                <MenuItem value="10" className={classes.menuItem}>
                    <div>
                        <img src={onedexIcon} className={classes.icon}></img>
                    </div>
                    <div>
                        <div className={classes.egldText}>ONE</div>
                    </div>
                </MenuItem>
                <MenuItem value="20" className={classes.menuItem}>
                    <div>
                        <img src={VectorMark} className={classes.icon}></img>
                    </div>
                    <div>
                        <div className={classes.egldText}>EGLD</div>
                    </div>
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectBox;