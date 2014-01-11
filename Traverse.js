___TraverseJSPattern = "/";

function TraverseObject(path, object, config){
	var components = path.split(___TraverseJSPattern);
	for(var i = 0; i < components.length; ++i){
		if(components[i].charAt(0) == "!"){
			object = object[config[components[i].substring(1)]];
		}
		else{
			object = object[components[i]];
		}
	}
	return object;
}

function SetTraverseObject(value, path, object, config){
	var components = path.split(___TraverseJSPattern);
	var componentCache = [];
	var _cache = [];
	for(var i = 0; i < components.length; ++i){
		_cache.push(object);
		if(components[i].charAt(0) == "!"){
			componentCache.push(config[components[i].substring(1)]);
		}
		else{
			componentCache.push(components[i]);
		}
		object = object[componentCache[i]];
		
	}
	_cache.push(value);
	for(var i = _cache.length - 2; i >= 0; --i){
		_cache[i][componentCache[i]] = _cache[i+1];
	}
	return _cache[0];
}