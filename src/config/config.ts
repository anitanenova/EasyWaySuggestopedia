import { IStripeConfig } from "../declarations/interfaces";

export const ftirebaseConfig = {
  apiKey: "AIzaSyAlt_vf5KLRkUWjSyW6tmJOZ7ryYotj2PA",
  authDomain: "easyway-fb88e.firebaseapp.com",
  databaseURL: "https://easyway-fb88e.firebaseio.com/",
  projectId: "easyway-fb88e",
  storageBucket: "easyway-fb88e.appspot.com",
  messagingSenderId: "918097389201",
};

export const stripe: IStripeConfig = {
  fullPay: {
    priceKey: "prod_HhkjqoxqwBtUn7",
    price: 2,
  },
  deposit: {
    priceKey: "price_1GsAcICzoJwsmbdxZmxLchP1",
    price: 100,
  },
  publicKey: "pk_test_krVPVHo6fBHKI2ID4Q6q7gi7006ELOBTcF",
};

export const rootPath = "EasyWay/root";

export const ftirebaseOptions = {
  rootRef: rootPath,
  // Enable logging of react-admin-firebase
  logging: true,
  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,
  // Prevents document from getting the ID field added as a property
  dontAddIdFieldToDoc: false,
  // Adds 'deleted' meta field for non-destructive deleting functionality
  // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true}
  softDelete: false,
  // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
  associateUsersById: true,

  persistence: "session",
};
