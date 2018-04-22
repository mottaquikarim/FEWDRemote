### Lecture 18
#  jQuery Plugins / Dynamic Apps
### Taq Karim

*Senior Software Engineer*, **[Intersection](https://www.intersection.com/)**

---

![bricks](https://media2.giphy.com/media/9J7tdYltWyXIY/giphy.gif)

---

## Objectives

* Understand how to leverage jQuery plugins into webapp
* (Time permitting) Consider how dynamic (ie: data rich) apps are structured and built

---


## Agenda

* jQuery Plugins
* Exercises
* Dyanmic Apps

---

## jQuery Plugins

jQuery boasts a very comprehensive plugins library, which is probably the only reason it remains relevant today.

-

### What is a plugin?

Functions written by third party developers that allow you to get complex UI components into your page easily. 

-

Generally plugins are written to work within the conventions and constraints of an existing library, for example, like jQuery.

-

When using plugins, we tread the third party developed functions as if they were a part of the library itself, even though they were added "after" the fact.

-

### Loading plugins

For jQuery in particular - but also in for plugins in general - first load the main library, then load the plugin, **then** load your implementation code that will leverage the library **and** the plugin

-

Example

```html
<!-- load jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- load plugin -->
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.8.0/slick.min.js"></script>
<!-- load implementation code -->
<script src="js/app.js"></script>
```
Optionally, and in particular for jQuery libs, you may need to **also** load some CSS files. Load those in the **`<head>`** tag as you would other CSS resources.

-

### Considerations before choosing a plugin


* Does it have good documentation?
* How many stars does it have on github? (Or, have others used it? Is it written by a reputable company? etc)
* When was the last time it was updated? Is it in active development? Is it a dead project?
* How many bugs does it have reported?
* Does it actually do what you want? Is it easy to get the functionality that you need?

-

### [jQuery Plugin Mecca](http://www.unheap.com/)

-

Let's implement **[this](http://kenwheeler.github.io/slick/)** plugin together.

---

## Exercises

Given the SlickJS implementation, build the following variations

👇👇👇

-

From the settings, add any three properties to the intialization of Slick. Observe and ensure that they work as expected.

-

Build your own prev/next buttons using slick methods

-

Have a slideshow that jumps from one slide to the next randomly, again using the slick methods

-

Set up two slideshows - one that autoplays and one that does not. When the autoplay slideshow moves, trigger a movement on the non-autoplay slideshow using slick events

---

## Dynamic Apps

By **Dynamic App** we mean an app that reaches out to a data provider (ie: giphy, facebook, twitter, etc) to fetch up to data information for display / interactivity.

-

We are able to achieve this functionality thanks to two technologies:

* Web APIs
* AJAX

-

### Web APIs

A Web API is a list of web urls that third party developers can invoke to perform tasks on data. Really, these urls are mapping directly to functions defined in the data source's code base.

Invoking the URL will call the underlying functions provided that the URL invocation is valid.

-

Typically, data sources will require users to register as a "developer" and sign up for minimally an **API key** that can be used loosely as an identifier for the developer. 

-

This allows the data source to monitor usage and optionally, **rate limit** or block invocations if abuse is detected.

Therefore, the first step towards integrating with a web API is to **sign up for an API key**. Not all services require this but **most** usually do.

-

The web URLs themselves pertain to one of four actions:

* Create
* Read
* Update
* Delete

or, **CRUD** for short.

-

### `CRUD` and HTTP Verbs

Even though we haven't explicitly used the term `CRUD` before in this course, we've done some of the work involved with implementing `CRUD`. 

The actions Create, Read, Update, and Delete correspond directly with the HTTP verbs `POST`, `GET`, `PUT`, and `DELETE`.

-

| HTTP Method | CRUD   | Explanation                                                                                                                        |
|:------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `POST`      | Create | Most often utilized to _create_ new resources. Upon success, returns a `201` status code.                                          |
| `GET`       | Read   | Used to _read_ a representation of a resource. Upon success, returns data in the form of `XML` or `JSON` with a `200` status code. |

-

| HTTP Method | CRUD   | Explanation                                                                                                                        |
|:------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `PUT`       | Update | Most often used to _update_ data on a server. Upon success, usually returns a `200` or `204`.                                      |
| `DELETE`    | Delete | Used to _delete_ a resources. Upon success, usually returns a `200` status code.                                   
|

-

In this course, we most likely will not use anything other than the **GET** verb mainly because on frontend systems, for security reasons, we want to discourage the ability to add or remove items.

-
### Understanding `CRUD` Through Public APIs
Now that we have an understanding of what `CRUD` is and how it's implemented by means of HTTP methods, let's spend the next few minutes researching one or more of the following APIs to find examples of how to create, read, update or delete.

In the examples you find, exactly what is being created, read, updated or deleted? For example, for the Twitter API, what HTTP method on what endpoint must we hit in order to create a post in a feed, *i.e.* tweet?

- Twitter: [https://dev.twitter.com/rest/public](https://dev.twitter.com/rest/public)
- Instagram: [https://www.instagram.com/developer/endpoints/](https://www.instagram.com/developer/endpoints/)
- YouTube: [https://developers.google.com/youtube/v3/docs/](https://developers.google.com/youtube/v3/docs/)
- Flickr: [https://www.flickr.com/services/api/](https://www.flickr.com/services/api/)


**Note:** Certain APIs may provide partial support for `CRUD` functionality. For example, they might allow you to archive items instead of allowing you to delete them.

-

### CRUD and Web APIs

Bring it all together, a web API will often publish **POST**/**GET**/**PUT**/**DELETE** methods (and optionally, **PATCH**). 

-

These verbs pertain to **CRUD** actions which define how data persisted on a DB can/should be mutated.

-

The end result of these operations are usually HTTP responses that display data in JSON or XML format.

-

### AJAX

**AJAX**, or **A**synchronous **J**avascript **a**nd **X**ML, is a protocol defined by web browsers that let us **invoke** web API calls via javascript **without** reloading the page.

-

**AJAX** works through the **XMLHttpRequest**  API provided by browsers that allow us to open network connections for making web API calls and providing callbacks for listening to the response and incorporating it back to our UI code.

-

**NOTE**: AJAX calls are always asynchronous, meaning we **always** rely on callbacks to process data returned.

---

## Exercise
![woohoo](https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif)

👇👇👇

-

### Giphy Search Engine

Here are the main features we would like to accomplish in our UI.

👇

-

### Set up

Please clone **[this](https://github.com/FEWDMaterials/boilerplate-plain)** github repo.

👇

-

### First Pass

* Input field for querying Giphy API
* On button click **or** enter key press, trigger a function call that starts timer (stubbing API call for now)
* When timer runs out, display something on the screen

-

### Second Pass

* Read and grok **[Giphy API](https://developers.giphy.com/docs/)** docs
* Pull in a sample API response and use that to mock a single result set in browser
* IE: regardless of what user types in, always display results for a certain query (ie: pandas, let's say) to the browser window (with the images rendering)

-

### Third Pass

* Figure out how to make API calls in javascript
* Make an appropriate API call to giphy search API to display real results to browser
