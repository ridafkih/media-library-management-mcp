import { Glob } from "bun";
import { join } from "node:path";
import { logger } from "../logger";

type DumpDirectoryOptions = {
  directory: string;
  recursive: boolean;
  returnFullPath: boolean;
}

/**
 * @returns Returns an array of paths representing all files in this structure.
 */
export const dumpDirectory = async ({ recursive, directory, returnFullPath }: DumpDirectoryOptions) => {
  logger.debug("dumping directory", directory, { recursive, returnFullPath });
  
  const glob = new Glob(recursive ? "**/**" : "*");
  const files = await Array.fromAsync(
    glob.scan({ cwd: directory, onlyFiles: false })
  )

  logger.debug("directory dumped", files.length, "files");

  return !returnFullPath ? files : files.map((path) => join(directory, path));
}
