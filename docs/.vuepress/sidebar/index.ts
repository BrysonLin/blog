import { sidebar } from "vuepress-theme-hope";
import code from './code'
import coreFoundation from "./core-foundation";
import typescript from "./code/typescript";
import markdown from "./code/markdown";

export default sidebar({
  // 核心基础
  "/core-foundation/":coreFoundation,
  // 跨段开发
  "/code/language/markdown/":markdown,
  "/code/language/typescript/":typescript,
  "/code/": code,
});