document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const appKey = urlParams.get('app');

    if (!appKey || !projectsData[appKey]) {
        window.location.href = "../index.html";
        return;
    }

    const data = projectsData[appKey];
    const content = data.en || data;

    // Helper: Steam Wishlist URL with UTM tracking
    function buildSteamWishlistUrl(base, source) {
        const steamBase = base || 'https://store.steampowered.com';
        const utm = `utm_source=tavukgames_site&utm_medium=website&utm_campaign=wishlist&utm_content=${encodeURIComponent(source)}`;
        return steamBase.includes('?') ? `${steamBase}&${utm}` : `${steamBase}?${utm}`;
    }

    // Meta & Theme Settings
    document.title = `${content.title} - Tavuk Games`;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', data.themeColor || '#f9d720');
    root.style.setProperty('--bg-main', data.bgColor || '#000000');
    root.style.setProperty('--bg-secondary', data.secondaryBg || '#111111');
    root.style.setProperty('--text-primary', data.textColor || '#ffffff');
    root.style.setProperty('--font-main', data.fontFamily || "'Lato', sans-serif");

    // Title / KeyArt NameLogo
    const titleContainer = document.getElementById('p-title');
    if (titleContainer) {
        if (data.nameLogo) {
            const fallback = data.heroFallback ? `onerror="this.onerror=null;this.src='${data.heroFallback}';"` : '';
            titleContainer.innerHTML = `<img src="${data.nameLogo}" ${fallback} alt="${content.title}" class="mx-auto max-h-64 sm:max-h-80 md:max-h-96 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">`;
        } else {
            titleContainer.innerHTML = `<h1 class="text-5xl md:text-7xl font-black text-white uppercase">${content.title}</h1>`;
        }
    }

    // Tagline & Release Window
    const taglineEl = document.getElementById('p-tagline');
    if (taglineEl) {
        taglineEl.innerText = content.tagline || content.description || "";
    }

    const releaseEl = document.getElementById('p-release-date');
    if (releaseEl && content.releaseWindow) {
        releaseEl.innerText = content.releaseWindow;
    }

    // Wishlist Buttons with UTM Tracking
    const heroWishlistBtn = document.getElementById('p-steam-hero');
    if (heroWishlistBtn) {
        heroWishlistBtn.href = buildSteamWishlistUrl(data.steamUrl, 'hero_cta');
    }

    const bottomWishlistBtn = document.getElementById('p-steam-bottom');
    if (bottomWishlistBtn) {
        bottomWishlistBtn.href = buildSteamWishlistUrl(data.steamUrl, 'bottom_cta');
    }

    // Trailer / Teaser Section
    const trailerContainer = document.getElementById('trailer-container');
    if (trailerContainer) {
        if (data.trailerYoutubeId) {
            trailerContainer.innerHTML = `
                <div class="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl bg-black">
                    <iframe class="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/${data.trailerYoutubeId}?rel=0"
                        title="${content.title} Trailer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>`;
        } else {
            // Interactive Teaser Facade
            const bgImage = data.heroFallback || data.nameLogo || "../images/games/the-water-is-fine/hero.png";
            trailerContainer.innerHTML = `
                <div class="relative aspect-video flex flex-col items-center justify-center p-8 bg-neutral-900 text-center overflow-hidden group select-none">
                    <div class="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-105"
                         style="background-image: url('${bgImage}')"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f9d720] text-black flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(249,215,32,0.6)] transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                            <svg class="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <span class="text-xs font-black uppercase tracking-[0.25em] text-[#f9d720] mb-2">Official Teaser Trailer</span>
                        <h4 class="text-xl sm:text-2xl font-bold text-white max-w-md">Dropping Soon on YouTube & Steam</h4>
                    </div>
                </div>`;
        }
    }

    // Steam Store Widget Container
    const steamWidgetArea = document.getElementById('steam-widget-area');
    if (steamWidgetArea) {
        if (data.steamAppId) {
            steamWidgetArea.innerHTML = `
                <iframe src="https://store.steampowered.com/widget/${data.steamAppId}/"
                    frameborder="0" width="100%" height="190"
                    class="rounded-xl shadow-2xl w-full border border-neutral-800"
                    loading="lazy">
                </iframe>`;
        } else {
            // Official Steam Store Widget Placeholder
            steamWidgetArea.innerHTML = `
                <!-- Official Steam Store Widget Placeholder (Activated when steamAppId is set in projects-data.js) -->
                <!-- <iframe src="https://store.steampowered.com/widget/{steamAppId}/" frameborder="0" width="100%" height="190"></iframe> -->
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 px-6 bg-neutral-950/80 border border-neutral-800/80 rounded-2xl text-left">
                    <div class="flex items-center gap-4">
                        <div class="p-3 rounded-xl bg-black text-[#f9d720] border border-white/10 shadow-inner">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 14.819C1.948 20.088 6.782 24 12.5 24c6.627 0 12-5.373 12-12S18.627 0 11.979 0zM7.544 18.216l-1.619-.669c.306.666.924 1.155 1.674 1.248-.035-.19-.055-.382-.055-.579zm7.395-6.953c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm-6.079 5.373c-.925 0-1.676-.751-1.676-1.677 0-.274.072-.531.19-.757l1.737.718c-.015.083-.025.167-.025.253.001.799.648 1.447 1.447 1.447.247 0 .477-.066.682-.174l-.454 1.096c-.461.162-.977.254-1.514.254h-.057z"/>
                            </svg>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-white">Steam Store Page Certification in Progress</div>
                            <div class="text-xs text-gray-400">The interactive Steam Store Widget will automatically appear here upon publication.</div>
                        </div>
                    </div>
                    <a href="${buildSteamWishlistUrl(data.steamUrl, 'widget_badge')}" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-1.5 text-xs font-black text-[#f9d720] hover:underline uppercase tracking-wider whitespace-nowrap">
                        <span>Steam Store Link</span>
                        <span>&rarr;</span>
                    </a>
                </div>`;
        }
    }

    // About Title, Description and Logo
    const aboutTitle = document.getElementById('p-about-title');
    if (aboutTitle) {
        aboutTitle.innerText = `About ${content.title}`;
    }

    const descEl = document.getElementById('p-description');
    if (descEl) {
        descEl.innerText = content.description || "";
    }

    const mainLogo = document.getElementById('p-logo');
    if (mainLogo) {
        mainLogo.src = data.logo || "";
        if (data.heroFallback) {
            mainLogo.onerror = () => {
                mainLogo.onerror = null;
                mainLogo.src = data.heroFallback;
            };
        }
    }

    // Features Grid (4 cards with icons)
    const featuresContainer = document.getElementById('p-features');
    if (featuresContainer) {
        const featureIcons = [
            `<svg class="w-8 h-8 text-[#f9d720]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
            `<svg class="w-8 h-8 text-[#f9d720]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
            `<svg class="w-8 h-8 text-[#f9d720]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
            `<svg class="w-8 h-8 text-[#f9d720]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
        ];

        featuresContainer.innerHTML = (content.features || []).map((f, i) => `
            <div class="feature-card p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 hover:border-[#f9d720]/50 hover:shadow-[0_0_25px_rgba(249,215,32,0.15)] transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto mb-6 rounded-xl bg-black border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    ${featureIcons[i % featureIcons.length]}
                </div>
                <h3 class="text-xl font-black mb-3 text-white transition-colors duration-300 group-hover:text-[#f9d720]">${f.title}</h3>
                <p class="text-sm text-gray-400 leading-relaxed">${f.desc}</p>
            </div>
        `).join('');
    }

    // Gallery Section
    const galleryContainer = document.getElementById('p-gallery');
    if (galleryContainer) {
        if (data.screenshots && data.screenshots.length > 0) {
            galleryContainer.innerHTML = data.screenshots.map((src, i) => `
                <div class="gallery-item overflow-hidden rounded-2xl shadow-xl transition-transform hover:scale-105 border border-white/10 group">
                    <img src="${src}" alt="${content.title} Screenshot ${i+1}" class="w-full h-auto object-cover" loading="lazy">
                </div>
            `).join('');
        } else {
            // High-aesthetic concept preview placeholders
            galleryContainer.innerHTML = `
                <div class="rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950/80 p-8 flex flex-col items-center justify-center aspect-video group hover:border-[#f9d720]/40 transition-all">
                    <div class="text-[#f9d720] text-3xl font-black mb-2">🌊 01</div>
                    <div class="text-white font-bold mb-1">Co-Op Ship Chaos</div>
                    <div class="text-xs text-gray-500">Gameplay Reveal Coming Soon</div>
                </div>
                <div class="rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950/80 p-8 flex flex-col items-center justify-center aspect-video group hover:border-[#f9d720]/40 transition-all">
                    <div class="text-[#f9d720] text-3xl font-black mb-2">📦 02</div>
                    <div class="text-white font-bold mb-1">Absurd Company Cargo</div>
                    <div class="text-xs text-gray-500">Gameplay Reveal Coming Soon</div>
                </div>
                <div class="rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950/80 p-8 flex flex-col items-center justify-center aspect-video group hover:border-[#f9d720]/40 transition-all">
                    <div class="text-[#f9d720] text-3xl font-black mb-2">⚡ 03</div>
                    <div class="text-white font-bold mb-1">Deadly Ocean Hazards</div>
                    <div class="text-xs text-gray-500">Gameplay Reveal Coming Soon</div>
                </div>
            `;
        }
    }

    // Mobile Sticky Wishlist CTA Handling
    const mobileStickyBtn = document.getElementById('p-steam-mobile-sticky');
    if (mobileStickyBtn) {
        mobileStickyBtn.href = buildSteamWishlistUrl(data.steamUrl, 'mobile_sticky_cta');
    }

    const mobileStickyBar = document.getElementById('mobile-sticky-cta');
    if (mobileStickyBar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 380) {
                mobileStickyBar.classList.remove('translate-y-full');
            } else {
                mobileStickyBar.classList.add('translate-y-full');
            }
        }, { passive: true });
    }
});