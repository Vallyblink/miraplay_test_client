import * as React from 'react';
import Button from '@mui/material/Button';

export const ButtonGenre = ({ title, active, type, onClick }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="outlined"
      sx={{
        alignItems: 'center',
        textTransform: 'uppercase',
        borderRadius: '8px',
        marginTop: '10px',
        marginBottom: '10px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '46px',
        color: '#eaeaea'  ,
        borderColor: active ? '#3f9c14': '#454545' ,
        backgroundColor: active ? '#3f9c14' : 'transparent',
        '&:hover': {
          backgroundColor: active ? '#3f9c14' : '#3f9c14',
          borderColor:'#eaeaea' ,
        },
      }}
    >
      {title}
    </Button>
  );
}

export const ButtonLoadMore = ({ title, disabled, type, onClick }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        borderRadius: '20px',
        marginTop: '10px',
        marginBottom: '10px',
        letterSpacing: '-0.02em',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '800',
        fontFamily: 'Neue Machina-Ultrabold',
        width: '379px',
        height: '78px',
        color: '#eaeaea'  ,
        borderColor: '#eaeaea' ,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: '#3f9c14',
          borderColor: '#3f9c14' ,
        },
        '&:disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: '#161616',
          opacity: '0.6',
          '&:hover': {
            background: '#bedbb0',
            color: '#161616',
          },
        },
      }}
    >
      {title}
    </Button>
  );
}



export const ButtonAuth = ({ title, onClick, type, disabled }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      sx={{
        display: 'flex',
        color: '#eaeaea',
        background: '#70a65680',
        fontFamily: 'Neue Machina-Ultrabold',
        alignItems: 'center',
        textTransform: 'uppercase',
        borderRadius: '8px',
        marginTop: '10px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '49px',
        '&:hover': {
          background: '#3f9c14;',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: '#eaeaea',
          opacity: '0.6',
          '&:hover': {
            background: '#bedbb0',
            color: '#eaeaea',
          },
        },
      }}
    >
      {title}
    </Button>
  );
};
