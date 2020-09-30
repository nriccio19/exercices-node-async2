import axios from 'axios'
;(async () => {
    axios.interceptors.request.use(
        function (req) {
            req.time = { startTime: new Date() }
            return req
        },
        (err) => {
            return Promise.reject(err)
        }
    )

    axios.interceptors.response.use(
        function (res) {
            res.config.time.endTime = new Date()
            res.duration = res.config.time.endTime - res.config.time.startTime
            return res
        },
        (err) => {
            return Promise.reject(err)
        }
    )

    axios
        .get('https://www.facebook.com')
        .then((res) => {
            console.log(res.duration, 'Facebook')
        })
        .catch((err) => {
            console.log(err)
        })

    axios
        .get('https://www.amazon.com')
        .then((res) => {
            console.log(res.duration, 'Amazon')
        })
        .catch((err) => {
            console.log(err)
        })

    axios
        .get('https://www.apple.com')
        .then((res) => {
            console.log(res.duration, 'Apple')
        })
        .catch((err) => {
            console.log(err)
        })

    axios
        .get('https://www.google.com')
        .then((res) => {
            console.log(res.duration, 'Google')
        })
        .catch((err) => {
            console.log(err)
        })
})()

// import axios from 'axios'
// import chalk from 'chalk'

// /* let response1 = await axios.get('https://www.facebook.com')
// let response2 = await axios.get('https://www.amazon.com')
// let response3 = await axios.get('https://www.apple.com')
// let response4 = await axios.get('https://www.google.com') */

// let response = async (url) => {
//     await axios.get(url)
//     return new Promise((resolve, reject) => {
//         console.log(chalk.green(`Promise résolue pour ${url}`))
//         resolve(chalk.red(`${url} chargée en premier`))
//     })
// }

// let data = await Promise.race([
//     response('https://www.amazon.com'),
//     response('https://www.facebook.com'),
//     response('https://www.apple.com'),
//     response('https://www.google.com'),
//     response('https://soundswitch.com/#buy'),
// ]).catch((err) => {
//     console.error(err)
// })
// console.log(data)
