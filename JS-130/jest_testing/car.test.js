describe("The Car class", () => { // Function to group tests together
  test("has four wheels", () => { // Define a new test
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  xtest("bad wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(3);
  });
});