import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

//https://seusite.com.br/api  --> Esse seria o endereço base

//https://seusite.com.br/api/burgures  --> Esse seria o endereço base com o endPoint
//https://seusite.com.br/api/pizzas
//https://seusite.com.br/api/drinks
//https://seusite.com.br/api/ice-creams

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')




export default api
