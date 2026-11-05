const CATALOG = {"schemaVersion": 1, "projects": [{"id": "job-search-resume", "published": true, "title": {"en": "AI job search & resume workflow", "ja": "AI求人検索・履歴書ワークフロー"}, "description": {"en": "A workflow concept connecting job discovery and resume preparation, from a Slack request to Google Docs.", "ja": "Slackの依頼から求人検索、履歴書作成、Google Docsへの出力をつなぐワークフローの構想です。"}, "problem": {"en": "Job discovery and resume preparation involve repeated handoffs.", "ja": "求人検索と履歴書作成では、繰り返しの確認や情報の受け渡しが発生します。"}, "solution": {"en": "The concept connects a Slack request to a job-search API, AI resume tailoring, and Google Docs.", "ja": "Slackの依頼から求人検索API、AIによる履歴書調整、Google Docsへの流れをつなぐ構想です。"}, "workflow": {"en": "Slack request → job search API → AI resume tailoring → Google Docs. This describes the intended flow, not a verified execution.", "ja": "Slackで依頼 → 求人検索API → AIによる履歴書調整 → Google Docs。想定する流れであり、実行を検証した記録ではありません。"}, "limitations": {"en": "Workflow concept diagram. Execution results, measured time savings, and client outcomes have not been verified.", "ja": "ワークフローの構成図です。実行結果、削減時間、顧客成果は未検証です。"}, "platform": "n8n", "category": "job-search", "order": 10, "status": "concept", "tools": ["Slack", "Job Search API", "AI", "Google Docs"], "thumbnail": {"src": "assets/job-workflow.webp", "alt": {"en": "AI job search and resume workflow concept diagram", "ja": "AI求人検索・履歴書ワークフローの構成図"}, "privacyReviewed": true, "width": 1200, "height": 900}, "evidence": [{"src": "assets/job-workflow.webp", "alt": {"en": "Diagram of the proposed job search and resume workflow", "ja": "求人検索と履歴書作成の想定フローを示す構成図"}, "privacyReviewed": true, "width": 1200, "height": 900, "id": "concept-overview", "type": "concept", "caption": {"en": "Concept diagram: Slack, job search API, AI resume preparation and Google Docs.", "ja": "構成図：Slack、求人検索API、AIによる履歴書作成、Google Docs。"}}], "externalUrl": null}, {"id": "gmail-attachment-organizer", "published": true, "title": {"en": "An organized inbox, by design", "ja": "メール添付ファイルの整理を自動化"}, "description": {"en": "A workflow concept for analyzing email attachments, saving files, and maintaining a spreadsheet log.", "ja": "メールの添付ファイルを分析し、保存とスプレッドシートへの記録をつなぐワークフローの構想です。"}, "problem": {"en": "Manually saving and naming attachments creates repetitive work.", "ja": "添付ファイルの保存や命名は繰り返しが多い業務です。"}, "solution": {"en": "The concept connects Gmail, AI analysis, Google Drive storage, and a Google Sheets log.", "ja": "GmailからAI分析、Google Driveへの保存、Google Sheetsへの記録をつなぐ構想です。"}, "workflow": {"en": "Gmail → AI analysis and naming → Google Drive → Google Sheets log. This describes the intended flow, not a verified execution.", "ja": "Gmail → AIによる分析・命名 → Google Drive → Google Sheetsへの記録。想定する流れであり、実行を検証した記録ではありません。"}, "limitations": {"en": "Workflow concept diagram. Execution results, measured time savings, and client outcomes have not been verified.", "ja": "ワークフローの構成図です。実行結果、削減時間、顧客成果は未検証です。"}, "platform": "Make", "category": "email-documents", "order": 20, "status": "concept", "tools": ["Gmail", "AI", "Google Drive", "Google Sheets"], "thumbnail": {"src": "assets/email-workflow.webp", "alt": {"en": "Gmail attachment organizer workflow concept diagram", "ja": "Gmail添付ファイル整理ワークフローの構成図"}, "privacyReviewed": true, "width": 1200, "height": 900}, "evidence": [{"src": "assets/email-workflow.webp", "alt": {"en": "Diagram of the proposed email attachment organization workflow", "ja": "メール添付ファイル整理の想定フローを示す構成図"}, "privacyReviewed": true, "width": 1200, "height": 900, "id": "concept-overview", "type": "concept", "caption": {"en": "Concept diagram: Gmail, AI analysis, Google Drive and Google Sheets.", "ja": "構成図：Gmail、AI分析、Google Drive、Google Sheets。"}}], "externalUrl": null}]};
(() => {
  'use strict';
  const host = document.querySelector('[data-automation-gallery]');
  if (!host) return;
  const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
  const prefix = host.dataset.assetPrefix || '';
  const text = (en, ja) => lang === 'ja' ? ja : en;
  const labels = {
    concept: text('Concept illustration', 'ワークフローの構想図'),
    implemented: text('Workflow implementation', 'ワークフロー実装'),
    'execution-verified': text('Verified execution', '実行検証済み'),
    'demo-output': text('Demonstration output', 'デモ出力'),
    'client-work': text('Documented client work', '根拠資料のある顧客案件'),
    workflow: text('Workflow editor', 'ワークフロー画面'),
    execution: text('Execution evidence', '実行記録'),
    output: text('Output evidence', '出力結果'),
    configuration: text('Configuration overview', '設定概要')
  };
  const el = (tag, value, className) => {
    const node = document.createElement(tag);
    if (value !== undefined) node.textContent = value;
    if (className) node.className = className;
    return node;
  };
  function imageLink(asset) {
    if (!asset || asset.privacyReviewed !== true || !/^assets\/[a-z0-9/_-]+\.(webp|png|jpe?g)$/i.test(asset.src)) {
      return el('p', text('Evidence image unavailable.', '資料画像を表示できません。'), 'note');
    }
    const link = el('a');
    link.href = prefix + asset.src;
    link.dataset.imageViewer = '';
    const image = el('img');
    image.alt = asset.alt[lang];
    image.width = asset.width;
    image.height = asset.height;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      const fallback = el('p', text('Evidence image unavailable.', '資料画像を表示できません。'), 'image-unavailable');
      fallback.setAttribute('role', 'status');
      link.replaceWith(fallback);
    }, { once: true });
    image.src = prefix + asset.src;
    link.append(image);
    return link;
  }
  function card(project) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id) || !project.title[lang] || !labels[project.status]) {
      throw new Error('Invalid project entry');
    }
    const article = el('article');
    article.className = 'project';
    article.id = 'automation-' + project.id;
    article.append(imageLink(project.thumbnail));
    const body = el('div', undefined, 'project-body');
    body.append(el('p', [project.platform, ...project.tools].join(' / '), 'eyebrow'));
    body.append(el('h4', project.title[lang]));
    body.append(el('p', project.description[lang]));
    body.append(el('p', labels[project.status], 'project-evidence-status'));
    const details = el('details');
    details.append(el('summary', text('Project Details & Evidence', 'プロジェクトの詳細・根拠資料')));
    const content = el('div', undefined, 'automation-detail');
    for (const [key, en, ja] of [
      ['problem', 'Business problem', '業務上の課題'],
      ['solution', 'Solution', '解決策'],
      ['workflow', 'Workflow', 'ワークフロー'],
      ['limitations', 'Evidence & scope', '資料と確認範囲']
    ]) {
      content.append(el('h5', text(en, ja)), el('p', project[key][lang]));
    }
    const evidence = el('div', undefined, 'automation-evidence');
    for (const asset of project.evidence || []) {
      const figure = el('figure');
      figure.append(imageLink(asset));
      figure.append(el('figcaption', `${labels[asset.type] || text('Evidence', '資料')} — ${asset.caption[lang]}`));
      evidence.append(figure);
    }
    if (!evidence.children.length) evidence.append(el('p', text('No reviewed evidence images are available yet.', '公開確認済みの資料画像はまだありません。'), 'note'));
    content.append(evidence);
    if (project.externalUrl) {
      try {
        const url = new URL(project.externalUrl);
        if (url.protocol === 'https:' && !url.username && !url.password) {
          const link = el('a', text('View project ↗', 'プロジェクトを見る ↗'), 'text-link');
          link.href = url.href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          content.append(link);
        }
      } catch { /* An invalid optional link must not break the gallery. */ }
    }
    details.append(content);
    body.append(details);
    article.append(body);
    return article;
  }
  try {
    if (!Array.isArray(CATALOG.projects)) throw new Error('Invalid catalog');
    const fragment = document.createDocumentFragment();
    let skipped = false;
    for (const project of CATALOG.projects.filter(p => p && p.published === true).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))) {
      try { fragment.append(card(project)); } catch { skipped = true; }
    }
    if (!fragment.children.length) throw new Error('No projects available');
    host.replaceChildren(fragment);
    if (skipped) {
      const notice = el('p', text('Some project details are unavailable. The available projects are shown below.', '一部のプロジェクト情報を表示できません。表示可能な実績をご覧ください。'), 'note');
      notice.setAttribute('role', 'status');
      host.before(notice);
    }
  } catch {
    // The generated HTML remains usable if enhancement/data fails, or JS is blocked.
    const notice = el('p', text('Project updates could not be loaded. The saved gallery remains available below.', '最新のプロジェクト情報を読み込めませんでした。保存済みの実績をご覧ください。'), 'note');
    notice.setAttribute('role', 'status');
    host.before(notice);
  }
})();
