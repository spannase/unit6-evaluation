import axios from "axios";

export const ADD_CITY_DATA = "ADD_CITY_DATA";
export const ADD_CITY_LOADING = "ADD_CITY_LOADING";
export const ADD_CITY_ERROR = "ADD_CITY_ERROR";

export const addCityData = (city) => ({ type: ADD_CITY_DATA, payload: city });
export const addCityLoading = () => ({ type: ADD_CITY_LOADING });
export const addCityError = () => ({ type: ADD_CITY_ERROR });

export const addCityRequest =(cityName, Population, countryName) => async (dispatch) => {

    dispatch(addCityLoading());
    axios
      .post("http://localhost:8080/cities", {
        city: cityName,
        population: Population,
        country: countryName,
      })
      .then(({ data }) => {
          dispatch(addCityData(data));
        // console.log(data);
      })
      .catch((err) => {
          dispatch(addCityError());
        console.log(err);
      });
  };

export const getCityRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get("http://localhost:8080/cities")
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const deleteCityRequest = (id) => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .delete(`http://localhost:8080/cities/${id}`)
    .then(() => {
      dispatch(getCityRequest());
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const sortCityDescRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get("http://localhost:8080/cities?_sort=population&_order=desc")
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const sortCityAscRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get("http://localhost:8080/cities?_sort=population&_order=asc")
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

