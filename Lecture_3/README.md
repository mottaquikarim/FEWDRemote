# Lecture 3: Review and CSS

-

Game time, fam.
![css](https://media1.giphy.com/media/13XW2MJE0XCoM0/giphy.gif)

-

## Learning Objectives
0. Discuss how we can use GitHub for code management
1. Brief introduction to CSS: the querying language of HTML

-

## To do List

-

## [Warm up](#warm-up)

-

## [Semantic HTML](#semantic-html)

-

## [Intro to CSS](#intro-to-css)
---
# Warm up

-

Let's get started with a quick exercise. 

-

## Exercise 1: GitHub Review
Build me a website with some content (doesn't matter what kind of content, just some simple HTML stuff, can be about anything).
Then, **create a new GitHub repo**, **commit your website content**, and finally **deploy the site.**
**QUESTION**: What should you name this HTML file? Why is it important?

-

## Exercise 2: Adding a second page.
Now go ahead and add a second page to your web project.
Then, **commit this new page** and **deploy once more to [GitBot](http://gitbot.co)**.
**QUESTION**: How can you access this new page in the browser?

-

## Exercise 3: Build this
**[Here is the project repo](https://github.com/FEWDMaterials/cookie-recipe-starter)**. 
1. **READ** the entire readme pls.
2. Fork this repo
3. Make your changes
4. Deploy like normal
5. ???
6. We submit PR together
---
# Semantic HTML

-

HTML5 introduces a plethora of new tags. These tags are mainly used to dictate structure and meaning to the **information** that is presented on our website.

-

### EXERCISES
Here are the main problems that we will be working towards in this section of the class.

-

#### Problem 1:
Take the resume that you built for homework and redefine the content using the **semantic** html elements we will be learning about today.
If you did not do the homework or just wish to use something else, feel free to use my **[resume](http://resume.taqquikarim.com)**.

-

#### Problem 2:
Let's use the **semantic** html tags we learned about to define the markup for the page.
**[Starter code on GitHub](https://github.com/FEWDMaterials/WendyBite_BEM)**: download this repo then create a new repo on GitHub to for this project.
Also for now, don't worry about the styles that we will inevitably need to complete this assignment.
<div>
<img src="https://raw.githubusercontent.com/FEWDMaterials/WendyBite_BEM/master/assignmentMaterials/WendyBite_AboutMe.png" style="width: 100%; height: auto;">
</div>

-

#### Properly marking up your page
Don't worry about what the `id` attributes mean for now.
![site structure](http://i.stack.imgur.com/L4qMt.png)

-

#### Sections VS Articles
Use **sections** when you are outlining **chapters in a book**. 
**EXAMPLE**: A dessert cookbook could have chapters on **cake** recipes vs **pie** recipes.
Use **articles** when you are defining say **poems** in a volume.
**EXAMPLE**: In our dessert cookbook, **each recipe** in the **cake** section would be an **article**.
You can nest **articles** into **sections** and **sections** into **articles**.
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
**THIS STUFF IS PARTLY SUBJECTIVE; THERE REALLY IS NO ONE RIGHT ANSWER**. As long as we are consistent and don't violate the laws of HTML (ie: we don't put a **p** tag inside a **a** tag, or something like that). 

-

#### Headers, Footers, Nav, Main
* Use headers/foorters/navs as **often as you'd like** within each section/article/aside
* Each sectioning element (section/article/aside) can have it's own `h1` tag (some validators say this is not recommended but this is still technically allowed)
* I usually put `nav` tags inside the `header` or `footer` pages
* **MAIN** can only be used once per page. Typically, it is used to define what the main content block of the page is. Don't have to use it though. 
* Essentially, **the blue in the previous image could be wrapped in a main tag**

-

#### Semantic HTML5 Tags
Here are some of the main tags that are supported.
**SECTION**: Represents a generic document or application section.
**HEADER**: Represents a group of introductory or navigational aids..
**FOOTER**: Represents a footer for a section and can contain information about the author, copyright information, et cetera.
**NAV**: Represents a section of the document intended for navigation.
**MAIN**: Defines the main content of a document.
**ARTICLE**: Represents an independent piece of content of a document, such as a blog entry or newspaper article
**ASIDE**: Represents a piece of content that is only slightly related to the rest of the page.

-

#### More info on sections vs articles
**SECTION**: Used to either group different articles into different purposes or subjects, or to define the different sections of a single article.
**ARTICLE**: `<article>` is related to `<section>`, but is distinctly different. Whereas `<section>` is for grouping distinct sections of content or functionality, `<article>` is for containing related individual standalone pieces of content, such as individual blog posts, videos, images or news items. 
---
# Intro to CSS

-

Let's talk about **CSS**, or **Cascading Style SHeets**, the language that allows us to define styles and adjustments to default content on our webpages.

-

### Exercises
Here are the main problems that we will aspire to be able to solve in this section.

-

#### Problem 1
**[Consider this repo](https://github.com/FEWDMaterials/RelativePathsReview)**.
You are given several "websites". However they are set up in strange configurations! 
**For Each Folder**
1. **WITHOUT** rearranging the files, link the proper css folders in the **`HEAD`** section
2. If you do it right, hovering over the page in the browser will cause it to change colors

-

#### Absolute VS Relative URLs
Absolute/Relative URLs (or as they are sometimes called, **paths**).
**Absolute URL**
A URL that contains the **full path**. For example, **[https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea)** is an example of an absolute URL. 
Contains both the **hostname** and the **full path** to file.
**Relative URL**
A URL that contains only a fragment of the full address. For example, **[/nu/textarea](/nu/textarea)**. **NOTE**: this won't actually work! However, the people in **https://validator.w3.org** would be able to use this correctly **because relative URLs use the hostname of the page they are on**.
**When to use each type**
In general, if you are linking to an image or some other resource that lives on the internet, use **absolute paths**.
When you are linking to something like **CSS stylesheets** or **javascript files** or **images that live on your servere** you should **definitely** use relative paths.

-

#### Intro to CSS
**Basic Definition**
Method for searching your html tags efficiently and styling the results it finds.
** Three ways to CSS **
1. This way is evil, we won't even talk about it.
2. This way is also not very good, we won't even talk about it.
3. This way is ideal! let's discuss how to link in external files to your index.html...
** Selectors **
**SELECTOR**: a keyword used to query your html tags, classes, ids -- (the last two are html attributes)
**RULES**: the style attributes you are going to set
**[CHEAT LINK](http://fewdmaterials.github.io/Lecture2FEWD71/selectors_and_specificity.html)**