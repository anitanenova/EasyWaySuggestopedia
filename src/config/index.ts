import { ftirebaseOptions, ftirebaseConfig, rootPath, stripe } from "./config";
import {
  ftirebaseOptions as ftirebaseOptionsDev,
  ftirebaseConfig as ftirebaseConfigDev,
  rootPath as rootPathDev,
  stripe as stripeDev,
} from "./config_dev";
import { IStripeConfig } from "../declarations/interfaces";

interface IConfigResult {
  ftirebaseOptions: any;
  ftirebaseConfig: any;
  rootPath: string;
  stripe: IStripeConfig;
}

export const configResult: IConfigResult =
  process.env.NODE_ENV === "development"
    ? ({
        ftirebaseOptions: ftirebaseOptionsDev,
        ftirebaseConfig: ftirebaseConfigDev,
        rootPath: rootPathDev,
        stripe: stripeDev,
      } as IConfigResult)
    : ({
        ftirebaseOptions,
        ftirebaseConfig,
        rootPath,
        stripe: stripe,
      } as IConfigResult);
