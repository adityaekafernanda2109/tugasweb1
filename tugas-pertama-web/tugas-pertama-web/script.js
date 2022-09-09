

var slider_img = document.querySelector('.article-image');
var images_a = ['backyard_1.png', 'backyard_02.png', 'backyard_03.png', 'backyard_04.png'];
// var images_b = ['soputan1.jpeg', 'soputan2.jpeg', 'soputan3.jpeg', 'soputan5.jpeg'];
// var images_c = ['tampusu1.jpeg', 'tampusu2.jpeg', 'tampusu3.jpeg'];
// var images_d = ['ambang1.jpeg', 'ambang2.jpeg', 'ambang3.jpeg'];
var i = 0;

function prev(img, slider) {
	if(i <= 0) i = img.length;
	i--;
	return setImg(img, slider);

}

function next(img, slider){
	if(i >= img.length-1) i = -1;
	i++;
	return setImg(img, slider);
}

function setImg(img, slider) {
	console.log(img[i]);
	var slider_img = document.querySelector(slider);
	return slider_img.setAttribute('src', "assets/img/"+img[i]);
}