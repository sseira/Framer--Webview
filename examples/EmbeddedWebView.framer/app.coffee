WebView = require 'WebView'
Screen.backgroundColor = 'black'

customLayer = new Layer
	width: 300
	height: 250
	x: Utils.randomNumber(0, 100)
	y: Utils.randomNumber(100, 300)
	
WebView = new WebView
	url: "https://www.youtube.com/embed/-kWbZvVU-e0?start=60"
	container: customLayer