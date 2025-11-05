import { COMICS, ALL_GENRES } from './data.js';
import { isSubscribed, showSubscriptionModal } from './subscription.js';

function createComicCard(comicData) {
    const isPremium = comicData.isPremium && !isSubscribed();
    const readButtonText = isPremium ? 'Premium (Langganan)' : 'Baca Komik';

    let readAction;
    if (isPremium) {
        readAction = `onclick="showSubscriptionModal()" href="#"`;
    } else {
        readAction = `href="reader.html?id=${comicData.id}"`;
    }

    return `
        <div class="comic-card" data-genres="${comicData.genres.join(',')}" data-order="${comicData.order}">
            <img src="${comicData.cover}" alt="Sampul Komik ${comicData.title}" class="comic-cover" onerror="this.onerror=null;this.src='assets/img/placeholder.jpg';">
            <div class="card-info">
                <h4>${comicData.title} ${comicData.isPremium ? '⭐' : ''}</h4>
                <p class="author">Oleh: ${comicData.author}</p>
                <p class="genres">${comicData.genres.map(g => `<span class="genre-tag">${g}</span>`).join(' ')}</p>
                <a ${readAction} class="read-button" aria-label="${readButtonText} ${comicData.title}">${readButtonText}</a>
            </div>
        </div>
    `;
}

function renderComics(comics, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = comics.map(createComicCard).join('');
    }
}

function renderPopularSection() {
    const popularComics = COMICS.filter(c => c.popular);
    renderComics(popularComics, 'popular-comics-section');
}

function renderGenreFilters() {
    const filterContainer = document.getElementById('genre-filters');
    if (!filterContainer) return;

    let filtersHtml = `<button class="genre-filter-button active" data-genre="all">Semua Komik</button>`;
    filtersHtml += ALL_GENRES.map(genre =>
        `<button class="genre-filter-button" data-genre="${genre}">${genre}</button>`
    ).join('');
    filterContainer.innerHTML = filtersHtml;

    filterContainer.querySelectorAll('.genre-filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedGenre = e.target.dataset.genre;
            filterContainer.querySelectorAll('.genre-filter-button').forEach(btn =>
                btn.classList.remove('active')
            );
            e.target.classList.add('active');
            filterComics(selectedGenre);
        });
    });
}

function filterComics(genre) {
    const allCards = document.querySelectorAll('#all-comics-grid .comic-card');

    allCards.forEach(card => {
        const genres = card.dataset.genres.split(',');
        if (genre === 'all' || genres.includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function renderDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = urlParams.get('id');
    const comic = COMICS.find(c => c.id === comicId);
    const detailContainer = document.getElementById('comic-detail-container');

    if (!comic || !detailContainer) {
        if(detailContainer) detailContainer.innerHTML = "<h1>Komik tidak ditemukan!</h1>";
        return;
    }

    const isPremium = comic.isPremium && !isSubscribed();
    const readButtonText = isPremium ? 'Langganan untuk Baca' : 'Baca Sekarang';

    let readAction;
    if (isPremium) {
        readAction = `onclick="showSubscriptionModal()" href="#"`;
    } else {
        readAction = `href="reader.html?id=${comic.id}"`;
    }

    const WA_NUMBER = "6281225868658";
    const detailMessage = encodeURIComponent(`Halo, saya tertarik dengan komik "${comic.title}" di Tamahua. Saya mau tanya tentang langganan.`);
    const waLink = `https://wa.me/${WA_NUMBER}?text=${detailMessage}`;

    detailContainer.innerHTML = `
        <div class="detail-header">
            <img src="${comic.cover}" alt="Sampul ${comic.title}" class="detail-cover" onerror="this.onerror=null;this.src='assets/img/placeholder.jpg';">
            <div class="detail-info">
                <h1>${comic.title} ${comic.isPremium ? '⭐ Premium' : ''}</h1>
                <p class="author">Pengarang: ${comic.author}</p>
                <p class="genres">Genre: ${comic.genres.map(g => `<span class="genre-tag">${g}</span>`).join(' ')}</p>
                <p class="status">Status: Selesai (Simulasi)</p>
                <p class="synopsis">Sinopsis: ${comic.synopsis}</p>

                <a ${readAction} class="read-detail-button" aria-label="${readButtonText} ${comic.title}">${readButtonText}</a>
                <a href="${waLink}" class="detail-wa-button" target="_blank">Tanya Developer (WhatsApp)</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('popular-comics-section')) {
        renderPopularSection();
        renderComics(COMICS, 'all-comics-grid-index');
    }
    if (document.getElementById('all-comics-grid')) {
        renderComics(COMICS, 'all-comics-grid');
        renderGenreFilters();
    }
    if (document.getElementById('comic-detail-container')) {
        renderDetailPage();
    }
});