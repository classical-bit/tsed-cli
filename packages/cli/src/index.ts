import {AddCmd, Cli} from "@tsed/cli-core";
import {resolve} from "path";
import commands from "./commands";

export * from "./commands/init/InitCmd";
export * from "./commands/generate/GenerateCmd";
export * from "./services/ProvidersInfoService";
export * from "./services/Features";
export * from "./pipes";

const pkg = require("../package.json");
const TEMPLATE_DIR = resolve(__dirname, "..", "templates");

export function bootstrap() {
  return Cli.bootstrap({
    name: "tsed",
    pkg,
    templateDir: TEMPLATE_DIR,
    commands: [AddCmd, ...commands]
  });
}
