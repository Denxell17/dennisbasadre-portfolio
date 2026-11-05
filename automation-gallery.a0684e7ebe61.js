const CATALOG = {"schemaVersion": 1, "projects": [{"id": "job-search-resume", "published": true, "title": {"en": "AI Job Search & Resume Workflow", "ja": "AI求人検索・履歴書作成ワークフロー"}, "description": {"en": "A workflow connecting Slack job requests, job search, AI-assisted resume preparation and document handling.", "ja": "Slackでの依頼から求人検索、AIを活用した履歴書作成、文書処理までをつなぐワークフローです。"}, "problem": {"en": "Searching job listings and adapting a resume involves repeated checks, document updates and notifications.", "ja": "求人情報の検索や履歴書の調整には、繰り返しの確認、文書の更新、通知が発生します。"}, "solution": {"en": "The editor shows query validation, job retrieval, per-result processing, resume preparation, document updates, Gmail draft creation and Slack notification steps.", "ja": "エディターには、検索条件の確認、求人取得、結果ごとの処理、履歴書作成、文書更新、Gmailの下書き作成、Slack通知の各ステップが確認できます。"}, "workflow": {"en": "Slack request → validate query → job API → process results → AI resume preparation → Drive/Docs → Gmail draft and Slack notification.", "ja": "Slackの依頼 → 検索条件の確認 → 求人API → 結果の処理 → AIによる履歴書作成 → Drive・Docs → Gmailの下書き・Slack通知。"}, "limitations": {"en": "The screenshot demonstrates workflow structure, not a completed run. Generated resumes, delivered notifications and business outcomes have not been verified. The private workflow address has been cropped.", "ja": "スクリーンショットはワークフローの構成を示すもので、実行完了の証拠ではありません。生成された履歴書、通知の到達、業務上の成果は未検証です。非公開のワークフローURLは切り取っています。"}, "platform": "n8n", "category": "job-search", "order": 10, "status": "implemented", "tools": ["Slack", "Job Search API", "AI models", "Google Drive", "Google Docs", "Gmail"], "thumbnail": {"src": "assets/automation/job-search-resume/overview-v1.webp", "alt": {"en": "Conceptual illustration: AI Job Search & Resume Workflow", "ja": "概念図：AI求人検索・履歴書作成ワークフロー"}, "privacyReviewed": true, "width": 1448, "height": 1086, "type": "concept"}, "evidence": [{"src": "assets/automation/job-search-resume/workflow-editor-v1.webp", "alt": {"en": "n8n editor showing job-search, resume, document and notification steps", "ja": "求人検索、履歴書作成、文書処理、通知の各ステップを示すn8n画面"}, "privacyReviewed": true, "width": 1917, "height": 869, "id": "workflow-editor-v1", "type": "workflow", "caption": {"en": "Actual workflow editor; browser address bar removed. No completed execution is shown.", "ja": "実際のワークフロー画面です。ブラウザのアドレスバーは除去しています。実行完了は示していません。"}}], "externalUrl": null}, {"id": "gmail-attachment-organizer", "published": true, "title": {"en": "AI Gmail Attachment Organizer", "ja": "AIを活用したGmail添付ファイル整理"}, "description": {"en": "An attachment-processing scenario connecting Gmail, AI-assisted file naming, Drive storage and a Sheets log.", "ja": "Gmail、AIを活用したファイル命名、Driveへの保存、Sheetsへの記録をつなぐ添付ファイル処理シナリオです。"}, "problem": {"en": "Manually saving, naming and logging email attachments creates repetitive work.", "ja": "メール添付ファイルの保存、命名、記録を手作業で行うと、繰り返し作業が増えます。"}, "solution": {"en": "The scenario includes attachment listing, upload for analysis, filename generation, Drive upload, a Sheets row and an email notification module.", "ja": "添付ファイルの一覧取得、分析用アップロード、ファイル名の生成、Driveへの保存、Sheetsへの行追加、メール通知の各モジュールを構成しています。"}, "workflow": {"en": "Watch emails → list attachments → upload for analysis → generate filename → upload to Drive → log in Sheets → email notification.", "ja": "メール監視 → 添付ファイルの取得 → 分析用アップロード → ファイル名生成 → Driveへの保存 → Sheetsへの記録 → メール通知。"}, "limitations": {"en": "The captured editor shows per-module operation indicators. It is not a separate completed-run history or proof of saved files, spreadsheet rows or delivered mail. Scheduling was disabled in the capture.", "ja": "撮影されたエディターにはモジュールごとの実行回数が表示されています。独立した実行完了履歴や、保存ファイル、Sheetsの記録、メール到達の確認ではありません。撮影時の定期実行設定は無効です。"}, "platform": "Make", "category": "email-documents", "order": 20, "status": "implemented", "tools": ["Gmail", "AI", "Google Drive", "Google Sheets"], "thumbnail": {"src": "assets/automation/gmail-attachment-organizer/overview-v1.webp", "alt": {"en": "Conceptual illustration: AI Gmail Attachment Organizer", "ja": "概念図：AIを活用したGmail添付ファイル整理"}, "privacyReviewed": true, "width": 1448, "height": 1086, "type": "concept"}, "evidence": [{"src": "assets/automation/gmail-attachment-organizer/scenario-editor-v1.webp", "alt": {"en": "Make attachment-processing scenario with module operation indicators", "ja": "モジュールごとの実行回数が表示されたMakeの添付ファイル処理シナリオ"}, "privacyReviewed": true, "width": 1820, "height": 707, "id": "scenario-editor-v1", "type": "workflow", "caption": {"en": "Actual scenario editor with operation indicators. Account/title chrome cropped; disabled schedule control preserved.", "ja": "実行回数の表示がある実際のシナリオ画面です。アカウント名のあるタイトル領域は切り取り、無効の定期実行設定は残しています。"}}], "externalUrl": null}, {"id": "content-repurposing", "published": true, "title": {"en": "AI Content Repurposing Workflow", "ja": "AIコンテンツ再活用ワークフロー"}, "description": {"en": "A Drive-triggered content workflow with AI preparation, conditional social publishing paths and a captured successful-run view.", "ja": "Driveを起点にAIによるコンテンツ作成と条件別のSNS投稿処理をつなぐワークフローです。成功を示す実行画面もあります。"}, "problem": {"en": "Adapting source content for different channels involves transcription, content preparation and repeated publishing steps.", "ja": "元のコンテンツを複数の媒体に展開するには、文字起こし、内容の調整、投稿処理を繰り返す必要があります。"}, "solution": {"en": "The workflow connects file intake and filtering to AI transcription/content preparation, looping and two configured social publishing paths.", "ja": "ファイル取得と条件確認から、AIによる文字起こし・コンテンツ作成、繰り返し処理、2つのSNS投稿用分岐へつなぐ構成です。"}, "workflow": {"en": "New Drive file → filter → AI transcription/content preparation → loop → conditional paths → configured Facebook, LinkedIn and Instagram actions. The recorded run completed one path and skipped the alternative.", "ja": "Driveの新規ファイル → 条件確認 → AIによる文字起こし・コンテンツ作成 → 繰り返し処理 → 条件分岐 → Facebook・LinkedIn・Instagramの投稿処理。実行記録では一方の分岐が完了し、もう一方はスキップされています。"}, "limitations": {"en": "The successful-run screenshot reports completed actions on one branch; it does not establish all-branch coverage. Public post contents, publication URLs, client use, time savings and business outcomes have not been independently verified. The run identifier is hidden.", "ja": "成功を示すスクリーンショットは、一方の分岐の処理完了を記録しています。全分岐の動作確認を示すものではありません。公開投稿の内容・URL、顧客による利用、削減時間、業務成果は独立に検証していません。実行識別子は除去しています。"}, "platform": "Zapier", "category": "content-marketing", "order": 30, "status": "execution-verified", "tools": ["Google Drive", "AI by Zapier", "Looping", "Paths", "Facebook Pages", "LinkedIn", "Instagram for Business"], "thumbnail": {"src": "assets/automation/content-repurposing/overview-v1.webp", "alt": {"en": "Conceptual illustration: AI Content Repurposing Workflow", "ja": "概念図：AIコンテンツ再活用ワークフロー"}, "privacyReviewed": true, "width": 1536, "height": 1024, "type": "concept"}, "evidence": [{"src": "assets/automation/content-repurposing/workflow-start-v1.webp", "alt": {"en": "Zapier file intake, filtering, AI preparation and loop steps", "ja": "ファイル取得、条件確認、AI処理、繰り返し処理を示すZapier画面"}, "privacyReviewed": true, "width": 1906, "height": 747, "id": "workflow-start-v1", "type": "workflow", "caption": {"en": "Editor view of the upstream processing steps; account labels hidden. Configuration checks are not execution proof.", "ja": "前半の処理を示すエディター画面です。アカウント名を伏せています。設定のチェック表示は実行完了の証拠ではありません。"}}, {"src": "assets/automation/content-repurposing/workflow-social-paths-v1.webp", "alt": {"en": "Zapier paths with configured social publishing actions", "ja": "SNS投稿処理を設定したZapierの条件分岐"}, "privacyReviewed": true, "width": 1907, "height": 747, "id": "workflow-social-paths-v1", "type": "workflow", "caption": {"en": "Two configured paths containing Facebook Pages, LinkedIn and Instagram actions.", "ja": "Facebook Pages、LinkedIn、Instagramの処理を設定した2つの分岐です。"}}, {"src": "assets/automation/content-repurposing/workflow-overview-v1.webp", "alt": {"en": "Full content repurposing workflow editor overview", "ja": "コンテンツ再活用ワークフロー全体のエディター表示"}, "privacyReviewed": true, "width": 650, "height": 751, "id": "workflow-overview-v1", "type": "workflow", "caption": {"en": "Full editor overview; this is configuration structure, not a separate run.", "ja": "ワークフロー全体の構成です。別の実行結果を示すものではありません。"}}, {"src": "assets/automation/content-repurposing/recorded-run-v1.webp", "alt": {"en": "Recorded Zapier run showing a successful branch and a skipped alternative", "ja": "一方の分岐の成功と、もう一方のスキップを示すZapierの実行記録"}, "privacyReviewed": true, "width": 372, "height": 660, "id": "recorded-run-v1", "type": "execution", "caption": {"en": "Recorded successful run: one branch completed and the alternative was skipped. Original resolution retained; run identifier removed.", "ja": "一方の分岐が完了し、もう一方がスキップされた成功の実行記録です。元の解像度を保ち、実行識別子を除去しています。"}}], "externalUrl": null}, {"id": "lead-enrichment", "published": true, "title": {"en": "AI Lead Enrichment & Priority Routing", "ja": "AIリード情報補完・優先度別振り分け"}, "description": {"en": "A lead-processing workflow connecting Apollo enrichment with priority-based routing, records, notifications and an AI draft step.", "ja": "Apolloによるリード情報の補完と、優先度別の振り分け、記録、通知、AIの下書き作成をつなぐワークフローです。"}, "problem": {"en": "Incoming leads need context and routing before the next follow-up step can be organized.", "ja": "新規リードへの対応を整理するには、関連情報の補完と、次の対応先への振り分けが必要です。"}, "solution": {"en": "The editor shows a lead webhook, company-URL formatting, Apollo integration and high/low priority paths with Sheets, Slack, AI draft and Gmail actions.", "ja": "エディターには、リード受信用Webhook、企業URLの整形、Apollo連携、優先度別の分岐とSheets・Slack・AI下書き・Gmailの処理が確認できます。"}, "workflow": {"en": "Incoming lead → format company URL → enrichment → priority paths → record/notify/draft actions as configured.", "ja": "リード受信 → 企業URLの整形 → 情報補完 → 優先度別の分岐 → 設定した記録・通知・下書き作成。"}, "limitations": {"en": "Workflow structure and an in-use version are visible, not a completed run or generated result. The screenshot does not establish a numeric scoring model, client outcomes or enrichment accuracy.", "ja": "ワークフローの構成と使用中バージョンの表示は確認できますが、実行完了や生成結果は示していません。数値によるスコアリング、顧客成果、補完情報の正確性は未検証です。"}, "platform": "Zapier", "category": "lead-management", "order": 40, "status": "implemented", "tools": ["Webhooks", "Formatter", "Apollo", "Paths", "Google Sheets", "Slack", "AI by Zapier", "Gmail"], "thumbnail": {"src": "assets/automation/lead-enrichment/overview-v1.webp", "alt": {"en": "Conceptual illustration: AI Lead Enrichment & Priority Routing", "ja": "概念図：AIリード情報補完・優先度別振り分け"}, "privacyReviewed": true, "width": 1448, "height": 1086, "type": "concept"}, "evidence": [{"src": "assets/automation/lead-enrichment/workflow-editor-v1.webp", "alt": {"en": "Zapier lead enrichment and high-low priority routing workflow", "ja": "リード情報補完と優先度別の振り分けを示すZapierワークフロー"}, "privacyReviewed": true, "width": 1917, "height": 757, "id": "workflow-editor-v1", "type": "workflow", "caption": {"en": "Actual workflow editor. Webhook module labels are visible; private endpoint values are not shown.", "ja": "実際のワークフロー画面です。Webhookのモジュール名は表示されていますが、非公開の接続先URLは表示していません。"}}], "externalUrl": null}, {"id": "rag-chatbot-prototype", "published": true, "title": {"en": "Document-based RAG Chatbot Prototype", "ja": "ドキュメント検索型RAGチャットボット（試作）"}, "description": {"en": "A workflow prototype combining document ingestion, vector retrieval and an AI chat-response path.", "ja": "文書の取り込み、ベクトル検索、AIのチャット応答を組み合わせたワークフローの試作です。"}, "problem": {"en": "A document assistant needs a way to index source material and retrieve relevant passages for a response.", "ja": "文書を利用するアシスタントには、資料を索引化し、応答に関連する箇所を検索する仕組みが必要です。"}, "solution": {"en": "The editor connects Drive document events, loading/indexing nodes, Supabase retrieval and Gemini model/embedding nodes to a chat agent.", "ja": "Driveの文書イベント、読み込み・索引作成、Supabase検索、Geminiのモデル・埋め込み処理をチャットエージェントにつなぐ構成です。"}, "workflow": {"en": "Document create/update/archive paths → loading and index maintenance; chat trigger → retrieval tool and Gemini model → configured response path.", "ja": "文書の新規作成・更新・アーカイブ → 読み込み・索引管理。チャット受信 → 検索ツールとGeminiモデル → 応答処理。"}, "limitations": {"en": "This is a workflow prototype, distinct from the currently deployed ABAP AI Assistant and its production stack. Screenshots do not show private document contents, completed indexing, actual chat answers or answer-quality results. No live employee-record access is claimed.", "ja": "現在稼働中のABAP AI Assistantや、その本番構成とは区別したワークフローの試作です。非公開文書の内容、索引作成の完了、実際のチャット応答、回答品質はスクリーンショットで示していません。実業務の従業員データへのアクセスは主張しません。"}, "platform": "n8n", "category": "knowledge-retrieval", "order": 50, "status": "implemented", "tools": ["Gemini", "Supabase", "Google Drive", "Embeddings", "Document indexing"], "thumbnail": {"src": "assets/automation/rag-chatbot-prototype/overview-v1.webp", "alt": {"en": "Conceptual illustration: Document-based RAG Chatbot Prototype", "ja": "概念図：ドキュメント検索型RAGチャットボット（試作）"}, "privacyReviewed": true, "width": 1448, "height": 1086, "type": "concept"}, "evidence": [{"src": "assets/automation/rag-chatbot-prototype/workflow-editor-v1.webp", "alt": {"en": "n8n prototype editor showing document indexing and retrieval-assisted chat paths", "ja": "文書の索引作成と検索を活用したチャット処理を示すn8nの試作画面"}, "privacyReviewed": true, "width": 1907, "height": 780, "id": "workflow-editor-v1", "type": "workflow", "caption": {"en": "Prototype editor; session/chat/log strip removed. Node labels do not expose retrieved document contents.", "ja": "試作のエディター画面です。セッション・チャット・ログの領域は除去しています。ノード名に取得文書の内容は表示されていません。"}}, {"src": "assets/automation/rag-chatbot-prototype/workflow-overview-v1.webp", "alt": {"en": "Cropped RAG prototype workflow overview", "ja": "RAG試作ワークフローの概要表示"}, "privacyReviewed": true, "width": 780, "height": 661, "id": "workflow-overview-v1", "type": "workflow", "caption": {"en": "Alternate overview of the same prototype, not another execution or an actual answer screenshot.", "ja": "同じ試作ワークフローの別表示です。追加の実行結果や実際の回答画面ではありません。"}}], "externalUrl": null}, {"id": "crm-follow-up", "published": true, "title": {"en": "CRM Lead Engagement & Follow-Up Workflow", "ja": "CRMリード対応・フォローアップワークフロー"}, "description": {"en": "An Asana-triggered workflow organizing follow-up actions by lead status, with Drive and Gmail steps.", "ja": "Asanaを起点に、リードの対応状況に応じたDrive・Gmailのフォローアップ処理を構成するワークフローです。"}, "problem": {"en": "Lead follow-up requires different actions as a conversation moves from preparation through quoting and approval.", "ja": "リード対応では、準備、見積もり、承認などの進行状況に応じて、異なるフォローアップが必要になります。"}, "solution": {"en": "The workflow branches on status to configure folders/tasks, follow-up and welcome email actions, delays, lookup and filtering.", "ja": "対応状況に応じて分岐し、フォルダー・タスク作成、フォローアップ・案内メール、待機、検索、条件確認を設定しています。"}, "workflow": {"en": "Asana task update → status paths → configured Drive/Asana/Gmail actions, with delays and filters in selected paths.", "ja": "Asanaタスク更新 → 対応状況による分岐 → 設定したDrive・Asana・Gmail処理。一部の分岐には待機と条件確認があります。"}, "limitations": {"en": "These are overlapping editor views, not completed executions. The original warning/step indicator is preserved; its cause is not established here. No delivered email, client payment or commercial result is verified. Paid/closed is a route label only.", "ja": "これらは重複するエディター表示であり、実行完了の記録ではありません。元の警告・ステップ表示は残しており、その原因は本資料では特定していません。メール到達、顧客の支払い、商用成果は未検証です。支払い・完了は分岐名にすぎません。"}, "platform": "Zapier", "category": "crm-follow-up", "order": 60, "status": "implemented", "tools": ["Asana", "Paths", "Google Drive", "Gmail", "Delay", "Filters"], "thumbnail": {"src": "assets/automation/crm-follow-up/overview-v1.webp", "alt": {"en": "Conceptual illustration: CRM Lead Engagement & Follow-Up Workflow", "ja": "概念図：CRMリード対応・フォローアップワークフロー"}, "privacyReviewed": true, "width": 1448, "height": 1086, "type": "concept"}, "evidence": [{"src": "assets/automation/crm-follow-up/workflow-v1.webp", "alt": {"en": "Zapier CRM follow-up v1 editor with original warning indicator", "ja": "元の警告表示があるZapierのCRMフォローアップv1画面"}, "privacyReviewed": true, "width": 1917, "height": 750, "id": "workflow-v1", "type": "workflow", "caption": {"en": "Version 1 editor with status paths. Warning/step indicator retained; account labels hidden.", "ja": "対応状況別の分岐を示すv1画面です。警告・ステップ表示は残し、アカウント名を伏せています。"}}, {"src": "assets/automation/crm-follow-up/workflow-v1-alternate.webp", "alt": {"en": "Alternate v1 follow-up workflow editor view", "ja": "フォローアップワークフローv1の別表示"}, "privacyReviewed": true, "width": 1912, "height": 745, "id": "workflow-v1-alternate", "type": "workflow", "caption": {"en": "Alternate view of the same workflow structure; not additional execution evidence.", "ja": "同じワークフロー構成の別表示です。追加の実行結果ではありません。"}}, {"src": "assets/automation/crm-follow-up/workflow-v2.webp", "alt": {"en": "Zapier CRM follow-up v2 editor with original warning indicator", "ja": "元の警告表示があるZapierのCRMフォローアップv2画面"}, "privacyReviewed": true, "width": 1907, "height": 757, "id": "workflow-v2", "type": "workflow", "caption": {"en": "Version 2 overview with the original warning/step indicator preserved. No completed run shown.", "ja": "元の警告・ステップ表示を残したv2の概要です。実行完了は示していません。"}}], "externalUrl": null}]};
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
    'execution-verified': text('Recorded successful run', '成功を示す実行記録'),
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
    if (project.thumbnail.type === 'concept') article.append(el('p', text('Conceptual overview illustration.', 'ワークフローの概要を示す概念図です。'), 'thumbnail-caption'));
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
      // Compare asset paths, never visual resemblance: genuine screenshots stay.
      if (asset.src === project.thumbnail.src || asset.type === 'concept') continue;
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
