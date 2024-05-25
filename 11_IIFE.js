// immediatly invoked function expressions (  IIFE )

// Important always use ';' after iife

// Named IIFE
(
      function chai() {
            console.log("hello")
      }
)();

// UnNamed IIFE
(
      (name) => {
            console.log(`${name}`)
      }
)("sonu");
