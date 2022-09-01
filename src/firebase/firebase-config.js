export const firebaseConfig = {
  apiKey: "AIzaSyByCIr370humukCtLr_AIlp6dLsowSAPac",
  authDomain: "tienda-union-nucba.firebaseapp.com",
  projectId: "tienda-union-nucba",
  storageBucket: "tienda-union-nucba.appspot.com",
  messagingSenderId: "1060877182631",
  appId: "1:1060877182631:web:d0b44b65b4f91444795d82",
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "linkDeProduccion",
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/login"
      : "linkDeProducción",
};
