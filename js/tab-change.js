!function() {
	var view = document.querySelectorAll('.portfolio .works-tab li')

	var controller = {
		view: null,
		init(view) {
			this.view = view
			this.content = document.querySelectorAll('.portfolio .works-tab .project')
			this.bindEvents()
		},
		tabChange(e,i) {
			for(let i=0; i<view.length; i++) {
				view[i].classList.remove('active')
			}
			view[i].classList.add('active')
		},
		conChange(e,i) {
			var content = this.content
			for (let i = 0; i < content.length; i++) {
				content[i].classList.add('none')
			}
			content[i].classList.remove('none')
		},
		bindEvents() {
			
			var view = this.view
			console.log(view)
			for(let i=0; i<view.length; i++) {
				view[i].onclick = (e) => {
					this.tabChange(e,i)
					this.conChange(e,i)
				}
			}
		}
	}
	controller.init(view)
}.call()