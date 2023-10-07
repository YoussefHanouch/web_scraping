const Captcha = require("2captcha")
const solver = new Captcha.Solver("641dffb8a1365f3347ec7664bbc6d659");

/* Example ReCaptcha Website */
solver.recaptcha("6LeK_-kZAAAAAEqP9TZnX-js2ldWjNxNnvReXsOY", "https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCitaResumen.faces")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.message);
  });