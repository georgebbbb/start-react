var React =require("react");
var listStore=require("./store")

var TodoList = React.createClass({

	componentDidMount: function() {  
		console.log("4...fourth when component get the event ,handle ...")
  		 listStore.bind( 'change', this.listChanged );
	},
	listChanged: function() {  
  		this.forceUpdate();
	},

	render:function(){

		console.log("5..flfth redraw the dom")

		var items = listStore.getAll();
		    	
      var itemHtml = items.map( function( item ) {

      return <li > { item.value }</li> });
    return 	<div>
      			<ul>
         	 		{ itemHtml }
     			</ul>
    		</div>;
	},

	componentWillUnmount: function() {  
  		ListStore.unbind( 'change', this.listChanged );
	},
})

module.exports=TodoList