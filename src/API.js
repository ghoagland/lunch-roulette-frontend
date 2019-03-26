class API {
  constructor(url) {
    this.url = url
  }

  get = (route, headers = this.authedHeaders, queryObj = {}) => {
    return fetch(this.routeWithQuery(route, queryObj), { headers })
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
    .then(r => r.json())
    .catch(console.error)
  }

  login = ({ email, password }) => this.post('/login', { user: { email, password } }, this.headers)

  reauth = () => this.get('/profile')

  routeWithQuery = (route, queryObj = {}) => {
    const urlObj = new URL(`${this.url}${route}`)
    const keys = Object.keys(queryObj)
    keys.forEach(key => urlObj.searchParams.append(key, queryObj[key]))
    return urlObj
  }

}

export default new API(process.env.REACT_APP_BACKEND_URL)
