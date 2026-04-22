document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const appKey = urlParams.get('app');

    if (!appKey || !projectsData[appKey]) {
        window.location.href = "../index.html";
        return;
    }

    const data = projectsData[appKey];
    const lang = localStorage.getItem('preferredLang') || 'en';
    const content = data[lang];

    // Meta ve Tema Ayarları
    document.title = `${content.title}`;
    const root = document.documentElement;
    root.style.setProperty('--primary-color', data.themeColor || '#f9d720');
    root.style.setProperty('--bg-main', data.bgColor || '#ffffff');
    root.style.setProperty('--bg-secondary', data.secondaryBg || '#f9fafb');
    root.style.setProperty('--text-primary', data.textColor || '#111111');
    root.style.setProperty('--font-main', data.fontFamily || "'Lato', sans-serif");
    
    document.body.style.color = data.textColor || '#111111';

    // NameLogo ve Title
    const titleContainer = document.getElementById('p-title');
    if (data.nameLogo) {
        titleContainer.innerHTML = `<img src="${data.nameLogo}" alt="${content.title}" class="mx-auto h-64 md:h-[350px] w-auto object-contain">`;
    } else {
        titleContainer.innerText = content.title || "";
    }

    // Hakkında Başlığı, Açıklama ve Logo
    const aboutTitle = document.getElementById('p-about-title');
    if (aboutTitle) {
        aboutTitle.innerText = lang === 'tr' ? `${content.title} Hakkında` : `About ${content.title}`;
    }

    document.getElementById('p-description').innerText = content.description || "";
    const mainLogo = document.getElementById('p-logo');
    if (mainLogo) mainLogo.src = data.logo || "";
    
    // Store Butonları
    const playBtn = document.getElementById('p-playstore');
    const appBtn = document.getElementById('p-appstore');
    
    if (data.playStore && data.playStore !== "#") { 
        playBtn.href = data.playStore; 
        playBtn.style.display = "block"; 
    } else { 
        playBtn.style.display = "none"; 
    }
    
    if (data.appStore && data.appStore !== "#") { 
        appBtn.href = data.appStore; 
        appBtn.style.display = "block"; 
    } else { 
        appBtn.style.display = "none"; 
    }

    // Features
    const featuresContainer = document.getElementById('p-features');
    if (featuresContainer) {
        featuresContainer.innerHTML = (content.features || []).map(f => `
            <div class="feature-card p-8 rounded-xl border border-gray-500/10 shadow-sm transition-all" style="background-color: var(--bg-main)">
                <h3 class="text-xl font-bold mb-2 text-center" style="color: var(--primary-color)">${f.title}</h3>
                <p class="opacity-80 text-center">${f.desc}</p>
            </div>
        `).join('');
    }

    // Galeri
    const galleryContainer = document.getElementById('p-gallery');
    if (data.screenshots && data.screenshots.length > 0) {
        galleryContainer.innerHTML = data.screenshots.map(src => `
            <div class="gallery-item overflow-hidden rounded-[30px] shadow-lg transition-transform hover:scale-105 border border-white/5">
                <img src="${src}" alt="Screenshot" class="w-full h-auto" loading="lazy">
            </div>
        `).join('');
    } else {
        const gallerySection = document.querySelector('.gallery-section');
        if (gallerySection) gallerySection.style.display = "none";
    }

    // --- ESTETİK MARTI KAZAK DEĞİŞTİRME ---
    const martiWrapper = document.getElementById('marti-wrapper');
    const defaultImg = document.getElementById('footer-ali');
    const themedImg = document.getElementById('footer-ali-themed');
    
    if (martiWrapper && appKey) {
        const themedSrc = `../images/img/ali_${appKey}.png`;
        themedImg.src = themedSrc;

        themedImg.onerror = () => {
            themedImg.style.display = 'none';
        };

        martiWrapper.addEventListener('click', () => {
            if (themedImg.classList.contains('opacity-0')) {
                themedImg.classList.remove('opacity-0');
                themedImg.classList.add('opacity-100');
                defaultImg.classList.add('opacity-0');
            } else {
                themedImg.classList.add('opacity-0');
                themedImg.classList.remove('opacity-100');
                defaultImg.classList.remove('opacity-0');
            }
        });
    }
});