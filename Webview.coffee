# Website must allow X-ORIGN requests
# can either scroll, or click but not both atm...
# takes a url: String & a container: Layer

class WebView extends ScrollComponent 
	constructor: (@options={}) -> 
		@url ?= 'https://www.youtube.com/embed/u4RjCmeuWDU'
		@container ?= Screen 
		super @options
		@.scrollHorizontal = false
		# @.height = @options.container.height
		# @.width =  @options.container.width
		@.parent = @container
		@.page = new Layer
			parent: @.content
			width: @.width
			height: @.height
			backgroundColor: 'white'
			ignoreEvents: false 
						
			html: "<iframe width='#{@.width}' height='#{@.height}' src='#{@options.url}' allowfullscreen frameborder='0' scrolling='yes'></iframe>"
		console.log(@url)
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
