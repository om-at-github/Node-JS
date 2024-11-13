const EventEmitter = require('events')
var eventemitter = new EventEmitter();
eventemitter.on('click',(msg)=>{
    console.log(msg);
});

eventemitter.emit('click',"first Event");