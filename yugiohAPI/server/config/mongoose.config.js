const mongoose = require('mongoose');
const db_name = 'whatTimeIsIt';

mongoose.connect("mongodb://localhost/" + db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database")) // check terminal to see if this message pops up, if so, succesfully connected to db
  .catch(err => console.log("Something went wrong when connecting to the database", err));