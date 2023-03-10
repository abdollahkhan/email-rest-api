require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {mail} = require('./mail');
const {
  DEFAULT_EMAIL_SUCCESS_MESSAGE,
  DEFAULT_EMAIL_FAILIURE_MESSAGE
} = require('./constant');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { recipient } = req.body;
  const result = await mail(recipient);

  if (result)
    res.status(200).json({ message: DEFAULT_EMAIL_SUCCESS_MESSAGE });
  else
    res.status(500).json({ message: DEFAULT_EMAIL_FAILIURE_MESSAGE });
});

app.listen(port, () => {
  console.log(`App is listening at PORT: ${port}`);
});
