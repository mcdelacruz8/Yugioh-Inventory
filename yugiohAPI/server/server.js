const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;


// MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// This is where we import the routes function from our routes.js file
const AllMyCardRoutes = require("./routes/cards.routes");
AllMyCardRoutes(app);

app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));