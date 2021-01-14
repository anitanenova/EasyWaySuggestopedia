import firebase from "firebase";
import { configResult } from "../../../config";

if (!firebase.apps.length) {
  firebase.initializeApp(configResult.ftirebaseConfig);
}

var db = firebase.firestore();

export const getCollection = (name) => {
  return db.collection(`${configResult.rootPath}/${name}`);
};
