const officialChoiceLabels = ['イ', 'ロ', 'ハ', 'ニ'];
const officialBank = officialMockExams.flatMap(([date, sitting, sizes, questions]) => {
  const exam = pastExams.find(item => item.date === date);
  return questions.map(([page, offset, correct], index) => ({
    date, sitting, sizes, page, offset, correct, number: index + 1,
    source: `令和${exam.year}年度${exam.term}第二種電気工事士${exam.year === 4 ? '筆記' : '学科'}試験${exam.sets === 2 ? ['（午前）', '（午後）'][sitting - 1] : ''}`
  }));
});
let officialSession;

function officialMockPage() {
  if (officialSession) {
    if (Date.now() >= officialSession.deadline) finishOfficialMock(true);
    else renderOfficialQuestion();
    return;
  }
  app.innerHTML = `
    <h1>過去問模擬試験</h1>
    <p class="sub">令和4〜8年度の公式問題からランダムに出題します。</p>
    <section class="panel official-setup">
      <p>上期・下期14回分、全${officialBank.length}問を収録。出典の異なる問題を組み合わせ、同じ出典・問題番号は1回だけ出題します。</p>
      <label for="official-count">問題数と制限時間</label>
      <select id="official-count">
        <option value="10">10問 / 24分</option>
        <option value="20">20問 / 48分</option>
        <option value="50">50問 / 120分</option>
      </select>
      <button class="primary" data-official="start">試験を開始する</button>
    </section>`;
}

function officialQuestionFile(question) {
  return `exams/${question.date}_co_second_q0${question.sitting}.pdf`;
}

function officialScan(question, page, alt, primary = false) {
  const [width, height] = question.sizes[page];
  const file = `exam-pages/${question.date}-${question.sitting}-${page}.webp`;
  return `<div class="official-scan"${primary ? ' data-question-scan' : ''} tabindex="0" aria-label="${alt}（スクロール可能）">
    <div class="official-scan-page">
      <img src="${file}" width="${width}" height="${height}" alt="${alt}"${primary ? '' : ' loading="lazy"'}>
      ${primary ? `<span class="official-marker" style="top:${question.offset * 100}%" aria-hidden="true"></span>` : ''}
    </div>
  </div>`;
}

function renderOfficialQuestion() {
  const { questions, position, answers } = officialSession;
  const question = questions[position];
  const problemFile = officialQuestionFile(question);
  app.innerHTML = `
    <div class="quiz">
      <h1>過去問模擬試験</h1>
      <div class="row official-progress">
        <span>第 ${position + 1} 問 / ${questions.length}問</span>
        <span data-official-timer></span>
      </div>
      <section class="panel official-question">
        <h2 tabindex="-1">原本の問${question.number}に解答</h2>
        <p>出典：${question.source} 問${question.number}（電気技術者試験センター）</p>
        ${officialScan(question, question.page, `問${question.number}を含む公式問題の${question.page}ページ`, true)}
        <p><a href="${problemFile}#page=${question.page}" target="_blank" rel="noopener">問題PDFを拡大して読む（別タブ）</a></p>
        ${question.number >= 31 ? `<details class="official-drawing"><summary>共通の配線図を表示</summary>
          ${officialScan(question, 15, '配線図問題の共通図')}
          <p><a href="${problemFile}#page=15" target="_blank" rel="noopener">配線図PDFを開く（別タブ）</a> · <a href="${problemFile}#page=11" target="_blank" rel="noopener">共通の注意事項（別タブ）</a></p>
        </details>` : ''}
        <fieldset class="official-answers">
          <legend>解答を選択</legend>
          ${officialChoiceLabels.map((label, index) => `<label>
            <input type="radio" name="official-answer" value="${index}" ${answers[position] === index ? 'checked' : ''}>
            <span>${label}</span></label>`).join('')}
        </fieldset>
        <p data-official-answered>解答済み ${answers.filter(Number.isInteger).length} / ${questions.length}問</p>
        <div class="actions">
          <button class="secondary" data-official="previous" ${position === 0 ? 'disabled' : ''}>前の問題</button>
          ${position + 1 < questions.length ? '<button class="primary" data-official="next">次の問題</button>' : ''}
        </div>
        <button class="secondary official-grade" data-official="grade">試験を終了して採点</button>
      </section>
    </div>`;

  const scan = app.querySelector('[data-question-scan]');
  const locate = () => { scan.scrollTop = scan.firstElementChild.offsetHeight * question.offset - 6; };
  locate();
  scan.querySelector('img').addEventListener('load', locate, { once: true });
  app.querySelector('.official-question h2').focus({ preventScroll: true });
  window.scrollTo(0, 0);
  clearInterval(tick);
  tick = setInterval(tickOfficialMock, 1000);
  tickOfficialMock();
}

