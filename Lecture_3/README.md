# Lecture 3: CSS

-

Game time, fam.

![css](https://media1.giphy.com/media/13XW2MJE0XCoM0/giphy.gif)

-

## Learning Objectives
0. Review of HTML
1. Brief introduction to CSS: the querying language of HTML

-

## To do List

-

* Warm up
* Semantic HTML
* Exercise
* Intro to CSS

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
Then, **commit this new page** and **deploy once more**.

**QUESTION**: How can you access this new page in the browser?


---
# Semantic HTML (Review)

-

HTML5 introduces a plethora of new tags. These tags are mainly used to dictate structure and meaning to the **information** that is presented on our website.

-

#### Properly marking up your page

![site structure](http://i.stack.imgur.com/L4qMt.png)

-

#### Semantic HTML5 Tags
Here are some of the main tags that are supported.

* **SECTION**: Represents a generic document or application section.
* **HEADER**: Represents a group of introductory or navigational aids..
* **FOOTER**: Represents a footer for a section and can contain information about the author, copyright information, et cetera.
* **NAV**: Represents a section of the document intended for navigation.

-

* **MAIN**: Defines the main content of a document.
* **ARTICLE**: Represents an independent piece of content of a document, such as a blog entry or newspaper article
* **ASIDE**: Represents a piece of content that is only slightly related to the rest of the page.

-

#### Sections VS Articles
Use **sections** when you are outlining **chapters in a book**. 

-

**EXAMPLE**: 
* A dessert cookbook could have chapters on **cake** recipes vs **pie** recipes.
* In our dessert cookbook, **each recipe** in the **cake** section would be an **article**.

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

You can nest **articles** into **sections** and **sections** into **articles**.

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

**THIS STUFF IS PARTLY SUBJECTIVE; THERE REALLY IS NO ONE RIGHT ANSWER**. 

As long as we are consistent and don't violate the laws of HTML (ie: we don't put a **p** tag inside a **a** tag, or something like that). 

-

#### Headers, Footers, Nav, Main
* Use headers/foorters/navs as **often as you'd like** within each section/article/aside
* Each sectioning element (section/article/aside) can have it's own `h1` tag (some validators say this is not recommended but this is still technically allowed)
* I usually put `nav` tags inside the `header` or `footer` pages

-

* **MAIN** can only be used once per page. Typically, it is used to define what the main content block of the page is. Don't have to use it though. 
* Essentially, **the blue in the previous image could be wrapped in a main tag**

-


#### More info on sections vs articles
**SECTION**: Used to either group different articles into different purposes or subjects, or to define the different sections of a single article.

**ARTICLE**: `<article>` is related to `<section>`, but is distinctly different. Whereas `<section>` is for grouping distinct sections of content or functionality, `<article>` is for containing related individual standalone pieces of content, such as individual blog posts, videos, images or news items. 

-

### EXERCISES
Here are the main problems that we will be working towards in this section of the class.

-

#### Exercise 1:
Build a resume website using the **semantic** html elements we learned today. Model it after the content from the **[Spiderman](https://github.com/mottaquikarim/FEWDRemote/blob/master/Lecture_2/class_notes/theAmazingSpiderman/index.html)** website we built last lecture.

---
# Exercise

Given the image below, convert into semantic HTML markup

-


<div>
<img src="https://raw.githubusercontent.com/FEWDMaterials/WendyBite_BEM/master/assignmentMaterials/WendyBite_AboutMe.png" style="width: auto; height: 100%;">
</div>


---
# Intro to CSS

-

Let's talk about **CSS**, or **Cascading Style SHeets**, the language that allows us to define styles and adjustments to default content on our webpages.

-


#### Absolute VS Relative URLs

Before getting into the specifics, let's talk about linking our code to HTML.

```html
<head>
	<!-- include css file in your webpage -->
	<link rel="stylesheet" href="...">
</head>
```

-

Absolute/Relative URLs (or as they are sometimes called, **paths**).

**Absolute URL**
A URL that contains the **full path**. For example, **[https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea)** is an example of an absolute URL. 
Contains both the **hostname** and the **full path** to file.

-

**Relative URL**
A URL that contains only a fragment of the full address. For example, **[/nu/textarea](/nu/textarea)**. 

**NOTE**: this won't actually work! However, the people in **https://validator.w3.org** would be able to use this correctly **because relative URLs use the hostname of the page they are on**.

-

**When to use each type**

In general, if you are linking to an image or some other resource that lives on the internet, use **absolute paths**.

When you are linking to something like **CSS stylesheets** or **javascript files** or **images that live on your servere** you should **definitely** use relative paths.

-

#### Intro to CSS
**Basic Definition**
Method for searching your html tags efficiently and styling the results it finds.

-

** Three ways to CSS **
1. This way is evil, we won't even talk about it.
2. This way is also not very good, we won't even talk about it.
3. This way is ideal! let's discuss how to link in external files to your index.html...
** Selectors **
**SELECTOR**: a keyword used to query your html tags, classes, ids -- (the last two are html attributes)
**RULES**: the style attributes you are going to set
**[CHEAT LINK](http://fewdmaterials.github.io/Lecture2FEWD71/selectors_and_specificity.html)**

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

---
# Practice

-

Let's practice what we just learned tho

-

#### Problems 1 - 4

-

#### Log in to [Samantha](http://samantha.fewd.us/#/) First!
Then, given the following pages, please complete the task outlined.

-

1. ##### [CSS Tag Selectors](http://samantha.fewd.us/#fork/mottaquikarim/CSS_Tag_Selectors) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/CSS_Tag_Selectors)
2. ##### [CSS Class Selectors](http://samantha.fewd.us/#fork/mottaquikarim/CSS_Class_Selectors_2) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/CSS_Class_Selectors_2)
3. ##### [CSS ID Selectors](http://samantha.fewd.us/#fork/mottaquikarim/CSS_ID_Selectors) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/CSS_ID_Selectors)
4. ##### [Complex CSS Selectors](http://samantha.fewd.us/#fork/mottaquikarim/Complex_CSS_Selectors) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/Complex_CSS_Selectors)

---

# Homework 1

Due March 13, 2018 at midnight.

-


**[Starter code on GitHub](https://github.com/FEWDMaterials/WendyBite_BEM)**: download this repo then create a new repo on GitHub to for this project.

-


<div>
<img src="https://raw.githubusercontent.com/FEWDMaterials/WendyBite_BEM/master/assignmentMaterials/WendyBite_AboutMe.png" style="width: auto; height: 100%;">
</div>

-

## Requirements

* Semantic HTML tags as necessary
* CSS styling to make your webpage look like the attached image
* Proper use of relative urls and absolute urls based on situation
* Deployed to Github Pages under a repo call **homework1**

-

## How to submit hw

* Deploy to Github Pages
* Paste the **deployed, rendered** url into a direct message with me. **NOT** the github repo page.
