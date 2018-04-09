/*
============================================
; Title: Assignment 7.3
; Author: Professor Krasso
; Date: 08 April 18
; Modified By: Robert Sharp
; demonstrates testing using chai an mocha
;===========================================
*/

var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple, Orange, Mango');

    });

});