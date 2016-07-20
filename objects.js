recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  new_obj = Object.assign({}, object, { [key]: value });
  return new_obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  combined = Object.assign({}, object);
  delete combined[key];
  return combined;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}