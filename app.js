const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const loginRoutes = require("./routes/loginRoutes")
const path = require('path')
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// app.use(express.static('views'))

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", loginRoutes)

app.get("/",  (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running di http://localhost:${PORT}`);
});
