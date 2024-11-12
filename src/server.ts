import { app } from './app.js'
import 'dotenv/config'

app
  .listen({ port: Number(process.env.PORT), host: '0.0.0.0' })
  .then((address) => {
    console.log(`http server running in ${address}`)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
