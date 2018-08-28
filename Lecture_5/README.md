# Lecture 5: Box Model

-


![practice makes perfect](https://media1.giphy.com/media/XIqCQx02E1U9W/giphy.gif)

-

## Learning Objectives
1. Review HWK
1. Get comfortable with Box Model

-

## Agenda

3. Homework Review
4. Box Model


---

## Homework Review

👇👇👇

-

#### [Wendy Bite](https://github.com/FEWDMaterials/WendyBite_BEM)
Please download this repo and we will begin.

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
