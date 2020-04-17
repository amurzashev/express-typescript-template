import swaggerJsDoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  swaggerDefinition: {
    info: {
      title: 'Api documentation',
      description: 'Public api methods',
      version: '1.0',
    },
    basePath: '/api/v1',
  },
  apis: ['./routes/api/endpoints/**/controllers/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
