import type { Theme, ThemeOptions } from '@mui/material/styles';

const Alert = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiAlert: {
      defaultProps: {
        square: true,
        variant: 'standard',
      },
      styleOverrides: {
        standardInfo: {
          color: '#055160',
          backgroundColor: '#cff4fc',
          border: '1px solid transparent',
          borderColor: '#b6effb',
          '& .MuiAlert-icon': {
            color: 'inherit',
          },
        },
        standardSuccess: {
          color: '#155724',
          backgroundColor: '#d4edda',
          border: '1px solid transparent',
          borderColor: '#c3e6cb',
          '& .MuiAlert-icon': {
            color: 'inherit',
          },
        },
        standardWarning: {
          color: '#664d03',
          backgroundColor: '#fff3cd',
          border: '1px solid transparent',
          borderColor: '#ffecb5',
          '& .MuiAlert-icon': {
            color: 'inherit',
          },
        },
        standardError: {
          color: '#721c24',
          backgroundColor: '#f8d7da',
          border: '1px solid transparent',
          borderColor: '#f5c6cb',
          '& .MuiAlert-icon': {
            color: 'inherit',
          },
        },
      },
    },
  };
};

export default Alert;
