import axios from 'axios'

const service = axios.create({
 baseURL: 'https://pacific-stream-12212.herokuapp.com',
 withCredentials: true
})

const PRODUCT_SERVICE = {
 CREATE: async (data) => {
  return await service.post('/product/create', data)
 },

 ALL: async () => {
  return await service.get('/product/all')
 },

 DETAIL: async (id) => {
  return await service.get(`/product/${id}`)
 },

 DEPARTMENT: async (data) => {
  return await service.get(`/product/department${data}`)
 },

 UPDATE: async (id, data) => {
  return await service.patch(`/product/edit/${id}`, data)
 },

 DELETE: async (id) => {
  return await service.delete(`/product/${id}`)
 },

 UPLOAD_IMG: async (values) => {
  return await service.post(`/upload`, values)
 },
}

export default PRODUCT_SERVICE;