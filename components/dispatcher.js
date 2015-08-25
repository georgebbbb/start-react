var Dispatcher = require('flux').Dispatcher;
var appDispatcher = new Dispatcher();
var listStore = require("./store");



appDispatcher.register( function( payload ) {

  switch( payload.eventName ) {

    case 'new-item':
      console.log("2..second Dispatcher centre listen event,deal with data change,fox example put data in the store list")
      listStore.add(payload.newItem)
      console.log("3..then trigger change event,let other compoent know the datastore changed")
      listStore.trigger( 'change' );
      break;
  }

  return true;
}); 



module.exports=appDispatcher