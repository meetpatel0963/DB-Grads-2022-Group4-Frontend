import React from 'react'
import { Link, Redirect, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Table, TableCell, TableContainer, TableHead, TableRow, Typography,Paper, TableBody } from '@mui/material';
import './styles.css';

const Dashboard = () => {
  const books = ['ABC','XYZ','DEF','KLM','KLM'];
  const trades = [
    {bookName : 'ABC', counterparty: "abc", security : "qwerty", quantity : 5,price : 45,status : 'success', type : 'buy', date : '20-08-2022'},
    {bookName : 'ABC', counterparty: "abc", security : "qwerty", quantity : 5,price : 45,status : 'success', type : 'buy', date : '20-08-2022'},
    {bookName : 'ABC', counterparty: "abc", security : "qwerty", quantity : 5,price : 45,status : 'success', type : 'buy', date : '20-08-2022'},
    {bookName : 'ABC', counterparty: "abc", security : "qwerty", quantity : 5,price : 45,status : 'success', type : 'buy', date : '20-08-2022'},
    {bookName : 'ABC', counterparty: "abc", security : "qwerty", quantity : 5,price : 45,status : 'success', type : 'buy', date : '20-08-2022'}
  ]
  const bonds = [
    {ISIN : 12,CUSIP: 'klmno',issuer: "abc",maturityDate: '25-12-2026',type: 'qwerty',coupon : 'xyz',faceValue: 34,status: 'failure'},
    {ISIN : 12,CUSIP: 'klmno',issuer: "abc",maturityDate: '25-12-2026',type: 'qwerty',coupon : 'xyz',faceValue: 34,status: 'failure'},
    {ISIN : 12,CUSIP: 'klmno',issuer: "abc",maturityDate: '25-12-2026',type: 'qwerty',coupon : 'xyz',faceValue: 34,status: 'failure'},
    {ISIN : 12,CUSIP: 'klmno',issuer: "abc",maturityDate: '25-12-2026',type: 'qwerty',coupon : 'xyz',faceValue: 34,status: 'failure'},
    {ISIN : 12,CUSIP: 'klmno',issuer: "abc",maturityDate: '25-12-2026',type: 'qwerty',coupon : 'xyz',faceValue: 34,status: 'failure'}
  ]

  const users = [
    {name : 'abc' ,noOfTrades: 12,noOfBonds: 45,noOfSuccessFullTrades: 5 },
    {name : 'abc' ,noOfTrades: 12,noOfBonds: 45,noOfSuccessFullTrades: 5 },
    {name : 'abc' ,noOfTrades: 12,noOfBonds: 45,noOfSuccessFullTrades: 5 },
    {name : 'abc' ,noOfTrades: 12,noOfBonds: 45,noOfSuccessFullTrades: 5 },
    {name : 'abc' ,noOfTrades: 12,noOfBonds: 45,noOfSuccessFullTrades: 5 }
  ]
  let navigate = useNavigate();

  const handleUsersViewAll = () => {
    navigate('/users');
  }

  const handleBooksViewAll = () => {
    navigate('/books');
  }

  const handleTradesViewAll = () => {
    navigate('/trades');
  }

  const handleBondsViewAll = () => {
    navigate('/bonds');
  }

  return (
    <div className='content'>
      <div>
          <div className='container'>
            <div className='bookTitle' style={{marginTop: "15px"}}>Users</div>
            <div className='viewAll' onClick={handleUsersViewAll}>View All</div>
          </div>
          <div className='tradesContainer'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.No</TableCell>
                    <TableCell >Name</TableCell>
                    <TableCell align="right">No. of Trades</TableCell>
                    <TableCell align="right">No. of bonds</TableCell>
                    <TableCell align="right">No. of Successfull Trades</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row,index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.noOfTrades}</TableCell>
                      <TableCell align="right">{row.noOfTrades}</TableCell>
                      <TableCell align="right">{row.noOfSuccessFullTrades}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      </div>
      <div>
        <div className='container'>
          <div className='bookTitle'>Books</div>
          <div className='viewAll' onClick={handleBooksViewAll}>View All</div>
        </div>
        <div className='bookContainer'>
          {books.map((item,index) => {
            return (
              <Card className='bookItem'>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom variant="h5">
                    {item}
                  </Typography>
                  <Typography variant="body2">
                      10 trades
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Trades</Button>
                </CardActions>
              </Card>
            )
          })}
        </div>
      </div>
      <div>
          <div className='container'>
            <div className='bookTitle' style={{marginTop: "15px"}}>Trades</div>
            <div className='viewAll' onClick={handleTradesViewAll}>View All</div>
          </div>
          <div className='tradesContainer'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.No</TableCell>
                    <TableCell >Book</TableCell>
                    <TableCell align="right">Counter Party</TableCell>
                    <TableCell align="right">Bond</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Trade Type</TableCell>
                    <TableCell align="right">Trade Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trades.map((row,index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.bookName}
                      </TableCell>
                      <TableCell align="right">{row.counterparty}</TableCell>
                      <TableCell align="right">{row.security}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      </div>
      <div>
        <div className='container'>
          <div className='bookTitle' style={{marginTop: "15px"}}>Bonds</div>
          <div className='viewAll' onClick={handleBondsViewAll}>View All</div>
        </div>
        <div className='tradesContainer' style={{marginBottom : '35px'}}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.No</TableCell>
                    <TableCell >ISIN</TableCell>
                    <TableCell align="right">CUSIN</TableCell>
                    <TableCell align="right">Issuer</TableCell>
                    <TableCell align="right">Maturity Date</TableCell>
                    <TableCell align="right">Coupon</TableCell>
                    <TableCell align="right">Bond Type</TableCell>
                    <TableCell align="right">Face Value</TableCell>
                    <TableCell align="right">Satus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bonds.map((row,index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.ISIN}
                      </TableCell>
                      <TableCell align="right">{row.CUSIP}</TableCell>
                      <TableCell align="right">{row.issuer}</TableCell>
                      <TableCell align="right">{row.maturityDate}</TableCell>
                      <TableCell align="right">{row.coupon}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.faceValue}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;