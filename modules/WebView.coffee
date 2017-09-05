# Website must allow X-ORIGN requests
# takes a url: String & a container: Layer

class WebView extends ScrollComponent 
	constructor: (@options={}) -> 
		@url ?= 'https://www.youtube.com/embed/u4RjCmeuWDU'
		@container = if @options.container then @options.container else new Layer
			frame: Screen.frame
			name: 'container'
		super @options
		@.scrollHorizontal = false
		@.parent = @options.container
		@.page = new Layer
			parent: @.content
			width: @.width
			height: @.height
			backgroundColor: 'white'
			ignoreEvents: false 
						
			html: "<iframe width='#{@.width}' height='#{@.height}' src='#{@options.url}' allowfullscreen frameborder='0' scrolling='yes'></iframe>"
		@iframe =  @.page.querySelector('iframe')
		@setContainer(@container)
		              
	@define 'url',
		get: ->
			@options.url
		set: (value) ->
			@options.url = value
			
	@define 'container',
		get: ->
			@options.container
		set: (value) ->
			@options.container = value
			
	setUrl: (url) ->
		@url = url
		@iframe.src = url
		
	setContainer: (container) ->
		@container = container
		@.parent = @container
		@.height = @container.height
		@.width =  @container.width
		@iframe.height = @container.height
		@iframe.width = @container.width
		@.page.height = @container.height
		@.page.width = @container.width
		@.content.height = @container.height
		@.content.width = @container.width

module.exports = WebView
