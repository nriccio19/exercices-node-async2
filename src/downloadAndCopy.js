import axios from 'axios'
import fs from 'fs/promises'

let url = await axios.get(process.argv[3])

await fs.writeFile(process.argv[2], url.data)

console.log(`L'adresse ${url} à bien était copié dans un nouveau fichier.`)

console.log(url)
