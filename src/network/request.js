import axios from 'axios'

export function  request (config){
        const instance =axios.create({
            baseURL:'http://123.207.32.32:8000',
            
            timeout: 5000
        })
        instance.interceptors.request.use(config => {
            return config
        },err => {console.log(err,'发送失败')})

        instance.interceptors.response.use(res => {
            return res.data
        },err => {
            console.log(err,'发送失败')
        })

        return instance(config)
}