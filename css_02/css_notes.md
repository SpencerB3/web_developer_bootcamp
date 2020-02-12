**Introduction to CSS**

1. typical css structure is 

   ```
   selector {
   	property: value;
   	anotherProperty: value;
   }
   ```

2. link tag connectios html file to css file.  Example:

   - ```css
     <link rel="stylesheet" href="app.css";
     ```

3. Colors in CSS

   - Hexadecimel" ''#' + a string of 6 hexadecimal numbers(from 0-F). 
   - First two digits correspond to red, second two digits to green, final two to blue 

   ```css
   h1 {
   	color: #000000; --> gives black, #4B0082 gives orange
   }
   ```

   - RGB - Three Channels: Red, Green, Blue.  Each ranges from 0 - 255

   ```css
   h1 {
     color: rgb(240,0,100); --> gives a reddish purple
   }
   ```

   - RGBA - Just like RGBA, but with an alpha(transparency).  Ranges from 0.0 to 1.0

   ```css
   h1 {
     color: rgba(0, 200, 100, .2); --> gives a very translucent green
   }
   ```

4. Backgrounds - can put colors or images.  Background-repeat prevents the image from tiling verticaally and horizontally to fit the screen.  Background-size causes the image to fit the screen

   ```css
   body {
     background: url(https://i.ebayimg.com/images/i/321904358358-0-1/s-l1000.jpg) -> woodgrain
     background-repeat: no-repeat;
     background-size: cover;
   }
   ```

5. Borders in css have three different values: the width, color, and the style.  Can be assigned separately or as one property

   ```css
   h1 {
     color: rgba(0, 200, 100, 1);
     /* border-color: purple;
     border-width: 5px;
     border-style: solid; */
   
     border: 15px dashed rgb(250, 150, 20)
   }
   ```

   

   ```html
    <li  id='special'>
         <input type="checkbox" name="" id="">
         Read a book
       </li>
   ```

6. CSS Selectors - ID and Class - before we learned Element selector

   - ID Selectors single out an element on a page.  For example, to give an element a pink background. Note the hashtag in the id in the CSS file. The value of an id selector can only be used once.

   In HTML:

   ```
    <li id='special'>
      <input type="checkbox" name="" id="">
      Read a book
   </li>
   ```

   In CSS

   ```
   #special {
     background: pink;
   }
   ```

   - Class Selectors - Selects all elements in a given class. Note the '.' in the class selector in the CSS file. 

   HTML

   ```html
   <li class="completed">
         <input type="checkbox" name="" id="">
         Walk Prince
       </li>
       <li class="completed">
         <input type="checkbox" name="" id="" checked>
         Buy Groceries
       </li>
   ```

   CSS

   ```css
   .completed {
     text-decoration: line-through;
   }
   ```

   To add a class to an attribute that alread has a class aplied to it, add a space, and leave between quotations

   ```html
   <tr>
         <td class="horizontal"></td>
         <td class="vertical horizontal"></td> <!--two classes-->
         <td class="horizontal"></td>
   </tr>
   ```

   

7. More Selectors

   - star  selector '*' - targets every element on the HTML page

   ```css
   * {
     border: 5px dashed lightcoral;
   }
   ```

   - descendant selector - takes two or more tag names and chains them together - only targets those elements that are within the chain - below, selector will target all anchor tags with an <li> tag

   ```
   li a {
     color: red;
   }
   ```

   - adjacent selector - will target all elements that come after the first element and that are on the same level as the first element

   ```css
   h4 + ul {
   border: 5 px solid green;
   }
   ```

   - attribute selector - will target all elements based on an attribute

   ```css
   a[href ="http://www.google.com"] {
     background: blue;
   }
   ```

   - nth of type - selects every nth of every specific element - can specify 'odd' or  'even' as arguments

   ```css
   ul:nth-of-type(3) {
     background: purple;
   }
   ```

8. Specificity and the Cascade

   - **Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.  The more specific property values will override the less specific ones.  ID selectors > Class selectors > Type Selectors

**Intermediate CSS**

1. Fonts

   - **font-family** controls the type of font

   ```css
   p {
     font-family: Arial;
   }
   ```

   - **font-size** controls the size of the font - unit of measurement may be pixels (px) or em values (em).  'em' values are equal to the font size of the surrounding element.  (rem) is used to refer to the root element and bypass the parent element.  Default is 16px.

   ```css
   body {
     font-size: 10px;
   }
   
   h1 {
     font-size: 5.0em;
   }
   ```

   - **font-weight** refers to how bold or thin the font lines are - may use normal, bold, bolder, or numbers 100 to 900 (measurement goes up by 100)

   ```css
   p {
     font-weight: 700;
   }
   ```

   - **line-height** controls the height of a given line - 2 equals double-spaced

   ```css
   p {
   	line-height: 1.5;
   }
   ```

   - **text-align** controls whether a given element is algned to the right, left, or center

   ```css
   h1 {
   	text-align: center;
   }
   ```

   - **text-decoration** defines whether a given text is decorated with an underline, a strike through, or an overline

   ```css
   h1 {
     text-decoration: line-through;
   }
   ```

2. The Box Model

   - Making up a block box in CSS we have the:
     - **Content box**: The area where your content is displayed, which can be sized using properties like [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height).
     - **Padding box**: The padding sits around the content as white space; its size can be controlled using [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) and related properties.
     - **Border box**: The border box wraps the content and any padding. Its size and style can be controlled using [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) and related properties.
     - **Margin box**: The margin is the outermost layer, wrapping the content, padding and border as whitespace between this box and other elements. Its size can be controlled using [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) and related properties.

   ```css
   P { /* because <p> is a block element, by defaulty goes all the way across the screen*/
     /*Content - Width and Height - px or %.  % is dynamic, percentage of parent element, in this case the <body> element*/
     width: 50%;
     /* height: 500px; */
     
     /*Border*/
     border: 2px solid blue;
   
     /*Padding*/
     /* padding: 10px; */
     padding-left: 40px;
   
     /*Margin*/
     /* margin: 100px */
     /* margin-top: 500px; */
     margin: 20px 40px 500px 100px;
     /* top-right-bottom-left */
     /* margin: 0 auto 0 auto; auto centers element */
     margin: 0 auto; /* gives same effect as above, first value gives top and bottom, 
     second value gives left and right*/
   }
   ```

   