import { Glob } from "bun";
import { join } from "node:path";

type DumpDirectoryOptions = {
  directory: string;
  recursive: boolean;
  returnFullPath: boolean;
}

/**
 * @returns Returns an array of paths representing all files in this structure.
 */
export const dumpDirectory = async ({ recursive, directory, returnFullPath }: DumpDirectoryOptions) => {
  const glob = new Glob(recursive ? "**/**" : "*");
  const files = await Array.fromAsync(
    glob.scan({ cwd: directory, onlyFiles: false })
  )

  return !returnFullPath ? files : files.map((path) => join(directory, path));
}
