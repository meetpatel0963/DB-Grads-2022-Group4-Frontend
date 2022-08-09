/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Security Information
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          Create New
        </MDButton>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            id="oliver liam"
            isin="viking burrito"
            cusip="oliver@burrito.com"
            issuer="FRB1235476"
            maturitydate="23-12-2022"
            coupon="New"
            type="Govt"
            facevalue="None"
            status=" Not matured"
          />
          <Bill
            id="oliver liam"
            isin="viking burrito"
            cusip="oliver@burrito.com"
            issuer="FRB1235476"
            maturitydate="23-12-2022"
            coupon="New"
            type="Govt"
            facevalue="None"
            status=" Not matured"
          />
          <Bill
            id="oliver liam"
            isin="viking burrito"
            cusip="oliver@burrito.com"
            issuer="FRB1235476"
            maturitydate="23-12-2022"
            coupon="New"
            type="Govt"
            facevalue="None"
            status=" Not matured"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
