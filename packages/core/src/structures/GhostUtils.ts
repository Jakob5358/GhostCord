import { promisify } from "node:util";
import glob from "glob";

// These can be moved to /utils later ig

export const search = promisify(glob);
