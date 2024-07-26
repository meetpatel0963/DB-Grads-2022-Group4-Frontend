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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import Dropdown from "react-bootstrap/Dropdown";

// import MDButton from "components/MDButton";

function Transaction({ securityid, bookid, price }) {
  return (
    <MDBox key={securityid} component="li" py={1} pr={2} mb={1}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center">
          <MDBox display="flex" flexDirection="column">
            <MDTypography variant="button" fontWeight="medium" gutterBottom>
              {securityid}
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="regular">
              {bookid}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDTypography variant="button" fontWeight="medium" textGradient>
          {price}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  securityid: PropTypes.string.isRequired,
  bookid: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Transaction;
