<?php

$tag = $_GET['tag'];

?><!DOCTYPE html>
<html>
<head>
	<title>Tag: <?php echo $tag ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
	<h1>Tag: <?php echo $tag ?></h1>
	<p>This would be your landing page for the tag "<?php echo $tag ?>"</p>
	<p><a href="/">Go Back</a></p>
</body>
</html>
