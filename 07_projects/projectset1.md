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

## Project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## Project 3 
```javascript
const clock = document.getElementById('clock');

// basic structur of setInterval => setInterval(funtion(){},time updation in ms)
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); => it will give o/p only in console
  clock.innerHTML = (date.toLocaleTimeString());
}, 1000);
```
