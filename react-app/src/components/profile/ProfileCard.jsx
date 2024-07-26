import React from 'react';

import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  LinkedIn, 
  GitHub, 
  Email
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

import profile from './data/profile';

 
const theme = createTheme({
  components: {
    MuiPaper: {
      variants: [
        {
          props: {
            variant: 'card',
          },
          style: { 
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '20px',
            boxShadow:
              'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            backgroundColor:'white',
            WebKitCSSMatrix: 'center',
            alignItems: 'center',
            color: 'black', 
            width: '25%', 
            padding: '16px 24px',
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'name',
          },
          style: {
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontSize: '2.375rem',
            fontWeight: 600,
            fontFamily: 'ShamansFuthark',
            color: 'black',
          },
        },
        {
          props: {
            variant: 'email-id',
          },
          style: {
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter, sans-serif, ShamansFuthark',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            color: 'black',
          },
        },
        {
          props: {
            variant: 'dept',
          },
          style: {
            margin: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter sans-serif ShamansFuthark',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.43',
            color: 'grey',
          },
        },
        {
          props: {
            variant: 'location',
          },
          style: {
            margin: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            fontFamily: 'Inter sans-serif ShamansFuthark',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.43',
            color: 'grey',
          },
        },

      ],
    },

   
  },
});

const ProfileCard = () => {
  return (
    <Grid item xs={12}>
      <ThemeProvider theme={theme}>
        <Paper elevation={6} padding={3} variant='card'>
          <Box>
            <Box> 
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{profile.name.charAt(0)}</Avatar>
            </Box>

            <Box>
              <Typography marginTop={2} marginRight={0} variant='name' component={'h2'}>
                {profile.name}
              </Typography>
            </Box>
            <Box>
              <Typography variant='email-id'>{profile.email}</Typography>
            </Box>
            <Box>
              <Typography variant='dept'>
                {profile.dept}
              </Typography>
            </Box>
            <Box>
              <Typography variant='location'>{profile.location}</Typography>
            </Box>
             
            <Box marginTop={1}  >
              <LinkedIn />
              <GitHub />   
              <Email />
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default ProfileCard;