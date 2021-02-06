/* eslint-disable import/prefer-default-export */

// Action to get the list of photos

// dispatched on success

export const GET_PHOTOS_SUCCESS = (isSuccess) => ({
  type: 'GET_PHOTOS_SUCCESS',
  payload: isSuccess,
});

// dispatched on failure
export const GET_PHOTOS_SUCCESS_FAIL = (isAddError) => ({
  type: 'GET_PHOTOS_SUCCESS_FAIL',
  payload: isAddError,
});
export const GET_PHOTOS = () => (dispatch) => {
  fetch('https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json')
    .then((res) => res.json())
    .then((json) => {
      dispatch(GET_PHOTOS_SUCCESS(json.pics));
      return json.products;
    })
    .catch((error) => dispatch(GET_PHOTOS_SUCCESS_FAIL(error)));
};

export const POST_COMMNENT = (isSuccess) => ({
  type: 'POST_COMMNENT',
  payload: isSuccess,
});

export const POST_LIKE = (isSuccess) => ({
  type: 'POST_LIKE',
  payload: isSuccess,
});

export const SEARCH_BY_CATEGORY = (isSuccess) => ({
  type: 'SEARCH_BY_CATEGORY',
  payload: isSuccess,
});

export const SORT_BY_MOST_LIKED = (isSuccess) => ({
  type: 'SORT_BY_MOST_LIKED',
  payload: isSuccess,
});

export const SORT_BY_MOST_COMMENTED = (isSuccess) => ({
  type: 'SORT_BY_MOST_COMMENTED',
  payload: isSuccess,
});

export const DELETE_COMMENT = (isSuccess) => ({
  type: 'DELETE_COMMENT',
  payload: isSuccess,
});
