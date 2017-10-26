// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBCQPFWmfQ9rcOMBZEupzAhDn2b9ODe_do',
    authDomain: 'your-day-by-mk.firebaseapp.com',
    databaseURL: 'https://your-day-by-mk.firebaseio.com',
    projectId: 'your-day-by-mk',
    storageBucket: 'your-day-by-mk.appspot.com',
    messagingSenderId: '571442579061'
  }
};
