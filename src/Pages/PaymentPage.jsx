import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { TextField, Checkbox, Button, Grid, Card, CardContent } from '@material-ui/core';
import {
  TextField,
  Checkbox,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [termsOfService, setTermsOfService] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Stripe integration code here

    // Assuming Stripe integration is handled elsewhere

    console.log("Payment submitted");
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <b>Payment Page</b>
          </h1>
        </Link>
      </div>
      <div
        style={{
          height: "50rem",
          backgroundColor: "#2B185b",
          display: "flex",
          justifyContent: "center",
          marginTop: "-10px",
        }}
      >
        <Card
          style={{
            width: "50%",
            height: "400px",
            float: "left",
            marginTop: "100px",
            boxShadow:'2px 5px 20px pink'
          }}
          variant="outlined"
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Credit Card"
                    fullWidth
                    variant="outlined"
                    value={creditCard}
                    onChange={(e) => setCreditCard(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Checkbox
                    label="Terms of Service"
                    checked={termsOfService}
                    onChange={(e) => setTermsOfService(e.target.checked)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PaymentForm;
