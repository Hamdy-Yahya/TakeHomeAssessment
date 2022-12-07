const express = require('express' );
const { seed } = require('./db');
//add new routers
const { operatorsRouter } = require('./routes');
const { businessesRouter } = require('./routes/businesses');
const { opsRouter } = require('./routes/ops')
const { schedulesRouter } = require('./routes/schedules')

const app = express();
const PORT = 3000;

app.use( express.json() )
app.use( '/operators', operatorsRouter );
// use business collection as "middleware"
app.use( '/businesses', businessesRouter);
// use ops collection as "middleware"
app.use('/ops', opsRouter);
// use schedules collection as "middleware"
app.use('/schedules', schedulesRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen( PORT, () => {

  console.log(`App listening at http://localhost:${PORT}`);
  seed();

} );