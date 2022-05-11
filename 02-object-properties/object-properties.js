/* eslint-disable no-unused-vars */

function setPropsOnObj(object) {
  object.x = 7;
  object['y'] = 8;
  object.onePlus = (num) => {
    return ++num;
  };
}

function setPropsOnArr(arrayObject) {
  (arrayObject.hello = () => {
    return 'Hello!';
  }),
    (arrayObject.full = 'stack');
  arrayObject[0] = 5;
  arrayObject.twoTimes = (num) => {
    return num * 2;
  };
}

function setPropsOnFunc(functionObject) {
  functionObject.year = '20??';
  functionObject.divideByTwo = (num) => {
    return num / 2;
  };
}

function shallowCopy(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    //return obj1.concat(obj2);
    return [...obj1, ...obj2];
  }

  return { ...obj1, ...obj2 };
}
