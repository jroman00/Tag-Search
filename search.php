<?php

if(!isset($_GET['q']) || strlen($_GET['q']) == 0) {
	echo 'Invalid Search Term';
	exit;
}

$search = $_GET['q'];

?><!DOCTYPE html>
<html>
<head>
	<title>Search: <?php echo $search ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
	<h1>Search: <?php echo $search ?></h1>
	<p>This would be your general search page with search term "<?php echo $search ?>"</p>
	<p><a href="/">Go Back</a></p>
</body>
</html>
