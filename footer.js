// 1. DYNAMIC FAVICON INJECTION
(function() {
    const head = document.getElementsByTagName('head')[0];
    if (!head) return;
    const favicon = document.createElement('link');
    favicon.rel = 'icon'; favicon.type = 'image/png'; favicon.href = '/logo.png'; 
    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon'; appleIcon.href = '/logo.png';
    head.appendChild(favicon); head.appendChild(appleIcon);
})();

// 2. CENTRALIZED FOOTER
document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <style>
        .custom-footer { border-top: 1px solid rgba(255,255,255,0.05); padding: 80px 24px 48px; max-width: 80rem; margin: 0 auto; color: white; }
        .footer-grid { display: grid; gap: 48px; margin-bottom: 64px; }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(3, 1fr); } }
        .footer-link { color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; display: block; margin-bottom: 16px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; }
        .footer-link:hover { color: #F59E0B; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.05); padding-top: 32px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 24px; }
        @media (min-width: 768px) { .footer-bottom { flex-direction: row; } }
        .status-dot { width: 6px; height: 6px; background-color: #F59E0B; border-radius: 9999px; display: inline-block; margin-right: 8px; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
    </style>

    <footer class="custom-footer">
        <div class="footer-grid">
            <div>
                <p class="serif text-2xl font-bold mb-4" style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">Brilliant Unicorn <span style="color: #F59E0B;">LLC</span></p>
                <p style="color: rgba(255,255,255,0.4); line-height: 1.6; max-width: 320px;">
                    Automation systems, analytics infrastructure, and premium digital products for modern companies.
                </p>
            </div>
            
            <div class="mono">
                <p><a href="/" style="color: #F59E0B;" class="footer-link">Home</a></p>
                <p><a href="/services" class="footer-link">Services</a></p>
                <p><a href="/products" class="footer-link">Products</a></p>
                <p><a href="/terms" class="footer-link">Terms of Service</a></p>
                <p><a href="/privacy" class="footer-link">Privacy Policy</a></p>
                <p><a href="/refund-policy" class="footer-link">Refund Policy</a></p>
            </div>

            <div style="text-align: right;" class="contact-section">
                <p class="mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.3); margin-bottom: 16px;">Contact & Inquiries</p>
                <a href="mailto:charlie@brilliantunicorn.com" style="color: rgba(255,255,255,0.6); text-decoration: none;" class="footer-link">charlie@brilliantunicorn.com</a>
                <p style="color: rgba(255,255,255,0.4);">+254 797 560 284</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.2);">© 2026 Brilliant Unicorn LLC</p>
            <div class="mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.2); display: flex; gap: 32px;">
                <span>Nairobi, Kenya</span>
                <span style="display: flex; align-items: center;">
                    <span class="status-dot"></span>
                    Active Infrastructure
                </span>
            </div>
        </div>
    </footer>
    `;

    if (document.body) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
