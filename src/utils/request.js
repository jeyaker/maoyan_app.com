import axios from 'axios';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {
//         'X-Custom-Header': 'foobar'
//     }
// });


const request = function ({
    url,
    method = 'GET',
    headers,
    params,
    data,
    auth,
    withCredentials = false
}) {
    return new Promise((resolve, reject) => {
        method = method.toUpperCase();

        switch (method) {
            case 'POST':
                const p = new URLSearchParams();
                if (typeof data == 'object') {
                    for (let key in data) {
                        p.append(key, data[key]);
                    }
                }

                axios({
                    url,
                    method,
                    data: p,
                    headers,
                    auth,
                    withCredentials
                }).then(res => resolve(res)).catch(err => reject(err));
                break;

            default:
                // get put delete
                axios({
                    url,
                    method,
                    headers,
                    params,
                    withCredentials
                }).then(res => resolve(res)).catch(err => reject(err));
                break;
        }
    });
};

export default request;