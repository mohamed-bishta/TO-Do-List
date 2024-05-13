
let theclick = document.querySelector(".click");
let theInput = document.querySelector(".text");
let theConten = document.querySelector(".element");
let mymassage = document.querySelector(".mymassage");
let thecounter1 = document.querySelector(".count1  span");
let thecounter2 = document.querySelector(".count2  span");
let removeAll = document.querySelector('.removeAll');


window.onload = () => {
  getData();
  theInput.focus();
}

theclick.onclick = () => {

  elementMasseg();
}


function elementMasseg(){

  if(theInput.value === ''){
    console.log('not')
    
  }else{

    let mymassage = document.querySelector(".mymassage");

    if(document.body.contains(document.querySelector(".mymassage"))){

      mymassage.remove();
    }
 
    let div = document.createElement('div');

    div.className = 'content';

    let text = document.createTextNode(theInput.value);

    div.appendChild(text);


    let mainDIv = document.createElement('div')

    mainDIv.className = 'Delete';

    let divText = document.createTextNode("Delete");

    mainDIv.appendChild(divText);

    div.appendChild(mainDIv);


    theConten.appendChild(div);

    myLocalStorig();

    theInput.value = "";

    theInput.focus();

    theCounter();

   
  }
}


document.addEventListener('click', function(e) {
  if (e.target.classList.contains("Delete")) {
    e.target.parentElement.remove();

    if(theConten.childElementCount === 0){

      taskMasseg();
    }

    geleteElement();

    theCounter();
  }

});

function taskMasseg(){

  let div = document.createElement('div');

  let text = document.createTextNode("No Task To show");

  div.className = 'content';

  div.appendChild(text);

  theConten.appendChild(div);


}


function theCounter(){

  thecounter1.innerText = document.querySelectorAll(".element .content").length;
  
}



let myArray = [];
function myLocalStorig() {

  if (theInput.value) {
    myArray.push(theInput.value);
    // console.log(myArray);

    if (myArray) {

      let myjson = JSON.stringify(myArray);

      localStorage.setItem("test", myjson);
    
    } else {

      console.log('not toadd localStorig')
    }

  } else {
    console.log('not');
  }
}

function getData() {
  const data = localStorage.getItem("test");
  if (data) {
    const parseData = JSON.parse(data);
    console.log(parseData)

    myArray = parseData;

    for (let i = 0; i < parseData.length; i++) {
      createItem(parseData[i]);
    }

  } else {
    console.log("not");
  }
}

function createItem(itemText) {
  let mainDIv = document.createElement('div');
  let mainText = document.createTextNode(itemText);
  mainDIv.className = 'content';
  mainDIv.appendChild(mainText);

  let div = document.createElement("div");
  let divText = document.createTextNode('Delete');
  div.className = 'Delete';
  div.appendChild(divText);

  mainDIv.appendChild(div);
  theConten.appendChild(mainDIv);

}

function geleteElement() {

  const data = localStorage.getItem("test");
  if (data) {
    const parseData = JSON.parse(data);
    console.log(parseData)

    myArray = parseData;

    myArray.splice(0, 1);

    let myjson = JSON.stringify(myArray);

    
    localStorage.setItem('test', myjson); 

    

  } else {
    console.log("not");
  }

}



removeAll.onclick = () => {

  localStorage.setItem('test', JSON.stringify([]));


  theConten.innerHTML = "";

  myArray = [];
}


