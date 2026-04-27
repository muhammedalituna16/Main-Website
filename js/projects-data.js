const projectsData = {
    "lorenta-os": {
        en: {
            title: "Lorenta OS",
            description: "Most AI tools answer questions. Lorenta OS runs your business. It ingests every document, decision, and data point your company has ever produced — then reasons over it, routes it through your ERP and CRM systems, and takes autonomous action. No dashboards to refresh. No reports to read. Just outcomes.",
            features: [
                {
                    title: "Data Ingestion",
                    desc: "Every contract, invoice, email, and ERP record is continuously indexed into a living knowledge graph — structured and unstructured alike."
                },
                {
                    title: "Corporate Memory",
                    desc: "Past decisions, supplier histories, budget constraints, and approval chains are permanently encoded. Context your team forgot. Nothing the system does."
                },
                {
                    title: "Cognitive Reasoning",
                    desc: "Complex requests are decomposed into task trees. Each sub-task is evaluated, prioritized, and executed through a multi-agent orchestration layer with full failure recovery."
                },
                {
                    title: "Action Layer",
                    desc: "Lorenta OS doesn't recommend — it acts. Stock alerts trigger procurement flows. Anomalies escalate to approvals. Reports write themselves. Your operations run on intelligence."
                }
            ]
        },
        tr: {
            title: "Lorenta OS",
            description: "Çoğu yapay zeka aracı soru yanıtlar. Lorenta OS işletmenizi yönetir. Şirketinizin ürettiği her belgeyi, kararı ve veri noktasını sürekli olarak öğrenir; ERP ve CRM sistemleriniz üzerinden akıl yürütür ve otonom aksiyon alır. Yenilenecek dashboard yok. Okunacak rapor yok. Sadece sonuç.",
            features: [
                {
                    title: "Veri Alımı",
                    desc: "Her sözleşme, fatura, e-posta ve ERP kaydı; yapılandırılmış ya da yapılandırılmamış fark etmeksizin canlı bir bilgi grafiğine sürekli olarak indekslenir."
                },
                {
                    title: "Kurumsal Hafıza",
                    desc: "Geçmiş kararlar, tedarikçi geçmişleri, bütçe kısıtları ve onay zincirleri kalıcı olarak kodlanır. Ekibinizin unuttuğu bağlam, sistemin hiçbir zaman unutmadığı bağlamdır."
                },
                {
                    title: "Bilişsel Akıl Yürütme",
                    desc: "Karmaşık talepler görev ağaçlarına ayrıştırılır. Her alt görev; tam hata kurtarma mekanizmasına sahip çok-ajan orkestrasyon katmanı üzerinden değerlendirilir, önceliklendirilir ve yürütülür."
                },
                {
                    title: "Aksiyon Katmanı",
                    desc: "Lorenta OS öneri yapmaz — aksiyon alır. Stok uyarıları tedarik akışlarını tetikler. Anomaliler onay süreçlerine yükseltilir. Raporlar kendiliğinden yazılır. Operasyonlarınız zeka üzerinde çalışır."
                }
            ]
        },
        nameLogo: "../images/lorentaos_images/namelogo.png",
        fontFamily: "'Lato', sans-serif",
        themeColor: "#ffffff",
        bgColor: "#000000",
        secondaryBg: "#0a0a0a",
        textColor: "#ffffff",
        heroGradient: "rgba(0, 0, 0, 0.8)",
        logo: "../images/lorentaos_images/lorentaos.png",
        playStore: null, 
        appStore: null,
        screenshots: []
    },
    "xpify": {
        en: {
            title: "Xpify",
            description: "Xpify is your personal AI life assistant designed to help you stay on track. Organize your tasks, track your habits, plan your schedule, and build better routines — all in one intuitive app. Whether you're chasing personal goals or striving for a healthier lifestyle, Xpify keeps you motivated with AI-powered suggestions and clear progress tracking.",
            features: [
                { title: "AI-powered diet and fitness", desc: "Personalized workouts and smart nutrition plans." },
                { title: "Habit Tracking", desc: "Build healthier habits with daily reminders and progress charts." },
                { title: "Smart Planning", desc: "Let AI suggest the best schedule based on your lifestyle." },
                { title: "Progress Insights", desc: "Visualize your growth and track your achievements easily." }
            ]
        },
        tr: {
            title: "Xpify",
            description: "Xpify, yolunda kalmanıza yardımcı olmak için tasarlanmış kişisel yapay zeka yaşam asistanınızdır. Görevlerinizi düzenleyin, alışkanlıklarınızı takip edin, programınızı planlayın ve daha iyi rutinler oluşturun. İster kişisel hedeflerinizin peşinde olun ister daha sağlıklı bir yaşam tarzı için çabalayın, Xpify sizi yapay zeka destekli önerilerle motive eder.",
            features: [
                { title: "Yapay Zeka Destekli Diyet", desc: "Kişiselleştirilmiş antrenmanlar ve akıllı beslenme planları." },
                { title: "Alışkanlık Takibi", desc: "Günlük hatırlatıcılar ve ilerleme grafikleriyle sağlıklı alışkanlıklar edinin." },
                { title: "Akıllı Planlama", desc: "Yapay zekanın yaşam tarzınıza göre en iyi programı önermesine izin verin." },
                { title: "İlerleme Analizleri", desc: "Gelişiminizi görselleştirin ve başarılarınızı kolayca takip edin." }
            ]
        },
        nameLogo: "../images/xpify_images/xpify_name.png",
        fontFamily: "'Lato', sans-serif",
        themeColor: "#f9d720",
        bgColor: "#ffffff",
        secondaryBg: "#fff9d6",
        textColor: "#111111",
        heroGradient: "rgba(249, 215, 32, 0.9)",
        logo: "../images/xpify_images/xplogo.jpg",
        playStore: "https://play.google.com/store/apps/details?id=net.xpify.XpifyApp",
        appStore: "https://apps.apple.com/us/app/xpify-ai-assistant/id6747321868",
        screenshots: [
            "../images/xpify_images/xpify-screen1.jpg",
            "../images/xpify_images/xpify-screen2.jpg",
            "../images/xpify_images/xpify-screen3.jpg",
            "../images/xpify_images/xpify-screen4.jpg",
            "../images/xpify_images/xpify-screen5.jpg",
            "../images/xpify_images/xpify-screen6.jpg"
        ]
    },
    "light-bloom": {
        en: {
            title: "Light Bloom",
            description: "A puzzle game where sunlight meets strategy. Place fixed-angle mirrors to guide the beam and awaken the sleeping flower. As light touches life, watch the seed blossom into beauty.",
            features: [
                { title: "Light Source", desc: "The sun emits light from a fixed position." },
                { title: "Seed", desc: "The plant that awaits the light to come to life." },
                { title: "Game Board", desc: "Played on a grid with various challenging obstacles." },
                { title: "Mirror Mechanics", desc: "Use 45° and -45° mirrors to redirect light rays strategically." }
            ]
        },
        tr: {
            title: "Light Bloom",
            description: "Güneş ışığının stratejiyle buluştuğu bir bulmaca oyunu. Işını yönlendirmek ve uyuyan çiçeği uyandırmak için sabit açılı aynalar yerleştirin. Işık hayata dokundukça, tohumun güzelliğe dönüşmesini izleyin.",
            features: [
                { title: "Işık Kaynağı", desc: "Güneş belirli bir konumdan ışık yayar." },
                { title: "Tohum", desc: "Hayata dönmek için ışığı bekleyen bitki." },
                { title: "Oyun Tahtası", desc: "Çeşitli zorlu engeller içeren bir ızgara üzerinde oynanır." },
                { title: "Ayna Mekaniği", desc: "Işık ışınlarını stratejik olarak yönlendirmek için 45° ve -45° aynalar kullanın." }
            ]
        },
        nameLogo: "../images/lightbloom_images/namelogo.png",
        fontFamily: "'Montserrat', sans-serif",
        themeColor: "#FFD200",
        bgColor: "#fffef5",
        secondaryBg: "#fff9cc",
        textColor: "#111111",
        heroGradient: "rgba(255, 210, 0, 0.9)",
        logo: "../images/lightbloom_images/light-bloom.png",
        playStore: "https://play.google.com/store/apps/details?id=com.lorentalabs.lightbloom",
        appStore: "https://apps.apple.com/us/app/light-bloom-puzzle-game/id6751227232",
        screenshots: [
            "../images/lightbloom_images/lightbloom-mockup-1.png",
            "../images/lightbloom_images/lightbloom-mockup-2.png",
            "../images/lightbloom_images/lightbloom-mockup-3.png",
            "../images/lightbloom_images/lightbloom-mockup-4.png",
            "../images/lightbloom_images/lightbloom-mockup-5.png"
        ]
    }
};