window.addEventListener('load', function(){
	

	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a')
	let scrollTimeout = 1;

	window.addEventListener("scroll", function(){
		let current = Date.now()
		if (current > scrollTimeout + 100) {
			onScroll()
			scrollTimeout = current
		}
		})
	
	menu.addEventListener('click', function(e){
		let link = e.target;
		console.log(link)

		if(link.classList.contains('menu__link')){
			e.preventDefault();

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
			scrollToTarget(link.hash);
		}

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});

			/* window.scrollTo(0, pos); */
		}
	}

});
let btn = document.querySelector(".scroll_top")
function onScroll() {
	console.log(1)
	if(window.scrollY > 500) {
		document.querySelector(".scroll_top").classList.remove("scroll_hide")
	}else {
		document.querySelector(".scroll_top").classList.add("scroll_hide")
	}
	for(let i = links.length - 1; i >= 0; i--) {
		let link = links[i]
		let target = document.querySelector(link.hash)
		if ((window.pageYOffset + window.innerHeight / 2) > target.offsetTop) {
			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
			break;
		}
	}
}
btn.addEventListener("click", function(e){
	e.preventDefault()
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
})
});

