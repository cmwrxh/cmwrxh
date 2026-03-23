// 1. DYNAMIC FAVICON
(function() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const icon = document.createElement('link');
    icon.rel = 'icon'; icon.href = '/logo.png';
    const apple = document.createElement('link');
    apple.rel = 'apple-touch-icon'; apple.href = '/logo.png';
    head.appendChild(icon); head.appendChild(apple);
})();

// 2. BULLETPROOF FOOTER INJECTION
document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer style="max-width: 1280px; margin: 80px auto 0; padding: 60px 24px; border-top: 1px solid rgba(255,255,255,0.08); color: white; font-family: 'Inter', sans-serif; clear: both;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px;">
            
            <div style="flex: 1; min-width: 250px;">
                <p style="font-family: 'Playfair Display', serif; font-size: 22px; font-weight: bold; margin: 0 0 12px 0;">
                    Brilliant Unicorn <span style="color: #F59E0B;">LLC</span>
                </p>
                <p style="color: rgba(243, 244, 246, 0.4); line-height: 1.6; font-size: 13px; max-width: 300px;">
                    Automation systems, analytics infrastructure, and premium digital products for modern companies.
                </p>
            </div>

            <div style="flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 10px;">
                <a href="/" style="color: #F59E0B; text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Home</a>
                <a href="/services" style="color: rgba(243, 244, 246, 0.6); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Services</a>
                <a href="/products" style="color: rgba(243, 244, 246, 0.6); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Products</a>
                <a href="/terms" style="color: rgba(243, 244, 246, 0.6); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Terms</a>
                <a href="/privacy" style="color: rgba(243, 244, 246, 0.6); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Privacy</a>
                <a href="/refund-policy" style="color: rgba(243, 244, 246, 0.6); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">Refunds</a>
            </div>

            <div style="flex: 1; min-width: 200px; text-align: right;">
                <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(243, 244, 246, 0.2); margin: 0 0 12px 0;">Direct Access</p>
                <a href="mailto:charlie@brilliantunicorn.com" style="color: rgba(243, 244, 246, 0.7); text-decoration: none; font-size: 14px; display: block; margin-bottom: 6px;">charlie@brilliantunicorn.com</a>
                <p style="color: rgba(243, 244, 246, 0.3); font-size: 13px;">Nairobi, Kenya</p>
            </div>
        </div>

        <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 9px; text-transform: uppercase; color: rgba(243, 244, 246, 0.15); letter-spacing: 0.1em;">© 2026 Brilliant Unicorn LLC</p>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 5px; height: 5px; background: #F59E0B; border-radius: 50%; box-shadow: 0 0 8px #F59E0B;"></span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 9px; text-transform: uppercase; color: rgba(243, 244, 246, 0.2); letter-spacing: 0.1em;">System Active</span>
            </div>
        </div>
    </footer>
    `;
    if (document.body) { document.body.insertAdjacentHTML('beforeend', footerHTML); }
});
