/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Create your global variables
Create a variable to store the student list item elements in the student list.
Create a variable to store the number of items to show on each “page”, which for this project, is 10.
***/

const studentLi = document.getElementsByClassName('student-item');
const displayLimit = 10;



/*** 
Create a function to hide all the students except for the ten you want displayed on a given page.
***/
function showPage(list, page){
   let startIndex = (page * displayLimit) - displayLimit;
   let endIndex = page * displayLimit;
   for(let i = 0; i< studentLi.length; i++ ){
      if(i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      } else{
         list[i].style.display = 'none';
      }
   }
}

showPage(studentLi,1);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.