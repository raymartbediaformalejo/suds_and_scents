import axios from "axios";

const FetchIngredients = () => {
  return axios.get(`http://localhost:3003/ingredients`).then((res) => res.data);
};

export default FetchIngredients;
