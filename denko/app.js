const raw=[
['判別','絶縁抵抗を測定するために使用する計器はどれですか。',['絶縁抵抗計','検相器','照度計','周波数計'],0,'絶縁抵抗計は、電路や機器の絶縁状態を抵抗値で確認する計器です。'],
['判別','画像の計器は、電線を切断せずに電流を測定できます。この計器はどれですか。',['クランプ形電流計','検電器','絶縁抵抗計','回転計'],0,'クランプ形電流計は、測定する電線をクランプ部で挟んで電流を測定します。'],
['判別','リングスリーブによる電線接続に使用する工具はどれですか。',['圧着工具','パイプレンチ','リーマ','金切りのこ'],0,'リングスリーブの接続には、それに適合した圧着工具を使います。'],
['判別','金属管の切断面の内側に生じたバリを除く工具はどれですか。',['リーマ','検電器','ペンチ','ドライバー'],0,'リーマは金属管の内面のバリを取り除き、電線の被覆損傷を防ぐために使用します。'],
['判別','VVFの名称として正しいものはどれですか。',['600Vビニル絶縁ビニルシースケーブル平形','架橋ポリエチレン絶縁電線','ゴム絶縁丸打コード','屋外用ビニル絶縁電線'],0,'VVFはビニルで絶縁し、さらにビニルのシースで保護した平形ケーブルです。'],
['判別','ねじなし電線管の記号はどれですか。',['E','G','C','PF'],0,'ねじなし電線管はE、厚鋼電線管はG、薄鋼電線管はCで表します。'],
['判別','画像のような合成樹脂製可とう電線管を表すものはどれですか。',['PF管','G管','E管','C管'],0,'PF管は合成樹脂製可とう電線管の一種です。'],
['判別','画像の工具は、電線の絶縁被覆をはぎ取るために使います。この工具はどれですか。',['ワイヤストリッパ','トルクレンチ','リーマ','ホールソー'],0,'ワイヤストリッパは、導体を傷つけないように電線の絶縁被覆を除去する工具です。'],
['判別','漏電による電流の不平衡を検出して回路を遮断する機器はどれですか。',['漏電遮断器','電磁接触器','点滅器','タイムスイッチ'],0,'漏電遮断器は、往きと戻りの電流の差などから漏電を検出して電路を遮断します。'],
['判別','接地抵抗を測るための専用計器はどれですか。',['接地抵抗計','電力計','照度計','検相器'],0,'接地抵抗計は接地極と大地との間の抵抗を測定します。'],
['判別','電動機の回転磁界に関係する三相電源の相順を調べる計器はどれですか。',['検相器','検電器','電圧計','絶縁抵抗計'],0,'検相器で三相交流の相順を確認します。'],
['判別','電線が金属製ボックスの端部に触れて傷つくことを防ぐ部品はどれですか。',['絶縁ブッシング','ロックナット','リングスリーブ','サドル'],0,'絶縁ブッシングは、金属管端部などでの電線の被覆損傷を防ぎます。'],
['配線図','下の図で、スイッチSが図のように開いているとき、ランプはどうなりますか。',['消灯する','点灯する','明るくなる','変化しない'],0,'スイッチを開くと回路が途切れ、電流が流れなくなるため消灯します。','switch'],
['配線図','下の回路で、ランプを点滅させるスイッチの接続はどれですか。',['ランプと直列','ランプと並列','電源と短絡','接地線と直列'],0,'点滅用のスイッチは負荷に直列に接続して電流の通り道を開閉します。','switch'],
['配線図','下の図記号が表す器具はどれですか。',['ランプ（照明）','コンセント','分電盤','接地極'],0,'円の中に交差する線を描いた記号は、ランプを示す基本的な回路記号です。','lamp'],
['配線図','接地線の用途として正しいものはどれですか。',['漏電時の感電などの危険を低減する','通常の負荷電流を流す','電圧を上昇させる','周波数を変える'],0,'接地は、漏電時などの危険を低減するために行います。通常の負荷電流を流すための線ではありません。','ground'],
['配線図','同じ照明を2か所から点滅させる回路に使うスイッチの組合せはどれですか。',['3路スイッチ2個','片切スイッチ1個','4路スイッチ1個だけ','押しボタン1個だけ'],0,'2か所からの点滅には通常、3路スイッチを2個使用します。'],
['配線図','同じ照明を3か所から点滅させるとき、3路スイッチ2個の間に入れるものはどれですか。',['4路スイッチ','片切スイッチ','コンセント','配線用遮断器'],0,'3か所で操作する場合は、2個の3路スイッチの間に4路スイッチを設けます。'],
['配線図','下の並列回路で、各ランプに加わる電圧はどれですか。',['どちらも電源電圧と等しい','それぞれ電源電圧の半分','どちらも0V','必ず2倍になる'],0,'並列回路では各負荷が電源の両端につながるため、各負荷の電圧は電源電圧と等しくなります。','parallel'],
['配線図','直流100 Vの電源に20 Ωの抵抗器を接続したとき、流れる電流はどれですか。',['5A','0.2A','20A','2000A'],0,'オームの法則 I = V / R より、100 ÷ 20 = 5Aです。','ohm'],
['配線図','100Vで5A流れる負荷の消費電力（力率1）はどれですか。',['500W','20W','105W','50W'],0,'力率1のとき、電力 P = V × I = 100 × 5 = 500Wです。'],
['配線図','10Ωの抵抗2個を直列接続したときの合成抵抗はどれですか。',['20Ω','5Ω','10Ω','100Ω'],0,'直列接続の合成抵抗は各抵抗の和です。10 + 10 = 20Ωになります。','seriesResistance'],
['配線図','10Ωの抵抗2個を並列接続したときの合成抵抗はどれですか。',['5Ω','20Ω','10Ω','100Ω'],0,'同じ抵抗2個の並列接続では、合成抵抗は1個の半分となり、5Ωです。','parallelResistance'],
['配線図','分岐回路に設ける配線用遮断器の主な役割はどれですか。',['過電流から電路を保護する','電圧を変換する','電力を蓄える','照度を測る'],0,'配線用遮断器は、過負荷や短絡などによる過電流から電路を保護します。']
];
const questionImages = {
  1: ['item-02.png', '上部に輪状の開閉部があり、中央に画面と回転つまみが付いた計器'],
  6: ['item-07.png', '曲がった灰色の管。表面に環状の凹凸があり、断面は中空'],
  7: ['item-08.png', '青い持ち手と、刃に大きさの異なる丸い穴が並ぶ工具']
};

