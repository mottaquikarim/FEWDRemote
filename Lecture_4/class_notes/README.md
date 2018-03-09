# Class Notes

## CSS SELECTORS:

```
	there are three ways to select stuff in css:
		- by tagname (ie: li, ul, etc)
		- by classname (ie: .emph, .subblock-title, etc)
		- by idname (ie: #foobar, #taq, etc) -- NOTE: THIS IS EVIL, USE AT YOUR OWN RISK;

	we can mix and match css selectors to perform increasingly
	specific queries

	EXAMPLES:
	ul li {
		// find first ALL ULs in page, THEN find all LIs inside of those ULs
	}

	ul li ul li {
		// find all ULs in page, then find all LIs then find ALL ULs in those LIs
		// then find all LIs in those ULs
	}

	.classname {
		// select by classname
	}

	<p class="class1 class2"></p>
	^ add two classes to the same <p> tag

	.class1 {
		// style all elements with class1
	}

	.class2 {
		// style all elements with class2
	}

	.class1.class2 {
		// style ONLY elements that have class1 AND class2
	}

	p.class1 {
		// style ONLY p tags that have class2
	}

	<h1>
		<p class="class1 class2"></p>
	</h1>

	h1 .class1 {
		// FIRST select all h1s THEN select all elements INSIDE those h1s with class1
	}
```
