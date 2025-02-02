import express, { Request, Response } from 'express';
import mysql, { RowDataPacket } from 'mysql2';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'website-creation-company-db',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL with ID: ' + connection.threadId);
});

app.get('/team-info', (req: Request, res: Response) => {
    connection.query('CALL get_all_members_info()', (err, results) => {
        if (err) {
            res.status(500).send('Error fetching team info');
            return;
        }

        if (!Array.isArray(results) || results.length === 0) {
            res.status(500).send('Unexpected database response');
            return;
        }
    
        const rows = results[0] as RowDataPacket[];

        res.json(rows);
    });
});

app.get('/projects', (req: Request, res: Response) => {
    connection.query('SELECT * FROM projects', (err, results) => {
        if (err) {
            res.status(500).send('Error fetching projects');
            return;
        }
        res.json(results);
    });
});

app.post('/contact', (req: Request, res: Response) => {
    console.log("Got a message")
    console.log(req.body)

    const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Email Sender 7000 <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `Client Request - ${name}`,
    text: `Email: ${email}\n${message}`
  };

  transporter.sendMail(mailOptions)
    .then((info) => {
        res.status(200).end()
        console.log(`Message sent: ${info.messageId}`)
    })
    .catch((error) => res.status(500).json({ message: "Error sending email", error: error.message }));
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
