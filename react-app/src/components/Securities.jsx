import React from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";

import Container from "@material-ui/core/Container";
// import { useParams, useHistory } from 'react-router-dom';
// import useHistory from 'react-router-dom';

// import { useEffect, useState } from 'react';
// import useState from 'react';
// import MaterialTable from 'material-table';
// import { TextField, InputBase } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';

import { green, red } from "@material-ui/core/colors";
// import clsx from 'clsx';
// import IconButton from '@material-ui/core/IconButton';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Card from "../components/cards";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core";
import Select from "@material-ui/core";
// import filte
import MenuItem from "@material-ui/core";
import CustomizedDialogs from "./Modal/addSecurityModal";
import CustomizedDialogs2 from "./Modal/editSecurityModal";
import Securityform from "./Forms/addSecurityForm";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
    // paddingTop: '20px',
    // padding: '30px',
    padding: theme.spacing(2, 2, 6),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  rootcard: {
    // minWidth: 205,
  },
  mainheading: {
    paddingTop: '20px',
    textAlign: 'center',
  },
  head2: {
    // paddingTop: '10px',
    textAlign: 'center',
    // marginTop: "10px",
  },
  upfile: {
    // padding: '10px',
    height: '20%',
  },
  teaminfo: {
    padding: '20px',
    // padding: theme.spacing(2, 2, 6),
    // marginRight: '10px',
    borderLeft: '5px solid #5B6AD8',
    borderBottom: '5px solid #5B6AD8',
    borderTop: '5px solid #5B6AD8',
    borderRight: '2.5px solid #5B6AD8',
    borderRadius: '30px',

    // margin: '10px',
  },
  upload: {
    // marginLeft: '10px',
    padding: '20px',
    borderRadius: '20px',
    // borderLeft: '2.5px solid #5B6AD8',
    // borderBottom: '5px solid #5B6AD8',
    // borderTop: '5px solid #5B6AD8',
    // borderRight: '5px solid #5B6AD8',
    border:'5px solid blue',
    marginTop: '20px',
  },
  linkgen: {
    // padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    borderColor: 'green',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // button: {
  //   marginTop: '10px',
  //   marginRight: '10px',
  // },
  buttonsend: {
    width: '140px',
    height: '40px',
    // marginTop: '35px',
    marginRight: '20px',
    // marginLeft: '20px',
  },
  copybtn: {
    width: '115px',
    height: '40px',
    // marginTop: '35px',
    margin: '10px',
  },
  buttonrefresh: {
    marginTop: '-5px',
  },
  progress: {
    // marginTop: '30px',
    // marginRight: '10px',
    justifyContent: "center",
  },
  button1Classname: {
    marginTop: '20px',
  },

  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  
}));

export default function Securities() {
    const classes = useStyles();
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("date1", date1);
//     formData.append("date2", date2);

    // try {
    //   const res = await axios.post(
    //     `${process.env.REACT_APP_URL}/api/files/`,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
//   };

  // const history = useHistory();
  // const [securities, setSecurities] = useState([]);
  // const getSecurities = async () => {
  //   const securities_fetch = await axios.get(`${process.env.REACT_APP_URL}/list/getpublicteams`);
  //   setSecurities(securities_fetch.data);
  // }
  // useEffect(() => {
  //   getSecurities();
  // }, []);
  var cards = [];
  var securities = [
    {
      isin: 123456789,
      cusip: 123456,
      issuer: 123456,
      maturitydate: "10-08-2022",
      coupon: "10%",
      facevalue: 10000,
      type: "Bond",
      status: "Completed",
    },
    {
      isin: 123456789,
      cusip: 123456,
      issuer: 123456,
      maturitydate: "10-08-2022",
      coupon: "10%",
      facevalue: 10000,
      type: "Bond",
      status: "Completed",
    },
    {
      isin: 123456789,
      cusip: 123456,
      issuer: 123456,
      maturitydate: "10-08-2022",
      coupon: "10%",
      facevalue: 10000,
      type: "Bond",
      status: "Completed",
    },
    {
      isin: 123456789,
      cusip: 123456,
      issuer: 123456,
      maturitydate: "10-08-2022",
      coupon: "10%",
      facevalue: 10000,
      type: "Bond",
      status: "Completed",
    },
    {
      isin: 123456789,
      cusip: 123456,
      issuer: 123456,
      maturitydate: "10-08-2022",
      coupon: "10%",
      facevalue: 10000,
      type: "Bond",
      status: "Completed",
    },
  ];
  if (securities.length === 0) {
    cards.push(
      <Typography
        variant="h5"
        align="center"
        paragraph
        color="textPrimary"
        gutterBottom
      >
        No Securities Found For This Search Filter!
      </Typography>
    );
  } else {
    for (var i = 0; i < securities.length; i++) {
      cards.push(<Card security={securities[i]} />);
    }
  }

  return (
    <>
    
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          
          
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <CustomizedDialogs title="Add Security">
                  <Securityform />
                </CustomizedDialogs>
              </Grid>
              {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Main call to action
                  </Button>
                </Grid> */}
            </Grid>
          </div>
        </Container>
      </div>

      {/* <Container maxWidth="md">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={filter}
            label="Filter Choices"
            // onChange={handleChange}
          >
            <MenuItem value={"all"}>All Securities</MenuItem>
            <MenuItem value={"date"}>Securities by DateRange</MenuItem>
          </Select>
        </FormControl>
      </Container> */}

      <Container maxWidth="md">
        {/* <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Securities
        </Typography> */}
        <Grid container spacing={4}>
          {cards}
        </Grid>
      </Container>
    </>
  );
}
