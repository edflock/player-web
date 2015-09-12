$(".end").on('click',function(){
	alert("Hi");
 var event = Object.create(EventEmitter.prototype);
 event.emit('complete_edit');
});
