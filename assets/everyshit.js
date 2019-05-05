var currentKey;
var vault = window.localStorage;
var cart = [];
var account = {
	"name" : "",
	"nameshort" : "",
	"sex" : "",
	"age" : "",
	"prodi" : "",
	"fakultas" : "",
	"universitas" : "",

	addName : function(name_){
		vault.name =  String(name_);
		return this.name = String(name_);
	},

	addNameShort : function(nameshort_){
		vault.nameShort = String(nameshort_);
		return this.nameShort = String(nameshort_);
	},

	addSex : function(sex_){
		vault.sex = String(sex_);
		return this.sex = String(sex_);
	},

	addAge : function(age_){
		vault.age = Number(age_);
		return this.age = Number(age_);
	},

	addProdi : function(prodi_){
		vault.prodi = String(prodi_);
		return this.prodi = String(prodi_);
	},

	addFakulty : function(fakultas_){
		vault.fakultas = String(fakultas_);
		return this.fakultas = String(fakultas_);
	},

	addUniversity : function(uni_){
		vault.universitas = String(uni_);
		return this.universitas = String(uni_);
	},


	// This end the biodata

	// Here start the digital data

	"cart" : [],

	addCart : function(items, sum){
		return this.cart.push([items, sum]);
	}

};


class Items {
	constructor(kode, name_, type_, price_current_, price_old_, model_, color_, star_rate_, star_review_, description_){
		this.kode = kode;
		this.name = name_;
		this.type = type_;
		this.price = Number(price_current_);
		this.price_old = price_old_;
		this.model = model_;
		this.color = color_;
		this.stars = star_rate_;
		this.review = star_review_;
		this.description = description_;
	}
};

function parseURL(anjir){
	var parsingURL = window.location.href;
	var parsedURL = parsingURL.split('?');
	var kode = parsedURL[parsedURL.length - anjir];
	return kode;
};


// Here start the listed items
// 					 Items("kode"		,"nama item"					,"tipe item"		,"harga baru item"	,"harga lama item"	,"model item"	,"warna item"	,"jumlah bintang item dalam 100"	,"deskripsi item")
var a1 = new Items("a1"			,"Sampo metal"				,"shampo"				,2300								,undefined					,"-"					,"-"					,70																,"-"			);
var a2 = new Items("a2"			,"Sampo pop"					,"shampo"				,200								,3000								,"-"					,"-"					,90																,"-"			);
var a3 = new Items("a3"			,"Sampo dangdut"			,"shampo"				,2300								,undefined					,"-"					,"-"					,50																,"-"			);
var b1 = new Items("b1"			,"Sabun dangdut"			,"sabun"				,300								,3000								,"-"					,"-"					,100																,"-"			);

// Each the listed item variable that will be used go straight down below
var itemsArray = [a1,a2,a3,b1];


function showItem(){
	for(var i = 0; i < itemsArray.length; i++){
		if (itemsArray[i].price_old == undefined){
			console.log("true")
			$("#itemShow").append(
				`<div class="col-md-3 col-sm-6" onclick="goToProductDetail(${[i]})">`
				+	`<figure class="card card-product">`
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${i + 1}.jpg"></div>`
				+		`<figcaption class="info-wrap">`
				+			`<a href="#" class="title">${itemsArray[i].name}</a>`
				+			`<div class="price-wrap" id="price-${itemsArray[i].name}">`
				+				`<span class="price-new">Rp ${itemsArray[i].price}</span>`
				+			`</div> <!-- price-wrap. -->`
				+		`</figcaption>`
				+	`</figure> <!-- card -->`	+
				`</div> <!-- col -->`
			);
		} else {
			console.log("false")
			$("#itemShow").append(
				`<div class="col-md-3 col-sm-6" onclick="goToProductDetail(${[i]})">`
				+	`<figure class="card card-product">`
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${i + 1}.jpg"></div>`
				+		`<figcaption class="info-wrap">`
				+			`<a href="#" class="title">${itemsArray[i].name}</a>`
				+			`<div class="price-wrap" id="price-${itemsArray[i].name}">`
				+				`<span class="price-new">Rp ${itemsArray[i].price}</span>`
				+				`<del class="price-old">Rp ${itemsArray[i].price_old}</del>`
				+			`</div> <!-- price-wrap. -->`
				+		`</figcaption>`
				+	`</figure> <!-- card -->`	+
				`</div> <!-- col -->`
			);
		};
	};
};

function goToProductDetail(shit) {
	if (currentKey) {
		location.href = "product-detail.html?" + shit + "?" + currentKey
	}
};

function simpanData() {
	account.addName($('#namaPeserta').val());
	account.addNameShort($('#namaPanggilanPeserta').val());
	account.addAge($('#usiaPeserta').val());
	account.addSex($('[name=jenis-kelamin]:checked').val());
	account.addProdi($('#prodiPeserta').val());
	account.addFakulty($('#fakultasPeserta').val());
	account.addUniversity($('#univPeserta').val());

	// Lempar ke firebase
	// Root database
	var idih = firebase.database().ref('/');
	idih.once('value').then(function(snapshot){});
	currentKey = idih.push({
		name 				: account.name,
		age					: account.age,
		sex					: account.sex,
		prodi				: account.prodi,
		fakultas		: account.fakultas,
		universitas	: account.universitas
	}).getKey();
	setTimeout(function () {
		vault.setItem("currentAccount", currentKey)
	}, 3000);
}
