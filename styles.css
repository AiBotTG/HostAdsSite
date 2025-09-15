/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
}

html::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #e5e7eb;
    background-color: #0f172a;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: #0a0a0a;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(96, 165, 250, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #60a5fa;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Remove underline and keep color for clickable logo */
.logo-link {
    text-decoration: none;
    color: inherit;
}
.logo-link:visited {
    color: inherit;
}

.logo-img {
    height: 100%;
    width: auto;
    border-radius: 6px;
    max-height: 60px;
}

.nav {
    display: flex;
    gap: 2rem;
    position: relative;
}

.nav-link {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
    color: #00d4ff;
}

.nav-indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: #00d4ff;
    border-radius: 1px;
    transition: all 0.3s ease;
    width: 0;
    left: 0;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.hero-bg-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 60%;
    background-image: url('images/Hero.png');
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: 1;
}

/* Responsive eye sizing */
@media (max-width: 768px) {
    .hero-bg-image {
        width: 120%; /* Увеличиваем в 2 раза (было 60%) */
        height: 160%; /* Увеличиваем в 2 раза (было 80%) */
        max-height: calc(100vh - 200px); /* Ограничиваем высоту относительно экрана */
        right: -60%; /* Сдвигаем вправо, чтобы скрыть 55% за правой границей */
    }
}

@media (max-width: 480px) {
    .hero-bg-image {
        width: 140%; /* Увеличиваем в 2 раза (было 70%) */
        height: 170%; /* Увеличиваем в 2 раза (было 85%) */
        max-height: calc(100vh - 150px);
        right: -70%; /* Сдвигаем вправо, чтобы скрыть 55% за правой границей */
    }
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    background: linear-gradient(135deg, #ffffff 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
}

.cta-button {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
}

/* Section Styles */
section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    padding: 2rem 0;
}

/* Keep a subtle divider only under the hero section */
.hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.3) 50%, transparent 100%);
    opacity: 0.5;
}

.overview-content,
.community-content,
.geography-section,
.statistics-header,
.stats-grid,
.contacts-content {
    position: relative;
    z-index: 2;
}

/* Overview Section */
.overview {
    background: #111111;
    position: relative;
    overflow: hidden;
}

.overview::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

/* blend from overview (#111111) into community (#0a0a0a) */


.overview-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 3rem;
    align-items: start;
}

.channel-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.channel-info {
    margin-top: 1.5rem;
    max-width: 280px;
}

.channel-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.8rem;
    line-height: 1.3;
}

.channel-description {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.5;
    margin: 0;
}

.overview-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    /* Layer 1: avatar image; Layer 2: gradient ring */
    --ring: linear-gradient(45deg, #3b82f6, #60a5fa);
    --avatar-img: none;
    background-image: var(--avatar-img), var(--ring);
    background-size: cover, cover;
    background-position: center center, center center;
    background-repeat: no-repeat, no-repeat;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 3px solid transparent;
    /* Keep perfect circular ring */
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    will-change: transform;
}

/* disable overlay ring to ensure image stays visible (not used) */
.avatar::before { content: none; }

/* hover keeps scale; gradient updated */
.avatar:hover { --ring: linear-gradient(45deg, #2563eb, #60a5fa); }

.avatar:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
}

.avatar-1 { --avatar-img: url('images/avatar1.png'); }

.avatar-2 { --avatar-img: url('images/avatar2.png'); }

.avatar-link {
    text-decoration: none;
    display: block;
    width: 160px;
    height: 160px;
}

.features {
    margin-top: 2rem;
}

.feature-item {
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.feature-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 212, 255, 0.3);
}

.feature-title {
    background: transparent;
    padding: 25px 30px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.3s ease;
}

.feature-title:hover {
    background: rgba(0, 212, 255, 0.1);
}

.toggle-icon {
    font-size: 1.5rem;
    color: #00d4ff;
    transition: transform 0.3s ease;
}

.feature-item.active .toggle-icon {
    transform: rotate(45deg);
}

.feature-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.feature-item.active .feature-content {
    max-height: 200px;
}

.feature-content p {
    padding: 0 1.5rem 1.5rem;
    color: #cbd5e1;
    line-height: 1.7;
}

/* Community Section */
.community {
    background: #0a0a0a;
    position: relative;
    overflow: hidden;
}

.community::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 30% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

/* blend from community (#0a0a0a) into statistics (#111111) */


.community-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.community-block {
    width: 100%;
}

.chart-container {
    display: flex;
    justify-content: center;
    align-items: start; /* align chart to top so text aligns visually */
}

.bar-chart {
    background: #1e293b;
    padding: 2rem 2rem 3rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid #334155;
    width: 100%;
}

