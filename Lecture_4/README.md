# Lecture 4: CSS 

-

It's stylin' time, fam

![css tho](https://media.giphy.com/media/m2YYMHxFFHwM8/giphy.gif)

-

## Learning Objectives
1. Learn more in-depth CSS: the querying language of HTML

-

## To Do List

* Warm Up
* Intro to CSS
* Practical CSS3 Usecases
* Box Model

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
# Practical CSS3 Usecases

-

These are examples of CSS3 uses that we will either cover **today** or **at some point** in the duration of the course.

-

#### CSS Use Cases
Here are some interesting use cases where CSS3 in particular becomes super handy.

-

#### Animations
You can do some really awesome work with animating your elements.
* **[Spinner](http://fewd.us/howdoi/#/problem/42730)**
* **[Repeating, multiple animations](http://fewd.us/howdoi/#/problem/4270)**

-

#### Transitions
Transitions are animations that are triggered usually by some form of user interaction.
* **[Hover Effects](http://fewd.us/howdoi/#/problem/4268)**

-

#### Pseudo Selectors
Psuedo classes allow us to style specific types of element features, **i.e.** the **:hover** pseudo selector can be used to style an element as the user puts his mouse over it.
* **[Menu Hover Effect](http://fewd.us/howdoi/#/problem/4957)**
Other examples of pseudo selectors: **:visited**, **:after**, etc

-

#### Overflows
Keep track of content and determine how it should behave if there is more content than space in the container.
* **[Overflow Example](http://fewd.us/howdoi/#/problem/4165)**

-

#### Grids
This one is super expansive and you could literally teach an entire course on this. For now, take a look at a few examples / problems to gain perspective on this.
* **[Vertically and Horizontally Center](http://fewd.us/jargon/#/problem/10099)**
* **[Three Column Grid](http://fewd.us/howdoi/#/problem/4258)**
* **[Flex Align/Justify](http://fewd.us/jargon/#/problem/10100)**
* **[Flex Direction](http://fewd.us/jargon/#/problem/10097)**
* **[Flex Wrap](http://fewd.us/jargon/#/problem/10098)**

-

#### Exercise
See if you can implement some of the more simple ones outlined here into one of your websites (either the resume or the Wendy Bite).

-

#### References
1. **[Exhaustive Guide to Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
2. **[CSS Animations Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)**
3. 
**[Exhaustive list of CSS properties and values](http://www.w3schools.com/cssref/)**
4. **[Exhaustive list of CSS3 properties](http://www.tutorialrepublic.com/css-reference/css3-properties.php)**

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

## Box Model
👇👇👇

-

The Box Model is a way of thinking about CSS DOM elements on the page. Instead of thinking of HTML elements as bits of HTML wrappers we style, we can think of them as boxes with specific dimensions and properties. Given this though, an HTML layout can be thought of as boxes within boxes.

-

#### Margin, Padding, Border
![box model](http://www.w3schools.com/css/box-model.gif)

* **Margin**: space in **between** DOM elements
* **Padding**: space **within** the DOM element
* **Border**: the outline **around** the DOM Element.

In general, the width of a DOM element is **padding** + **border** + **content**.

-

#### Implications
The main implications of this has to do with building **rows** with multiple tags / items inside of it. 
The widths adding up to 100% isn't enough -- the **width** + **padding** + **border** + **margin** must add up to 100%!

-

#### Box Sizing
This is a useful tool. We can use box-sizing to force the padding to be **pulled into** our content width. This way, padding is **not** added to the overall width.
**Types**: content-box, border-box


-

#### Exercises
1. ##### [Display Inline to Block](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Inline_to_block) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Inline_to_block)
2. ##### [Display Block to Inline-Block](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Inline_block_only) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Inline_block_only)
3. ##### [Simple Layouts](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Simple_Layout) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Simple_Layout)


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
