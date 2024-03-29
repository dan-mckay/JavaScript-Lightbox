window.onload = function() {
	
	// Constructor for objects that hold info for div
	function ImageDiv(path, ttl, lnk, txt) {
		this.path = path;  		// Filepath for image
		this.ttl = ttl;			// Title for overlay
		this.lnk = lnk;			// Link address to Wikipedia
		this.txt = txt;			// Text for overlay
	}

	var imgDir = "images/";  // Directory for image folder
	
	var div1 = new ImageDiv(imgDir + "govt.jpg","Government Buildings", "http://en.wikipedia.org/wiki/Government_Buildings", "Government Buildings (Irish: Tithe an Rialtais) is a large Edwardian building enclosing a quadrangle on Merrion Street in Dublin, Ireland, in which several key offices of the Government of Ireland are located.");
	var div2 = new ImageDiv(imgDir + "custom.jpg", "Customs House", "http://en.wikipedia.org/wiki/The_Custom_House", "The Custom House (Irish: Teach an Chustaim) is a neoclassical 18th century building in Dublin, Ireland which houses the Department of the Environment, Community and Local Government. It is located on the north bank of the River Liffey.");
	var div3 = new ImageDiv(imgDir + "aras.jpg", "Áras an Uachtaráin", "http://en.wikipedia.org/wiki/%C3%81ras_an_Uachtar%C3%A1in", "Áras an Uachtaráin, formerly the Viceregal Lodge, is the official residence of the President of Ireland. It is located in the Phoenix Park on the northside of Dublin. It was built in the mid eighteenth century.");
	var div4 = new ImageDiv(imgDir + "fourcourts.jpg", "The Four Courts", "http://en.wikipedia.org/wiki/Four_Courts", "The Four Courts (Irish: Na Ceithre Cúirteanna) in Dublin is Ireland's main courts building. The Four Courts are the location of the Supreme Court, the High Court and the Dublin Circuit Court.");
	var div5 = new ImageDiv(imgDir + "gpo.jpg", "The General Post Office (GPO)", "http://en.wikipedia.org/wiki/General_Post_Office_%28Dublin%29", "The General Post Office (GPO) (Irish: Ard-Oifig an Phoist) in Dublin, is one of Ireland's most famous buildings. During the Easter Rising of 1916, the GPO served as the headquarters of the uprising's leaders.");
	var div6 = new ImageDiv(imgDir + "christchurch.jpg", "Christ Church Cathedral", "http://en.wikipedia.org/wiki/Christ_Church_Cathedral,_Dublin", "Christ Church Cathedral (or, more formally, The Cathedral of the Holy Trinity) is situated in Dublin, Ireland and is the elder of the capital city's two medieval cathedrals, the other being St Patrick's Cathedral.");
	var div7 = new ImageDiv(imgDir + "theatre.jpg", "Grand Canal Theatre", "http://en.wikipedia.org/wiki/Grand_Canal_Theatre", "The Grand Canal Theatre is a 2,111-capacity theatre in Dublin, Ireland which opened on 18 March 2010. Designed by Daniel Libeskind of New York and RHWL Architects of London, it is located in the Grand Canal Dock area.");
	var div8 = new ImageDiv(imgDir + "conv.jpg", "Convention Centre Dublin", "http://en.wikipedia.org/wiki/Convention_Centre_Dublin", "The Convention Centre Dublin (CCD) in the Dublin Docklands was opened in September 2010. The glass building overlooks the River Liffey at Spencer Dock. It was designed by the American-Irish architect Kevin Roche.");

	// Array of the above ImageDiv objects
	var divArray = new Array(div1, div2, div3, div4, div5, div6, div7, div8);
	// Get reference to the main container div that holds images
	var mainCont = document.getElementById('main_content');
	var overlayBox = document.getElementById('overlayBox');
	var overlay = document.getElementById('overlay');
	
	// This function places the images in the HTML
	function makeGallery(arr, div) {
		for (var i = 0; i != arr.length; i++) {
			var imgDiv = document.createElement('div');			// Create container div for img
			imgDiv.className = 'holder';						// Add a class to div
			var imgTag = document.createElement('img');			// Create img tag
			imgTag.src = arr[i].path;							// Add source, height and width
			imgTag.height = 150;								
			imgTag.width = 200;
			imgDiv.appendChild(imgTag);							// Append image tag to conatiner div
			div.appendChild(imgDiv);							// Append div to HTML page

			// Set a new property to object on the fly
			// (used in click handler - obj.div.onclick)
			arr[i].div = imgDiv;								

			// Add the onclick handler function to the div
			clickHandler(arr[i]);
		};
	}

	// This function creates the overlay div, referring to the 
	// object referred to by the div that was clicked. It is called
	// by the clickHandler function
	function createOverlay(obj) {
		var imageTag = document.createElement('img');				// Create img tag
		imageTag.src = obj.path;									// Give img tag a src, height and width
		imageTag.height = 300;								
		imageTag.width = 400;
		var titleTag = document.createElement('a');					// Create a tag for link
		titleTag.href = obj.lnk;									// Give it a href and some text
		titleTag.innerHTML = obj.ttl;
		var captionTag = document.createElement('p');				// Create p tag for info
		var textNode  = document.createTextNode(obj.txt);			// Create txt node to populate p tag
		captionTag.appendChild(textNode);							// Append text to p tag
		overlayBox.appendChild(imageTag);							// Append img tag to overlay
		overlayBox.appendChild(titleTag);							// Append a tag to overlay
		overlayBox.appendChild(captionTag);							// Append p tag to overlay
	}

	function clickHandler(obj) {
		obj.div.onclick = function() {
			createOverlay(obj);
			overlay.style.display = 'block';
			overlayBox.style.display = 'block';
		}
		overlay.onclick = function() {
			overlay.style.display = 'none';
			overlayBox.style.display = 'none';
			overlayBox.innerHTML = '';
		}
	}
	
	// Call function to place images on the page
	makeGallery(divArray, mainCont);

};