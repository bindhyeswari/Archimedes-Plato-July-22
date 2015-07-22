
self.addEventListener('message', function (event) {
    // listen in to requests from the main js
    var str = event.data;

    // send the data back to the controlling js
    self.postMessage(str.toUpperCase());

    var i = 0;
    setInterval(function () {
        self.postMessage(i++);
    }, 100);
});