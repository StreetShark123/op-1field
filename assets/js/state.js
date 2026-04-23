(function initCourseStateStore() {
  const KEY = 'op1f_learning_app_state_v1';

  function defaultState() {
    return {
      version: 1,
      lastModule: 0,
      completed: [],
      bookmarks: [],
      trackMode: 'full',
      searchQuery: '',
      bookmarksOnly: false,
      viewMode: 'normal',
      hasOnboarded: false,
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return defaultState();
      return { ...defaultState(), ...parsed };
    } catch (_err) {
      return defaultState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (_err) {
      // ignore quota errors for offline-first behavior
    }
  }

  function reset() {
    try {
      localStorage.removeItem(KEY);
    } catch (_err) {
      // ignore
    }
  }

  window.CourseState = {
    KEY,
    defaultState,
    load,
    save,
    reset,
  };
})();
