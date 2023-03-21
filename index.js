function receivesAFunction(spy) {
  spy();
}

function returnsAnAnonymousFunction() {
  return function () {};
}

function returnsANamedFunction() {
  return receivesAFunction;
}
