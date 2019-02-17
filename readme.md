# jQuery PubSub Eventer
Extended pubsub event system

- version 2.0.0
- last update 17/02/2019

## Advantage over standard pubsub system
It does not matter on sequence of events triggering
- you can run ```$.Eventer.publish``` and later ```$.Eventer.subscribe``` or vice versa; will be executed always.

## Dependencies
```jQuery 1.7.2+```

## How to install
Download package directly from github or install via ```npm install @kcko/jquery-pubsub-eventer``` or with yarn ```yarn add @kcko/jquery-pubsub-eventer```

## How to use
```javascript
// create your handler function
var handler = function(event, a, b) {
  console.log(event);
  console.log(a);
  console.log(b);
};
// subscribe = alias for on
$.Eventer.subscribe('some-your-custom-event/sub-event-if-you-need', handler);

// publish = alias for trigger
$.Eventer.publish('some-your-custom-event/sub-event-if-you-need', ['Hi', 'How are you?']);

// unpublish = alias for off
$.Eventer.unpublish('some-your-custom-event/sub-event-if-you-need');
```


## Live example 
You can see on [JsBin](https://jsbin.com/tocudof/3/edit?html,js,output)