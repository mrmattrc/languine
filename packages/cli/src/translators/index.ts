import type { Translator } from "../types.js";
import { javascript } from "./js.js";
import { json } from "./json.js";
import { markdown } from "./md.js";
import { po } from "./po.js";
import { xcodeStrings } from "./xcode-strings.js";
import { xcodeXCStrings } from "./xcode-xcstrings.js";
import { yaml } from "./yaml.js";

/**
 * Get adapter from file extension/format
 *
 * This will lazy-load the adapters to reduce memory usage and improve server performance
 */
export async function getTranslator(
  format: string,
): Promise<Translator | undefined> {
  switch (format) {
    case "ts":
    case "js":
      return javascript;
    case "json":
      return json;
    case "md":
    case "mdx":
      return markdown;
    case "xcode-strings":
      return xcodeStrings;
    case "xcode-xcstrings":
      return xcodeXCStrings;
    case "po":
      return po;
    case "yaml":
      return yaml;
    // case "xml":
    //   return xml;
    // case "arb":
    //   return arb;

    default:
      return undefined;
  }
}
