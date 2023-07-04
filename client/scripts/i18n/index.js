import * as polish from "./polish.i18n.js";
import * as english from "./english.i18n.js";
import { locale } from "../configs/app.js";

const map = {
  pl: polish,
  en: english,
};

export default {
  ...map[locale],
};
