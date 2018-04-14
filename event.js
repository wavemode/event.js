(function() {
    
var events = {}

window.em_on = function(event_name, fn) {
    if (!(events[event_name])) {
        events[event_name] = []
    }
    
    events[event_name].push(fn)
}

window.em_emit = function(event_name, data) {
    if (events[event_name]) {
        for (var i = 0; i < events[event_name].length; ++i) {
            events[event_name][i](data)
        }
    }
}

window.em_clear = function(event_name) {
    events[event_name] = null
}

})()