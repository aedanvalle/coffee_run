(function(window) {
  "use strict";
  
  /*  constants for accessing section elements from payment-form.html  */
  var FORM_SELECTOR = "[data-payment-order=\"form\"]";
  var MODAL_SELECTOR = "[data-payment-order=\"modal\"]";


  var App = window.App; /* this is where i import the App namespace */
  var $ = window.jQuery; /* importing jQuery*/

  var FormHandler = App.FormHandler; /* both declares and assigns Form hand*/
  var formHandler = new FormHandler(FORM_SELECTOR);
  var PaymentModal = App.PaymentModal;
  var paymentModal = new PaymentModal(MODAL_SELECTOR);

  /* this rotates out the windows that displays a message to the user
      that thanks them for their purchase for Coffeerun*/
  formHandler.addSubmitHandler(function(data) {
    paymentModal.addModal.call(paymentModal, data);
    $("#modal_payment").modal();
    var ab = $.modal.getCurrent().closeButton[0];
    $(ab).on("click", function() {
      window.location.reload();
    });
  });
})(window);
