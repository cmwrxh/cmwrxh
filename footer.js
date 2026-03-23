// footer.js
const footerHTML = `
<footer class="max-w-7xl mx-auto px-6 pt-10 pb-12 border-t border-white/5">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 mono text-[10px] uppercase tracking-[0.2em]">
            <a href="/terms.html" class="text-white/40 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="/privacy.html" class="text-white/40 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="/refund-policy.html" class="text-white/40 hover:text-amber-400 transition-colors">Refund Policy</a>
            <a href="/contact.html" class="text-white/40 hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <div class="flex gap-8 mono text-[10px] uppercase tracking-widest text-white/20">
            <span>Nairobi, Kenya</span>
            <span class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-pulse"></span>
                Active Infrastructure
            </span>
        </div>
    </div>
    
    <div class="mt-8 text-center md:text-left">
        <p class="mono text-[9px] uppercase tracking-widest text-white/10">© 2026 Brilliant Unicorn LLC. Built to Endure.</p>
    </div>
</footer>
`;

// This injects it at the bottom of the body
document.body.insertAdjacentHTML('beforeend', footerHTML);
