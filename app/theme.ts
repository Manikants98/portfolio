import { createTheme, ThemeOptions } from '@mui/material/styles';

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'inherit',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E5E7EB',
            },
            '&:hover fieldset': {
              borderColor: '#E5E7EB',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#108a00',
            },
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#108a00',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
    divider: 'rgba(0, 0, 0, 0.5)',
  },
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#15aa01',
    },
    background: {
      default: '#111827',
      paper: '#1f2937',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
    },
    divider: 'rgba(0, 0, 0, 1)',
  },
});
