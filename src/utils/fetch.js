import wepy from 'wepy'

function fetch ({...opt}) {
  let { url, method, token, data, header } = opt

  if (token) {
    header['token'] = wepy.$token
  }

  header = Object.assign({
    'content-type': 'application/json'
  }, header)

  let OBJECT = {
    url,
    method,
    data,
    header
  }
  return new Promise((resolve, reject) => {
    wepy.request(OBJECT)
    .then((res) => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}

export default fetch