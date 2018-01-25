import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[pinchZoomSvg]'
})

export class PinchZoomSvgDirective {

    smwidth;
    smheight;
    positionX = 0;
    positionY = 0; 
    initialPositionX = 0;
    initialPositionY = 0; 
    originX = 0;
    originY = 0; 
    startX = 0;
    startY = 0;
    moveX = 0;
    moveY = 0;
    scale = 1;
    relativeScale = 1;
    initialScale = 1;
    MAX_SCALE = 3;
    mode = '';
    distance = 0;
    initialDistance = 0;
    svgElement;

    constructor(elRef: ElementRef) {
        console.log(elRef);
        this.svgElement = elRef.nativeElement;
        let bC = this.svgElement.getBoundingClientRect();
        this.smwidth = bC.width;
        this.smheight = bC.height;
        console.log("smwidth: " + this.smwidth);
        console.log("smheight: " + this.smheight);
        // this.smwidth = this.svgElement.getAttribute('viewBox').split(' ')[2];
		// this.smheight = this.svgElement.getAttribute('viewBox').split(' ')[3];
    }

    @HostListener('touchstart', ['$event']) onTouchStart(evt) {
        this.startX = evt.touches[0].pageX;
        console.log("startX: " + this.startX);
        this.startY = evt.touches[0].pageY;
        console.log("startY: " + this.startY);
        this.initialPositionX = this.positionX;
        console.log("initialPositionX: " + this.initialPositionX);
        this.initialPositionY = this.positionY;
        console.log("initialPositionY: " + this.initialPositionY);
        this.moveX = 0;
        this.moveY = 0;
        this.mode = '';

        if (evt.touches.length === 2) {
            this.initialScale = this.scale;
            this.initialDistance = this.getDistance(evt);
            // this.originX = evt.touches[0].pageX -
            //     parseInt((evt.touches[0].pageX - evt.touches[1].pageX) / 2, 10) -
            //     this.svgElement[0].offsetLeft - this.initialPositionX;
            // this.originY = evt.touches[0].pageY -
            //     parseInt((evt.touches[0].pageY - evt.touches[1].pageY) / 2, 10) -
            //     this.svgElement[0].offsetTop - this.initialPositionY;
            this.originX = evt.touches[0].pageX -
                Math.round((evt.touches[0].pageX - evt.touches[1].pageX) / 2) -
                this.svgElement[0].offsetLeft - this.initialPositionX;
            console.log("start originX: " + this.originX);
            this.originY = evt.touches[0].pageY -
                Math.round((evt.touches[0].pageY - evt.touches[1].pageY) / 2) -
                this.svgElement[0].offsetTop - this.initialPositionY;
            console.log("start originY: " + this.originY);
        } 
    }

    @HostListener('touchmove', ['$event']) onTouchMove(evt) {
        evt.preventDefault();
        //evt = evt.originalEvent;//maybe??

        if (this.mode === 'swipe' && this.scale > 1) {

            this.moveX = evt.touches[0].pageX - this.startX;
            console.log("swipe moveX: " + this.moveX);
            this.moveY = evt.touches[0].pageY - this.startY;
            console.log("swipe moveY: " + this.moveY);

            this.positionX = this.initialPositionX + this.moveX;
            console.log("swipe positionX: " + this.positionX);
            this.positionY = this.initialPositionY + this.moveY;
            console.log("swipe positionY: " + this.positionY);

        } else if (this.mode === 'pinch') {

            this.distance = this.getDistance(evt);
            console.log("pinch distance: " + this.distance);
            this.relativeScale = this.distance / this.initialDistance;
            console.log("pinch relativeScale: " + this.relativeScale);
            this.scale = this.relativeScale * this.initialScale;
            console.log("pinch scale: " + this.scale);
            this.positionX = -((evt.touches[0].pageX + evt.touches[1].pageX) / 2);
            console.log("pinch positionX: " + this.positionX);
            this.positionY = -((evt.touches[0].pageY + evt.touches[1].pageY) / 2);
            console.log("pinch positionY: " + this.positionY);
            // Take scale into account, so there is no left-up offset when zoomed in:
            this.positionX = this.positionX * this.scale;
            console.log("pinch scaledPositionX: " + this.positionX);
            this.positionY = this.positionY * this.scale;
            console.log("pinch scaledPositionY: " + this.positionY);

        } else {

            if (evt.touches.length === 1) {
                this.mode = 'swipe';
                console.log("mode swipe");
            } else if (evt.touches.length === 2) {
                this.mode = 'pinch';
                console.log("mode pinch");
            }

        }

        this.transformSVG(0);
    }

