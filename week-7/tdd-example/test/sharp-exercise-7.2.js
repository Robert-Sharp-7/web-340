/*
============================================
; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 08 April 18
; Modified By: Robert Sharp
; tdd in javascript and splitting a string
; using commas
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

