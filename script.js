/* Mobile menu toggle */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

/* Copy phone number to clipboard */
const copyPhoneBtn = document.getElementById('copy-phone');
const phoneNumber = '+263778092919';

const copyTooltip = document.getElementById('copy-tooltip');

console.log('Script loaded, attaching event listener to copy-phone button.');

if (copyPhoneBtn) {
  console.log('copyPhoneBtn element found:', copyPhoneBtn);
copyPhoneBtn.addEventListener('click', (event) => {
  event.preventDefault();
    console.log('copyPhoneBtn clicked');
    navigator.clipboard.writeText(phoneNumber).then(() => {
      console.log('Phone number copied to clipboard:', phoneNumber);
      // Show tooltip
      copyTooltip.classList.remove('opacity-0', 'pointer-events-none');
      // Hide tooltip after 2 seconds
      setTimeout(() => {
        copyTooltip.classList.add('opacity-0', 'pointer-events-none');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy phone number: ', err);
    });
  });
} else {
  console.error('copyPhoneBtn element not found!');
}

/* Tabs functionality */
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    tabButtons.forEach(btn => {
      btn.classList.remove('border-yellow-400');
      btn.classList.add('border-transparent');
    });
    button.classList.add('border-yellow-400');
    button.classList.remove('border-transparent');

    tabContents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});
