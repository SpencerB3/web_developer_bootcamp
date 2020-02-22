**DOM** - Document Object Model - the interface between JavaScript and HTML/CSS

1. **DOM Selection** - the document objects come with methods to select different objects

- document.getElementById('highlight') - returns an element with a given ID
- document.getElementsByClassName('bolded') - returns a HTMLCollection of all elements with a given Class
- document.getElementsByTagName("h1") - returns a HTMLCollection of all elements of a given tag
- document.querySelector("#highlight") - returns the first element that matches a given CSS-style selector - use the syntax of a CSS file, i.e., ('#highlight') not ('highlight'), (".bolded"), ("li a.special")
- document.querySelectorAll - returns a NodeList that matches a given CSS-style selector - can be treated like an array?

2. **DOM Manipulation**

- the style property is one way to manipulate an element's style. Right side must be a string

```javascript
let tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
```

- An alternative: Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS.  First, define a class in CSS.  Then in the JavaScript file, add the new class to the selected element

```css
.some-class {
  color: blue;
  border: 10px solid red;
}
```

```javascript
let tag = document.getElementById("highlight");
// Add the new class to the selected element.
tag.classList.add("some-class");
```

- classList: a read-only list that contains the classes for a given element.  It is not an array.  Three methods:

```javascript
let tag = document.querySelector("h1");
// Add a class
tag.classList.add("another-class");
// Delete a class
tag.classList.remove("another-class");
// Toggle a class
tag.classList.toggle("another-class")
```

- textContent - returns a string of all the text content contained in an element

```html
<p>This is a <strong>great</strong> paragraph.</p>
```

```javascript
let tag = document.querySelector("p");
tag.textContent //retrieves content, great not bolded
tag.textContent = 'new string content' // reassigns the tag content
```

- innerHTML - similara to textContent, except it returns a string of all HTML contained in a given element

```javascript
tag.innerHTML // "This is a <strong>great</strong> paragraph."
tag.innerHTML = "<h1>Just an <strong>example</strong>.</h1>" // will render the h1 tag
```

- Attributes - use getAttribute() and setAttribute() to read and write attributes like `src` and `href`

```html
<a href="duckduckgo.com">I am a link.</a>
<img src="logo.png">
```

```javascript
let link = document.querySelector("a");
link.getAttribute("href"); // "duckduckgo.com"
// To change href attribute
link.setAttribute("href", "www.dogs.com"); // <a href="www.dogs.com">I am a link.</a>

//To change the image src
let img = documents.querySelector("img");
img.setAttribute("src", "spring.png"); // <img src="springer.png">
```

3. DOM Events

- Process: We select an element and then add an event listener, i.e., "Listen for a click on this <button>".
- Syntax: To add a listener, we use a method called `addEventListener`

`element.addEventListener(type, functionToCall);`

```javascript
let button = document.querySelector('button');
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!")
});
```

```html
<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>
```

```javascript
let button = document.querySelector('button');
let paragraph = document.querySelector('p');
// Setup click listener
button.addEventListener('click', function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
```

