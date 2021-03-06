/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://43.243.141.117:8080/belisada-admin'
  // apiUrl: 'http://192.168.0.8:8080/belisada-admin'
  apiUrl: 'https://api0.belisada.id/belisada-admin',
  productUrl: 'https://api0.belisada.id/belisada',
  eventUrl: 'https://api0.belisada.id/bs-event',
  chatUrl: 'https://chat0.belisada.id',
  socketUrl: 'https://chat0-websock.belisada.id',
  thumborUrl: 'https://img.belisada.id/',
  firebase: {
    apiKey: "AIzaSyBIUJNYI-q2h2Bh1Drb7GvDuK7KDjx_e5o",
    authDomain: "belisada-dev.firebaseapp.com",
    databaseURL: "https://belisada-dev.firebaseio.com",
    projectId: "belisada-dev",
    storageBucket: "belisada-dev.appspot.com",
    messagingSenderId: "778701366310"
  }
};
