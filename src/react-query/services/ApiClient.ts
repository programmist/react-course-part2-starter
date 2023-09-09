import axios from "axios";

const axiosInst = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default class ApiClient<T> {
  #endpoint: string;

  constructor(endpoint: string) {
    this.#endpoint = endpoint;
  }

  getAll = () => {
    return axiosInst.get<T[]>(this.#endpoint).then((res) => res.data);
  };

  post = (entity: T) => {
    return axiosInst.post<T>(this.#endpoint, entity).then((res) => res.data);
  };
}
