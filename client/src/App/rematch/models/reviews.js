const getReviews = async () => {
  try {
    let resoponse = await fetch("/api/getReviews");
    let responseJson = await resoponse.json();
    return responseJson;
  } catch (e) {
    console.log(`AsyncStorage error : ${e}`);
  }
};

export default {
  state: {
    reviews: [],
  },
  reducers: {
    setReviews: (state, payload) => {
      return {
        ...state,
        reviews: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getReviewsAsync() {
      let reviews = await getReviews();
      reviews.success && this.setReviews(reviews.data);
    },
  }),
};
