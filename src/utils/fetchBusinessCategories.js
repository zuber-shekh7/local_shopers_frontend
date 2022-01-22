import backendAPI from "../apis/backendAPI";

const fetchBusinessCategories = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));
    const { data } = await backendAPI.get("/business-categories", {
      headers: { Authorization: token },
    });
    return data;
  } catch (err) {
    console.error(
      "Something wrong went while fetching business categories: ",
      err
    );
    return null;
  }
};

export default fetchBusinessCategories;
