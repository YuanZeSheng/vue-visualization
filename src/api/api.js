import axios from 'axios'

// axios 配置
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //让ajax携带cookie
// axios 其他配置

// uni axios
export function Post(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}
export function Get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(
                res => {
                    resolve(res.data);
                },
                err => {
                    reject(err);
                })
            .catch((error) => {
                reject(error)
            })
    })
}

// default
export default {
    // 示例
    handleGetApiTest(param) {
      return Get('/***/***/', param)
    },
}

