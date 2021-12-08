/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var navBar = document.getElementById("navbar__list");//get th element with id="navbar__list"
const sections =document.querySelectorAll('section'); 
const navItemS = ["Home", "About", "Services", "Contact", "Feedback"]


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    //for each element in "navItemS"
navItemS.forEach((element) =>{
    var li = document.createElement("li");//create <li> node
    var anchor = document.createElement("a");//create <a> node
    var text = document.createTextNode(element);//create the text node: anchor node
    anchor.appendChild(text);//append the text node to <anchor>
    anchor.classList = 'listItem';//add a class name 'list-item' to anchor
    li.appendChild(anchor);//append the <a> node to <li>
    anchor.href = "#" + element.toLowerCase();// set links to the anchor
    navBar.appendChild(li);//append <li> to the navigation bar 
    navBar.classList = "nav";// add a class name 'nav' to <ul>
    var attr =document.createAttribute("data-link");
    attr.value = element.toLowerCase();
    anchor.setAttributeNode(attr);
});


/***set the innertext of "h2" */
const changeH2 = (arr) => {
  const h2Array = document.querySelectorAll('.landing__container h2');
  arr.forEach((element, index) => {
    h2Array[index].innerHTML = element;
  });
};
changeH2(navItemS);

/**set sections IDs */
const changeSectionsIds = (arr1) => {
  const IdArray = document.querySelectorAll("section");
  console.log(IdArray);
  arr1.forEach((element, index) => {
    IdArray[index].id = element.toLowerCase();
  });
};
changeSectionsIds(navItemS);

  
// Add class 'active' to section when near top of viewport
/*getting the largest value that's less or equal to the number*/
const getLargestValue = (section) =>{
  return Math.floor(section.getBoundingClientRect().top);// get the position and the size of the element
}

/*remove the active class*/
const removeAct = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";//the actual styling
};

/**add the active class */
const addAct = (condition, section) => {
  if(condition){
    section.classList.add('your-active-class');
    section.style.cssText = "background-color: blue";//the styling on active class
  };
};

/**implementing the actual fuction */
const sectionAct = () => {
  sections.forEach(section => {
    const elementOffSt = getLargestValue(section);
    ViewPortIn = () => elementOffSt < 100 && elementOffSt > -100;
    removeAct(section);
    addAct(ViewPortIn(),section);
  });
};

window.addEventListener('scroll' ,sectionAct);


// Scroll to anchor ID using scrollTO event

let anchorLks = document.querySelectorAll('a[href^="#"]')

anchorLks.forEach((anchorLk) => {
anchorLk.addEventListener('click', () => {
    let hashtag = anchorLk.getAttribute('href');
    console.log(hashtag);

    let element = document.querySelector(hashtag);
    console.log(element);

    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});    
  });
});


 

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active