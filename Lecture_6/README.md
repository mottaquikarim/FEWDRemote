# Lecture 6: The Box Model

-

Stacks on stacks on stacks, fam
![asdfas](https://media2.giphy.com/media/y4tJKfZD2r2Za/giphy.gif)

-

## Learning Objectives
1. Explore CSS's box model
2. Understand the difference between margin/border/padding

-

## To Do List
1. ### [Warmup](#warmup)
2. ### [The Box Model](#the-box-model)
3. ### [Practical CSS3 Usecases](#practical-css3-usecases)
---
# Warmup

-

For the following two images - **with a partner** - on your desk, draw out the **HTML divs/sections** you would have to use to create that layout.

-

#### Options

-

#### [BaseCamp](https://basecamp.com/)
<p></p>
<img src="http://cdn2.hubspot.net/hub/53/hubfs/basecamp-landing-page-example.png?noresize&t=1468231454139&width=660&height=427" style="width: 100%;">

-

#### [Wistia](https://wistia.com/account/signup)
<p></p>
<img src="http://cdn2.hubspot.net/hub/53/hubfs/wisita-landing-page-example.png?noresize&t=1468231454139&width=660" style="width: 100%;">
---
# The Box Model

-

The Box Model is a way of thinking about CSS DOM elements on the page. Instead of thinking of HTML elements as bits of HTML wrappers we style, we can think of them as boxes with specific dimensions and properties. Given this though, an HTML layout can be thought of as boxes within boxes.

-

#### Exercises
1. ##### [Display Inline to Block](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Inline_to_block) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Inline_to_block)
2. ##### [Display Block to Inline-Block](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Inline_block_only) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Inline_block_only)
3. ##### [Simple Layouts](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_Box_Model_Simple_Layout) | [LIVE Instructor Version](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_Box_Model_Simple_Layout)

-

#### Margin, Padding, Border
![box model](http://www.w3schools.com/css/box-model.gif)
**Margin**: space in **between** DOM elements
**Padding**: space **within** the DOM element
**Border**: the outline **around** the DOM Element.
In general, the width of a DOM element is **padding** + **border** + **content**.

-

#### Implications
The main implications of this has to do with building **rows** with multiple tags / items inside of it. 
The widths adding up to 100% isn't enough -- the **width** + **padding** + **border** + **margin** must add up to 100%!

-

#### Box Sizing
This is a useful tool. We can use box-sizing to force the padding to be **pulled into** our content width. This way, padding is **not** added to the overall width.
**Types**: content-box, border-box
---
# Practical CSS3 Usecases

-

These are examples of CSS3 uses that we will either cover **today** or **at some point** in the duration of the course.

-

#### Exercise
See if you can implement some of the more simple ones outlined here into one of your websites (either the resume or the Wendy Bite).

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

#### References
1. **[Exhaustive Guide to Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
2. **[CSS Animations Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)**
3. 
**[Exhaustive list of CSS properties and values](http://www.w3schools.com/cssref/)**
4. **[Exhaustive list of CSS3 properties](http://www.tutorialrepublic.com/css-reference/css3-properties.php)**