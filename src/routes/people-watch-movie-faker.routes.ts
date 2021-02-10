import { Router } from 'express'
import PeopleWatchMovieService from '../services/people-wm-service'

const peopleWatchMovie = Router()

peopleWatchMovie.post('/', (request, response) => {
    const { quantidade } = request.body

    const peopleWatchMovieService = new PeopleWatchMovieService()
    const fakerJson = peopleWatchMovieService.execute(quantidade)

    if(!fakerJson) {
        return response.status(500).json({error: "Error on server!"})
    }

    return response.status(200).json(fakerJson)
})

export default peopleWatchMovie
