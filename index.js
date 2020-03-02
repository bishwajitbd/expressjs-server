const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 3001');
});

app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/send', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: 'bworldcanada',
    pass: 'Barua1990'
  }
});

var mailOptions = {
  from: data.email,
  to: 'bworldcanada@gmail.com, bishwajitbd@gmail.com',
  subject: 'Test subject',
  html: `<p>${data.fullname}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

var mailOptions3 = {
  from:'bworldcanada@gmail.com',
  to:  data.email,
  subject: 'Thank you for contact us. ',
  html: `<p>Hello ${data.fullname}, Thank you for contact us. We will contact in a short time.</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    smtpTransport.sendMail(mailOptions3,
    (error, response) => {
      if(error) {
        res.send(error)
      }else {
        res.send('Success')
      }
});
    res.send('Success')
  }
  smtpTransport.close();
});

})