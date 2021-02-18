
window.onload = function fun()  {                   // функция будет вызвана после полной загрузки страницы

   const initPerson = personGenerator.getPerson();  // вызов метода getPerson
  

   document.getElementById('firstNameOutput').innerText = initPerson.firstName;   // innerText - вставка текста в элемент = переменной
  
   document.getElementById('surnameOutput').innerText = initPerson.sureName;
   
   document.getElementById('otchestvoVprogtamme').innerText = initPerson.middleName; 

   document.getElementById('birthYearOutput').innerText = initPerson.godRozhdenia;

   document.getElementById('genderOutput').innerText = initPerson.gender;

   document.getElementById('anyProfessions').innerText = initPerson.professions;

   document.getElementById('monthOut').innerText = initPerson.month;

   document.getElementById('number').innerText = initPerson.number;

};


