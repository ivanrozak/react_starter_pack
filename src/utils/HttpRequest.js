import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()
// const {  } = process.env;
const token = 'asdasd'

const getAccessHeader = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

const mergeRecursive = (obj1, obj2) => {
  if (!obj1) return obj2
  for (let p in obj2) {
    try {
      // Property in destination object set; update its value.
      if ( obj2[p].constructor===Object ) {
        obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];

      }

    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}

export function get(resourceHttpRequest) {
  const { url, config } = resourceHttpRequest
  return axios.get(url, mergeRecursive(config, getAccessHeader))
}

export function post(resourceHttpRequest) {
  const { url, config, data } = resourceHttpRequest
  return axios.post(url, data, mergeRecursive(config, getAccessHeader))
}

export function put(resourceHttpRequest) {
  const { url, config, data } = resourceHttpRequest
  return axios.patch(url, data, mergeRecursive(config, getAccessHeader))
}

export function delete_request(resourceHttpRequest) {
  const { url, config } = resourceHttpRequest
  return axios.delete(url,  mergeRecursive(config, getAccessHeader))
}
