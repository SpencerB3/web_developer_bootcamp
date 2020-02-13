**Bootstrap 3.4**  From the website.  Build responsive, mobile-first projects on the web with the world’s most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. 

1. To link , put in the <head> of the html file as a link

   ```html
   <link rel="stylesheet" href="bootstrap.css">
   <!-- or link to a hosted version of bootstrap (bootstrap CDN) -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
       integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   ```

   * example of using the bootstrap library for a button- add `btn` class, followed by model `btn-default` and size `btn-lg`

     `<button class="btn btn-default btn-lg" type="submit">Click Me!</button>`

   * can also use active (already pressed) or disabled states in button class

   ```html
   <button class="btn btn-success btn-xs active">CLICK ME!</button>
   <button class="btn btn-success btn-xs" disabled='disabled'>CLICK ME!</button>
   ```

   - you can override bootstrap styling (setting a red button class to orange)- (in html file just for example)

   ```html
   <style>
         .btn-danger {
           background: orange;
         }
   </style>
   ```

2. Forms and Inputs

   - jumbotron -  a lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
   - the container class puts padding and centers whatever elements are inside of it

   ```html
   <div class='container'>
     <div class="jumbotron">
        <h1>This is a jumbotron</h1>
        <p>fafsdfsdfsfsfsafsf</p>
        <button class="btn btn-success btn-lg">Hi there</button>
     </div>
   </div>div>
   ```

   - Wrap labels and controls in `.form-group` for optimum spacing. <div class="form-group">
   - `.form-control` also helps spacing with the inputs in a form
   - for inline forms, add the `.form-inline` class

3. Nav Bars

   - first apply the appropriate class to the <nav> element `<nav class="navbar navbar-default"></nav>`
   - To add a header

   ```html
    <div class="navbar-header">
      <a href="#" class='navbar-brand'>Koffee</a>
    </div>
   ```

   - To add more links next to the header on the left side

   ```html
   <ul class="nav navbar-nav">
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
   </ul>
   ```

   - put a div with a container class to center the links `<div class="container">`
   - to make links collapse into  hamburger: `<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">`
   - the actual hamburger element - note that the target id attribute must match the id attribute of the <div> element which the "hamburger" must hold - also note the '#' which the id attribute above does not need

   ```html
   <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
   </button>
   ```

4. Grid System - Website: "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases."

   - anytime one uses a grid, it needs to be inside a container class in a div element

   ```html
   <div class='container'>
     <div class= 'row'>
       <div class="col-lg-4 pink">COL LG 4</div>
       <div class="col-lg-4 pink">COL LG 4</div>
       <div class="col-lg-4 pink">COL LG 4</div>
     </div>
   </div>
   ```

   - 'col-lg-4' refers to the units at different break points - 12 units can be reassigned at any of the four sizes (.col-lg-, .col-md-, .col-sm-, .col-xs-) breakpoints on the screen - `col-lg-3` is superfluous below since the ".col-md-" size is the same - can be deleted

   ```html
   <div class="col-lg-3 col-md-3 col-sm-6 pink">TOUR DATE!</div>
   <div class="col-lg-3 col-md-3 col-sm-6 pink">TOUR DATE!</div>
   ```

   

