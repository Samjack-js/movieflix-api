import express from 'express'
import { PrismaClient } from '@prisma/client'	

const port = 3000
const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/movies', async (_, res) => {
	const movie = await prisma.movie.findMany({
		orderBy: {
			release_date: 'desc'
		},
		include: {
			genres: true,
			languages: true
		},
	
	})
	res.json(movie)
})

app.post('/movies', async (req, res) => {

	const { title, release_date, genre_id, language_id, oscar_count } = req.body

	try{
		await prisma.movie.create({
			data: {
				title,
				release_date: new Date(release_date),
				genre_id,
				language_id,
				oscar_count
			}
		})
		res.status(201).send()
	}catch(e){
		res.status(400).send(e)
	}
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
