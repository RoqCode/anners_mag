"use strict";

// variables for each person of the svg

var jonathan = $("#Jonathan");
var axel = $("#Axel");
var cara = $("#Cara");
var milena = $("#Milena");
var jana = $("#Jana");
var jenny = $("#Jenny");
var sabine = $("#Sabine");
var maren = $("#Maren");
var sarah = $("#Sarah");
var tatjana = $("#Tatjana");
var hajo = $("#Hajo");
var jacky = $("#Jacky");
var rebecca = $("#Rebecca");
var michelle = $("#Michelle");
var rena = $("#Rena");
var test = $("svg");



$(document).ready(function () {


    //jonathan
    jonathan.hover(function () {
        $(".jonathanDescription").addClass("visible");
        $("#Jonathan").addClass("changeFill");

    }, function () {
        $(".jonathanDescription").removeClass("visible");
        $("#Jonathan").removeClass("changeFill");


    });

    //axel   
    axel.hover(function () {
        $(".axelDescription").addClass("visible");
        $("#Axel").addClass("changeFill");
        $("#Axel .blackToggle").removeClass("cls-2");

    }, function () {
        $(".axelDescription").removeClass("visible");
        $("#Axel").removeClass("changeFill");
        $("#Axel .blackToggle").addClass("cls-2");

    });

    //cara   
    cara.hover(function () {
        $(".caraDescription").addClass("visible");
        $("#Cara").addClass("changeFill");

    }, function () {
        $(".caraDescription").removeClass("visible");
        $("#Cara").removeClass("changeFill");


    });

    //milena   
    milena.hover(function () {
        $(".milenaDescription").addClass("visible");
        $("#Milena").addClass("changeFill");

    }, function () {
        $(".milenaDescription").removeClass("visible");
        $("#Milena").removeClass("changeFill");


    });

    //jana   
    jana.hover(function () {
        $(".janaDescription").addClass("visible");
        $("#Jana").addClass("changeFill");
        $("#Jana .blackToggle").removeClass("cls-2");

    }, function () {
        $(".janaDescription").removeClass("visible");
        $("#Jana").removeClass("changeFill");
        $("#Jana .blackToggle").addClass("cls-2");

    });

    //jenny   
    jenny.hover(function () {
        $(".jennyDescription").addClass("visible");
        $("#Jenny").addClass("changeFill");

    }, function () {
        $(".jennyDescription").removeClass("visible");
        $("#Jenny").removeClass("changeFill");


    });

    //sabine   
    sabine.hover(function () {
        $(".sabineDescription").addClass("visible");
        $("#Sabine").addClass("changeFill");

    }, function () {
        $(".sabineDescription").removeClass("visible");
        $("#Sabine").removeClass("changeFill");


    });

    //maren   
    maren.hover(function () {
        $(".marenDescription").addClass("visible");
        $("#Maren").addClass("changeFill");

    }, function () {
        $(".marenDescription").removeClass("visible");
        $("#Maren").removeClass("changeFill");


    });

    //sarah   
    sarah.hover(function () {
        $(".sarahDescription").addClass("visible");
        $("#Sarah").addClass("changeFill");

    }, function () {
        $(".sarahDescription").removeClass("visible");
        $("#Sarah").removeClass("changeFill");


    });

    //tatjana   
    tatjana.hover(function () {
        $(".tatjanaDescription").addClass("visible");
        $("#Tatjana").addClass("changeFill");

    }, function () {
        $(".tatjanaDescription").removeClass("visible");
        $("#Tatjana").removeClass("changeFill");


    });

    //jenny   
    jenny.hover(function () {
        $(".jennyDescription").addClass("visible");
        $("#Jenny").addClass("changeFill");

    }, function () {
        $(".jennyDescription").removeClass("visible");
        $("#Jenny").removeClass("changeFill");


    });

    //hajo   
    hajo.hover(function () {
        $(".hajoDescription").addClass("visible");
        $("#Hajo").addClass("changeFill");
        $("#Hajo .blackToggle").removeClass("cls-2");

    }, function () {
        $(".hajoDescription").removeClass("visible");
        $("#Hajo").removeClass("changeFill");
        $("#Hajo .blackToggle").addClass("cls-2");
    });

    //rebecca   
    rebecca.hover(function () {
        $(".rebeccaDescription").addClass("visible");
        $("#Rebecca").addClass("changeFill");

    }, function () {
        $(".rebeccaDescription").removeClass("visible");
        $("#Rebecca").removeClass("changeFill");


    });

    //michelle   
    michelle.hover(function () {
        $(".michelleDescription").addClass("visible");
        $("#Michelle").addClass("changeFill");

    }, function () {
        $(".michelleDescription").removeClass("visible");
        $("#Michelle").removeClass("changeFill");


    });

    //jacky   
    jacky.hover(function () {
        $(".jackyDescription").addClass("visible");
        $("#Jacky").addClass("changeFill");

    }, function () {
        $(".jackyDescription").removeClass("visible");
        $("#Jacky").removeClass("changeFill");


    });

    //rena   
    rena.hover(function () {
        $(".renaDescription").addClass("visible");
        $("#Rena").addClass("changeFill");
        $("#Rena .blackToggle").removeClass("cls-2");

    }, function () {
        $(".renaDescription").removeClass("visible");
        $("#Rena").removeClass("changeFill");
        $("#Rena .blackToggle").addClass("cls-2");



    });


});
