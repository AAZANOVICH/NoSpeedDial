
document.addEventListener("DOMContentLoaded", function() {

	$('#editQuickLinkFormSaveBtn').on('click', function(){
		var quickAccessModal = $('#quickAccessModal');
		var name = $(quickAccessModal).find("#editQuickLinkFormDisplayName").val();
		var url = $(quickAccessModal).find("#editQuickLinkFormUrl").val();
		var index = $(quickAccessModal).find("#editQuickLinkFormIndex").val();

		chrome.storage.sync.get("noSpeedDial_qa_links", function(items) {
			var bookmarks = items.noSpeedDial_qa_links;
			bookmarks[index].url = url;
			bookmarks[index].name = name;

			chrome.storage.sync.set({"noSpeedDial_qa_links": bookmarks}, function(){
				quickAccessModal.modal('hide');
				reloadLinks();
			});

		});

	});


	var defaultBookmarks = [{
		index:"0",
		name:"Tut By",
		url:"http://tut.by"
	}, {
		index:"1",
		name:"Google",
		url:"http://google.com"
	}, {
		index:"2",
		name:"Oracle",
		url:"http://oracle.com"
	}, {
		index:"3",
		name:"Twitter",
		url:"http://twitter.com"
	}, {
		index:"4",
		name:"Instantgram",
		url:"http://instantgram.com"
	}, {
		index:"5",
		name:"Onliner",
		url:"http://onliner.by"
	}
	];

	//chrome.storage.sync.set({"noSpeedDial_qa_links": defaultBookmarks}, function(){});

	reloadLinks();
});

function reloadLinks() {

	$('#dial').empty();
	chrome.storage.sync.get("noSpeedDial_qa_links", function(items) {
		var bookmarks = items.noSpeedDial_qa_links;
		var grid = '<table><tr>';

		bookmarks.forEach(function(value, index){
			var data = get_identicon(value.name);
			grid += '<td><table><tr><td style="cursor: hand;text-align: center" id="'+ 'quickAccess_' + index +'">'+ value.name +
			' </td></tr><tr><td class="quickAccessButton" id="'+ 'quickAccessBtn_' + index +'"><img width=150 height=150 src="data:image/png;base64,' + data + '"></td></tr><tr><td style="text-align: center">Alt + ' + index + '</td></tr></table></td>';
		});

		grid += '</tr></table>';

		//$('#dial').after(grid);
		$('#dial').append(grid);

		for(var i = 0; i < 6; i++) {
			$('#quickAccess_' + i).on('click', createQaLinkHandler(i)());
			$('#quickAccessBtn_' + i).on('click', createQaLinkBtnHandler(i)());
		}

	});
};

function createQaLinkHandler(index) {
	return function() {
		$('#quickAccess_' + index).on('click', function(){
			var quickAccessModal = $('#quickAccessModal');
			chrome.storage.sync.get("noSpeedDial_qa_links", function(items) {
				$(quickAccessModal).find("#editQuickLinkFormIndex").val(index);
				$(quickAccessModal).find("#editQuickLinkFormDisplayName").val(items.noSpeedDial_qa_links[index].name);
				$(quickAccessModal).find("#editQuickLinkFormUrl").val(items.noSpeedDial_qa_links[index].url);
			});

			quickAccessModal.modal({
				shown:"true"
			});

		});
	};
}

function createQaLinkBtnHandler(index) {
	return function() {
		$('#quickAccessBtn_' + index).on('click', function(){
			chrome.storage.sync.get("noSpeedDial_qa_links", function(items) {
				openUrl(items.noSpeedDial_qa_links[index].url);
			});
		});
	};
}

function openUrl(url){
	location.href = url;
}

function makeSalt()
{
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < 5; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


function  get_identicon (text) {
	var salt = "666";
	var rounds = 1;
	var size = 200;
	var outputType = 'HEX';
	var hashtype = 'SHA-1';
	var shaObj = new jsSHA(text+salt, "TEXT");
	var hash = shaObj.getHash(hashtype, outputType,rounds);
	var data = new Identicon(hash, size).toString();
	return data;
}

