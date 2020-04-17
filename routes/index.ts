import { Router } from 'express';
import apiRoutes from './api';

const api = Router();

const apiVersion = process.env.API_VER || 'v1';

api.use(`/api/${apiVersion}`, apiRoutes);

export default api;
