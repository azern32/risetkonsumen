var currentKey;
var vault = window.localStorage;
vault.cash = 500000;
vault.cashUsed = 0;
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
// Items("kode"				,"nama item"				,"tipe item"		,"harga baru item"	,"harga lama item"	,"model item"	,"warna item"	,"jumlah bintang item dalam 100"	,"deskripsi item")
var a1 = new Items("a1"			,"Bantal EXO"				,"Bantal"		,55000			,75000			,"-"		,"-"		,70					,"-"			);
var a2 = new Items("a2"			,"Bantal Hello Kitty"			,"Bantal"		,45000			,undefined		,"-"		,"-"		,60					,"-"			);
var a3 = new Items("a3"			,"Bantal Putih"				,"Bantal"		,40000			,45000			,"-"		,"-"		,70					,"-"			);
var a4 = new Items("a4"			,"Bantal Anak"				,"Bantal"		,45000			,undefined		,"-"		,"-"		,60					,"-"			);
var a5 = new Items("a5"			,"Bantal Lucu"				,"Bantal"		,45000			,undefined		,"-"		,"-"		,70					,"-"			);

var b1 = new Items("b1"			,"Ganci BlackPink"			,"Ganci"		,35000			,undefined		,"-"		,"-"		,90					,"-"			);
var b2 = new Items("b2"			,"Ganci EXO"				,"Ganci"		,30000			,undefined		,"-"		,"-"		,93					,"-"			);
var b3 = new Items("b3"			,"Ganci BTS"				,"Ganci"		,30000			,undefined		,"-"		,"-"		,91					,"-"			);
var b4 = new Items("b4"			,"Ganci TWICE"				,"Ganci"		,33000			,undefined		,"-"		,"-"		,80					,"-"			);
var b5 = new Items("b5"			,"Ganci Spiderman"			,"Ganci"		,20000			,undefined		,"-"		,"-"		,0					,"-"			);
var b6 = new Items("b6"			,"Ganci Besi"				,"Ganci"		,10000			,undefined		,"-"		,"-"		,0					,"-"			);
var b7 = new Items("b7"			,"Ganci Variasi"			,"Ganci"		,10000			,undefined		,"-"		,"-"		,0					,"-"			);

var c1 = new Items("c1"			,"Headset IU"				,"Headset"		,145000			,230000			,"-"		,"-"		,90					,"-"			);
var c2 = new Items("c2"			,"Headset BlackPink"			,"Headset"		,175000			,undefined		,"-"		,"-"		,85					,"-"			);
var c3 = new Items("c3"			,"Headset Gaming"			,"Headset"		,155000			,200000			,"-"		,"-"		,94					,"-"			);

var d1 = new Items("d1"			,"Backpack BTS"				,"Backpack"		,150000			,250000			,"-"		,"-"		,70					,"-"			);
var d2 = new Items("d2"			,"Backpack School"			,"Backpack"		,120000			,180000			,"-"		,"-"		,83					,"-"			);
var d3 = new Items("d3"			,"Backpack BlackPink"			,"Backpack"		,170000			,230000			,"-"		,"-"		,77					,"-"			);

var e1 = new Items("e1"			,"Hoodie Super Junior"			,"Jaket"		,195000			,280000			,"-"		,"-"		,90					,"-"			);
var e2 = new Items("e2"			,"Hoodie EXO"				,"Jaket"		,210000			,undefined		,"-"		,"-"		,0					,"-"			);
var e3 = new Items("e3"			,"Hoodie Navy"				,"Jaket"		,185000			,undefined		,"-"		,"-"		,60					,"-"			);
var e4 = new Items("e4"			,"Hoodie AHHA"				,"Jaket"		,150000			,undefined		,"-"		,"-"		,20					,"-"			);

var f1 = new Items("f1"			,"Baju IKON"				,"Baju"			,80000			,undefined		,"-"		,"-"		,70					,"-"			);
var f2 = new Items("f2"			,"T-Shirt BTS"				,"Baju"			,75000			,undefined		,"-"		,"-"		,0					,"-"			);
var f3 = new Items("f3"			,"T-Shirt BlackPink"			,"Baju"			,80000			,undefined		,"-"		,"-"		,80					,"-"			);
var f4 = new Items("f2"			,"T-Shirt BTS Fake Love"		,"Baju"			,95000			,undefined		,"-"		,"-"		,0					,"-"			);
var f5 = new Items("f5"			,"T-Shirt YOGS Nakal Tapi Tampan"	,"Baju"			,50000			,80000			,"-"		,"-"		,20					,"-"			);
var f6 = new Items("f6"			,"T-Shirt YOGS"				,"Baju"			,50000			,undefined		,"-"		,"-"		,10					,"-"			);

var g1 = new Items("g1"			,"Case HP BlackPink"			,"Case HP"		,55000			,70000			,"-"		,"-"		,99					,"-"			);
var g2 = new Items("g2"			,"Case HP EXO"				,"Case HP"		,55000			,70000			,"-"		,"-"		,70					,"-"			);
var g3 = new Items("g3"			,"Case HP"				,"Case HP"		,35000			,40000			,"-"		,"-"		,75					,"-"			);

