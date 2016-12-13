<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Mobile Menu</title>

	<link rel="stylesheet" href="css/style.css">
</head>
<body class="openRight">
	<div class="bodyOverlay"></div>
	<!--mobileMenu-->
	<ul class="mobileMenu" id="mobileMenu">
		<li><a href="">Home</a></li>
		<li class="dropdown">
			<a class="dropdownToggle">Portfolio</a>
			<ul class="dropdown-menu hidden">
				<li><a href="#jump">Sub Item</a></li>
				<li><a href="#jump">Another Sub Item</a></li>
				<li><a href="#jump">Last Sub Item</a></li>
			</ul>
		</li>
		<li><a href="">About</a></li>
		<li><a href="">Blog</a></li>
		<li><a href="">Contact</a></li>
	</ul>

	<input type="checkbox" id="navToggle" class="navToggle" />
	<label for="navToggle" class="toggleBtn mobileNavToggle" data-toggle="">
		<div class="hamburger mobileNavToggle">
			<span class="icon-bar mobileNavToggle"></span>
			<span class="icon-bar mobileNavToggle"></span>
			<span class="icon-bar mobileNavToggle"></span>
		</div>
	</label>
	<!--End mobileMenu-->

	<div class="contentWrapper">
		<div class="content">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vero nisi eos sed qui natus, ut eius reprehenderit error nesciunt veniam aliquam nulla itaque labore obcaecati molestiae eveniet, perferendis provident amet perspiciatis expedita accusantium! Eveniet, quos voluptas et, labore natus, saepe unde est nulla sit eaque tempore debitis accusantium. Recusandae.</p>
			<p>Dolorem aliquam a libero reiciendis obcaecati doloribus ipsa eos laudantium, dicta in! Odit iure ut ratione, dolorum cupiditate perferendis voluptatum sapiente, dignissimos sunt necessitatibus, reprehenderit consequatur dolorem. Aliquam veniam quaerat, pariatur deserunt reiciendis vero vitae, repellat omnis sequi dolor nesciunt. Nihil similique alias impedit, obcaecati eligendi delectus voluptatum! Ipsum, vel.</p>
			<p>Sint, perspiciatis nemo aut, rerum excepturi deleniti modi quos nihil corporis eum, maiores soluta labore, consectetur eligendi nesciunt. Placeat, incidunt! Illum placeat eligendi, veritatis consectetur eum! Dolor obcaecati minima ab placeat voluptatem neque modi doloribus, magnam qui voluptate eaque in. Nulla expedita hic porro architecto facere officiis vitae numquam, dolor!</p>
			<p>Perferendis quis ea incidunt ducimus nisi voluptate natus. Repellat asperiores quod rerum rem quos blanditiis enim modi, veniam voluptas a facilis! Velit cum omnis, voluptatum eum inventore! Corrupti, suscipit, neque distinctio expedita est laboriosam cum aliquid minus tempora quaerat officia possimus unde vel deleniti eaque fugit accusamus iusto dolorum natus.</p>
		</div>

		<div id="jump">&nbsp;</div>
	</div><!--wrapper-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="js/jquery.touchSwipe.min.js"></script>
<script src="js/mobile-menu.js"></script>
</body>
</html>