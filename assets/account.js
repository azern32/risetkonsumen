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
	constructor(name_, type_, price_current_, price_old_){
		this.name = name_;
		this.type = type_;
		this.price = Number(price_current_);
		this.price_old = price_old_;
	}
};


// Here start the listed items

var a1 = new Items("Sampo metal"			,"shampo"				,2300							);
var a2 = new Items("Sampo pop"				,"shampo"				,200					,3000	);
var a3 = new Items("Sampo dangdut"			,"shampo"				,2300							);
var b1 = new Items("Sabun dangdut"			,"sabun"				,300					,3000	);

// Each the listed item variable that will be used go straight down below
var itemsArray = [a1,a2,a3,b1];


function showItem(){
	for(var i = 0; i < itemsArray.length; i++){
	/*
		$("#itemShow").append(
			`<div class="col-md-3 col-sm-6">`
			+	`<figure class="card card-product">`
			+		`<div class="img-wrap"> <img src="assets/template/images/items/${i + 1}.jpg"></div>`
			+		`<figcaption class="info-wrap">`
			+			`<a href="#" class="title">${itemsArray[i].name}</a>`
			+			`<div class="price-wrap" id="price-${itemsArray[i].name}">`
			+				`<span class="price-new">Rp ${itemsArray[i].price}</span>`
//			+				`<del class="price-old">$1980</del>`
			+			`</div> <!-- price-wrap. -->`
			+			`<hr>`				
			+		`<label>Beli</label>`
			+		`</figcaption>`
			+	`</figure> <!-- card -->`	+
			`</div> <!-- col -->`
		);
		console.log(itemsArray[i].price_old);
		
		if (itemsArray[i].price_old_ == NaN){
			// do nothing
			console.log('no old price')
		} else {
			$(`#price-${itemsArray[i].name}`).append(
			//	`<del class="price-old">Rp ${itemsArray[i].price_old}</del>`
				`<del class="price-old">yeet</del>`
			
			);
			console.log('have old price')
		};		
	*/
	// ----------------------------------------------------------		

	if (itemsArray[i].price_old == undefined){
			console.log("true")
			$("#itemShow").append(
				`<div class="col-md-3 col-sm-6">`
				+	`<figure class="card card-product">`
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${i + 1}.jpg"></div>`
				+		`<figcaption class="info-wrap">`
				+			`<a href="#" class="title">${itemsArray[i].name}</a>`
				+			`<div class="price-wrap" id="price-${itemsArray[i].name}">`
				+				`<span class="price-new">Rp ${itemsArray[i].price}</span>`
	//			+				`<del class="price-old">$1980</del>`
				+			`</div> <!-- price-wrap. -->`
				+			`<hr>`				
				+		`<label>Beli</label>`
				+		`</figcaption>`
				+	`</figure> <!-- card -->`	+
				`</div> <!-- col -->`
			);
		} else {
			console.log("false")
			$("#itemShow").append(
				`<div class="col-md-3 col-sm-6">`
				+	`<figure class="card card-product">`
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${i + 1}.jpg"></div>`
				+		`<figcaption class="info-wrap">`
				+			`<a href="#" class="title">${itemsArray[i].name}</a>`
				+			`<div class="price-wrap" id="price-${itemsArray[i].name}">`
				+				`<span class="price-new">Rp ${itemsArray[i].price}</span>`
				+				`<del class="price-old">Rp ${itemsArray[i].price_old}</del>`
				+			`</div> <!-- price-wrap. -->`
				+			`<hr>`				
				+		`<label>Beli</label>`
				+		`</figcaption>`
				+	`</figure> <!-- card -->`	+
				`</div> <!-- col -->`
			);
	};
	
	};
};
