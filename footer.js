<!-- FOOTER SCRIPT - Paste this just before the closing </body> tag in ALL your HTML files -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const footerHTML = `
        <footer class="max-w-7xl mx-auto px-6 pt-20 pb-12 border-t border-white/5 text-left">
            <div class="grid md:grid-cols-3 gap-12 items-start mb-16">
                
                <!-- Brand Column -->
                <div>
                    <p class="serif text-2xl font-bold mb-4 text-white">
                        Brilliant Unicorn <span class="text-amber-400">LLC</span>
                    </p>
                    <p class="text-white/50 leading-relaxed max-w-xs text-sm">
                        Instant-access digital frameworks + implementation support for founders building systems that last.
                    </p>
                </div>

                <!-- Navigation Column -->
                <div class="mono text-[10px] uppercase tracking-[0.2em] space-y-4">
                    <p><a href="/" class="text-white/60 hover:text-amber-400 transition">Home</a></p>
                    <p><a href="/products" class="text-white/60 hover:text-amber-400 transition">Products</a></p>
                    <p><a href="/services" class="text-white/60 hover:text-amber-400 transition">Implementation Support</a></p>
                    <p><a href="/about" class="text-white/60 hover:text-amber-400 transition">About</a></p>
                    <p><a href="/contact" class="text-white/60 hover:text-amber-400 transition">Contact</a></p>
                </div>

                <!-- Legal + Contact Column -->
                <div class="md:text-right">
                    <p class="mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">Legal & Support</p>
                    <div class="mono text-[10px] uppercase tracking-[0.2em] space-y-3">
                        <p><a href="/terms" class="text-white/60 hover:text-amber-400 transition">Terms of Service</a></p>
                        <p><a href="/privacy" class="text-white/60 hover:text-amber-400 transition">Privacy Policy</a></p>
                        <p><a href="/refund-policy" class="text-white/60 hover:text-amber-400 transition">Refund Policy</a></p>
                    </div>
                    
                    <div class="mt-10">
                        <a href="mailto:ceo@brilliantunicorn.com" 
                           class="block text-white/70 hover:text-amber-400 text-sm mb-1">
                            ceo@brilliantunicorn.com
                        </a>
                        <p class="text-white/40 text-sm">Nairobi, Kenya • Global Delivery</p>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
                <p class="mono text-[10px] uppercase tracking-widest text-white/20">
                    © 2026 Brilliant Unicorn LLC
                </p>
                <div class="flex items-center gap-6 mono text-[10px] uppercase tracking-widest text-white/20">
                    <span>Systems That Last</span>
                    <span class="flex items-center gap-2">
                        <span class="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                        Active
                    </span>
                </div>
            </div>
        </footer>
        `;

        // Remove any existing footers to prevent duplicates
        document.querySelectorAll('footer').forEach(f => f.remove());
        
        // Inject the new footer
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    });
</script>
