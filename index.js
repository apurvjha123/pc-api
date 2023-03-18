const express = require('express')
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')
const useRoute = require('./routes/user')
const useAuth = require('./routes/auth')
const useProduct = require('./routes/product')
const useCart = require('./routes/cart')
const useOrder = require('./routes/order')
const useStripe = require('./routes/stripe')
const port = process.env.PORT
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected Successfully ..."))
  .catch((err) => console.log(err));

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api/user',useRoute);
app.use('/api/auth',useAuth);
app.use('/api/product',useProduct);
app.use('/api/cart',useCart);
app.use('/api/order',useOrder);
app.use('/api/checkout',useStripe);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

