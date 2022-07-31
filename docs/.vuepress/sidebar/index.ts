import { sidebar } from "vuepress-theme-hope";
import code from './code'
import useGuide from "./use-guide";
import typescript from "./typescript";

export default sidebar({
  "/code/language/typescript/":typescript,
  "/code/": code,
  "/use-guide/": useGuide,
  "/books/": "structure",
});