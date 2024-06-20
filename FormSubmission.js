//FormSubmission.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'myproject'
});


dbConnection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/submit',function(req,res)
{
    res.sendFile(__dirname+'/index.html');
});


app.post('/submit', (req, res) => {
   
    const { name, email, subject, message } = req.body;

    
    const sql = 'INSERT INTO form_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)';
    dbConnection.query(sql, [name, email, subject, message], (err, result) => {
        if (err) throw err;
        console.log('Form data inserted into MySQL database');
    });

    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 587,
        secure: false,
        auth: {
            user: 'prasadakash.active@gmail.com', 
            pass: 'nbcbcolshssnheua' 
        }
    });

    const mailOptions = {
        from: 'prasadakash.active@gmail.com', 
        to: 'prasadakash.active@gmail.com', 
        subject: 'New Form Submission on Portfolio Website',
        text: `You have received a new form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}` 
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent:', info.response);
    });

    
    res.send('Form submitted successfully!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
