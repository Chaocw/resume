!function() {
	var specialTags = document.querySelectorAll('[data-x]')
	for(let i=0;i<specialTags.length; i++) {
		specialTags[i].classList.add('offset')
	}
	findCloseAndRemoveOffset()
	window.addEventListener('scroll', () => {
		findCloseAndRemoveOffset()
	})

	function findCloseAndRemoveOffset() {
		var minIndex = 0
		for(let i=1; i<specialTags.length; i++) {
			if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
				minIndex = i
			}
		}
		specialTags[minIndex].classList.remove('offset')
		let id = specialTags[minIndex].id
		let a = document.querySelector('a[href="#' + id + '"]')
		let li = a.parentNode
		let broAndMe = li.parentNode.children
		for(let i=0; i<broAndMe.length; i++) {
			broAndMe[i].classList.remove('hightlight')
		}
		li.classList.add('hightlight')
	}

	let liTags = document.querySelectorAll('.nav-bar ul>li')
	for(let i=0; i<liTags.length; i++) {
		liTags[i].onmouseenter = function(e) {
			e.currentTarget.classList.add('active')
		}
		liTags[i].onmouseleave = function(e) {
			e.currentTarget.classList.remove('active')
		}
	}
}.call()