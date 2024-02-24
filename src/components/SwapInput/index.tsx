import React, { useContext, useEffect, useState, useRef, } from 'react';
import { useGetAccount, useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { createStyles, makeStyles } from '@mui/styles';
import VectorMark from 'assets/img/VectorMark.svg';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, Stack, } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Dropdown } from 'react-bootstrap';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        inputBoxContainer: {
            display: 'grid',
            gridTemplateColumns: '8fr 3.5fr',
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
        inputBar: {
            background: '#080D1C !important',
            border: 'unset',
            width: '100%',
            textAlign: 'left',
            color: 'white',
            fontSize: '1.2rem',
            fontFamily: 'Inter',
            '&:focus-visible': {
                outline: 'unset !important',
            },
        },
        descriptionText: {
            color: '#6A6A6A',
            fontVariantNumeric: 'lining- nums proportional - nums',
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: '1rem',
            margin: 'unset !important'
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
        egldText: {
            fontSize: '1.3rem',
            margin: 'unset !important',
            color: 'white !important'
        },
        swapDropDown: {
            background: '#000515 !important',
            minWidth: '8rem !important'
        },
        swapDropDownItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.3rem',
            justifyContent: 'center',
            '&:hover': {
                background: '#080D1C !important'
            }
        },
        swapSelectContain: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    })
);



const SwapInput = () => {

    const classes = useStyles();
    const [inputAmount, setInputAmount] = useState('');
    const [selectedToken, setSelectedToken] = React.useState('');
    const [flag, setFlag] = useState(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount(event.target.value);
        setFlag(true);
    };
    const handleSelectedToken = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setSelectedToken(value);
    };

    return (
        <div className={classes.inputBoxContainer}>
            <div>
                <input type='text' placeholder='0' className={classes.inputBar} value={selectedToken} onChange={handleInputChange}>
                </input>
                <div className={classes.descriptionText}>~$4,350</div>
            </div>
            <Dropdown className={classes.swapSelectContain} align='end'>
                <Dropdown.Toggle>
                    <div className='d-flex' >
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <div className={classes.egldText}>EGLD</div>
                        </div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={classes.swapDropDown}>
                    <Dropdown.Item className={classes.swapDropDownItem}>
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <div className={classes.egldText}>EGLD</div>
                            <div className={classes.descriptionText} style={{ fontSize: '0.75rem' }}>41,0862</div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={classes.swapDropDownItem}>
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <div className={classes.egldText}>EGLD</div>
                            <div className={classes.descriptionText} style={{ fontSize: '0.75rem' }}>41,0862</div>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <FormControl sx={{width:'100%'}}>
                <Select
                    value={selectedToken}
                    onChange={handleSelectedToken}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    className={classes.selectbox} 
                >
                    <MenuItem value="" className={classes.menuItem} style={{display:'none'}}>
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <div className={classes.egldText}>EGLD</div>
                            <div className={classes.descriptionText} style={{ fontSize: '0.75rem' }}>41,0862</div>
                        </div>
                    </MenuItem>
                    <MenuItem value="41,0862" className={classes.menuItem}>
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <p className={classes.egldText}>EGLD</p>
                            <p className={classes.descriptionText} style={{ fontSize: '0.75rem', display:'none'}}>41,0862</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="41,0862ss" className={classes.menuItem}>
                        <div>
                            <img src={VectorMark} className={classes.icon}></img>
                        </div>
                        <div>
                            <p className={classes.egldText}>EGLD</p>
                            <p className={classes.descriptionText} style={{ fontSize: '0.75rem' }}>41,0862</p>
                        </div>
                    </MenuItem>
                </Select>
            </FormControl> */}
        </div>
    );
};

export default SwapInput;