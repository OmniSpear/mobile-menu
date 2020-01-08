# Omnispear Mobile Menu

This project was built by [Omnispear](http://www.omnispear.com/).

## Include Using npm

`npm install mobile-menu`

## Include Basic Files

Add necessary js files to project before the closing `</body>` tag. Be sure you have jQuery linked in your project as well.

```html
<script src="js/mobile-menu.js"></script>
```

Add CSS to project in the `<head>` section.

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

## Basic Markup

Include this markup in the header of your site. This is the basic content for the Menu, including a dropdown and the hamburger button. Be sure that all of your site content that you want to be pushed when the menu opens is included inside the `.content-wrapper` div.

```html
<body class="open-right">

    <ul class="omni-mobile-menu">
        <li><a href="#">Home</a></li>
        <li>
            <a class="omni-dropdown-toggle">Dropdown</a>
            <ul class="omni-dropdown-menu">
                <li><a href="#">Sub Item</a></li>
                <li><a href="#">Another Sub Item</a></li>
                <li><a href="#">Last Sub Item</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul><!-- omni-mobile-menu -->

    <div class="toggle-btn">
        <div class="hamburger-icon">
            <svg class="hamburger" viewBox="0 0 100 100" id="hamburger">
                <path class="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                <path class="line middle" d="m 30,50 h 40" />
                <path class="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
            </svg>
        </div>
    </div>

    <div class="content-wrapper">
        <!--Place Site Content Here-->
    </div><!-- content-wrapper -->
</body>
```

## Variables

Version 3.0 requires SCSS for the use of variables. The list of available variables can be found in the `mobile-menu/scss/_variables.scss` file.

## Change Opening Direction

To set the direction the menu opens from, set the `$omm-menu-direction` variable in your SCSS file. The mobile menu currently supports:

* Left
* Right
* Full