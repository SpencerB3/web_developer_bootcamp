**Front End Basics**

1. HyperText MarkUp Language (HTML)
   - Defines the structure of a page (put an image there, put a form here)
   - Gives the nouns of a webpage
2. Cascading Style Sheets (CSS)
   - Defines the style of HTML (make this text purple, put a yellow border)
   - The adjectives of the webpage
3. JavaScript
   - Adds logic and interaction to the page (do some math, change color after the user hits like, load new data)
   - The action or verbs of the webpage

**HTML**

1. consists of a series of elements
   - most elements have an opening tag, some content, and then a closing tag
   - elements are either _block line_ where they appear on a whole separate line or _inline_ where no new line is created by the element

- comments may be triggered by <!-- something --> (highlight text then hit command /)
- the content of the page goes into the body tag, the metadata, including the title, goes into the head tag
- the title tag gives the title of the webpage in the tab

2. Lists

- two types of lists - ordered (ol) and unordered (ul) - both need list items (li)

- div and span are used to contain different content such as different programming languages or CSS effects.  div is block line item and span is an inline item
- attributes add additional info to opening tags -- <tag name='value'><tag name>, an example is an img tag <img scr="corgi.png"> (img is a self closing tag), or an anchor tag (a) for links <a href="http://www.duckduckgo.com">A search website</a>

3. Tables

- ```html
  <table>
  	<thead> (table head)
  		<tr> (table row)
  			<th> (table heading) </th>
  		</tr>
  	<thead>
  	
  	<tbody> (table body)
  		<tr> (table row again)
  			<td> (table data) </td>
  		</tr>
  	<tbody>
  </table>
  ```

4. HTML Forms - Getting User Input

- the form tag - a container for all of our different inputs

  ```html
  <form action="/my-form-submitting-page" method="post">
    <!-- All of our inputs will go in here-->
  </form>
  ```

  - Action - the URL to send the data to (to google, to a sign up page), sends to server

  - Method - the type of HTTP request - two types (get/post)

    - get requests - google searches, retrieving data
    - post requests - when we are sending data to be saved to a database, posted to a server (signing up for Facebook, posting a comment on twitter)

  - <input tags> - The input tags create interactive controls. The "type" attribute determines the type of input

    ```html
    <input type="text">
    <input type="date">
    <input type="color">
    <input type="file">
    <input type="checkbox">
    ```

  - Example - **name** attribute adds info to query string, **placeholder** attribute gives a label within the type attribute

  ```html
  <h1>Sign In</h1>
  
  <form action="/sign-in-url" method="post">
    	<input name = "name" type="text" placeholder="placeholder">
    	<input name = "password" type="password" placeholder="password">
    	<button>Login</button>
  </form>
  ```

  - <label> let us add captions to our form inputs

    ```html
    <label>
      Password:
      <input name="password" type="password" placeholder="password">
    </label>
    ```

  - alternate syntax, using 'for' and 'id' attributes - <input> is not nested inside <label>

    ```html
    <label for="password"> Password:</label>
    <input id="password" type="password" placeholder="password">
    ```

  - 'required' is a boolean attribute -validates that an input is not empty and/or that the 'type' is valid, ie that the email  input has the structure of an emal address

    ```html
    <label for="email">Email:</label>
    <input id="email" type="email" placeholder="email" required>
    ```

  - to tell HTML that only one choice can be made from multiple radio buttons, assign the same name attribute to inside the label elements - 

    - if the button element is at the bottom of a form, it will submit the form 
    - the value attribute gives value to the choice in the query string after it has been submitted, "petChoice=dogs"

    ```html
    <p>Do you prefer cats or dogs?</p>
    
    <form action="">
      <label for="dogs">Dogs:</label>
      <input name = "petChoice" id="dogs" type="radio" value="DOGS">
    
      <label for="cats">Cats:</label>
      <input name = "petChoice" id="cats" type="radio" value="CATS">
    
      <button>Go!</button>
    </form>
    ```

  - select tag creates drop down menus
    - name attribute gives value to the choice  
    - choices are listed usint the option element - value attribute can override the option element sent to the query string

  ```html
  <p>What is your current mood?</p>
  
    <select name="mood" id="">
      <option value="happy">:)</option>
      <option value="neutral">:|</option>
      <option value="sad">:(</option>
    </select>
  ```

  - textarea is a tag that allows us to make text inputs that are more than one line

  ```html
  <textarea name="paragraph" id="" cols="30" rows="10"></textarea>
  ```


