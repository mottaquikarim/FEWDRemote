# Lecture 14: Document Object Model

-

Welcome to lecture 14! Here's a brief class breakdown.

![puppers](https://media0.giphy.com/media/7K3p2z8Hh9QOI/giphy.gif)

-

## Learning Objectives

* Identify the differences between the `DOM` and `HTML`
* Modify the `DOM` using vanilla JavaScript
* Register and trigger event handlers

-

## Agenda

1. Introduction to the **Document Object Model** (referred to as the **DOM**)
2. **DOM** Manipulation with Vanilla JS
3. Event Handling
4. Introduction to **jQuery**


---

## Introduction to the DOM

-

Now that we have a decent grasp of the fundamentals of Javascript and programming, we are able to explore **how** we can apply these skills towards building interactive user interfaces.

-

### Document Object Model (DOM)
The DOM is a programming interface for **HTML**. It's a representation in JavaScript of the structure and content of an **HTML** tree.

-

(DOM Tree)

![dom tree](https://raw.githubusercontent.com/mottaquikarim/JavaScriptDevelopmentRemote/master/assets/DOM_tree.jpg)

-

...but what is the DOM Tree tho?

-

Essentially, there are algorithms that walk through a piece of HTML content and **parse** the tags, attributes, etc into a **javascript** object that represents that piece of HTML code.

-

Since we now have a variable that "represents" the HTML code, we are able to use javascript freely - and all the techniques we have learned for object manipulation and usage - to query and manipulate our HTML.

-

In the browser, there is a built in **document** object that will also register our changes to the DOM object and make appropriate updates to the browser window itself.

-

In short, thanks to the DOM we can use JavaScript to change text, styling, add and remove elements, make elements clickable, etc.


-

It's worth noting that the **document** object is **ONLY** available in the browser environment, but there are plenty of NodeJS libraries that will try to approximate this browser specific behavior (but they are not perfect).

-

### Inspecting the DOM using Chrome's console

-

Go to http://www.nytimes.com/. Open the developer tools in Chrome and navigate to the Console tab

-


* Type `document` into the console and hit enter
* Type `document.` into the console and scroll through the autocomplete suggestions
* Type `document.head` into the console and hit enter
* Type `document.body` into the console and hit enter
* Type `document.scripts` into the console and hit enter
* Type `document.styleSheets` into the console and hit enter

-

### Running JavaScript in the Browser

-


There are several ways to do this, the most proper approach is to use the **script** tag

```html
<script src="./path/to/js/folder"></script>
```

This goes on the **bottom** of your HTML code, right before the **closing `<body`> tag**

-

### Core JavaScript, DOM API, Third-party Libraries

-

We can divide the JavaScript we write into three categories:

* Core JavaScript
* DOM API
* Third-party libraries

-

### Core JavaScript

-

Core JavaScript consists of our data types, control structures, the standard library, etc. This is what we get for free when we run JavaScript anywhere********, *e.g.* our browser, `Node`, etc.

(**NOTE**: The standard library includes things like the `Math` and `Date` objects.)

-

### DOM API

-

The **`DOM`** API includes **`DOM`** objects like **`document`** and their associated methods, 

1. **`.getElementById()`**, 
2. **`getComputedStyle()`**, etc.

We get the **DOM API** for free when we run JavaScript in a web browser.

-

### Third-Party Libraries

-

This is any JavaScript that's included as an extra file, *e.g.* jQuery, React, Angular, etc. We have to include the file for the library to use it.

-

When we refer to **vanilla JavaScript**, it's everything but third-party libraries, *e.g.* jQuery. Vanilla JavaScript is the `DOM` API and core JavaScript.

-

Anything that we do with a third-party library, we can do using vanilla JavaScript; we just have to write it. There will **always be tradeoffs** between our JavaScript file sizes, how much time we spend implementing some functionality, etc.

---

## DOM Manipulation

-

Let's modify the DOM together using vanilla JavaScript.

-

### Create New Project Folder

-

Let's make a test folder

-

1. Create a folder called **test**.
2. Inside your **test** folder, add a **styles** subfolder and a **js** subfolder
3. Create one empty file, **app.css** inside your **styles** folder
4. Create one empty file, **app.js** inside your **js** folder
5. Create an **index.html** and link your css and js correctly to the code.

-

How can we test to ensure that the files are being loaded correctly?

-

### Retrieving Elements using Vanilla JavaScript
-

We have many ways in vanilla JavaScript to retrieve elements that are on the page.

-

By *retrieve*, we mean get a reference to the element. Once we have a reference to an element, we can manipulate it, *e.g.* change its text, styling, children, etc.

-

### document.getElementById()

```
<ul>
    <li id="first">Eggs</li>
    <li id="second">Milk</li>
</ul>
```

```
const firstListItem = document.getElementById('first');
console.log(firstListItem);
//=> shows first li element with the id "first"
```

-

It's a very old way to retrieve an element; there are similar old methods, *e.g.* `.getElementsByClassName()` and `.getElementsByTagName()`. We won't use some because we have something better!

-

### document.querySelector()
`document.querySelector()` retrieves the **first** element that matches the CSS selector string
```
<ul>
    <li class="test">Eggs</li>
    <li class="test">Milk</li>
</ul>
```

```
const firstListItem = document. querySelector('.test');
console.log(firstListItem);
//=> shows first li element with the class "first"
```

Notice in the code above that the second `li` was not retrieved.

-

### document.querySelectorAll()
`document.querySelectorAll()` returns a list of **all** elements that match a CSS selector string
```
<ul>
    <li class="test">Eggs</li>
    <li class="test">Milk</li>
</ul>
```

```
const listItems = document. querySelectorAll('.test');
console.log(listItems);
//=> shows all li elements with the class "first"
```

-

The result above is an array-like `object`, but not an array. Technically, it's a `Nodelist`.

-

### Exercise

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **jQuery_review** folder. Complete the **selectorsReview.js** file (in **js** subfolder)

It asks to do in **jQuery** but attempt to use vanilla javascript only. Later on in lecture we will solve again with **jQuery**.

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

-

### Exercise

Consider **[this repo](https://github.com/FEWDMaterials/javascript_psets)**. Download and open the **jQuery_review** folder. Complete the **selectorsReview.js** file (in **js** subfolder)

Now, attempt these problems **with** jQuery. If you're feeling good about this, also solve **basicMethodsReview.js**


