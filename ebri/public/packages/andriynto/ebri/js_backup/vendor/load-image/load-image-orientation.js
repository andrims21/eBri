/*
 * JavaScript Load Image Orientation 1.0.0
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(e){typeof define=="function"&&define.amd?define(["load-image"],e):e(window.loadImage)})(function(e){var t=e.hasCanvasOption;e.hasCanvasOption=function(e){return t(e)||e.orientation},e.transformCoordinates=function(e,t){var n=e.getContext("2d"),r=e.width,i=e.height,s=t.orientation;if(!s)return;s>4&&(e.width=i,e.height=r);switch(s){case 2:n.translate(r,0),n.scale(-1,1);break;case 3:n.translate(r,i),n.rotate(Math.PI);break;case 4:n.translate(0,i),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-i);break;case 7:n.rotate(.5*Math.PI),n.translate(r,-i),n.scale(-1,1);break;case 8:n.rotate(-0.5*Math.PI),n.translate(-r,0)}},e.getTransformedOptions=function(e){if(!e.orientation||e.orientation===1)return e;var t={},n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);switch(e.orientation){case 2:t.left=e.right,t.right=e.left;break;case 3:t.left=e.right,t.top=e.bottom,t.right=e.left,t.bottom=e.top;break;case 4:t.top=e.bottom,t.bottom=e.top;break;case 5:t.left=e.top,t.top=e.left,t.right=e.bottom,t.bottom=e.right;break;case 6:t.left=e.top,t.top=e.right,t.right=e.bottom,t.bottom=e.left;break;case 7:t.left=e.bottom,t.top=e.right,t.right=e.top,t.bottom=e.left;break;case 8:t.left=e.bottom,t.top=e.left,t.right=e.top,t.bottom=e.right}return e.orientation>4&&(t.maxWidth=e.maxHeight,t.maxHeight=e.maxWidth,t.minWidth=e.minHeight,t.minHeight=e.minWidth,t.sourceWidth=e.sourceHeight,t.sourceHeight=e.sourceWidth),t}});