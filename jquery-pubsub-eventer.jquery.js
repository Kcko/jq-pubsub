/*!
 * jQuery PubSub Eventer - improved pubsub events system
 *
 * The MIT License
 *
 * author:  Roman Janko <admin@rjwebdesign.cz> (https://rjwebdesign.cz)
 * github:  Kcko/jquery-pubsub-eventer
 * version: 1.0.0
 *
 */

(function($) {
 
    var o = $({});
    var calledEvents = {};
   
    $.subscribe = function() {
      o.on.apply(o, arguments);
      if (arguments[0] in calledEvents)
      {
        var eventName = arguments[0];
        var callback  = arguments[1];
        var clbArgs   = [
          {type: eventName}, 

        ].concat(calledEvents[eventName][0]);

        callback.apply(o, clbArgs);
      }
    };
   
    $.unsubscribe = function() {
      o.off.apply(o, arguments);
    };
   
    $.publish = function() {
      o.trigger.apply(o, arguments);

      var eventName = arguments[0];
      var args      = Array.prototype.slice.call(arguments, 1);
      
      calledEvents[eventName] = args;
    };
   
}(jQuery));