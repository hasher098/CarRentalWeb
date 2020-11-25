import axios from 'axios';

export const apiClient = axios.create({

  baseURL: 'https://carrentalapi20201123180919.azurewebsites.net/',
// baseURL:'https://localhost:44397'

});