    @HostListener('touchend', ['$event']) onTouchEnd(evt) {
        if (this.mode === 'pinch') {

            if (this.scale < 1) {
                this.scale = 1;
                this.positionX = 0;
                this.positionY = 0;

            } else if (this.scale > this.MAX_SCALE) {
                this.scale = this.MAX_SCALE;
                this.relativeScale = this.scale / this.initialScale;
                this.positionX = this.originX * (1 - this.relativeScale) + this.initialPositionX + this.moveX;
                this.positionY = this.originY * (1 - this.relativeScale) + this.initialPositionY + this.moveY;
            }
        }

        if (this.scale > 1) {
            this.positionX = -((evt.touches[0].pageX + evt.touches[1].pageX) / 2);
            this.positionY = -((evt.touches[0].pageY + evt.touches[1].pageY) / 2);
        }

        this.transformSVG(0.1);
    }

    computeTandS(d) {
        let w = parseFloat(d[0][0].attributes.width.value);
        let h = parseFloat(d[0][0].attributes.height.value);
        let scale = .9 / Math.max(w / this.smwidth, h / this.smheight);
        let x = parseFloat(d[0][0].attributes.x.value);
        let y = parseFloat(d[0][0].attributes.y.value);
   
        let matrixArray = [scale, 0, 0, scale, w / 2 - scale * x, h / 2 - scale * y];
        return 'matrix(' + matrixArray.join(',') + ')';
    }
   
   
    getDistance(evt) {
        let d = Math.sqrt(Math.pow(evt.touches[0].pageX - evt.touches[1].pageX, 2) +
        Math.pow(evt.touches[0].pageY - evt.touches[1].pageY, 2));
        return Math.round(d);
        //return parseInt(d, 10);
    }
   
    transformSVG(duration) {
        //let transition = duration !== 0 ? 'all cubic-bezier(0,0,.5,1) ' + duration + 's' : '';
        console.log("transform positionX: " + this.positionX);
        console.log("transform positionY: " + this.positionY);
        console.log("transform scale: " + this.scale);
        let matrixArray = [this.scale, 0, 0, this.scale, this.positionX, this.positionY];
        let matrix = 'matrix(' + matrixArray.join(',') + ')';
        console.log(matrix);
        // now do the viewport, rather than the css:
        //$('#viewport').attr('transform', matrix);
        let childSvg = this.svgElement.children[0];
        let childG = childSvg.children[0];
        //childG.setAttribute('transform', matrix);

        //document.getElementById('viewport').setAttribute('transform', matrix);
    }
    
}


// //iables for pinch-zoom and pan stuff:
//  smwidth, smheight;
//  positionX = 0;
//  positionY = 0; 
//  initialPositionX = 0;
//  initialPositionY = 0; 
//  originX = 0;
//  originY = 0; 
//  startX = 0;
//  startY = 0;
//  moveX = 0;
//  moveY = 0;
//  scale = 1;
//  relativeScale = 1;
//  initialScale = 1;
//  MAX_SCALE = 3;
//  mode = '';
//  distance = 0;
//  initialDistance = 0;
//  svgElement;


// angular.module('app', [])
// .directive('pinchZoom', function () {
// 	return {
//     restrict: 'A',
//     link: function postLink(scope, element, attrs) {
// 			// Attach pinch-zoom listener:
//       console.log(element);
// 			svgElement = element //element.find('svg');
//       console.log('sveElement:');
//       console.log(svgElement);
// 			smwidth = svgElement[0].getAttribute('viewBox').split(' ')[2];
// 			smheight = svgElement[0].getAttribute('viewBox').split(' ')[3];
// 			svgElement.on('touchstart', function (evt) {
// 				//evt = evt.originalEvent;
// 				startX = evt.touches[0].pageX;
// 				startY = evt.touches[0].pageY;
// 				initialPositionX = positionX;
// 				initialPositionY = positionY;
// 				moveX = 0;
// 				moveY = 0;
// 				mode = '';

