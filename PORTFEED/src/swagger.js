const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/index.js')
})