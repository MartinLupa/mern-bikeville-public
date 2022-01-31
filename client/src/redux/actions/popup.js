import { popupTypes } from "../types/popupTypes";

export const show = (message) => ({
  type: popupTypes.show,
  payload: message,
});

export const hidden = () => ({
  type: popupTypes.hidden,
});
