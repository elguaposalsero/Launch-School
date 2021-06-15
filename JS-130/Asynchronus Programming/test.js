function startCounting() {
  let num = 1;
  let id = setInterval(() => {
    console.log(num);
    num += 1;
  }, 1000);
  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let id = startCounting();
stopCounting(id);