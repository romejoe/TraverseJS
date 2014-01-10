function TraverseObject(path, object, config){
	var components = path.split("/");
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