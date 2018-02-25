# Lecture 1: How do we internet, tho?

-

Hello, Wrold! Welcome to GA.
![excitement](https://media.giphy.com/media/l46CvRFB1GqPYAOis/giphy.gif)

-

## Learning Objectives
* Understand how HTTP, or the HyperText Transfer Protocol, works.
* Learn the significance of Git and why GitHub is relevant to our interests
* Learn the basic structure of a simple HTML page.

-

## To do list
* **[First day of class stuff](#first-day-of-class-stuff)**
* **[Guts of an HTTP Request](#guts-of-an-http-request)**
* **[Deploying to the internets](#deploying-to-the-internets)**
* **[HTML Basics](#html-basics)**
* **[Semantic HTML](#semantic-html)**
---
# First day of class stuff

-

We will first set up the tools and resources we need to succeed in class. Then, we will set up tools and resources needed to write code.

-

## Stuff to do
2. Make sure you're on **[Slack](https://fewdr0227.slack.com/messages/)**, fam. (If you're not, hit me up! We gotta fix this)
3. Create a **[Github](https://www.github.com)** account. **Make sure you verify your email as well**.
4. Download **[Sublime Text](http://www.sublimetext.com/3)**.
5. Ensure you have **Google Chrome** and it is your default browser. If this isn't already true then, well...shame on you.

-

## Tools to know
I've hand built a bunch of stuff to make our lives and class experience easier. I will be referring to these things during class so be sure to be familiar with them.
1. **[Class Landing Page](https://github.com/mottaquikarim/FEWDRemote)**. Will always contain latest class notes and resources you need
3. **[Samantha](http://samantha.fewd.us/#login)**. Online coding environment that I've built specifically to help us work on small, tightly scoped problems as we learn difficult concepts.
...there are more! But I was discuss them as appropriate. Check out my **[Medium Page](https://medium.com/@the_taqquikarim/)** tho. 
---
# Guts of an HTTP Request

-

**Learning objective**: Understand how HTTP, or the HyperText Transfer Protocol, works.

-

#### Question 
What happens when you type in [http://www.google.com](http://www.google.com) into your URL bar?

-

#### As it turns out, a whole lot.

-

Chrome has no idea what [http://www.google.com](http://www.google.com) actually means, so first, it looks up the **IP Address** for Google.

-

**DNS**, or **Domain Name System**, is a phone book containing IP Addresses for all the websites that exist on the internet.

-

Chrome then sends an **HTTP Request** to the IP address associated with Google. An HTTP Request is essentially a text message asking Google for data.

-

Google's **server** will issues a server **Response** back to your browser. This response is parsed by Chrome (ie: should Chrome display this response data? download it? etc)

-

**???**

-

Profit.

-

#### Ok great, why do we care?
There are a few key insights to take away here.

-

First and foremost, the main communication mechanism for the internet &mdash; you know, that thing that rules our lives &mdash; is **text**. Literally just **letters and words and numbers and characters**.

-

The other main point to take away here is this: the text that is transferred is written in a highly specific manner. It follows a very strict set of rules that can be parsed and understood by the server and the browser. 

-

In other words, this text follows a **specific set of grammatical rules**.
This set of grammar is what determines a **language**. In other words, the text being passed back and forth is a specific language (**HTML**, as it turns out). The browser and server understand this language. If **we** were to learn it as well, we would be able to command the browser to do whatever we want (ie: we would be able to create webpage layouts).
---
# HTML Basics

-

**Learning objective**: Learn the basic structure of a simple HTML page.


HTML stands for **Hyper Text Markup Language**. It is a set of annotations that help parsers (ie: search engines) **understand** the nature of the information that is present on the page.

-

Think of it like an outline that describes the high level importance of different elements of your webpage.

-

#### Basic setup
Your typical HTML file will look like this:
```html
<!doctype html>
<html>
 <head>
 <!--
 the HEAD section of html does not have any content
 that the user can see
 instead, we place things like:
 page title
 external css links
 SEO keywords
 here
 -->
 <meta charset="utf-8">
 <title>My First Awesome Site</title>
 </head>
 <body>
 <!--
 the BODY section will contain all the tags
 that the user can _SEE_ and _INTERACT_ with
 -->
 </body>
</html>
```

-

#### Key components

-

**`<!doctype html>`**
This tag tells the browser to read our HTML content as HTML5, the latest and greatest revision of the HTML spec. We MUST include it as the first thing on our .html files. I usually type it as all lower case, but it's common practice to also type as: <!DOCTYPE html>

-

**`<html>`**
This is the root tag. Basically, all other tags in your html file must live inside this tag. Note how on the bottom of the code snippet, we have a "". This is called closing a tag and we must close all tags that we open (with the exception of a few). If we do not do this, our HTML markup becomes invalid.

-

**`<head>`**
This section contains content that does not show the user things. Typically, we would expect to see things such as the page title, external links, and SEO tags here.

-

**`<body>`**
All the magic happens here. All the tags the user interacts with should live in this tag.

-

#### Commonly used HTML Tags
```html
<!--
 the h1 - or heading one - will have the most important text on page 
 by the old guard, we should really only have one h1 per page
 -->
 <h1>Hello, Wrold</h1>
 <h2>This is a h2</h2>
 <h3>This is an h3</h3>
 <h4>This is an h4</h4>
 <h5>This is an h5</h5>
 <h6>This is an h6</h6> 
 <!--
 this is an inline element
 unline the block element, which is meant to provide structure
 the inline element is interpreted as content
 this means that will appear next to one another
 -->
 <strong>This is an inline element</strong>
 <strong>This is another inline element</strong>
 <!-- this is a block element so it will NOT be on the same line -->
 <h1>Will this be on the same line?</h1>
 <!-- 
 differences between block elements and inline elements
 block: takes up entire width of page unless otherwise told 
 (we don't know how yet)
 we can impose dimensions on block elements
 inline: meant to be content or text
 we cannot impose dimensions on inline elements 
 -->
 <!-- how to add more spaces or line breaks?? -->
 <h1>THIS will have many &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; spaces</h1>
 <h1>This is <br> Sparta</h1>
 <a href="http://www.google.com">Hello, Wrold I'm a link, yo</a>
 <!--
 this is one mode
 <tagName attribute1="someValue" attribute2="someOtherValue"></tagName>
 this is a self closing tag
 <tagName attribute1="someValue" attribute2="someOtherValue">
 --> 
 <!--
 convention: 
 external links open up in new tab
 absolute URLs
 internal links open up in same tab
 relative URLs
 -->
 <a href="http://www.google.com" target="_blank">Hello, Wrold I'm ALSO a link, yo</a>
 <em>This is an em</em>
 <p>This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.This is a paragraph.</p>
 <img src="http://placekitten.com/g/200/300">
 <span>This is a kitten. S/he is cute.</span>
 <ul>
 <li>This is a list item <div></div></li>
 <li>This is another list item</li>
 <li>This is a third list item</li>
 </ul>
 <ol>
 <li>This is an ordered list item</li>
 <li>This is another ordered list item</li>
 <li>This is a third ordered list item</li>
 </ol>
 <div></div>
 <span></span>
```
---
# Semantic HTML

-

**Learning Objective**: Understand the purpose and utility of including semantic HTML tags in the "big picture" of the document flow.
HTML5 introduces a plethora of new tags. These tags are mainly used to dictate structure and meaning to the **information** that is presented on our website.

-

#### Properly marking up your page
Don't worry about what the `id` attributes mean for now.


![site structure](http://i.stack.imgur.com/L4qMt.png)

-

#### Sections VS Articles
Use **sections** when you are outlining **chapters in a book**. 

-

**EXAMPLE**: A dessert cookbook could have chapters on **cake** recipes vs **pie** recipes.
In our dessert cookbook, **each recipe** in the **cake** section would be an **article**.
You can nest **articles** into **sections** and **sections** into **articles**.

-

**EXAMPLE**
Articles can go inside section tags
```html
<section>
    <article>
      <!-- first blog post -->
    </article>
    
    <!-- .... more articles here ... -->
</section>
```

-

Sections can also go inside article tags
```html
<article>
  <section>
     <!-- introduction -->
  </section>
  <section>
     <!-- content -->
  </section>
  <section>
     <!-- summary, etc -->
  </section>
</article>
```

-

**THIS STUFF IS PARTLY SUBJECTIVE; THERE REALLY IS NO ONE RIGHT ANSWER**. As long as we are consistent and don't violate the laws of HTML (ie: we don't put a **p** tag inside a **a** tag, or something like that). 

-

#### Headers, Footers, Nav, Main

-

* Use headers/foorters/navs as **often as you'd like** within each section/article/aside

-

* Each sectioning element (section/article/aside) can have it's own `h1` tag (some validators say this is not recommended but this is still technically allowed)

-

* I usually put `nav` tags inside the `header` or `footer` pages

-

* **MAIN** can only be used once per page. Typically, it is used to define what the main content block of the page is. Don't have to use it though. 

-

* Essentially, **the blue in the previous image could be wrapped in a main tag**

-

#### Semantic HTML5 Tags
Here are some of the main tags that are supported.

-

**SECTION**: Represents a generic document or application section.

**HEADER**: Represents a group of introductory or navigational aids..

**FOOTER**: Represents a footer for a section and can contain information about the author, copyright information, et cetera.

-


**NAV**: Represents a section of the document intended for navigation.

**MAIN**: Defines the main content of a document.

**ARTICLE**: Represents an independent piece of content of a document, such as a blog entry or newspaper article

**ASIDE**: Represents a piece of content that is only slightly related to the rest of the page.

-

#### More info on sections vs articles

-

**SECTION**: Used to either group different articles into different purposes or subjects, or to define the different sections of a single article.

-

**ARTICLE**: `<article>` is related to `<section>`, but is distinctly different. Whereas `<section>` is for grouping distinct sections of content or functionality, `<article>` is for containing related individual standalone pieces of content, such as individual blog posts, videos, images or news items. 
---
# Deploying to the internets

-

**Learning objective**: Understand the significance of Git and why GitHub is relevant to our interests.


So at this point, we have a good sense of **how** an HTTP request works, but the main question that remains is this: **how do we get our webpage to the internets?!**

-


To answer this question, we must do two things: 
1. Build our own simple HTML page
2. Push it to GitHub.

-

## Building a basic HTML page

-

At this point, we know that the server from our last section (say, **Google's** server) will return to us a response that is encoded in a specific way (a **language** if you will).
But! **Where is this data stored?**
As it turns out, it is stored in files and folders, in the same way we store data on our computers.
So in order for us to "build" our own HTML page, we must do two things:
1. Create a folder to store our HTML data
2. Create a file **within that folder** and write out HTML.

-

## Pushing to GitHub
Ok, now we have an HTML page! And get this: we can even load it in Chrome and see it rendered! How do we get this online?
In one word: **GitHub**.

-

#### What is GitHub anyways?
GitHub is a service that allows developers to **push** their local **git repositories** online. As a courtesy, they also have their own server that will **host** HTML/CSS/JavaScript files that are found in the pushed repos.
But first, a few definitions:

-

#### Git
Git is an open source software that allows developers to collaborate on large software projects. 
With Git, developers can **commit** code at certain checkpoints. 

-

So for example, if you are building a website that requires:
1. a form,
2. a slideshow,
3. and a server request, 

-

You would implement the form then **commit** that code. Then, you would implement the slideshow and **commit**. Finally, you would implement the server requestand **commit** once more. 


This is useful because if, for any reason your updates to the slideshow breaks your form code, you can easily **roll back** to your last commit (the form implementation) and that code would remain pristine and unbroken. 

-

#### Git Repository 
When you take a piece of code and start tracking it with Git, you are turning it into a git **repository**. Your git repository will store all your commits, keep track of your code, give you commands that allow you to roll back to a previous commit, etc.

-

#### Pushing to GitHub
The final piece is this: your awesome git repo has let's say 500 commits on it. This is awesome! 
But now calamity strikes! Your computer inexplicably dies the morning of your big presentation. Here's the main question: **are you screwed?**

-

In one word: **Yes**. 


Incidentally, this is **exactly** the problem GitHUb solves. As it turns out, Git allows you to **push** your git repos to other places. Either your friends computer, or your spare home computer, etc. GitHub is basically a cloud storage system that lets you store your git repos online for **free** and also share it with other developers.
