# Omnispear Mobile Menu

This project was built by [Omnispear](http://www.omnispear.com/).

## Include Basic Files

Add necessary js files to project before the closing `</body>` tag. Be sure you have jQuery linked in your project as well.
    
```html
<script src="js/mobile-menu.js"></script>
<script src="js/jquery.touchSwipe.min.js"></script>
```

Add CSS to project in the `<head>` section.

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## Basic Markup

Include this markup in the header of your site. This is the basic content for the Menu, including a dropdown and the hamburger button. Be sure that all of your site content that you want to be pushed when the menu opens is included inside the `.content-wrapper` div.

```html
    <ul class="omni-mobile-menu" id="omni-mobile-menu">
        <li><a href="#">Home</a></li>
        <li class="dropdown">
            <a class="dropdown-toggle">Dropdown</a>
            <ul class="dropdown-menu">
                <li><a href="#">Sub Item</a></li>
                <li><a href="#">Another Sub Item</a></li>
                <li><a href="#">Last Sub Item</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>  

    <input type="checkbox" id="nav-toggle" class="nav-toggle" />  
    
    <label for="nav-toggle" class="toggle-btn" data-toggle=".toggle-btn" data-menu=".content-wrapper">
        <div class="hamburger">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </div>
    </label>   

    <div class="content-wrapper">
        <!--Place Site Content Here-->
    </div>
```

## Change Opening Direction

To set the direction the menu opens from, apply a class to the `<body>` tag of your markup. The mobile menu currently supports:

* Left - `.open-left`
* Right - `.open-right`
* Full - `.open-full`
* Top -  `.open-top` 