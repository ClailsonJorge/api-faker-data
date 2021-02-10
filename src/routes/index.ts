import { Router } from 'express'
import peopleWatchMovie from './people-watch-movie-faker.routes'

const routes = Router()


routes.use('/peoplewm', peopleWatchMovie)

export default routes