import { promisify } from "node:util";
import glob from "glob";

export const search = promisify(glob);
