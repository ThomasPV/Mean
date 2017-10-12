// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyBgTStqwzmsdHULS_TDsFh_RRFzTd4kTro",
    authDomain: "mean-dev-e7fd0.firebaseapp.com",
    databaseURL: "https://mean-dev-e7fd0.firebaseio.com",
    projectId: "mean-dev-e7fd0",
    storageBucket: "mean-dev-e7fd0.appspot.com",
    messagingSenderId: "648059720875"
  }
};
