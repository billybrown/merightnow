/*global $:false, jQuery:false, document:false, window:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var Engine = {
		ui : {

			fitvids : function() {
				$(document).ready(function(){
				    $(".Video").fitVids();
				 });
			},

			growdates : function() {
				
				$(".Video").waypoint(function() {
				  $(this.element).toggleClass("is-highlighted");
				}, {
					offset: 200
				});

			}
		}
	};

	Engine.ui.fitvids();
	Engine.ui.growdates();
});