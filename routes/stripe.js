const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_SEC);

router.post("/payment", (req, res) => {
  
  stripe.paymentIntents.create(
    {
      source_data: req.body.tokenId.id,
      amount: req.body.amount,
      currency: "inr",
      payment_method:'pm_card_visa',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
