// footer

const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

if(yearElement){
   const currentYear = new Date().getFullYear();
   yearElement.textContent = currentYear;
}

if (modifiedElement){
   const lastModifiedDate = document.lastModified;
   modifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}