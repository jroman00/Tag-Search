/*
 * Author: Justin Roman (jroman00@gmail.com)
 * Date: 2012.02.07
 * Usage: Free to use
 * Requires jQuery and jQuery UI (autocomplete)
 */

// Tag search autocomplete
$.fn.tag_search = function() {
	// loops through all the tags and matches them against the regular expression
	var comb = function(vals, reg) {
		tags = $.grep(vals, function(elementOfArray, indexInArray) {
			return elementOfArray.match(reg);
		});
		return tags;
	};

	// sets autocomplete's source of data (first 10 tags)
	var set_source = function(ac, source, reg) {
		tags = comb(source, reg);
		ac.autocomplete('option', 'source', tags.slice(0, 10));
	};

	var cache = {};
	var tags;

	/**
	 * The only ajax requests processed are for the first letter of search terms.
	 * All searches are cached by first letter and we filter through the results
	 * in javascript for every succeeding letter typed. Revisiting a letter pulls
	 * from cache.
	 */
	var tag_autocomplete = {
		search: function(event, ui) {
			var ac = $(this);
			var val = ac.val();
			var reg = new RegExp('^' + val, 'i');
			var first = val.substring(0, 1);

			// if we already searched for this letter
			if(cache[first]) {
				set_source(ac, cache[first], reg);
				return true;
			} else {
				// set the cache so multiple ajax request aren't done on the same letter
				cache[first] = {};
				$.ajax({
					url: '/autocomplete.php',
					type: 'POST',
					dataType: 'json',
					data: { q: first },
					success: function(data) {
						// add the matching tags to js cache, update source and trigger a search
						cache[first] = data;
						set_source(ac, data, reg);
						ac.autocomplete('search');
					}
				});
				return false;
			}
		},
		select: function(event, ui) {
			// dasherize the tag and forward to it's url
			// dasherize = lowercase 'a' through 'z' with hyphens in place of spaces
			var value = ui.item.value.toLowerCase();
			value = value.replace(/[^a-z0-9\-\ ]/gi, '');
			value = value.replace(/[\ ]/gi, '-');
			value = value.replace(/[\-]+/gi, '-');

			// forward to the tag listing page
			window.location = '/tag/' + value;
			return false;
		}
	};

	$(this).autocomplete(tag_autocomplete);
};

$(document).ready(function() {
	$('#search_wrap input[type=text]').tag_search();
});
