!function() {
	var view = document.querySelector('.nav-bar')

	var controller = {
		view: null,
		init(view) {
			this.view = view
			this.bindEvents()
		},
		bindEvents() {
			var view = this.view
			window.addEventListener('scroll', (x) => {
				if(window.scrollY > 0) {
					this.active()
				} else {
					this.deactive()
				}
			})
		},
		active() {
			this.view.classList.add('sticky')
		},
		deactive() {
			this.view.classList.remove('sticky')
		}
	}

	controller.init(view)
}.call()