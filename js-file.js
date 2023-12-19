const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add("content");
content.textContent = 'This is the glorious text-content 4';
container.setAttribute('style', 'background-color: green');

container.appendChild(content);

const redtxt = document.createElement('p');
redtxt.textContent = "Hey I'm red!";
redtxt.setAttribute('style', 'color:red');
container.appendChild(redtxt);

const bluetxt = document.createElement('h3');
bluetxt.textContent = "Hey I'm a blue h3!";
bluetxt.setAttribute('style', 'color:blue');
container.appendChild(bluetxt);


const newcntnt = document.createElement('div');
newcntnt.classList.add('newcontent');
const newtxt = document.createElement('h1');
newtxt.textContent = "I'm in a div"
newcntnt.appendChild(newtxt);
container.appendChild(newcntnt);

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

btn.addEventListener('click', e => {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});