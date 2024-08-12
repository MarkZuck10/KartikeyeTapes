import { uiRedux } from "../utils/constants";

const initialState = {
  Width: window.innerWidth,
  Height: window.innerHeight,
  Scroll: window.scrollY,
  HeaderSize: 0,
  FooterSize: 0,
  Drawer: false,
  Contact: false,
};

const uiReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case uiRedux.Scroll:
      return { ...state, Scroll: data };
    case uiRedux.Width:
      return { ...state, Width: data };
    case uiRedux.Height:
      return { ...state, Height: data };
    case uiRedux.Drawer:
      return { ...state, Drawer: data };
    case uiRedux.HeaderSize:
      return { ...state, HeaderSize: data };
    case uiRedux.FooterSize:
      return { ...state, FooterSize: data };
    case uiRedux.Contact:
      return { ...state, Contact: data };
    default:
      return state;
  }
};

export default uiReducer;
