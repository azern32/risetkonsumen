var account = {
	"name" : "",
	"sex" : "",
	"age" : "",
	
	addName : function(name_){
		return this.name = name_;
	},
	
	addSex : function(sex_){
		return this.sex = sex_;
	},
	
	addAge : function(age_){
		return this.age = age_;
	},
	
	
	// This end the biodata
	
	// Here start the digital data
	
	"cart" : [],
	
	addCart : function(items){
		return this.cart.push(items);
	}
	
};


class Items = {
	constructor(name_, type_){
		this.name = name_;
		this.type = type_;
	}
};

