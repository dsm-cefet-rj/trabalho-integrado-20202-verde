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
    host: "localhost:3004",
    basePath: "/",
    schemes: ['http', 'https'],
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
    securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
        },
    },
    security: [
        {
            bearerAuth: []
        }
    ],
    definitions:{
        Projeto: 
            {   
                "_id" :  "60942851c1af0e0c8c02ce0f",
                "nome": "Projeto1",
                "desc": "Primeiro Projeto",
                "info": "Olá mundo",
                "usuario" : "Duds12345",
                "_v" : 0,
                "id" :  "60942851c1af0e0c8c02ce0f"
            },
        
        Postagem: {
            "_id": "60944a780b4bf75c240f5865",
            "post": "Manda post",
            "_v" : 0,
        },

        Usuario: {
            "_id": "60941f25c1af0e0c8c02cdff",
            "nome": "Perfil1",
            "bio": "Gosto de Macarrão",
            "areaAt": "Computação",
            "_v" : 0,
           
        },

        SignUp: {
            success: true,
            status: "Registration Successful!"
        },
        SignUpErro: {
            err: {
                name: "UserExistsError",
                message: "A user with the given username is already registered"
            }
        },
        Login: {
            username: "any",
            password: "any"
        },
        LoginResposta: {
            token: "<Bearer Token>",
            username: "any"
        },
        Logout: {
            token: "<Bearer Token>"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')           // Your project's root file
})