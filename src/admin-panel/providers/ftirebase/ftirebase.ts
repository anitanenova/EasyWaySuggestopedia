import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import { configResult } from "../../../config";

const dataProvider = FirebaseDataProvider(
  configResult.ftirebaseConfig,
  configResult.ftirebaseOptions as any
);
const authProvider = FirebaseAuthProvider(
  configResult.ftirebaseConfig,
  configResult.ftirebaseOptions as any
);

export { dataProvider, authProvider };