function questionVisual(question) {
  if (question.photo) {
    const { file, width, height, source, href, alt } = question.photo;
    return `<figure class="question-image"><img src="images/${file}" width="${width}" height="${height}" alt="${alt}"><figcaption>出典：<a href="${href}" target="_blank" rel="noopener">${source}</a><br>写真を切り出し、設問を画面表示用に整形しています。</figcaption></figure>`;
  }
  const image = questionImages[question.id];
  if (!image) return diagram(question.diagram);
  const [file, description] = image;
  return `<figure class="question-image"><img src="images/${file}" width="1536" height="1024" alt="${description}"><figcaption>器具のイメージ（生成画像）</figcaption></figure>`;
}

const questions=raw.map((q,id)=>({id,cat:q[0],text:q[1],opts:q[2],correct:q[3],ex:q[4],diagram:q[5]}));
pastPhotoQuestions.forEach(([date, sitting, number, page, file, width, height, text, opts, correct, alt]) => {
  const { year, term, sets } = pastExams.find(exam => exam.date === date);
  const period = sets === 2 ? ['（午前）', '（午後）'][sitting - 1] : '';
  const source = `令和${year}年度${term}第二種電気工事士学科試験${period} 問${number}`;
  const href = `exams/${date}_co_second_q0${sitting}.pdf#page=${page}`;
  const answerHref = `exams/${date}_co_second_a0${sitting}.pdf`;
  questions.push({
    id: questions.length, cat: '判別', text, opts, correct,
    photo: { file, width, height, source, href, alt },
    ex: `<a href="${answerHref}" target="_blank" rel="noopener">公式解答で問${number}を確認する（PDF）</a>`
  });
});
const categoryTotals = Object.fromEntries(['判別', '配線図'].map(cat =>
  [cat, questions.filter(q => q.cat === cat).length]
));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const cloudMode = typeof startStudySync === "function"; let cloudReady = !cloudMode; let studySync; let state;try{if(!cloudMode)state=JSON.parse(localStorage.getItem('denko-v1'))}catch{}state=state||{answers:[],weak:[],days:[],exams:[]};let session=null,tick=null;const app=document.querySelector('#app');const save=()=>{try{if(!cloudMode)localStorage.setItem('denko-v1',JSON.stringify(state))}catch{}document.querySelector('#weak').textContent=state.weak.length};save();
const circuit='<svg class="circuit" viewBox="0 0 260 180" fill="none" stroke="#9fc2a5" stroke-width="2"><path d="M30 35H115M145 35H230V145H30V35M30 90H95M130 90H230"/><circle cx="130" cy="35" r="15"/><path d="m120 25 20 20m0-20-20 20M95 90l32-20"/><circle cx="30" cy="145" r="5" fill="#d9eba7"/><circle cx="230" cy="90" r="5" fill="#d9eba7"/><path d="M65 130v30m8-23v16"/><text x="85" y="162" fill="#9fc2a5" stroke="none" font-size="10">BUILD YOUR FUTURE.</text></svg>';
const lampSymbol = '<circle r="17"/><path d="m-12-12 24 24m0-24-24 24"/>';
const resistorSymbol = '<rect x="-23" y="-9" width="46" height="18"/>';
const groundSymbol = '<path d="M0-24V0M-16 0H16M-10 6H10M-4 12H4"/>';
const voltageSourceSymbol = '<circle r="17"/><path d="M0-17V17"/>';
const alternatingCurrentMark = '<path d="M-10 0c3-6 7-6 10 0s7 6 10 0"/>';
const directCurrentMark = '<path d="M-10-3H10M-10 3h4m4 0h4m4 0h4"/>';

