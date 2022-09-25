const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const _ = require('./database/models/index')

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/user'))

app.use((err, _, res, __) => {
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong, please try again.',
  })
})

app.listen(port, () => {
  console.log(`Server is up and runnign on port ${port}`)
})
