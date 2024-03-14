import express from 'express'
import { PrismaClient } from '@prisma/client'	

const port = 3000
const app = express()
const prisma = new PrismaClient()

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

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
