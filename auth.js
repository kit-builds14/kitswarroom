// War Room Password Protection
// Password is hashed client-side. Not enterprise security, but blocks casual access.
(function() {
  var HASH = '8b2e3f7a1c9d4e6b0a5f8c2d7e3b1a9f4c6d8e0b2a5f7c1d3e9b4a6f8c0d2e';
  var STORAGE_KEY = 'tstories_auth';
  var EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

  function simpleHash(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash.toString(16);
  }

  // SHA-256 hash for comparison
  async function sha256(message) {
    var msgBuffer = new TextEncoder().encode(message);
    var hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  // Check if already authenticated
  function isAuthenticated() {
    try {
      var stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.ts && (Date.now() - stored.ts) < EXPIRY_MS) {
        return true;
      }
    } catch(e) {}
    return false;
  }

  function setAuthenticated() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
  }

  if (isAuthenticated()) return; // Already logged in

  // Hide page content and show login
  document.documentElement.style.visibility = 'hidden';

  window.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.visibility = 'hidden';
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:0;background:#0D1520;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;';
    document.documentElement.style.visibility = 'visible';

    var container = document.createElement('div');
    container.style.cssText = 'text-align:center;padding:40px;background:#151F2E;border:1px solid #1E2D42;border-radius:12px;max-width:380px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,.4);';
    container.innerHTML = '<div style="font-size:36px;margin-bottom:12px;">🔒</div>'
      + '<h1 style="color:#C5A55A;font-size:22px;margin:0 0 6px;">War Room</h1>'
      + '<p style="color:#6B7A90;font-size:13px;margin:0 0 24px;">Enter password to continue</p>'
      + '<input id="ts-pw" type="password" placeholder="Password" autocomplete="off" style="width:100%;padding:12px 16px;background:#0D1520;border:1px solid #1E2D42;border-radius:6px;color:#D0D8E4;font-size:15px;outline:none;margin-bottom:12px;box-sizing:border-box;">'
      + '<button id="ts-btn" style="width:100%;padding:12px;background:#C5A55A;color:#0D1520;border:none;border-radius:6px;font-size:15px;font-weight:600;cursor:pointer;">Enter</button>'
      + '<p id="ts-err" style="color:#EF5350;font-size:13px;margin:8px 0 0;display:none;">Incorrect password</p>';
    document.body.appendChild(container);

    var input = document.getElementById('ts-pw');
    var btn = document.getElementById('ts-btn');
    var err = document.getElementById('ts-err');

    async function tryLogin() {
      var pw = input.value;
      var hashed = await sha256(pw);
      if (hashed === '93b809afe864725999f24f103dcdf496a682eb833179783fed8b2d838414d233') {
        setAuthenticated();
        location.reload();
      } else {
        err.style.display = 'block';
        input.style.borderColor = '#EF5350';
        input.value = '';
        input.focus();
        setTimeout(function(){ err.style.display='none'; input.style.borderColor='#1E2D42'; }, 2000);
      }
    }

    btn.addEventListener('click', tryLogin);
    input.addEventListener('keydown', function(e) { if(e.key === 'Enter') tryLogin(); });
    input.focus();
  });
})();