const circuitDiagrams = {
  switch: {
    height: 160,
    description: '左の交流電源につながる一つの経路に、上のスイッチSと右のランプがある。Sの接点にはすき間がある。',
    drawing: `<path d="M90 73V45H140M183 45H283V73M283 107V135H90V107"/>
      <path d="m140 45 36-19"/>
      <g transform="translate(90 90)">${voltageSourceSymbol}</g>
      <g transform="translate(39 105)">${alternatingCurrentMark}</g>
      <g transform="translate(283 90)">${lampSymbol}</g>
      <text x="39" y="83">交流電源</text><text x="161" y="17">S</text><text x="252" y="90">L</text>`
  },
  lamp: {
    height: 88,
    description: '左右に端子線が伸びた円の中に、斜めの十字がある。',
    drawing: `<g transform="translate(180 44) scale(1.3)">${lampSymbol}<path d="M-42 0H-17M17 0H42"/></g>`
  },
  ground: {
    height: 88,
    description: '垂直線の下に、下へ行くほど短くなる横線が3本ある。',
    drawing: `<g transform="translate(180 52) scale(1.25)">${groundSymbol}</g>`
  },
  parallel: {
    height: 184,
    description: '左の交流電源から上下2本の導線が伸び、それぞれの導線に2つの枝がつながる。各枝にランプが1つずつある。',
    drawing: `<path d="M90 79V38H300V79M300 113V154H90V113M170 38V79M170 113V154"/>
      <g transform="translate(90 96)">${voltageSourceSymbol}</g>
      <g transform="translate(39 111)">${alternatingCurrentMark}</g>
      <circle class="diagram-junction" cx="170" cy="38" r="4"/>
      <circle class="diagram-junction" cx="170" cy="154" r="4"/>
      <g transform="translate(170 96)">${lampSymbol}</g>
      <g transform="translate(300 96)">${lampSymbol}</g>
      <text x="39" y="89">交流電源</text><text x="138" y="96">L1</text><text x="268" y="96">L2</text>`
  },
  ohm: {
    height: 145,
    description: '左の直流電源は100ボルトで、上がプラス、下がマイナス。右の20オームの抵抗器と一つの閉回路を作っている。',
    drawing: `<path d="M90 55V28H264V49M264 95V116H90V89"/>
      <g transform="translate(90 72)">${voltageSourceSymbol}</g>
      <g transform="translate(39 87)">${directCurrentMark}</g>
      <g transform="translate(264 72) rotate(90)">${resistorSymbol}</g>
      <text x="39" y="64">100 V</text><text x="106" y="40">+</text><text x="106" y="104">−</text>
      <text x="304" y="72">20 Ω</text>`
  },
  seriesResistance: {
    height: 104,
    description: '左右の端子の間に、10オームの抵抗器が2つ直列につながっている。',
    drawing: `<path d="M40 61H100M146 61H214M260 61H320"/>
      <circle class="diagram-terminal" cx="40" cy="61" r="3"/>
      <circle class="diagram-terminal" cx="320" cy="61" r="3"/>
      <g transform="translate(123 61)">${resistorSymbol}</g>
      <g transform="translate(237 61)">${resistorSymbol}</g>
      <text x="123" y="31">10 Ω</text><text x="237" y="31">10 Ω</text>`
  },
  parallelResistance: {
    height: 164,
    description: '左右の端子の間に上下2本の枝があり、それぞれに10オームの抵抗器が1つある。',
    drawing: `<path d="M40 91H97M263 91H320M157 49H97V133H157M203 49H263V133H203"/>
      <circle class="diagram-terminal" cx="40" cy="91" r="3"/>
      <circle class="diagram-terminal" cx="320" cy="91" r="3"/>
      <circle class="diagram-junction" cx="97" cy="91" r="4"/>
      <circle class="diagram-junction" cx="263" cy="91" r="4"/>
      <g transform="translate(180 49)">${resistorSymbol}</g>
      <g transform="translate(180 133)">${resistorSymbol}</g>
      <text x="180" y="23">10 Ω</text><text x="180" y="107">10 Ω</text>`
  }
};

