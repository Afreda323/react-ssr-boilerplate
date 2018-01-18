import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
const app = express()

// Send requests from front end 
// directly to outside API
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    // NOTE: ----
    // This is specific to this API and
    // how it handles Google OAuth
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    },
  })
)
app.use(express.static('public'))
app.get('*', (req, res) => {
  // Create the initial store
  // pass req so we can access cookies
  const store = createStore(req)
  // Map over all routes that are in path
  // Look for load data function
  // Call it with the store to populate before render
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }) => (route.loadData ? route.loadData(store) : null)
  )
  // Once promises are fulfilled, send official render
  Promise.all(promises).then(() => res.send(renderer(req, store)))
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
