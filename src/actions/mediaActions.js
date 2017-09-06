import * as types from '../constants/actionTypes';

export const selectImageAction = image => {
  debugger;
  return {
    type: types.SELECTED_IMAGE,
    image,
  };
};

export const selectVideoAction = video => {
  //   debugger;
  return {
    type: types.SELECTED_VIDEO,
    video,
  };
};

export const searchMediaAction = payload => {
  //   debugger;
  return {
    type: types.SEARCH_MEDIA_REQUEST,
    payload,
  };
};
