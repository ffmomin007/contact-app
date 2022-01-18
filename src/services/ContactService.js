import axios from "axios";

class ContactService {
  

  static getAllContact() {
    let serverURL = "https://jsonplaceholder.typicode.com/users"
    return axios.get(serverURL)
  }
}

export default ContactService;
