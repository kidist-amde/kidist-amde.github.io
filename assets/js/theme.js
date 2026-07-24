/* ==========================================================================
   Site-wide light/dark theme support
   ========================================================================== */

(function (window, document) {
  'use strict';

  var mediaQuery = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  function storedTheme() {
    try {
      var value = window.localStorage.getItem('theme');
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function computedTheme() {
    return storedTheme() || (mediaQuery && mediaQuery.matches ? 'dark' : 'light');
  }

  function updateToggle(theme) {
    var toggle = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');
    var nextTheme = theme === 'dark' ? 'light' : 'dark';
    var label = 'Switch to ' + nextTheme + ' mode';

    if (icon) {
      icon.classList.toggle('fa-sun', theme === 'light');
      icon.classList.toggle('fa-moon', theme === 'dark');
    }
    if (toggle) {
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  }

  function setTheme(theme) {
    var resolved = theme === 'dark' ? 'dark' : 'light';
    if (resolved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    document.documentElement.style.colorScheme = resolved;
    updateToggle(resolved);
    return resolved;
  }

  function toggleTheme() {
    var nextTheme = document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark';
    try {
      window.localStorage.setItem('theme', nextTheme);
    } catch (error) {
      // The current page still switches even when storage is unavailable.
    }
    setTheme(nextTheme);
  }

  function followSystemTheme(event) {
    if (!storedTheme()) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  }

  window.AcademicPagesTheme = {
    current: computedTheme,
    set: setTheme,
    toggle: toggleTheme,
    followSystem: followSystemTheme,
    mediaQuery: mediaQuery
  };
}(window, document));
