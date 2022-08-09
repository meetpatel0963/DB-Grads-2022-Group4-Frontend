import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useState, useEffect } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errors:{
        color: "red",
        marginTop: "-20px",
        marginLeft: "10px",
        marginBottom: "-0px",
    },
}));

export default function Editsecurity() {
    const classes = useStyles();

    const [isin, setIsin] = useState("");
    const [cusip, setCusip] = useState("");
    const [issuer, setIssuer] = useState("");
    const [maturitydate, setMaturitydate] = useState("");
    const [coupon, setCoupon] = useState("");
    const [type, setType] = useState("");
    const [facevalue, setFacevalue] = useState("");
    const [status, setStatus] = useState("");
    
    const [security, setSecurity] = useState({});
    let ID = useParams();
    const getsecurity = async () => {
        const security_fetch = await axios.get(`${process.env.REACT_APP_URL}/`);
        setSecurity(security_fetch.data);
        setIsin(security_fetch.data.isin);
        setCusip(security_fetch.data.cusip);
        setIssuer(security_fetch.data.issuer);
        setMaturitydate(security_fetch.data.maturitydate);
        setCoupon(security_fetch.data.coupon);
        setType(security_fetch.data.type);
        setFacevalue(security_fetch.data.facevalue);
        setStatus(security_fetch.data.status);
    }
    useEffect(() => {
        getsecurity();
    }, []);

    async function editsecurity(e) {
        e.preventDefault();
        // setErrors(validateLoginInfo(values));
        try {
            const securityData = {
                isin, cusip, issuer, maturitydate, coupon, type, facevalue, status,
            };
            
            // const team_info = await axios.post(`${process.env.REACT_APP_URL}/`, securityData);
            // history.push(`/myteams`);
            
        } catch (err) {
            console.error(err);
        }
    }

    return (

        <form onSubmit={editsecurity} className={classes.root} noValidate>
            <div>

<TextField
    id="outlined-textarea"
    label="ISIN"
    required
    multiline
    variant="outlined"
    name="isin"
    onChange={(e) => setIsin(e.target.value)}
    value={isin}
    autoComplete="isin"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="CUSIP"
    multiline
    required
    variant="outlined"
    name="cusip"
    onChange={(e) => setCusip(e.target.value)}
    value={cusip}
    autoComplete="cusip"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="ISSUER"
    multiline
    required
    variant="outlined"
    name="issuer"
    onChange={(e) => setIssuer(e.target.value)}
    value={issuer}
    autoComplete="issuer"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="MATURITY DATE"
    multiline
    required
    variant="outlined"
    name="maturitydate"
    onChange={(e) => setMaturitydate(e.target.value)}
    value={maturitydate}
    autoComplete="maturitydate"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="COUPON"
    multiline
    required
    variant="outlined"
    name="coupon"
    onChange={(e) => setCoupon(e.target.value)}
    value={cusip}
    autoComplete="coupon"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="TYPE"
    multiline
    required
    variant="outlined"
    name="type"
    onChange={(e) => setType(e.target.value)}
    value={type}
    autoComplete="type"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="FACE VALUE"
    multiline
    required
    variant="outlined"
    name="facevalue"
    onChange={(e) => setFacevalue(e.target.value)}
    value={facevalue}
    autoComplete="facevalue"
/>
</div>
<div>
<TextField
    id="outlined-textarea"
    label="STATUS"
    multiline
    required
    variant="outlined"
    name="status"
    onChange={(e) => setStatus(e.target.value)}
    value={status}
    autoComplete="status"
/>
</div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Update Security
            </Button>

        </form>

    );
}