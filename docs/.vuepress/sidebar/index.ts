import { sidebar } from "vuepress-theme-hope";
import code from './code'
import useGuide from "./use-guide";
import typescript from "./code/typescript";
import markdown from "./code/markdown";

export default sidebar({
  "/code/language/markdown/":markdown,
  "/code/language/typescript/":typescript,
  "/code/": code,
  "/use-guide/": useGuide,
  "/books/": "structure",
});