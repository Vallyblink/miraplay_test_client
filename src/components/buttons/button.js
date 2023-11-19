import * as React from 'react';
import Button from '@mui/material/Button';

export const ButtonWithoutIcon = ({ title, onClick, type, disabled }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      sx={{
        display: 'flex',
        color: 'var(--btn-text-color)',
        background: 'var(--button-bg-color)',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        marginTop: '10px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        // background: '#BEDBB0',

        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '49px',
        '&:hover': {
          background: 'var(--button-bg-color-hover)',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: 'var(--btn-text-color)',
          opacity: '0.6',
          '&:hover': {
            background: 'var(--button-bg-color)',
            color: 'var(--btn-text-color)',
          },
        },
      }}
    >
      {title}
    </Button>
  );
};

export const ButtonAuth = ({ title, onClick, type, disabled }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      sx={{
        display: 'flex',
        color: '#161616',
        background: '#bedbb0',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        marginTop: '10px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        // background: '#BEDBB0',

        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '49px',
        '&:hover': {
          background: '#9DC888',
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
};
