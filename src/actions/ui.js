import { uiRedux } from "../utils/constants";

export const updateHeaderSize = (data) => ({ type: uiRedux.HeaderSize, data });

export const updateFooterSize = (data) => ({ type: uiRedux.FooterSize, data });

export const updateWidth = (data) => ({ type: uiRedux.Width, data });

export const updateHeight = (data) => ({ type: uiRedux.Height, data });

export const updateScroll = (data) => ({
  type: uiRedux.Scroll,
  data: window.scrollY,
});

export const updateDrawer = (data) => ({ type: uiRedux.Drawer, data });

export const updateContact = (data) => ({ type: uiRedux.Contact, data });
