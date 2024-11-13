const EE =  require('events')
class MouseClickEmitter extends EE {}
const ME = new  MouseClickEmitter();
ME.on('click',(msg)=>{
    console.log("clicked",msg)
});
ME.emit ('click','hello world');