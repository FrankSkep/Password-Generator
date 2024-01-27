const generatePassword = (base, length) => {
   let password = "";
   for(let i = 0; i < length; i++) {
      // Genera un caracter random de la base recibida.
      let random = Math.floor(Math.random() * base.length);
      
      // Concatena a la variable password, el caracter generado en cada iteracion.
      password += base.charAt(random); 
   };
   return password;
};

const generate = () => {
   let length = parseInt(inputLength.value);

   let base = "abdcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let numbers = "0123456789 ";
   let symbols = ".?,;-_¡!?¿*%&$/(){}[]@<>";

   if(checkbox1.checked) base += numbers;
   if(checkbox2.checked) base += symbols;

   generatedPassword.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
   btnGenerate.addEventListener("click", () => {
      generate();
   })
})