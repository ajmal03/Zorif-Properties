// JavaScript for Zorif Properties Ltd
document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Handle Landlord Form Submission
  var landlordForm = document.getElementById('landlordForm');
  var landlordSuccess = document.getElementById('landlordSuccess');

  if (landlordForm) {
    landlordForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var hp = document.getElementById('landlord_hp').value;
      if (hp !== '') {
        // Spam detected
        return;
      }

      if (landlordForm.checkValidity()) {
        landlordForm.classList.add('d-none');
        landlordSuccess.classList.remove('d-none');
      } else {
        landlordForm.classList.add('was-validated');
      }
    });
  }

  // Handle Investor Form Submission
  var investorForm = document.getElementById('investorForm');
  var investorSuccess = document.getElementById('investorSuccess');

  if (investorForm) {
    investorForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var hp = document.getElementById('investor_hp').value;
      if (hp !== '') {
        // Spam detected
        return;
      }

      if (investorForm.checkValidity()) {
        investorForm.classList.add('d-none');
        investorSuccess.classList.remove('d-none');
      } else {
        investorForm.classList.add('was-validated');
      }
    });
  }
});
