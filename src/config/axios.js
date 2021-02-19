import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5000/shop-e258c/us-central1/api'
    // "http://localhost:5000/shop-e258c/us-central1/api",
});

export default instance;