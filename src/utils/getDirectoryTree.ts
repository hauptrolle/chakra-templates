import path from "path";
import directoryTree from "directory-tree";

import { TEMPLATE_DIR } from "../constants";

export const getDirectoryTree = (dir = TEMPLATE_DIR) => {
  const componentsDir = path.join(process.cwd(), dir);
  return directoryTree(componentsDir);
};
