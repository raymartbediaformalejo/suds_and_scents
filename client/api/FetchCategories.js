import axios from "axios";

const FetchCategories = () => {
  return axios.get(` http://localhost:3003/category`).then((res) => res.data);
};

export default FetchCategories;
