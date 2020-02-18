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
let searchResult = [];


/*** 
Create a function to hide all the students except for the ten you want displayed on a given page.
***/
function showPage(list, page){
   let startIndex = (page * displayLimit) - displayLimit;
   let endIndex = page * displayLimit;
   for(let i = 0; i < studentLi.length; i++ ){
      studentLi[i].style.display = 'none';
   }
   for(let i = 0; i < list.length; i++ ){
      if(i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      }
   }
}

showPage(studentLi,1);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
    <!-- pagination HTML to create dynamically -->
      <div class="pagination">
        <ul>
          <li>
            <a class="active" href="#">1</a>
          </li>
           <li>
            <a href="#">2</a>
          </li>
           <li>
            <a href="#">3</a>
          </li>
           <li>
            <a href="#">4</a>
          </li>
           <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
      <!-- end pagination -->
      
***/
function appendPageLinks(list){
   const div = document.createElement('div');
   div.className = 'pagination';
   const divPage = document.getElementsByClassName('page')[0];
   divPage.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   let pageLength = Math.ceil(list.length / displayLimit);
   for (let i =0; i < pageLength; i++){
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.href = '#'
      a.textContent = i + 1;
      a.addEventListener('click', ()=>{
         for(let j = 0; j < ul.children.length; j++){
            ul.children[j].firstElementChild.className = '';
         }
         a.className = 'active';
         showPage(list, a.textContent);
      }) 
      li.appendChild(a);
   }
   //Add the active class name to the first pagination link initially.
   ul.firstElementChild.className = 'active';
}

appendPageLinks(studentLi);

//Add search component
// <!-- student search HTML to add dynamically -->
// <div class="student-search">
//   <input placeholder="Search for students...">
//   <button>Search</button>
// </div>
// <!-- end search -->
function createSearch(){
   const divPageHeader = document.getElementsByClassName('page-header')[0];
   const div = document.createElement('div');
   div.className = 'student-search';
   const input = document.createElement('input');
   input.placeholder = 'Search for students...';
   const button = document.createElement('button');
   button.textContent = 'Search';
   divPageHeader.appendChild(div);
   div.appendChild(input);
   div.appendChild(button);

   //Add functionality to the search component
   //When the "Search" button is clicked, the list is filtered by student name for those that include the search value. 
   button.addEventListener('click', ()=>{
      searchResult = getFilteredStudents(input.value);
      const divPagination = document.getElementsByClassName('pagination')[0];
      divPagination.parentNode.removeChild(divPagination);
      appendPageLinks(searchResult);
      showPage(searchResult, 1);
   });
}
createSearch();

function getFilteredStudents(searchContent){
   if(searchContent === ''){          //when empty, return all
      return studentLi;
   } 
   let filteredStudents = [];
   for(let i =0; i< studentLi.length; i++){
      if(studentLi[i].children[0].children[1].textContent.includes(searchContent)){
        filteredStudents.push(studentLi[i]);
      }
   }
   return filteredStudents;
}

