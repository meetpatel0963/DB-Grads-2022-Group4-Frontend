import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { getTradeById } from "../../services/TradeServices";
import { TRADE_KEYS } from "../../constants/const";

export const TradeDetails = () => {
  const [trade, setTrade] = useState({});
  const { tradeId } = useParams();

  useLayoutEffect(() => {
    getTradeById(tradeId).then((res) => {
      setTrade(res.data);
    });
  }, []);

  return (
    <div className="trades-details">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Trade ID: {trade.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Object.keys(trade).map((key, index) => {
                return (
                  <p key={index}>
                    {TRADE_KEYS[key]} {": "}
                    {trade[key] instanceof Object
                      ? trade[key].id
                      : key.endsWith("Date")
                      ? trade[key].substring(0, 10)
                      : trade[key]}
                  </p>
                );
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
