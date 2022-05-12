(() => {
  // pnp:C:\keatkeat\my-projects\HTML & CSS Practice\Simple Test (TypeScript)\index.ts
  var mySymbol1 = Symbol("name");
  var obj = {
    name: "Derrick",
    [mySymbol1]: "value"
  };
  console.log(obj[mySymbol1] === "value");
  console.log(Object.keys(obj));
  console.log(Object.getOwnPropertySymbols(obj));
  console.log(Reflect.ownKeys(obj));
  console.log("dada123");
})();
