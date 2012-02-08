<!DOCTYPE html>
<html>
<head>
	<title>Tag Search</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="/css/styles.css" />
	<script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="/js/jquery-ui-1.8.17.custom.min.js"></script>
	<script type="text/javascript" src="/js/tag_search.js"></script>
</head>
<body>
	<h1>Tag Search</h1>
	<p>This is a demo for how to use tag_search.js</p>
	<ol>
		<li>Start typing to see the results list</li>
		<li>Clicking the search button submits the typed value to a search page (e.g. /search?q=new+york)</li>
		<li>Clicking a result in the results list redirects to a tag listing page (e.g. /tag/new-york)</li>
	</ol>
	<form method="get" action="/search">
		<div id="search_wrap">
			<label for="search">Search:</label><br />
			<input id="search" type="text" name="q" />
			<button>Search</button>
		</div>
	</form>
</body>
</html>
