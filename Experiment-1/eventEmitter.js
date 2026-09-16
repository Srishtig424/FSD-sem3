const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Create "greet" event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
});

// Create "exit" event
myEmitter.on('exit', () => {
    console.log("Application Closed.");
});

// Trigger the greet event
myEmitter.emit('greet', 'Srishti');

// Trigger the exit event
myEmitter.emit('exit');