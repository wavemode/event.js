# event.js
Dead simple custom event manager

    em_on("my-event", function(data) {
      console.log(data)
    }
    
    em_emit("my-event", "Hello, World!")
    
    // console: "Hello, World!"
    
    em_clear("my-event") // clear all handlers
    
