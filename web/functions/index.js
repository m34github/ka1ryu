const funcs = {
  userLandUpdate: './src/firebaseUserLandUpdater',
};

const loadFunctions = (funcsObj) => {
  for (const name in funcsObj) {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) {
      exports[name] = require(funcsObj[name]);
    }
  }
};

console.log('process.env.FUNCTION_NAME:', process.env.FUNCTION_NAME);
loadFunctions(funcs);
console.log('exports:', exports);