function diagram(type) {
  if (!type) return '';
  const { height, description, drawing } = circuitDiagrams[type];
  return `<div class="diagram"><svg viewBox="0 0 360 ${height}" role="img" aria-label="${description}">${drawing}</svg></div>`;
}
function nav(page){clearInterval(tick);session=null;document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));document.querySelector('#breadcrumb').textContent=page==='home'?'学習ホーム':page==='past'?'過去問題':page==='official'?'過去問模擬試験':'模擬試験';if(page==='official')officialMockPage();else if(page==='past')showPastExams();else if(page==='home')home();else examSetup();window.scrollTo(0,0)}
function home(){const count=state.answers.length,rate=count?Math.round(state.answers.filter(x=>x.ok).length/count*100):0;app.innerHTML=`<h1>今日も、合格に一歩近づこう。</h1><p class="sub">小さな積み重ねが、確かな実力に。今日の学習をはじめましょう。</p><section class="hero"><div><span class="eyebrow">LET’S KEEP LEARNING</span><h2>「わかる」を増やして、<br>自信をもって本番へ。</h2><p>器具の判別から配線図まで。解いて、理解して、身につける。</p><button class="primary" data-mode="all">問題演習をはじめる　 →</button></div>${circuit}</section><div class="stats"><div class="stat"><label>▤　累計解答数</label><strong>${count}<small>問</small></strong><em>あなたの学習の積み重ね</em></div><div class="stat"><label>◎　正答率</label><strong>${rate}<small>%</small></strong><em>${count?'この調子で続けましょう':'まずは1問、挑戦しよう'}</em></div><div class="stat"><label>▦　学習日数</label><strong>${state.days.length}<small>日</small></strong><em>少しずつ、着実に</em></div><div class="stat"><label>↻　復習する問題</label><strong>${state.weak.length}<small>問</small></strong><em>苦手を得点源に変えよう</em></div></div><div class="sectionhead"><h2>学習メニュー</h2><span>目的に合わせて、学び方を選ぶ</span></div><div class="cards"><article class="card"><div class="icon">◇</div><h3>判別問題</h3><p>工具・材料・測定器の名称と用途を<br>ひとつずつ、しっかり理解。</p><div class="meta">${categoryTotals["判別"]}問収録　・　公式の写真問題を含む</div><button data-mode="判別">判別問題に取り組む <span>↗</span></button></article><article class="card"><div class="icon">⌘</div><h3>配線図問題</h3><p>図記号、回路の読み取り、基礎計算。<br>配線図の基本から身につける。</p><div class="meta">12問収録　・　図解 / 解説つき</div><button data-mode="配線図">配線図問題に取り組む <span>↗</span></button></article><article class="card"><div class="icon">◷</div><h3>ランダム模擬試験</h3><p>時間を意識して実力チェック。<br>ランダム出題で理解度を確かめる。</p><div class="meta">10問 / 20問　・　採点 / 振り返り</div><button data-page="exam">模擬試験に挑戦する <span>↗</span></button></article></div><div class="bottomgrid"><section class="panel"><h2>分野ごとの学習状況</h2>${['判別','配線図'].map(cat=>{const total=categoryTotals[cat],n=new Set(state.answers.filter(a=>questions[a.id]?.cat===cat).map(a=>a.id)).size;return `<div class="row"><span>${cat}問題</span><span>${n} / ${total} 問</span></div><div class="bar"><span style="width:${n/total*100}%"></span></div>`}).join('')}</section><section class="panel"><span class="tag">STUDY TIP</span><h3>間違えた問題こそ、伸びしろ。</h3><p>解説を読んだら、もう一度。<br>「苦手を復習」から繰り返し挑戦できます。</p><button class="secondary" data-mode="review">苦手を復習する　→</button></section></div>`}
function questionChoices(question) {
  const choices = question.opts.map((text, index) => ({ text, ok: index === question.correct }));
  return question.photo ? choices : shuffle(choices);
}

