function startStudySync(onChange) {
  const status = document.querySelector('#sync-status');
  const retry = document.querySelector('#sync-retry');
  const state = { answers: [], weak: [], days: [], exams: [] };
  let learner;
  let cursor = 0;
  let syncing = false;
  let confirmed = false;
  const pending = [];

  function updateStatus(message, failed = false) {
    status.textContent = message;
    retry.hidden = !failed;
  }

  function apply(event) {
    if (event.kind === 'exam') {
      state.exams.push({ date: event.date, score: event.score });
      return;
    }
    state.answers.push({ id: event.id, ok: event.ok });
    if (event.ok) state.weak = state.weak.filter(id => id !== event.id);
    else if (!state.weak.includes(event.id)) state.weak.push(event.id);
    if (!state.days.includes(event.day)) state.days.push(event.day);
  }

  async function sync() {
    if (syncing) return;
    syncing = true;
    updateStatus('学習記録を同期しています。');
    try {
      do {
        while (pending.length) {
          const response = await fetch('./api/records', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ learner, event: pending[0] }),
            redirect: 'error'
          });
          if (!response.ok) throw new Error('Save failed');
          pending.shift();
        }
        let page;
        do {
          const response = await fetch('./api/records?after=' + cursor, { redirect: 'error' });
          if (!response.ok) throw new Error('Load failed');
          page = await response.json();
          if (learner && learner !== page.learner) {
            window.location.reload();
            return;
          }
          learner = page.learner;
          page.events.forEach(apply);
          cursor = page.cursor;
        } while (page.more);
      } while (pending.length);
      confirmed = true;
      onChange(state);
      updateStatus('学習記録はこのアカウントで共有されます。');
    } catch {
      updateStatus(pending.length
        ? '未保存の学習記録があります。このページを閉じる前に再試行してください。'
        : '学習記録を読み込めませんでした。接続とログイン状態を確認してください。', true);
    } finally {
      syncing = false;
    }
  }

  retry.addEventListener('click', sync);
  window.addEventListener('online', sync);
  window.addEventListener('focus', sync);
  window.addEventListener('beforeunload', event => {
    if (!pending.length) return;
    event.preventDefault();
    event.returnValue = true;
  });
  sync();
  return {
    record(event) {
      if (!confirmed) return;
      pending.push({ ...event, key: crypto.randomUUID() });
      sync();
    }
  };
}
