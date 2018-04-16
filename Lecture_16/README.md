### Lecture 16
#  Events and jQuery
### Taq Karim

*Senior Software Engineer*, ** [Intersection](https://www.intersection.com/)**

-

Welcome to Lecture 15! Here's a brief rundown.
![bricks](https://media3.giphy.com/media/OMeGDxdAsMPzW/giphy.gif)

-

#### Learning Objectives

* Register and trigger event handlers
* Explore similarities and differences between vanilla JS and jQuery
-

#### Agenda


* Working with Vanilla JS
* Practice
* Introduction to jQuery
* Event Handling


---

## Vanilla JS

Let's explore what can be done with **vanilla js**

-

### Golden Rule

Generally, we first **select** the DOM element we wish to manipulate and then we **leverage NodeList object properties** to make the manipulations themselves.

-

### Adding CSS

```
const div = document.querySelector('div')
div.style.border = '1px solid red';
```

* adds border property to a div element
* **QUESTION** how would implementation change if we used **`querySelectorAll`** instead?

-

### Reading CSS

```
const div = document.querySelector('div')
console.log(div.style.border);
```

* we can access and store CSS properties that have already been explicitly set in CSS files
* **NOTE**: this does not include **computed** styles - as in, element properties the browser calculates and maintains

-

### Accessing ComputedStyles

Consider **[this documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)**. Based on the docs, how could you access the computed width of a div that has a CSS width set to **100%**?

-

### Class manipulation

The browser gives us access to the the [**`classList`**](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property to handle class manipulation.

-

```js
const div = document.querySelector('div'); // <div></div>
div.classList.add('test'); // <div class="test"></div>
div.classList.remove('test'); // <div></div>
div.classList.contains('test'); // false
```

Always prefer to use the `classList` property as an interface for class manipulation on DOM HTML elements.

-

### Getting/Setting Attributes

We are able to use the `getAttribute` and `setAttribute` properties to manipulate DOM element attributes

```js
// <a></a>
const a = document.querySelector('a');

a.setAttribute('href', 'https://www.google.com');
// ^^ <a href="https://www.google.com"></a>

console.log(a.getAttribute('href')); 
// ^^ https://www.google.com
```

-

### Note about querySelector

**Question**: How can we select class **js-nested** below?

```html
<div>
	<span class="js-nested"></span>
</div>
```

```js
// either:
document.querySelector('.js-nested')

// OR:
const par = document.querySelector('div');
const nested = par.querySelector('.js-nested')
```

**Advantage**: for large HTML pages, there may be a performance boost to search within a DOM node vs entire page

-

### innerHTML, innerText, textContent

* user innerHTML to set html code directly inside element
* user innerText/textContent to **only** update the text

```js
const div = document.querySelector('div')
if (div.innerText) {
	div.innerText = 'test'
}
else {
	div.textContent = 'test'
}
```

---

## Exercise

👇👇👇

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **jQuery_review** folder. Complete the problems from **basicMethodsReviewVANILLA.js** file.

---

## jQuery

-


**Everything** we just did using vanilla JavaScript, we can also do using jQuery, a third-party library.
-

There's a good chance our syntax would have been less verbose and marginally easier to remember.

-

### ...Why did we just cover vanilla JavaScript?
-

It's important to realize that jQuery uses vanilla JavaScript and **is written using vanilla JavaScript**.

-

You might not always have access to or be able to use jQuery. For example, React discourages manipulating the `DOM` directly and from using third-party libraries like jQuery when you absolutely need to modify the `DOM` directly.

-

As a front-end engineer, you need to be able to manipulate the `DOM` with **and** without jQuery.

-

### jQuery Background

-

* Released in 2006 by John Resig
    * well-written and extensively tested library
    * you can read the source code in the unminified version
* Smoothed over conflicts between different browser's versions of JavaScript
* Provided convenience functions not available in the `DOM` API
    * inspired further versions of the `DOM` API, so similar functions are now in vanilla JavaScript

-

### Upsides to Using jQuery

-

* makes life extremely convenient for front-end work
* frequently used in code bases - it's not going anywhere
    * ~18% of all websites on the internet use it
    * ~78% of the the top million sites use it
* many jQuery plugins available
    * scripts that make use of jQuery's object system
* fixes bugs you didn't even know existed
    * http://bit.ly/28XvNg2

-

### Downsides to Using jQuery

-

* it's ~11,000 extra lines of code that we need to include
    * not great for bandwidth-constrained situations
    * *e.g.* mobile devices *not actually an issue if you minify your code*
* provides more than you actually need and can't be customized
    * *at some point, you'll end up reimplementing parts of it*
* you might not actually **[need it](http://youmightnotneedjquery.com/)**
    * *you should examine why you're using jQuery when you include it*

-

TBF there aren't that many good reason to use jQuery these days. However, as an engineer, you should keep tradeoffs in mind.

-

### jQuery() Function

-

jQuery's primary function is called `jQuery()`, also aliased under **`$()`**.
It is exposed as a global variable on the `window` object when we include the library.

-

It does different things depending on the argument passed to it.

-

### Including jQuery
-

For today's class, we'll include jQuery from a CDN (content delivery network). There's quite a few CDNs; we'll go with Google's:

**[https://developers.google.com/speed/libraries/#jquery](https://developers.google.com/speed/libraries/#jquery)**


-

### jQuery() Function Example
-

```
<ul class="special-list">
    <li>First Child</li>
    <li>Second Child</li>
</ul>
```

```
// returns a jQuery object containing
// all the `li` inside `.special-list`
$(".special-list li")
// jQuery(".special-list li")
```

-

### jQuery Object
-

The main use of the jQuery function is to select a group of elements. It's a lot like `querySelectorAll()`.

-

However, the jQuery function returns a `jQuery object`, an array-like collection of elements.

We only have access to jQuery methods on `jQuery objects`, not vanilla JavaScript objects, *e.g.* `Nodelist` returned from `querySelectorAll()`.

-

* we can perform many actions on the resulting `jQuery object`
    * *e.g.* add content, change styling, add classes, add event listeners
    * actions performed using jQuery methods
* we can perform operations **all at once** on all the elements in the collection
    * we **do not** have to manually iterate over the elements
* we can retrieve the underlying `DOM` API element using the index

-

```
// bracket notation
$(".special-list li")[0];
// get method*
$(".special-list li").get(0);
```

-

### Advice
Please don't worry about knowing every single `DOM` API method and every single jQuery method.

&nbsp;

I recommend getting comfortable reading documentation. You'll be reading the JavaScript documentation on MDN and the jQuery documentation on jQuery's website,  as well as using Google, regularly.

-

**[https://api.jquery.com/](https://api.jquery.com/)**

Their search functionality is poor, so use Google and prefix your search with "jQuery".

---

## Exercise

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **jQuery_review** folder. Complete the **selectorsReview.js** file.

We solved it before without **jQuery** , now solve again **with** jQuery. Then, solve **basicMethodsReview.js**, again this time **with** jQuery



---


## Event Handling

-

We use event listeners, also called event handlers, to designate certain code to run based on `events`.

-

There are built-in events for things that happen on our page, *e.g.* click, hover, submit, page finished loading, etc.

-

Common events are: `submit`, `click`, `mouseenter`, `mouseleave`, `load`. 

You can find a full list of events **[here](https://developer.mozilla.org/en-US/docs/Web/Events)**.

-

### addEventListener()
```
element.addEventListener(type, listener);
```

-

We can attach a `listener`, a function to run when the `event` occurs, to an `element` on the page.

-

We can retrieve the `element` using the methods mentioned previously, *e.g.* `document.querySelector()`.

-

### addEventListener() Example
```
<a href="https://www.google.com/" target="_blank" rel="noopener">
    Click Me!
</a>
```

```js
const anchorElem = document.querySelector("a");
// The parameter `event` is an object with information
// about the mouse click.
anchorElem.addEventListener("click", event => {
    // There are some default actions associated
    // with an element.
    // For anchor tags, we're taken to a new page.
    // We need to disable that default behavior
    // using `preventDefault()`
    event.preventDefault();
    console.log("You clicked the anchor tag!");
});
```

---

## Exercises

Create the following files:

1. **index.html**, create a simple **text** input field and a **button**.
2. **app.js**, write an event listener for your **button** that, when triggered will `console.log` out the contents of your **input** field.

(No need to create a js folder for now, this is a quick exercise)

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **simple_events_review** folder. Complete the  ask in **js/app.js** file.

Solve twice, once **without** jQuery and then again **with** jQuery.

-

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **dragging** folder. Think about how you would implement dragging functionality

Solve twice, once **without** jQuery and then again **with** jQuery.