function start(mode,n){if(!cloudReady){document.querySelector("#sync-status").scrollIntoView();return}clearInterval(tick);let pool=questions.filter(q=>mode==='all'||(mode==='exam'?q.id<raw.length:mode==='past-photo'?Boolean(q.photo):mode==='review'?state.weak.includes(q.id):q.cat===mode));if(!pool.length){app.innerHTML='<h1>復習する問題はありません</h1><p>間違えた問題はここに自動で追加されます。</p><button class="primary" data-mode="all">問題を解く</button>';return}session={mode,list:shuffle(pool).slice(0,n||pool.length).map(q=>({...q,choices:questionChoices(q)})),pos:0,res:[],chosen:null,end:Date.now()+(n||10)*144000};document.querySelector('#breadcrumb').textContent=mode==='exam'?'模擬試験':mode==='all'?'問題演習':mode==='review'?'苦手を復習':mode==='past-photo'?'過去問の写真判別':mode+'問題';if(mode==='exam')tick=setInterval(()=>{const left=Math.max(0,Math.ceil((session.end-Date.now())/1000));const el=document.querySelector('.timer');if(el)el.textContent=`残り ${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`;if(!left)finish()},1000);renderQuestion();window.scrollTo(0,0)}
function renderQuestion(){const s=session,q=s.list[s.pos];app.innerHTML=`<div class="quiz"><div class="sectionhead"><h2>${s.mode==='exam'?'ランダム模擬試験':s.mode==='review'?'苦手を復習':q.cat+'問題'}</h2><span class="timer">${s.mode==='exam'?'試験中':'じっくり、自分のペースで'}</span></div><div class="bar"><span style="width:${s.pos/s.list.length*100}%"></span></div><section class="panel"><div class="row"><span class="tag">${q.cat}</span><span>QUESTION ${String(s.pos+1).padStart(2,'0')} / ${s.list.length}</span></div><h1 class="question">${q.text}</h1>${questionVisual(q)}<div class="answers">${q.choices.map((c,i)=>`<button class="answer" data-answer="${i}"><span>${['イ','ロ','ハ','ニ'][i]}</span>${c.text}</button>`).join('')}</div><div id="feedback"></div><div class="actions"><button class="secondary" id="quit">${s.mode==='exam'?'ここで採点する':'学習を終了'}</button><button class="primary" id="next" hidden>${s.pos+1===s.list.length?'結果を見る':'次の問題へ　→'}</button></div></section><p class="sub">${s.mode==='exam'?'解説は試験終了後に表示します。':'選択肢を選ぶと正解と解説が表示されます。'}</p></div>`}
function answer(i){const s=session;if(s.chosen!==null)return;s.chosen=i;const q=s.list[s.pos],ok=q.choices[i].ok;s.res.push({q,chosen:i,ok});const date=new Date().toLocaleDateString("sv-SE");if(cloudMode){studySync.record({kind:"answer",id:q.id,ok,day:date})}else{state.answers.push({id:q.id,ok});if(ok)state.weak=state.weak.filter(id=>id!==q.id);else if(!state.weak.includes(q.id))state.weak.push(q.id);if(!state.days.includes(date))state.days.push(date);save()}document.querySelectorAll('.answer').forEach((b,j)=>{b.disabled=true;if(s.mode!=='exam'){if(q.choices[j].ok)b.classList.add('correct');else if(j===i)b.classList.add('wrong')}else if(j===i)b.style.background='#edf4ec'});if(s.mode!=='exam')document.querySelector('#feedback').innerHTML=`<div class="explanation"><b>${ok?'✓ 正解です！':'もう一度、確認しましょう'}</b><br>正解：${q.opts[q.correct]}<p>${q.ex}</p></div>`;document.querySelector('#next').hidden=false}
function finish(){clearInterval(tick);const s=session;if(!s)return;const total=s.list.length,correct=s.res.filter(r=>r.ok).length,score=Math.round(correct/total*100);if(s.mode==='exam'){const date=Date.now();if(cloudMode){studySync.record({kind:"exam",date,score})}else{state.exams.push({date,score});save()}}app.innerHTML=`<div class="quiz"><h1>${s.mode==='exam'?'模擬試験の結果':'おつかれさまでした！'}</h1><p class="sub">解説を確認して、次の一歩につなげましょう。</p><section class="panel"><div class="score">${score}<small style="font-size:18px"> %</small></div><p style="text-align:center">${total}問中 ${correct}問正解${s.res.length<total?`（未解答 ${total-s.res.length}問）`:''}</p><div class="actions"><button class="secondary" data-page="${s.mode==='past-photo'?'past':'home'}">${s.mode==='past-photo'?'過去問題へ':'学習ホームへ'}</button><button class="primary" data-mode="review">苦手を復習する</button></div></section><section class="panel"><h2>解答と解説</h2>${s.list.map((q,i)=>{const r=s.res[i];return `<div class="reviewitem"><span class="tag">${i+1}　${r?(r.ok?'✓ 正解':'× 不正解'):'未解答'}</span><h3>${q.text}</h3>${questionVisual(q)}${r?`あなたの解答：${q.choices[r.chosen].text}<br>`:''}<b>正解：${q.opts[q.correct]}</b><p>${q.ex}</p></div>`}).join('')}</section></div>`;session=null;window.scrollTo(0,0)}
function examSetup(){app.innerHTML=`<h1>ランダム模擬試験</h1><p class="sub">いまの理解度を、時間を測ってチェック。</p><section class="panel" style="max-width:720px;margin-top:28px"><span class="tag">MINI MOCK EXAM</span><h2 style="margin-top:20px">問題数を選んで、実力チェック。</h2><p>オリジナル24問から重複なしでランダムに出題します。選択肢の順番も毎回変わります。解説は終了後にまとめて確認できます。</p><label for="examcount">出題数 / 制限時間</label><select id="examcount"><option value="10">10問 / 24分</option><option value="20">20問 / 48分</option><option value="24">全24問 / 58分</option></select><button class="primary" id="beginexam">模擬試験を開始する　→</button><p>この模擬試験はオリジナル問題による短縮演習です。本試験は50問・120分。試験全範囲を網羅するものではありません。</p></section>${state.exams.length?`<section class="panel" style="margin-top:20px;max-width:720px"><h2>最近の模擬試験</h2>${state.exams.slice(-5).reverse().map(x=>`<div class="row"><span>${new Date(x.date).toLocaleDateString('ja-JP')}</span><b>${x.score}%</b></div>`).join('')}</section>`:''}`}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.page)nav(b.dataset.page);else if(b.dataset.mode)start(b.dataset.mode);else if(b.dataset.answer!==undefined)answer(Number(b.dataset.answer));else if(b.id==='next'){if(session.pos+1===session.list.length)finish();else{session.pos++;session.chosen=null;renderQuestion();window.scrollTo(0,0)}}else if(b.id==='beginexam')start('exam',Number(document.querySelector('#examcount').value));else if(b.id==='quit')finish()});home();if(cloudMode){studySync=startStudySync(shared=>{state=shared;cloudReady=true;save();if(app.querySelector(".stats"))home()})}
