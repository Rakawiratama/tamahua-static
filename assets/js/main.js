import { isSubscribed, cancelSubscription, showSubscriptionModal } from './subscription.js';

function initGlobalFunctions() {
    // 1. Tautan WhatsApp
    const WA_NUMBER = "6281225868658";
    const defaultMessage = encodeURIComponent("Halo, saya tertarik dengan Tamahua. Saya mau tanya tentang langganan.");
    const waLink = `https://wa.me/${WA_NUMBER}?text=${defaultMessage}`;

    document.querySelectorAll('.wa-developer-link').forEach(link => {
        link.href = waLink;
    });

    // 2. Hamburger Menu (Responsiveness)
    const navToggle = document.querySelector('[aria-controls="primary-navigation"]');
    const nav = document.getElementById('primary-navigation');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const visibility = nav.getAttribute('data-visible');
            const newVisibility = visibility === 'false' ? 'true' : 'false';
            nav.setAttribute('data-visible', newVisibility);
            navToggle.setAttribute('aria-expanded', newVisibility);
        });
    }

    // 3. Status Langganan di UI
    const subscriptionNav = document.getElementById('nav-subscription');
    if (subscriptionNav) {
        if (isSubscribed()) {
            subscriptionNav.innerHTML = 'Langganan ✅';
            subscriptionNav.onclick = (e) => {
                e.preventDefault();
                if (confirm('Langganan Anda aktif. Mau batalkan langganan?')) {
                    cancelSubscription();
                }
            };
        } else {
            subscriptionNav.innerHTML = 'Langganan';
            subscriptionNav.onclick = (e) => {
                e.preventDefault();
                showSubscriptionModal();
            };
        }
    }
}

document.addEventListener('DOMContentLoaded', initGlobalFunctions);