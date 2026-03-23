// footer.js
const footerHTML = `
<footer style="background: #111827; color: #9ca3af; padding: 40px 20px; border-top: 1px solid #1f2937; text-align: center; font-family: sans-serif;">
  <div style="max-width: 1000px; margin: 0 auto;">
    <p style="color: white; font-weight: bold; margin-bottom: 5px;">Brilliant Unicorn LLC</p>
    <p style="font-size: 12px; margin-bottom: 20px;">Sovereign Engineering Standards • Nairobi, Kenya</p>
    
    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
      <a href="/terms.html" style="color: #9ca3af; text-decoration: none;">Terms</a>
      <a href="/privacy.html" style="color: #9ca3af; text-decoration: none;">Privacy</a>
      <a href="/refund-policy.html" style="color: #9ca3af; text-decoration: none;">Refunds</a>
      <a href="/contact.html" style="color: #9ca3af; text-decoration: none;">Contact</a>
    </div>
    
    <p style="font-size: 10px; margin-top: 30px;">© 2026 Charles Mwaura. Built to Endure.</p>
  </div>
</footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