.community-text {
    margin-bottom: 1.5rem;
    color: #cbd5e1;
    line-height: 1.7;
}

.community-note {
    margin: -0.5rem 0 1rem; /* closer to title */
    font-size: 1.05rem; /* larger for readability */
    color: #94a3b8; /* gray-ish */
    opacity: 0.95;
}


.expandable-text {
    margin-top: 2rem;
}

.expandable-title {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #334155;
}

.expandable-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.expandable-text.active .expandable-content {
    /* allow internal scroll without growing the layout */
    max-height: 220px;
    overflow: auto;
}

/* Hide scrollbar while keeping scroll functionality */
.expandable-content {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
}
.expandable-content::-webkit-scrollbar { /* Chrome, Safari, Opera */
    width: 0;
    height: 0;
}

.expandable-content p {
    padding: 1rem 0;
    color: #cbd5e1;
    line-height: 1.7;
}

.chart-bars {
    display: flex;
    align-items: end;
    gap: 1.5rem;
    height: 200px;
}

.bar {
    flex: 1;
    background: linear-gradient(to top, #3b82f6, #60a5fa);
    border-radius: 4px 4px 0 0;
    position: relative;
    min-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 0.5rem;
}

.bar-label {
    position: absolute;
    bottom: -35px;
    font-size: 0.9rem;
    color: #9ca3af;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.bar-value {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

/* Statistics Section */
.statistics {
    background: #111111;
    position: relative;
    overflow: hidden;
}

.statistics::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 70%);
    pointer-events: none;
}

/* blend from statistics (#111111) into contacts (#0a0a0a) */


.statistics-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.statistics-title {
    order: 1;
    margin-bottom: 0;
}

.statistics-toggles {
    order: 2;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

.stats-grid {
    order: 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
}

.source-toggle,
.period-toggle {
    display: flex;
    background: #334155;
    border-radius: 50px;
    padding: 4px;
    position: relative;
}

.toggle-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    background: transparent;
    border-radius: 50px;
    font-weight: 600;
    color: #9ca3af;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.toggle-btn.active {
    color: #0f172a;
    position: relative;
    z-index: 2;
}

/* Анимированный индикатор для переключателей */
.source-toggle::before,
.period-toggle::before {
    content: '';
    position: absolute;
    top: 4px;
    left: calc(var(--indicator-left, 0px) + 4px);
    width: var(--indicator-width, 0px);
    height: calc(100% - 8px);
    background: #60a5fa;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(96, 165, 250, 0.3);
    z-index: 1;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.stat-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2.5rem;
    border-radius: 16px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 180px;
}

.stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: #60a5fa;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}

.stat-label {
    font-size: 1.1rem;
    color: #cbd5e1;
    font-weight: 500;
    text-align: center;
}

/* Contacts Section */
.contacts {
    background: #0a0a0a;
    color: white;
    text-align: center;
    position: relative;
}

.contacts-bg-image {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35%;
    height: 50%;
    background-image: url('images/Contact.png');
    background-size: contain;
    background-position: bottom left;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: 1;
}

/* Responsive phone sizing */
@media (max-width: 768px) {
    .contacts-bg-image {
        width: 100%; /* Увеличиваем размер картинки */
        height: 140%; /* Увеличиваем высоту */
        max-height: calc(100vh - 200px);
        left: -35%; /* Сдвигаем влево, чтобы показать 65% правой стороны */
    }
}

@media (max-width: 480px) {
    .contacts-bg-image {
        width: 120%; /* Увеличиваем размер картинки */
        height: 150%; /* Увеличиваем высоту */
        max-height: calc(100vh - 150px);
        left: -40%; /* Сдвигаем влево, чтобы показать 65% правой стороны */
    }
}

.contacts-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.contacts .section-title {
    color: white;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #f1f5f9;
    position: relative;
    z-index: 2;
    line-height: 1.2; /* tighter line spacing for multi-line titles */
}

.contact-info {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
}

.contact-link {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact-link:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: #1f2937;
    color: #9ca3af;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-link {
    color: #60a5fa;
    text-decoration: none;
    font-weight: 500;
}

.footer-link:hover {
    color: #93c5fd;
}

.footer-text {
    font-size: 0.9rem;
}

/* Hamburger Menu Styles */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
}

.hamburger.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(96, 165, 250, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
}

.mobile-menu.active {
    right: 0;
}