// 				if (evt.touches.length === 2) {
// 					initialScale = scale;
// 					initialDistance = getDistance(evt);
// 					originX = evt.touches[0].pageX -
// 					parseInt((evt.touches[0].pageX - evt.touches[1].pageX) / 2, 10) -
// 					svgElement[0].offsetLeft - initialPositionX;
// 					originY = evt.touches[0].pageY -
// 					parseInt((evt.touches[0].pageY - evt.touches[1].pageY) / 2, 10) -
// 					svgElement[0].offsetTop - initialPositionY;
// 				} 
// 			});

// 			element.on('touchmove', function(evt) {
// 				evt.preventDefault();
// 				//evt = evt.originalEvent;//maybe??

// 				if (mode === 'swipe' && scale > 1) {

// 					moveX = evt.touches[0].pageX - startX;
// 					moveY = evt.touches[0].pageY - startY;

// 					positionX = initialPositionX + moveX;
// 					positionY = initialPositionY + moveY;

// 				} else if (mode === 'pinch') {

// 					distance = getDistance(evt);
// 					relativeScale = distance / initialDistance;
// 					scale = relativeScale * initialScale;
// 					positionX = -((evt.touches[0].pageX + evt.touches[1].pageX) / 2);
// 					positionY = -((evt.touches[0].pageY + evt.touches[1].pageY) / 2);
// 					// Take scale into account, so there is no left-up offset when zoomed in:
// 					positionX = positionX * scale;
// 					positionY = positionY * scale;


// 				} else {

// 					if (evt.touches.length === 1) {
// 						mode = 'swipe';
// 					} else if (evt.touches.length === 2) {
// 						mode = 'pinch';
// 					}

// 				}

// 				transformSVG();
// 			}); 

// 			element.on('touchend', function(evt) {
// 				if (mode === 'pinch') {

// 					if (scale < 1) {
// 						scale = 1;
// 						positionX = 0;
// 						positionY = 0;

// 					} else if (scale > MAX_SCALE) {
// 						scale = MAX_SCALE;
// 						relativeScale = scale / initialScale;
// 						positionX = originX * (1 - relativeScale) + initialPositionX + moveX;
// 						positionY = originY * (1 - relativeScale) + initialPositionY + moveY;
// 					}
// 				}

// 				if (scale > 1) {
// 					positionX = -((evt.touches[0].pageX + evt.touches[1].pageX) / 2);
// 					positionY = -((evt.touches[0].pageY + evt.touches[1].pageY) / 2);
// 				}
// 				transformSVG(0.1);
// 			});
// 		}
//   }
// });

// function computeTandS(d) {
// 	 w = parseFloat(d[0][0].attributes.width.value);
// 	 h = parseFloat(d[0][0].attributes.height.value);
// 	 scale = .9 / Math.max(w / smwidth, h / smheight);
// 	 x = parseFloat(d[0][0].attributes.x.value);
// 	 y = parseFloat(d[0][0].attributes.y.value);

// 	 matrixArray = [scale, 0, 0, scale, w / 2 - scale * x, h / 2 - scale * y];
// 	return 'matrix(' + matrixArray.join(',') + ')';
// };


// function getDistance(evt) {
// 	 d = Math.sqrt(Math.pow(evt.touches[0].pageX - evt.touches[1].pageX, 2) +
// 		Math.pow(evt.touches[0].pageY - evt.touches[1].pageY, 2));
// 	return parseInt(d, 10);
// }

// function transformSVG(duration) {
// 	 transition = duration ? 'all cubic-bezier(0,0,.5,1) ' + duration + 's' : '',
// 	matrixArray = [scale, 0, 0, scale, positionX, positionY],
// 	matrix = 'matrix(' + matrixArray.join(',') + ')';

// 	// now do the viewport, rather than the css:
// 	$('#viewport').attr('transform', matrix);
// }