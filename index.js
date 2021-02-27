const express = require("express");
const conectDB = require('./config/db')

const app = express();

conectDB();

app.use(express.json({extended:true}))
const PORT = process.env.PORT || 4000;
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/clients', require('./routes/clients'))



app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
