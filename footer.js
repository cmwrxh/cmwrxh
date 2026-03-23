// 1. DYNAMIC FAVICON INJECTION (The "One-Fix" for all pages)
(function() {
    const head = document.getElementsByTagName('head')[0];
    
    // Standard Favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = '/logo.png'; 
    
    // Apple Devices Icon
    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = '/logo.png';
    
    head.appendChild(favicon);
    head.appendChild(appleIcon);
})();

// 2. CENTRALIZED FOOTER (Clean URLs + Styling)
const footerHTML = `
<footer class="max-w-7xl mx-auto px-6 pt-20 pb-12 border-t border-white/5">
    <div class="grid md:grid-cols-3 gap-12 items-start mb-16">
        <div>
            <p class="serif text-2xl font-bold mb-4">Brilliant Unicorn <span class="text-amber-400">LLC</span></p>
            <p class="text-white/40 leading-relaxed max-w-xs">
                Automation systems, analytics infrastructure, and premium digital products for modern companies.
            </p>
        </div>
        
        <div class="mono text-[10px] uppercase tracking-[0.2em] space-y-4">
            <p><a href="/" class="text-amber-400">Home</a></p>
            <p><a href="/services" class="text-white/50 hover:text-amber-400 transition">Services</a></p>
            <p><a href="/products" class="text-white/50 hover:text-amber-400 transition">Products</a></p>
            <p><a href="/terms" class="text-white/50 hover:text-amber-400 transition">Terms of Service</a></p>
            <p><a href="/privacy" class="text-white/50 hover:text-amber-400 transition">Privacy Policy</a></p>
            <p><a href="/refund-policy" class="text-white/50 hover:text-amber-400 transition">Refund Policy</a></p>
        </div>

        <div class="md:text-right">
            <p class="mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Contact & Inquiries</p>
            <a href="mailto:charlie@brilliantunicorn.com" class="block text-white/60 hover:text-amber-400 mb-2 transition">charlie@brilliantunicorn.com</a>
            <p class="text-white/40">+254 797 560 284</p>
        </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
        <p class="mono text-[10px] uppercase tracking-widest text-white/20">© 2026 Brilliant Unicorn LLC</p>
        <div class="flex gap-8 mono text-[10px] uppercase tracking-widest text-white/20">
            <span>Nairobi, Kenya</span>
            <span class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Active Infrastructure
            </span>
        </div>
    </div>
</footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
