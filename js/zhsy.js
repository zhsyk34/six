$(function() {
	loadData();
});

function loadData() {
	var tbody = $("#info tbody");

	var temp = $("<tr><td class='index'></td><td class='year'></td><td class='period'></td><td class='result'></td><td class='zodiac'></td></tr>");

	$.each(data, function(index, row) {
		var tr = temp.clone();
		var tds = tr.find("td");

		tds.eq(0).text(numFormat(index + 1));
		tds.eq(1).text(row.year);
		tds.eq(2).text(numFormat(row.period));

		var div = $("<div></div>").addClass("inline").addClass(getColor(row.result)).text(numFormat(row.result));
		tds.eq(3).html(div);
		tds.eq(4).text(getZodiac(row.year, row.result));

		tbody.append(tr);
	});
}
