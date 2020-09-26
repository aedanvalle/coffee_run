(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function PaymentModal(selector) {
    this.$element = $(selector);    
  }

  /*i probably could've morphed this into the class implementation style 
    if i had more time*/
  PaymentModal.prototype.addModal = function(data) {
    var modalElement = new Modal(data);
    this.$element.append(modalElement.$element);
  };

  function Modal(payment_info) {
    var $div = "<span>" + payment_info.title + " " + payment_info.username + "</span>";
    this.$element = $div;
  }

  App.PaymentModal = PaymentModal;
  window.App = App;
})(window);
