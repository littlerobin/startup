# Electronic Skull King score card

Grandpa Beck's card game Skull King has become one of the most popular card games in friend groups around the country. The game is exciting, but the scoring is tedious and hard to learn. With the electronic skull king score card however, that issue becomes a thing of the past. The clear labeling, and easily interpretable layout does all the calculations and hard-thinking for you. Just input the scores and let the application do the rest.

![image](https://user-images.githubusercontent.com/123112632/215236370-d20d7874-0120-4c2c-b980-daa17db8e9d5.png)

Key features:

- Secure login over HTTPS
- Ability to join a multiplayer game
- Totals scores from all users displayed in realtime
- Top game scores are persistently stored
- Displays game progress

notes:

Helps create complex renderings of dynamic content that is responsive to the actions of the user/device
Abilities:
	Animate page
	Deploy custom fonts
	Respond to user actions
	Dynamically alter layout of the page based on size/orientation
	
CSS defines rule sets (rules)
Rule
	
Selector - selects the elements to apply the rule to
Declarations - represent the property to style and its property value
Eg:
	p {
	  font-family: sans-serif;
	  font-size: 2em;   <-- twice as big as default
	  color: navy;
	  text-shadow: 3px 3px 1px #cccccc;
	}
P - selects all paragraph elements in the HTML doc

Associating CSS with HTML:
Style attribute
	<p style="color:green">CSS</p>
Use style element in HTML to define CSS rules. Should appear in <head>
	<head>
	  <style>
	    p {
	      color: green;
	    }
	  </style>
	</head>
	<body>
	  <p>CSS</p>
	</body>
Use the link element in HTML to create a hyperlink to an external file containing CSS rules. Must appear in <head>
	<link rel="stylesheet" href="styles.css" />
Using the link element is usually preferable when defining CSS rules

Rules cascade down from the highest noes to the lowest.
Lower level declarations will override higher ones

The box model
CSS defines everything as boxes
When styles are applied they are a applied to a region of the display that is a rectangular box
There are boxes within boxes
Inner: box -- where text/images/content will be
Padding -- inherit background color etc
Border -- color, thickness, line, style
Margin -- external. Represents whitespace

Width/height default to width/height of content box
Box-sizing - CSS property
	Can be changed to:
	Content-box
	Border-box
	To redefine width/height to include padding
And border![image](https://user-images.githubusercontent.com/123112632/221339551-50e5b4d3-a082-4514-a58a-bbe698208c31.png)

Bootstrap/CSS qs:
  how to make navbar flow better
  how to make player cards form in grid better and have spacing in between the rows
  
