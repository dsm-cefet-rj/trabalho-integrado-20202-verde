const options = {
    language: 'pt-BR',        
}
const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "PortFeed",
        description: "API PORTFEED, rede social de portfólios."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Projeto",
            "description": "Rota para entidade projeto. Cuida dos projetos de um user"
        },
        {
            "name": "Postagem",
            "description": "Rota para entidade postagem. Cuida dos posts que um user faz"
        },
        {
            "name":"Usuario",
            "description":"Rota para entidade usuario. Cuida do perfil"
        }
    ],
    definitions: {
        Projeto: [
            {
                "nome": "Projeto1",
                "desc": "Primeiro Projeto",
                "info": "Olá mundo",
                "id" :  "60942851c1af0e0c8c02ce0f",
                "usuario" : "Duds12345"
            }
        ],
        Postagem: {
            "post": "Manda post",
            "id": "60944a780b4bf75c240f5865",
        },
        Usuario: {
            "nome": "Perfil1",
            "bio": "Gosto de Macarrão",
            "areaAt": "Computação",
            "id": "60941f25c1af0e0c8c02cdff"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./bin/www')           // Your project's root file
})