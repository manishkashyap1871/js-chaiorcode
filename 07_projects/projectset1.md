# Projects related to DOM

## Project LINK
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-nsulqmr9?file=index.html)

# Solution code
 
 ## Project 1
 ```javascript
 const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor="grey"
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor="yellow"
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor="white";
    }
  });
});

 ```