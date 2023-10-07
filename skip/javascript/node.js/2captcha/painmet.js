const puppeteer = require('puppeteer');

(async () => {
  // Lancez un navigateur Puppeteer
  const edgePath = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'; // Replace with the actual path

  const browser = await puppeteer.launch({
    headless: false,
    executablePath: edgePath, // Set the path to the Edge executable
  });
  // Ouvrez une nouvelle page
  const page = await browser.newPage();

  // Accédez au site web que vous souhaitez
  await page.goto('https://login.aliexpress.com/?spm=a2g0o.cart.0.0.4fbd378dL9AGnQ&return_url=https://www.aliexpress.com/p/shoppingcart/index.html'); // Remplacez l'URL par celle du site que vous ciblez
  await page.type('#fm-login-id', '7anouch99@gmail.com'); // Remplacez par le sélecteur CSS du champ de numéro de carte
  await page.type('#fm-login-password', '123456youssef');
  //await page.click('button[aria-label="Connexion"]');
 
  // Attendez quelques secondes pour voir les résultats
 // Vous pouvez ajuster le délai en fonction de vos besoins

  
  /*
  // Remplissez les informations de paiement
  await page.type('#card-number', '1234 5678 9012 3456'); // Remplacez par le sélecteur CSS du champ de numéro de carte
  await page.type('#expiry-date', '12/25'); // Remplacez par le sélecteur CSS du champ de date d'expiration
  await page.type('#cvv', '123'); // Remplacez par le sélecteur CSS du champ CVV
  await page.type('#cardholder-name', 'John Doe'); // Remplacez par le sélecteur CSS du champ du nom du titulaire de la carte

  // Vous pouvez également soumettre le formulaire de paiement si nécessaire
  // await page.click('#submit-button'); // Remplacez par le sélecteur CSS du bouton de soumission

  // Attendez quelques secondes pour voir les résultats
  await page.waitFor(5000); // Vous pouvez ajuster le délai en fonction de vos besoins
*/
  // Fermez le navigateur Puppeteer
 // await browser.close();
})();
