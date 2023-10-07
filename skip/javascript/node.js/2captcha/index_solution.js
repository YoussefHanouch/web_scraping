const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const solveRecaptcha  = require('./index_basic.js');
//const solveRecaptcha = require("./captchaSolver");

// Appelez la fonction bypassCaptcha avec l'URL en tant qu'argument

(async () => {
  puppeteer.use(RecaptchaPlugin({ provider: { id: '2captcha', token: 'YOUR_2CAPTCHA_API_KEY' } }));

// Specify the path to the Microsoft Edge executable
const edgePath = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'; // Replace with the actual path

const browser = await puppeteer.launch({
  headless: false,
  executablePath: edgePath, // Set the path to the Edge executable
});
  const page = await browser.newPage();

  try {
    await page.goto('file:///C:/Users/HP/Downloads/pontevedra%20argentina.html');

    // Optionally, select another option if needed
    /*
    await page.waitForSelector('#publicacionesForm\\:j_id286\\:1\\:residenciaPaisAcuerdo');
    await page.select('#publicacionesForm\\:j_id286\\:1\\:residenciaPaisAcuerdo', '49');
    */

    await page.click('.botonSINimgen');
    await page.waitForSelector('div.checkAutorizacion input[type="checkbox"]');
    await page.click('div.checkAutorizacion input[type="checkbox"]');
    await page.click('.botonSINimgen');

    const totalDropdowns = 5; // Set the total number of dropdowns to interact with

    for (let i = 0; i < totalDropdowns; i++) {
      const dropdownSelector = `#publicacionesForm\\:j_id60\\:${i}\\:horario`;
      await page.waitForSelector(dropdownSelector);

      const options = await page.$$eval(`${dropdownSelector} option`, (elements) =>
        elements.map((element) => ({
          value: element.value,
          text: element.textContent,
        }))
      );

      if (options.length > 0) {
        const optionToSelect = options.find((option) => option.text === '09:00' || option.text === '09:15'|| option.text === '09:30' || option.text === '09:45'|| option.text === '10:00' || option.text === '10:15');
        if (optionToSelect) {
          await page.select(dropdownSelector, optionToSelect.value);
         await page.click('.botonSINimgen');
         
       
       
      // Utilisez la fonction pour résoudre le captcha




          // You can add additional logic or actions here after selecting the option

          // Sleep for a while to simulate user interaction
        //  await page.waitForTimeout(1000); // Adjust the duration as needed

          // Take a screenshot for verification
          //await page.click('.botonSINimgen');

        } else {
          console.log(`Option "09:15" not found in dropdown ${i}.`);
        }
       
      } else {
        console.log(`No options found for dropdown ${i}.`);
      }
    }

    // Optionally, you can add more actions or verifications here

    
  } catch (error) {
    console.error('❌ An error occurred:', error);
  }
})();
