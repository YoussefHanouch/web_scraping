const Captcha = require("2captcha")
const solver = new Captcha.Solver("641dffb8a1365f3347ec7664bbc6d659");

const puppeteer = require('puppeteer');

async function solveRecaptchaAndSubmit() {

  try {
    // Solve the CAPTCHA using 2Captcha
 

    // Submit the CAPTCHA response to the same page URL
    const targetUrl = 'https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCitaResumen.faces';
    // Launch Puppeteer in headless mode
    const browser = await puppeteer.launch({ headless: false }); // Launch browser in headless mode
    const page = await browser.newPage();
    await page.goto(targetUrl);
   // Sélectionnez l'élément <input> par son identifiant
 
   
   solver.recaptcha("6LeK_-kZAAAAAEqP9TZnX-js2ldWjNxNnvReXsOY", "https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCitaResumen.faces")
   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.error(err.message);
   }); 

    // Close the Puppeteer browser when done
    //await browser.close();
  } catch (error) {
    console.error('CAPTCHA solving or submission failed:', error.message);
  }
}

// Call the function to initiate CAPTCHA solving and submission
solveRecaptchaAndSubmit();
