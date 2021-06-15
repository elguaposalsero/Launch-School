let rectangle = {
  name: "Albert's Square"
};

function addSides(length, width) {
  console.log(this.name);
  console.log (length + width);
}

const myBind = (func, ctx, ...args) => {
  let partialArgs = args;
  return (...restArgs) => {
    let remainingArgs = restArgs;
    let fullArgs = [...partialArgs, ...remainingArgs]

    return func.apply(ctx, fullArgs);
  };
};

let rectangleLength5 = myBind(addSides, rectangle, 5);
rectangleLength5(7);
