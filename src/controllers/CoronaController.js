const axios = require('axios')

module.exports = {
    async get(req, res) {
        try {
            const response = await axios.get('https://api.covid19api.com/summary')
            return res.json(response.data);
        } catch (error) {
            console.log(error)
        }
    }
}