class API {
  constructor(url) {
    this.url = url
  }

  get = (route) => {
    return fetch(`${this.url}${route}`)
      .then(r => r.ok ? r.json() : new Error('Bad response'))
      .catch(console.error)
  }

  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  authedHeaders = {
    ...this.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

  reqOptions = (type, headers, body) => ({
    method: type,
    headers: headers,
    body: JSON.stringify(body)
  })


  post = (route, body, headers = this.authedHeaders) => {
    return fetch(`${this.url}${route}`, this.reqOptions('POST', headers, body))
    .then(r => r.ok ? r.json() : new Error('Bad response'))
    .catch(console.error)
  }

  login = ({ email, password }) => this.post('/login', { user: { email, password } }, this.headers)

}

export default new API(process.env.REACT_APP_BACKEND_URL)
