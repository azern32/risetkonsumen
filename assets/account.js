var account = {
	"name" : "",
	"sex" : "",
	"age" : "",
	"prodi" : "",
	"fakultas" : "",
	"universitas" : "",
	
	addName : function(name_){
		return this.name = name_;
	},
	
	addSex : function(sex_){
		return this.sex = sex_;
	},
	
	addAge : function(age_){
		return this.age = age_;
	},
	
	addProdi : function(prodi_){
		return this.prodi = prodi_;
	},
	
	addFakulty : function(fakultas_){
		return this.fakultas = fakultas_;
	},
	
	addUniversity : function(fakultas_){
		return this.fakultas = fakultas_;
	},
	
	
	// This end the biodata
	
	// Here start the digital data
	
	"cart" : [],
	
	addCart : function(items, sum){
		return this.cart.push([items, sum]);
	}
	
};


class Items {
	constructor(name_, type_){
		this.name = name_;
		this.type = type_;
	}
};


// Here start the listed items

var a1 = new Items("Sampo metal","shampo");
var a2 = new Items("Sampo pop","shampo");
var a3 = new Items("Sampo dangdut","shampo");

var b1 = new Items("Sabun dangdut","sabun");

