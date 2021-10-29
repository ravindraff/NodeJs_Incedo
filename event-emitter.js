const EventEmitter = require('events')
const myEmitter = new EventEmitter()
myEmitter.on("TestEvent",()=>{
    console.log("TestEvent Was Fired")
})
myEmitter.on("TestEvent",()=>{
    console.log("TestEvent Was Fired")
})
myEmitter.on("TestEvent",()=>{
    console.log("TestEvent Was Fired")
})
myEmitter.emit("TestEvent")
