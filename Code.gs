/*

GOOGLE SLIDES CERTIFICATE GENERATOR SCRIPT
WRITTEN AND PUBLISHED BY JEREMIE BORNAIS
MARCH 31, 2020

THIS CODE IS FREE TO USE BY ALL
MOST RECENT CODE CAN BE FOUND AT
https://github.com/jere-mie/Certificate-Generator/

*/

function myFunction() {
  var presentation = SlidesApp.getActivePresentation();
  var ss = SpreadsheetApp.openById('ENTER_SHEETS_ID_HERE');
  var sheet = ss.getActiveSheet();
  var vals = sheet.getDataRange().getValues();
  var slides = presentation.getSlides();
  var length = vals.length;
  let i = 0;
  while(i<length){
    slides[0].duplicate();
    i++;
  }
  slides = presentation.getSlides();
  let j = 0;
  while(j<length){
    slides[j+1].replaceAllText('<<NAME>>', vals[j][0]);
    j++;
  }

}
