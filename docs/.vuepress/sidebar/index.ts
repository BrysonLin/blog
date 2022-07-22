import { sidebar } from "vuepress-theme-hope";
import code from './code'
import useGuide from "./use-guide";

export default sidebar({
  "/code/": code,
  "/use-guide/": useGuide,
});
