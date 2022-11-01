const path = require('path');
global.__basedir = __dirname;

require('dotenv').config({ path: path.resolve(__dirname, '.env') })
require("./config/databaseMongo").connect();
const bodyParser = require('body-parser');

const cors = require('cors');

// const auth = require('./middleware/auth')
// const eventRouter = require('./routes/event.route')
// const assetRouter = require('./routes/asset.route')
// const scheduleRouter = require('./routes/schedule.route')
// const documentRouter = require('./routes/document.route')
// const fileRouter = require("./routes/file.route");
// const roleRouter = require("./routes/role.route")
// const contactInfo = require("./routes/contactInfo.route")
// const customerService = require("./routes/customerService.route")

const clientRouter = require("./routes/client.route")
const creditRouter = require("./routes/credit.route")
const calculRouter = require("./routes/calcul.route")






const express = require("express");

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
const app = express();

app.use(express.json());

app.use(cors(corsOptions))
// app.use(bearerToken())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/',auth);
// app.use('/', eventRouter)
// app.use('/', assetRouter)
// app.use('/', scheduleRouter)
// app.use('/', documentRouter)
// app.use('/', fileRouter)
// app.use('/',roleRouter)
// app.use('/',customerService)
// app.use('/',contactInfo)
app.use('/',clientRouter)
app.use('/',creditRouter)
app.use('/',calculRouter)





module.exports = app;