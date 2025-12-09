/* Code copy button
 * Adds a small "copy" button to each <pre><code> block and uses
 * the Clipboard API (with a textarea fallback) to copy code text.
 * Reads UI strings from window.CODE_COPY_CONFIG when available.
 */
(function () {
  'use strict';

  function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    // fallback for older browsers
    return new Promise((resolve, reject) => {
      try {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.position = 'fixed';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.focus();
        el.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(el);
        if (ok) resolve(); else reject(new Error('copy-failed'));
      } catch (e) {
        reject(e);
      }
    });
  }

  function attachButtons(config) {
    const buttonText = config && config.buttonText ? config.buttonText : '复制';
    const copiedText = config && config.copiedText ? config.copiedText : '已复制';

    document.querySelectorAll('pre > code').forEach((code) => {
      const pre = code.parentElement;
      if (!pre) return;

      // don't add twice
      if (pre.querySelector('.code-copy-btn')) return;

      // ensure pre is positioned so the button can be absolutely placed
      const prevPos = window.getComputedStyle(pre).position;
      if (prevPos === 'static' || !prevPos) {
        pre.style.position = 'relative';
      }

      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', '复制代码');
      btn.innerText = buttonText;

      let clearTimer = null;
      btn.addEventListener('click', async () => {
        try {
          await copyTextToClipboard(code.innerText);
          btn.innerText = copiedText;
          clearTimeout(clearTimer);
          clearTimer = setTimeout(() => (btn.innerText = buttonText), 1500);
        } catch (err) {
          btn.innerText = '复制失败';
          clearTimeout(clearTimer);
          clearTimer = setTimeout(() => (btn.innerText = buttonText), 1500);
          console.warn('copy failed', err);
        }
      });

      pre.appendChild(btn);
    });
  }

  function init() {
    // allow configuration from template via window.CODE_COPY_CONFIG
    const cfg = typeof window !== 'undefined' && window.CODE_COPY_CONFIG ? window.CODE_COPY_CONFIG : null;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => attachButtons(cfg));
    } else {
      attachButtons(cfg);
    }
  }

  // init on load
  init();

})();
