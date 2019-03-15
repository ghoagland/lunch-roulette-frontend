class API {
  constructor(url) {
    this.url = url
  }

}

export default API.new(process.env.BACKEND_URL)
