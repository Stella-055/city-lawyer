const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors =require('cors')
const app = express();
require('dotenv').config();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    methods: 'POST',
    credentials: true, // If you need to send cookies or authorization headers
  }));
  require('dotenv').config(); // Load environment variables

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Handle form submission
app.post('/Contacts', (req, res) => {
    console.log(req.body)
    const {jina,somo,mail,maneno } = req.body;

    // Set up Nodemailer transporter
    /*let transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,  // SMTP server
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE ,  
        auth: {
            user: process.env.SMTP_USER,  // SMTP server username
            pass: process.env.SMTP_PASS,  // SMTP server password
        },
        tls: {
            rejectUnauthorized: process.env.NODE_ENV !== 'development'}  , 
            debug: true,  // Enable debug output
            logger: true     
        })*/
            let transporter = nodemailer.createTransport({
                host:process.env.SMTP_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER ,
                    pass: process.env.SMTP_PASS ,
                },
                tls: {
                    rejectUnauthorized: false, // Use this for local development
                }
            });
    const mailOptions = {
        from: `"City lawyer website" <${process.env.SMTP_USER}>`,  
        to: process.env.RECIPIENT_EMAIL,  
        subject: somo,  
        text: `Name: ${jina} \nEmail: ${mail}\nMessage: ${maneno}`,  
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            
            return res.status(500).json({ message: 'Something went wrong' });
        }else{
           
            return res.status(200).json({ message: 'Message sent' });
       }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