.mobile-nav-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border-radius: 10px;
    transition: all 0.3s ease;
    text-align: center;
    width: 200px;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        min-height: 60px; /* Минимальная высота хедера */
    }
    
    .header-content {
        position: relative;
        width: 100%;
        min-height: 60px;
        justify-content: space-between; /* Распределяем элементы по краям */
        align-items: center;
    }
    
    .logo {
        position: absolute;
        left: 20px; /* Привязываем к левой границе экрана */
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        font-size: 1.3rem; /* Убеждаемся, что текст логотипа достаточно большой */
    }
    
    .logo-img {
        max-height: 50px; /* Ограничиваем размер изображения логотипа */
    }
    
    /* Скрываем обычное меню на мобильных */
    .nav {
        display: none;
    }
    
    /* Показываем гамбургер меню */
    .hamburger {
        display: flex;
        position: absolute;
        right: 20px; /* Привязываем к правой границе экрана */
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 28px; /* Фиксированный размер гамбургера */
        height: 28px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .overview-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .overview-center {
        order: 1;
    }
    
    .overview-right {
        order: 2;
    }
    
    .overview-left {
        order: 3;
    }
    
    .community-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    /* Изменяем порядок элементов в комьюнити для мобильных */
    .community-age-chart {
        order: 1; /* График возрастов первым */
    }
    
    .community-audience-text {
        order: 2; /* Текст о целевой аудитории вторым */
    }
    
    .community-geo-chart {
        order: 3; /* График гео третьим */
    }
    
    .community-geo-text {
        order: 4; /* Текст о гео четвертым */
    }
    
    .chart-bars {
        gap: 1rem;
        height: 180px;
    }
    
    .bar-chart {
        padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    }
    
    .bar-label {
        bottom: -30px;
        font-size: 0.8rem;
    }
    
    .statistics-wrapper {
        gap: 1.5rem;
    }
    
    .statistics-toggles {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        justify-content: center;
        max-width: 400px;
    }
    
    .period-toggle {
        order: 1; /* Переключатель дат сверху */
    }
    
    .source-toggle {
        order: 2; /* Переключатель каналов снизу */
    }
    
    .source-toggle,
    .period-toggle {
        flex: 0 0 auto;
        min-width: 200px;
        justify-content: center;
    }
    
    .toggle-btn {
        flex: 1;
        padding: 0.6rem 1rem;
        font-size: 0.85rem;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .stat-card {
        padding: 1.5rem;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .stat-number {
        font-size: 2rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .stat-label {
        font-size: 0.9rem;
        text-align: center;
    }
    
    .contact-info {
        flex-direction: column;
        align-items: center;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    /* Fullscreen sections on mobile */
    section {
        min-height: 100vh;
        padding: 2rem 0;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .header {
        min-height: 55px; /* Немного меньше для очень маленьких экранов */
    }
    
    .header-content {
        min-height: 55px;
    }
    
    .logo-img {
        max-height: 45px; /* Немного меньше логотип для маленьких экранов */
    }
    
    .container {
        padding: 0 15px;
    }
    
    .hero {
        padding: 100px 0 60px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    section {
        padding: 60px 0;
    }
    
    .avatar {
        width: 120px;
        height: 120px;
    }
    
    .avatar-link {
        width: 120px;
        height: 120px;
    }
    
    .channel-title {
        font-size: 1.1rem;
    }
    
    .channel-description {
        font-size: 0.9rem;
    }
    
    .channel-info {
        max-width: 250px;
    }
    
    .stat-number {
        font-size: 1.8rem;
    }
    
    .stat-label {
        font-size: 0.8rem;
    }
    
    .chart-bars {
        gap: 0.8rem;
        height: 160px;
    }
    
    .bar-chart {
        padding: 1rem 1rem 2rem 1rem;
    }
    
    .bar-label {
        bottom: -25px;
        font-size: 0.75rem;
    }
    
    .bar-value {
        font-size: 0.8rem;
    }
    
    /* Дополнительные улучшения для очень маленьких экранов */
    .statistics-toggles {
        flex-direction: column;
        gap: 0.8rem;
    }
    
    .period-toggle {
        order: 1; /* Переключатель дат сверху */
    }
    
    .source-toggle {
        order: 2; /* Переключатель каналов снизу */
    }
    
    .source-toggle,
    .period-toggle {
        min-width: 140px;
        width: 100%;
    }
    
    .toggle-btn {
        padding: 0.5rem 0.8rem;
        font-size: 0.8rem;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }
    
    .stat-card {
        padding: 1.2rem;
        min-height: 100px;
    }
    
    .stat-number {
        font-size: 1.8rem;
    }
}

/* Дополнительный медиа-запрос для очень широких экранов */
@media (min-width: 1200px) {
    .container {
        max-width: 1400px;
    }
    
    .hero-title {
        font-size: 4rem;
    }
    
    .section-title {
        font-size: 3rem;
    }
}

/* Медиа-запрос для планшетов */
@media (min-width: 769px) and (max-width: 1024px) {
    .overview-content {
        grid-template-columns: 1fr 2fr 1fr;
        gap: 2rem;
    }
    
    .community-wrapper {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}
