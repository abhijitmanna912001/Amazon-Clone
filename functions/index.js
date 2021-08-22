const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51JQbXpSBu1ZpVtMoBPFjjSY1lpc09oyS77z3YajwW8JYEKYNhE5PMIw3uFzQ48j2sJ4TtxPKAczUvpOV07tMuckk001xBmJun2"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
