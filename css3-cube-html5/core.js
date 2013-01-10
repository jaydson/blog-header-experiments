/*global window,document,console */
(function () {
	var Cube = function () {

		this.render = function (container) {
			if (!container) {
				throw "Provide a container";
			}

			var backgrounds = ['3d.jpg', 'connectivity.jpg', 'css3.jpg', 'device.jpg', 'html5.png', 'multimedia.jpg', 'offline.jpg', 'performance.jpg', 'semantics.jpg'],
				imgPath = 'img',
				DOMElementCube = document.createElement('div'),
				i = 0,
				tempDOMElement = null,
				DOMContainer = document.getElementById(container);

			if (DOMContainer) {
				backgrounds.sort(function () {
					return Math.floor(Math.random() * 7);
				});

				DOMElementCube.setAttribute('class', 'animate');
				DOMElementCube.setAttribute('id', 'cube');

				for (i; i < 6; i = i + 1) {
					tempDOMElement = document.createElement('div');
					tempDOMElement.style.backgroundImage = 'url(' + imgPath + '/' +  backgrounds.shift() + ')';
					DOMElementCube.appendChild(tempDOMElement);
				}
				document.body.appendChild(DOMElementCube);
			}
		};
	};

	var cube = new Cube().render('container');

}());