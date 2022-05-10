import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import winston from 'winston';
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('tiny'));

const specs = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Alden Vallestero API Boilerplate",
            version: "1.0.0",
            description: "My First Swagger Docs",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "Alden Vallestero",
                url: "http://www.exmaple.com/support",
                email: "alden.vallestero@collabera.com",
            },
        },
        servers: [
            {
                url: "http://localhost:4001",
                description: "My API Documentation",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
});
server.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.cli(),
    transports: [new winston.transports.Console()],
});

logger.error('Sample Message');
logger.warn('Sample Message');
logger.info('Sample Message');


export default server;