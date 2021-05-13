function barker(state) {
  return {
    bark() {
      console.log('Woof I am a ' + state.name);
    }
  };
}

function murderRobotDog(name) {
  let state = {
    name,
    speed: 100,
    position: 0,
  };

  return Object.assign (
    {},
    barker(state),
  );
}


let johnTheMurderer = murderRobotDog('John');
johnTheMurderer.bark();