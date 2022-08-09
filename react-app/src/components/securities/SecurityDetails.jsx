import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { getSecurityById } from "../../services/SecurityServices";
import { SECURITY_KEYS } from "../../constants/const";

export const SecurityDetails = () => {
  const [security, setSecurity] = useState({});
  const { securityId } = useParams();

  useLayoutEffect(() => {
    getSecurityById(securityId).then((res) => {
      setSecurity(res.data);
    });
  }, []);

  return (
    <div className="securities-details">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Security ID: {security.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Object.keys(security).map((key, index) => {
                return (
                  <p key={index}>
                    {SECURITY_KEYS[key]} {": "}
                    {security[key] instanceof Object
                      ? security[key].id
                      : key.endsWith("Date")
                      ? security[key].substring(0, 10)
                      : security[key]}
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
