!function() {
	var view = document.querySelector('.tab')
	var controller = {
		view: null,
		init(view) {
			this.view = view
			this.initAnimation()
			this.bindEvents()
		},
		initAnimation() {
			function animate(time) {
				requestAnimationFrame(animate)
				TWEEN.update(time)
			}
			requestAnimationFrame(animate)
		},
		scrollToElement(element) {
			let top = element.offsetTop
			let currentTop = window.scrollY
			let targetTop = top - 80
			let s = targetTop - currentTop
			let coords = { y: currentTop };
			var t = Math.abs((s/100)*300) // 时间
			if(t>500){ t = 500 };
			var tween = new TWEEN.Tween(coords)
				.to({ y: targetTop }, t)
				.easing(TWEEN.Easing.Cubic.InOut)
				.onUpdate(function() {
					window.scrollTo(0,coords.y)
				})
				.start()
		},
		bindEvents() {
			let aTags = document.querySelectorAll('.tab>ul>li>a')
			for(let i=0; i<aTags.length; i++) {
				aTags[i].onclick = (e) => {
					e.preventDefault()
					let a = e.currentTarget
					let href = a.getAttribute('href')
					let ele = document.querySelector(href)
					this.scrollToElement(ele)
				}
			}
		}
	}
	controller.init(view)
}.call()