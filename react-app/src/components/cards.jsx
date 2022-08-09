import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CustomizedDialogs from "./Modal/editSecurityModal";
import Securityform from "./Forms/editSecurityForm";
// import Toolbar from '@material-ui/core/Toolbar';
// import collegeteam from '../../img/collegeteam.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    // image: `url(${collegeteam})`,
  },
  cardContent: {
    flexGrow: 1,
  },
  public:{
    color: 'green',
  },
  private:{
    color: 'red',
  },
  facevalue:{
    fontWeight: "bold",
  },
}));

export default function OutlinedCard({ security }) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  var securityimage = "https://cdn.ihsmarkit.com/www/blog/ra-close-up-image-of-a-stock-market-graph-Getty-1213574690-post.jpg";
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var temp;
  // console.log(dd, mm, yyyy, parseInt(security.maturitydate.substring(6, 10)), parseInt(security.maturitydate.substring(3, 5)), parseInt(security.maturitydate.substring(0, 2)))
  if(parseInt(security.maturitydate.substring(6, 10)) < yyyy) temp = "low";
  else if(parseInt(security.maturitydate.substring(6, 10)) < yyyy) temp = "high";
  else{
    if(parseInt(security.maturitydate.substring(3, 5)) < mm) temp = "low";
    else if(parseInt(security.maturitydate.substring(3, 5)) > mm) temp = "high";
    else {
      if(parseInt(security.maturitydate.substring(0, 2)) < dd) temp = "low";
      else if(parseInt(security.maturitydate.substring(0, 2)) >= dd) temp = "high";
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={securityimage}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h4">
            IISN: {security.isin}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            CUSIP: {security.cusip}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            Issuer: {security.issuer}
          </Typography>

          {temp === "low" && (
          <Typography className={classes.private} gutterBottom variant="h6" component="h4">
            Maturity Date: {security.maturitydate}
          </Typography>
          )}
          {temp === "high" && (
          <Typography className={classes.public} gutterBottom variant="h6" component="h4">
            Maturity Date: {security.maturitydate}
          </Typography>
          )}

          <Typography gutterBottom variant="h6" component="h4">
            Type: {security.type}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4" className={classes.facevalue}>
            Coupon: {security.coupon}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4" className={classes.facevalue}>
            Facevalue: ${security.facevalue}/-
          </Typography>
          
          {security.status === "To Be Done" && (
          <Typography className={classes.private} gutterBottom variant="h6" component="h4">
            Status: {security.status}
          </Typography>
          )}
          {security.status === "Completed" && (
          <Typography className={classes.public} gutterBottom variant="h6" component="h4">
            Status: {security.status}
          </Typography>
          )}
        </CardContent>
        <CardActions>
          
          <CustomizedDialogs title="Update Security">
                  <Securityform />
                </CustomizedDialogs>
          
          <Button variant="outlined" color="secondary" href={`/`}>
            Delete
          </Button>

          
        </CardActions>
      </Card>
    </Grid>
  );
}