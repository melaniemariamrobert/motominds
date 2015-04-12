﻿var my_app = angular.module('my_app', [])
        my_app.controller('DoubleController', function ($scope) {
            $scope.show_home = true;
            $scope.success_message = false;
        
            var option_selected = $scope.option_selected;

            $scope.click_home= function(){
                $scope.show_home= true;
                $scope.show_service = false;
                $scope.show_special_offers = false;
                $scope.show_contact_us = false;
            };


            $scope.click_service= function(){
                $scope.show_home= false;
                $scope.show_service= true;
                $scope.show_special_offers = false;
                $scope.show_contact_us = false;
            };

            $scope.click_special_offers= function(){
                $scope.show_home= false;
                $scope.show_service= false;
                $scope.show_special_offers = true;
                $scope.show_contact_us = false;
            };

            $scope.click_contact_us= function(){
                $scope.show_home= false;
                $scope.show_service= false;
                $scope.show_special_offers = false;
                $scope.show_contact_us = true;
            };

            $scope.submit_feedback = function(){
                if ($scope.option_selected == undefined || $scope.feedBack == undefined){
                    alert("Please fill in your feedBack");   
                }
                else {
                    alert($scope.option_selected + "    " + $scope.feedBack)};   
            };


        });