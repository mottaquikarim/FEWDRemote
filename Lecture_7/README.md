# Lecture 7: Grids Practice

-

It's practicing time, fam

![practice](https://media0.giphy.com/media/srbiWWa0VW2YM/giphy.gif)

-

## Learning Objectives
1. Practice using grids

-

## Agenda
1. Review Final Project Specs
2. Review Flexbox
3. Practice


---
## Final Project Specs

**[Specs here](https://github.com/mottaquikarim/FEWDRemote/tree/master/Final_Project)**

---
## Review Flexbox
👇👇👇

-

The flex layout is a series of CSS properties that allows the **container** element to alter the dimensions of its **children** elements. A flex container will expand items to fill available space if there is any and shrink them to avoid overflow.

-

Consider the following image

![img](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)

_[source](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)_

-

### [Basic Example](http://samantha.fewd.us/#broadcast/mottaquikarim/flex-example)

-

### Flex basis, width, grow, shrink

* If no flex-basis specified, we fall back to width
* flex-basis is the **default** size the browser tries to draw the columns to
* if flex-basis width can be respected **and** items will fit in container, 👍
* else, it will rely on **flex-grow** or **flex-shrink** to determine how to layout the items
	* flex-grow/shrink of **0** means do not grow
	* **1** means same size
	* **2** is twice relative to the others, etc

-

### justify-content/align-items

* how to align horizontally: **justify-content**. apply on container
* vertically: **align-items**. apply on container

**NOTE**: there is an **align-self** that can be applied to individual items in flex container

-

More info:

* **[CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
* **[geddski](http://gedd.ski/post/the-difference-between-width-and-flex-basis/)**

---
# Practice
👇👇👇

-

1. **Simple Flex: [Practice](http://samantha.fewd.us/#/fork/mottaquikarim/flex-grid-ex)**
2. **Simple Flex 2: [Practice](http://samantha.fewd.us/#/fork/mottaquikarim/flex-grid-ex-2)**
3. **Simple Flex 3: [Practice](http://samantha.fewd.us/#fork/mottaquikarim/flex-grid-ex-3)**
4. **Simple Flex 4: [Practice](http://samantha.fewd.us/#fork/mottaquikarim/flex-grid-ex-4)**


-

## Basic Layouts

**NOTE**: you will likely have to add some of your own CSS styles here as well to achieve the gray boxes and min-heights.

-

#### Simple Layout
<a href="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout1.png" target="_blank">
<img src="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout1.png" style="width: 100%; height: auto;">
</a>
<p></p><p></p>

-

#### Three Column Layout
<a href="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout2.png" target="_blank">
<img src="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout2.png" style="width: 100%; height: auto;">
</a>
<p></p><p></p>

-

#### Simple Marketing
<a href="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout3.png" target="_blank">
<img src="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout3.png" style="width: 100%; height: auto;">
</a>
<p></p><p></p>

-

#### Marketing with Nav
<a href="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout4.png" target="_blank">
<img src="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout4.png" style="width: 100%; height: auto;">
</a>
<p></p><p></p>

-

#### Magazine
<a href="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout5.png" target="_blank">
<img src="https://raw.githubusercontent.com/FEWDMaterials/FEWD629_Lecture5/master/Layouts/Layout5.png" style="width: 100%; height: auto;">
</a>
<p></p><p></p>

-

## Layouts
1. ### [NYT](https://www.nyt.com)
2. ### [Huffpost](http://www.huffingtonpost.com/)
3. ### [Washington Post](https://www.washingtonpost.com/)

---
## HOMEWORK
**Due**: Tuesday March 27th, midnight

**[Assignment](https://github.com/FEWDMaterials/FEWD_Developer_Matchmaker)**
