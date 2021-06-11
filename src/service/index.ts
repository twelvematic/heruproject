import axios, { AxiosInstance } from 'axios';
import { API_URL } from '@env';

export default class Service {
    private pathname: string;
    service: AxiosInstance;
    constructor(path: string) {
        this.pathname = `/${path}`;
        this.service = axios.create({ baseURL: API_URL });

        this.service.interceptors.request.use(async (config: any) => {
            config.headers.Authorization = '';
            return config;
        });

        this.getAll = this.getAll.bind(this);
    }
    async getAll() {
        const response = await this.service.get(this.pathname, {
        });
        return response.data;
    }
}
