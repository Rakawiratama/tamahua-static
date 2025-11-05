const SUBSCRIPTION_KEY = 'tamahua_subscription';

export function isSubscribed() {
    return localStorage.getItem(SUBSCRIPTION_KEY) === 'active';
}

export function activateSubscription() {
    localStorage.setItem(SUBSCRIPTION_KEY, 'active');
    alert('Langganan Berhasil Diaktifkan! Akses Premium Terbuka.');
    window.location.reload();
}

export function cancelSubscription() {
    localStorage.removeItem(SUBSCRIPTION_KEY);
    alert('Langganan Telah Dibatalkan.');
    window.location.reload();
}

export function showSubscriptionModal() {
    // ... (HTML Modal Sederhana, sama seperti respons sebelumnya) ...
    const modalHtml = `
        <div id="subscription-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000;">
            <div style="background: white; padding: 20px; border-radius: 8px; max-width: 400px; text-align: center;">
                <h3>Akses Premium Dibutuhkan</h3>
                <p>Komik ini adalah konten premium. Silakan berlangganan untuk membacanya.</p>
                <div style="margin: 15px 0;">
                    <label style="display: block; margin: 5px 0;">
                        <input type="radio" name="plan" value="monthly" checked> Paket Bulanan (Rp 25.000)
                    </label>
                    <label style="display: block; margin: 5px 0;">
                        <input type="radio" name="plan" value="yearly"> Paket Tahunan (Rp 250.000)
                    </label>
                </div>
                <button id="pay-simulate" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Bayar (Simulasi)
                </button>
                <button id="close-modal" style="margin-top: 10px; background: none; border: none; color: gray; cursor: pointer;">
                    Tutup
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    document.getElementById('pay-simulate').onclick = () => {
        activateSubscription();
        document.getElementById('subscription-modal').remove();
    };
    document.getElementById('close-modal').onclick = () => {
        document.getElementById('subscription-modal').remove();
    };
}

// Ekspos ke global scope agar bisa dipanggil dari atribut onclick di HTML
window.isSubscribed = isSubscribed;
window.activateSubscription = activateSubscription;
window.showSubscriptionModal = showSubscriptionModal;
window.cancelSubscription = cancelSubscription;