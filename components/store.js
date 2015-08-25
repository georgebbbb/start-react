var microevent=require("microevent")





function ListStore(){
	this.items=[];
}
ListStore.prototype.getAll=function(){
    return this.items;
  };
ListStore.prototype.add=function(item){
	this.items.push(item);
}


microevent.mixin(ListStore)

module.exports=new ListStore()