function tickOfficialMock() {
  const timer = app.querySelector('[data-official-timer]');
  if (!timer || !officialSession) return;
  const remaining = Math.max(0, Math.ceil((officialSession.deadline - Date.now()) / 1000));
  timer.textContent = `残り ${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`;
  if (remaining === 0) finishOfficialMock(true);
}

function finishOfficialMock(expired = false) {
  clearInterval(tick);
  const { questions, answers } = officialSession;
  officialSession = null;
  const correct = questions.filter((question, index) => question.correct === answers[index]).length;
  app.innerHTML = `
    <div class="quiz">
      <h1 tabindex="-1">過去問模擬試験の結果</h1>
      ${expired ? '<p>制限時間に達しました。</p>' : ''}
      <section class="panel">
        <strong class="score">${Math.round(correct / questions.length * 100)}%</strong>
        <p>${questions.length}問中 ${correct}問正解（未解答 ${questions.length - answers.filter(Number.isInteger).length}問）</p>
        <button class="primary" data-page="official">もう一度受ける</button>
      </section>
      <section class="panel">
        <h2>解答の振り返り</h2>
        ${questions.map((question, index) => {
          const selected = officialChoiceLabels[answers[index]] ?? '未解答';
          const result = answers[index] === question.correct ? '正解' : selected === '未解答' ? selected : '不正解';
          return `<div class="reviewitem">
            <b>第${index + 1}問　${result}</b>
            <p>あなたの解答 ${selected} ／ 正解 ${officialChoiceLabels[question.correct]}</p>
            <p>出典：${question.source} 問${question.number}</p>
            <a href="${officialQuestionFile(question)}#page=${question.page}" target="_blank" rel="noopener">問題PDF（別タブ）</a>
            ・<a href="exams/${question.date}_co_second_a0${question.sitting}.pdf" target="_blank" rel="noopener">公式解答PDF（別タブ）</a>
          </div>`;
        }).join('')}
      </section>
    </div>`;
  app.querySelector('h1').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

document.addEventListener('click', event => {
  const button = event.target.closest('button[data-official]');
  if (!button) return;
  const action = button.dataset.official;
  if (action === 'start') {
    const count = Number(app.querySelector('#official-count').value);
    officialSession = {
      questions: shuffle(officialBank).slice(0, count),
      position: 0,
      answers: Array(count).fill(null),
      deadline: Date.now() + count * 144000
    };
  } else if (Date.now() >= officialSession.deadline || action === 'grade') {
    finishOfficialMock(Date.now() >= officialSession.deadline);
    return;
  } else {
    officialSession.position += action === 'next' ? 1 : -1;
  }
  renderOfficialQuestion();
});

document.addEventListener('change', event => {
  if (event.target.name !== 'official-answer') return;
  if (Date.now() >= officialSession.deadline) {
    finishOfficialMock(true);
    return;
  }
  const { position, answers } = officialSession;
  answers[position] = Number(event.target.value);
  app.querySelector('[data-official-answered]').textContent = `解答済み ${answers.filter(Number.isInteger).length} / ${answers.length}問`;
});
