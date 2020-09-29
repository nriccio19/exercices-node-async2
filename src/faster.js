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
