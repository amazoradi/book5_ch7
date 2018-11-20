import APIManager from "./APIManager"

class LocationManager extends APIManager {
  getLocation(id) {
    return this.get(id)
  }

  getAll() {
    return this.all()
  }

  removeAndList(id) {
    return this.delete(id).then(() => this.getAll())
  }
}


export default new LocationManager("locations")

