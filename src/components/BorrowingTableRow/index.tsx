import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import egldIcon from 'assets/img/VectorMark.svg';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        lendingTableChild: {
            width: '100%',
            background: '#260017',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '1rem',
            paddingRight: '15%',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            color: '#868686',
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '1.8rem',
            [theme.breakpoints.down('sm')]: {
                borderRadius: '0.5rem'
            }
        },
        lendingTableChildText: {
            textAlign: 'center'
        },
        amountBox: {
            display: 'flex',
            color: '#FFF',
            fontWeight: '700',
            gap: '0.5rem'
        },
        lendingDisplayNumber: {
            color: '#FFF',
            fontWeight: '700'
        }
    })
);
const BorrowingTableRow = () => {
    const classes = useStyles();

    return (
        <div className={classes.lendingTableChild}>
            <div>1</div>
            <div className={classes.lendingTableChildText}>
                <div>Amount</div>
                <div className={classes.amountBox}>
                    <div>101</div>
                    <img src={egldIcon}></img>
                </div>
            </div>
            <div className={classes.lendingTableChildText}>
                <div>APR:</div>
                <div className={classes.lendingDisplayNumber}>20.02%</div>
            </div>
            <div className={classes.lendingTableChildText}>
                <div>Days Left</div>
                <div className={classes.lendingDisplayNumber}>25</div>
            </div>
        </div>
    );
};

export default BorrowingTableRow;