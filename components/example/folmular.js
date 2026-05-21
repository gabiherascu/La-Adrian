const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Se trimite...';

   const serviceID = 'default_service'; // sau ID-ul tău de service
   const templateID = 'template_d55aadl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Trimite Comanda';
      alert('Comandă trimisă cu succes! Te vom suna în cel mai scurt timp.');
      document.getElementById('form').reset(); // Golește formularul după trimitere
    }, (err) => {
      btn.value = 'Trimite Comanda';
      alert(JSON.stringify(err));
    });
});