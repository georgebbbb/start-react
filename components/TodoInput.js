var React =require("react");

var appDispatcher =require("./dispatcher")



var TodoInput = React.createClass({

	getInitialState: function(){
        //确定初始状态
        return null;

    },
  inputChange:function(event){
  
    this.value = event.target.value;

  },
  submit:function(){
    var that =this;
      console.log("1...first linsten button event ,then dispatch")
      appDispatcher.dispatch({
    eventName: 'new-item',
    newItem: { value: that.value}    
  });

  },
  render: function() {

  	    return <div><input onChange={this.inputChange}></input><button onClick={this.submit}>sure</button></div>
	}

  
});
module.exports = TodoInput