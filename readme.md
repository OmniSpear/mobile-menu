# Omnispear Mobile Menu

This project was built by [Omnispear](http://www.omnispear.com/).

## Include Basic Files

Add necessary js files to project before the closing `</body>` tag.
    
```html
<script src="js/mobile-menu.js"></script>
<script src="js/jquery.touchSwipe.min.js"></script>
```

Add CSS to project in the `<head>` section.

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## Basic Markup

Include this markup in the header of your site.

```html
    <ul class="mobileMenu" id="mobileMenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>  

    <input type="checkbox" id="navToggle" class="navToggle" />  
    
    <label for="navToggle" class="toggleBtn" data-toggle=".toggleBtn" data-menu=".contentWrapper">
        <div class="hamburger">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </div>
    </label>   

    <div class="contentWrapper">
        <!--Place Site Content Here-->
    </div>
```

## Change Opening Direction

To set the direction the menu opens from, apply a class to the `<body>` tag of your markup. The mobile menu currently supports:

* Left - `.openLeft`
* Right - `.openRight`
* Full - `.openFull`
* Top -  `.openTop` 