var h1 = new Items("h1"			,"Luwak White Koffie"			,"Kopi"			,2000			,undefined		,"-"		,"-"		,75					,"-"			);
var h2 = new Items("h2"			,"Arabika Luwak Blend"			,"Kopi"			,10000			,undefined		,"-"		,"-"		,90					,"-"			);

var i1 = new Items("i1"			,"Masker Bioaqua"			,"Masker"		,25000			,undefined		,"-"		,"-"		,0					,"-"			);
var i2 = new Items("i2"			,"Masker Korea"				,"Masker"		,25000			,undefined		,"-"		,"-"		,0					,"-"			);
var i3 = new Items("i3"			,"Masker Ovale"				,"Masker"		,10000			,undefined		,"-"		,"-"		,0					,"-"			);
var i4 = new Items("i4"			,"Masker GOT7"				,"Masker"		,35000			,undefined		,"-"		,"-"		,0					,"-"			);
var i5 = new Items("i5"			,"Masker Innisfree"			,"Masker"		,50000			,undefined		,"-"		,"-"		,0					,"-"			);

var j1 = new Items("j1"			,"Bedak VTxBTS"				,"Bedak"		,60000			,undefined		,"-"		,"-"		,70					,"-"			);
var j2 = new Items("j2"			,"Bedak ASH"				,"Bedak"		,55000			,undefined		,"-"		,"-"		,60					,"-"			);
var j3 = new Items("j3"			,"Bedak NYX"				,"Bedak"		,75000			,undefined		,"-"		,"-"		,60					,"-"			);

var k1 = new Items("k1"			,"Shampo Daeng Gi Meo Ri"		,"Kecantikan"		,45000			,undefined		,"-"		,"-"		,80					,"-"			);
var k2 = new Items("k2"			,"Sabun ON"				,"Kecantikan"		,85000			,undefined		,"-"		,"-"		,80					,"-"			);
var k3 = new Items("k3"			,"Face & Body Gel Celebon"		,"Kecantikan"		,55000			,undefined		,"-"		,"-"		,70					,"-"			);
var k4 = new Items("k4"			,"Parfum Elastine"			,"Kecantikan"		,45000			,undefined		,"-"		,"-"		,60					,"-"			);
var k5 = new Items("k5"			,"Parfum LUX"				,"Kecantikan"		,35000			,undefined		,"-"		,"-"		,75					,"-"			);
var k6 = new Items("k6"			,"Body Gel Natural Us"			,"Kecantikan"		,25000			,undefined		,"-"		,"-"		,75					,"-"			);
var k7 = new Items("k7"			,"Parfum BTSxLafrere"			,"Kecantikan"		,65000			,undefined		,"-"		,"-"		,85					,"-"			);

var l1 = new Items("l1"			,"Lip Tint"				,"Lip stick"		,35000			,undefined		,"-"		,"-"		,85					,"-"			);
var l2 = new Items("l2"			,"Lip Stick"				,"Lip stick"		,55000			,undefined		,"-"		,"-"		,95					,"-"			);

var m1 = new Items("m1"			,"Tumbler Starbucks"			,"Botol air minum"	,120000			,undefined		,"-"		,"-"		,0					,"-"			);
var m2 = new Items("m2"			,"Tumbler EXO"				,"Botol air minum"	,80000			,undefined		,"-"		,"-"		,0					,"-"			);

var n1 = new Items("n1"			,"Jam Tangan Murah"			,"Gelang"		,35000			,undefined		,"-"		,"-"		,0					,"-"			);
var n2 = new Items("n2"			,"Gelang Karet BlackPink"		,"Gelang"		,35000			,undefined		,"-"		,"-"		,80					,"-"			);
var n3 = new Items("n3"			,"Gelang Power Balance"			,"Gelang"		,15000			,undefined		,"-"		,"-"		,20					,"Barang KW"			);


// Each the listed item variable that will be used go straight down below
var itemsArray =[a1,a2,a3,a4,a5,
		b1,b2,b3,b4,b5,b6,b7,
		c1,c2,c3,
		d1,d2,d3,
		e1,e2,e3,e4,
		f1,f2,f3,f4,f5,f6,
		g1,g2,g3,
		h1,h2,
		i1,i2,i3,i4,i5,
		j1,j2,j3,
		k1,k2,k3,k4,k5,k6,k7,
		l1,l2,
		m1,m2,
		n1,n2,n3];


function showItem(){
	for(var i = 0; i < itemsArray.length; i++){
		if (itemsArray[i].price_old == undefined){
			console.log("true")
			$("#itemShow").append(
				`<div class="col-md-3 col-sm-6" onclick="goToProductDetail(${[i]})">`
				+	`<figure class="card card-product">`
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${itemsArray[i].kode}.jpg"></div>`
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
				+		`<div class="img-wrap"> <img src="assets/template/images/items/${itemsArray[i].kode}.jpg"></div>`
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
	}, 500);
	
}
