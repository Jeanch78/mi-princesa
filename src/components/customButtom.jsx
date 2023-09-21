import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export default function CustomButtom({ clicked }) {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#FCEEF8',
        border: ' 3px solid #db3eb1',
        borderRadius: ' 15px',
        padding: '10px 25px',
        fontSize: 20,
        fontFamily: 'tahoma',
        letterSpacing: ' 5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        filter: 'drop-shadow(0 0 15px #db3eb1) drop-shadow(0 0 50px #db3eb1) contrast(2) brightness(2)',
        transition: '.5s',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#db3eb1',
            filter: 'drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(2)',
        },
    }));
    return (
        <ColorButton size="small" onClick={clicked}>COMENZAR</ColorButton>
    )
}
