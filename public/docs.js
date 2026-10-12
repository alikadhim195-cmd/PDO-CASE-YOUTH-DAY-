/* Case 1 — the evidence documents, as they appear on screen.
   Each one mirrors the printed card the case desk hands over. */
window.CASE_DOCS = {

  op1: {
    title: "Grievance intake note",
    sub: "ER-2026-0338 · Human Resources",
    html: `
<div class="paper">
  <div class="p-bar" style="--bar:#5c1f1a"><span>Human Resources — Employee Relations</span><b>Strictly confidential</b></div>
  <div class="p-in">
    <h3 class="p-h1">Grievance intake note</h3>
    <div class="p-sub">Reference ER-2026-0338 · raised 24 September 2026</div>
    <div class="p-grid">
      <div><span class="p-k">Raised by</span><b>Maryam Al Hinai</b><em>Process Engineer, Hawrah North</em></div>
      <div><span class="p-k">Category</span><b>2 — Fairness &amp; recognition</b><em>Not a disciplinary matter</em></div>
      <div><span class="p-k">Named parties</span><b>None</b><em>Declined when asked</em></div>
    </div>
    <div class="p-quote" style="--bar:#5c1f1a">
      <span class="p-k">In the employee's own words</span>
      <p>“I am not asking for anything to be taken away from anyone. I have been told I need to raise my profile. I would like to understand what that means here.”</p>
    </div>
    <p class="p-note"><b>HR Business Partner note:</b> Employee is a solid performer with no prior matters on file and was not seeking escalation. She declined to name anyone. I do not consider this a conduct matter.</p>
  </div>
  <div class="p-foot"><span>Referred to: Director, Engineering</span><span>Respond within 30 days</span></div>
</div>`
  },

  op2: {
    title: "Performance Commitment — K. Al Rashdi",
    sub: "2026 cycle · Individual Objectives",
    html: `
<div class="paper">
  <div class="p-bar" style="--bar:#11506f"><span>Performance · My Forms / Form Details</span><b>2026 cycle</b></div>
  <div class="p-in">
    <h3 class="p-h1">2026 Performance Commitment for Khalid Al Rashdi</h3>
    <div class="p-sub">Senior Process Engineer · Hawrah North</div>
    <div class="p-k" style="margin-top:14px">Individual objectives</div>
    <table class="p-tbl">
      <thead><tr><th>Objective</th><th style="width:72px;text-align:right">Comment</th></tr></thead>
      <tbody>
        <tr><td>Ensure Personal Safety Compliance</td><td style="text-align:right">—</td></tr>
        <tr><td>Ensure Process safety compliance</td><td style="text-align:right">—</td></tr>
        <tr><td>Ensure Ethics Compliance</td><td style="text-align:right">—</td></tr>
        <tr class="p-hi"><td><b>Cost Competitiveness</b></td><td style="text-align:right"><b>1</b></td></tr>
        <tr><td>Enhance Employee Skill and Engagement</td><td style="text-align:right">—</td></tr>
      </tbody>
    </table>
    <div class="p-box">
      <div class="p-boxh"><span class="p-k">Cost Competitiveness — end year comment</span><span class="p-pill">Delivered 240%</span></div>
      <p><b>Employee:</b> Identified and delivered OMR 2.4m opex reduction on the Hawrah North debottlenecking study against a target of OMR 1.0m. Case presented to the Leadership Steering Committee on 14 May 2026 and approved without change. Supported by the discipline team throughout.</p>
      <p class="p-div"><b>Supervisor:</b> Largest single opex saving in the asset this year. Banked in full under this objective.</p>
    </div>
    <p class="p-fine">Each objective accepts one accountable owner. Contributors are recorded in the project close-out record, not in this form.</p>
  </div>
</div>`
  },

  op3: {
    title: "Shukran certificate",
    sub: "Team Support · May 2026",
    html: `
<div class="paper shukran">
  <div class="cert">
    <div class="cert-in">
      <div class="cert-top">
        <span class="shk"><b>SHUKRAN</b><i>☺</i></span>
        <span class="cert-cat">Team Support</span>
      </div>
      <div class="cert-stars">★ ★</div>
      <div class="cert-body">
        <p class="cert-lead">In honor of your outstanding achievement and dedication,<br>we are pleased to present this certificate to</p>
        <p class="cert-name">Al Hinai, Maryam&nbsp; UEPD41</p>
        <p class="cert-lead">In recognition of your excellence in</p>
        <p class="cert-cit">In recognition of your support to the Hawrah North team through a demanding delivery period.</p>
      </div>
      <div class="cert-foot">
        <span><b>May 2026</b><em>Date</em></span>
        <span class="cert-sig"><i>S. Al Mahrouqi</i><b>Saif Al Mahrouqi, UED</b><em>Engineering &amp; Proj. Excellence Director</em></span>
      </div>
      <p class="cert-fine">Shukran recognition is non-monetary and is not an input to the performance rating. Ref HR-REC-04.</p>
    </div>
  </div>
</div>`
  },

  op4: {
    title: "Sada survey",
    sub: "Hawrah North · Q1 vs Q3 2026",
    html: `
<div class="paper">
  <div class="p-bar" style="--bar:#0f3b57"><span>People &amp; Culture</span><b>Confidential</b></div>
  <div class="p-in">
    <h3 class="p-h1">Sada Survey</h3>
    <div class="p-sub">Hawrah North Project Team — Engineering · Q1 2026 compared with Q3 2026 · 19 of 21 responded</div>
    <table class="p-tbl">
      <thead><tr><th>Measure</th><th style="text-align:right">Q1</th><th style="text-align:right">Q3</th><th style="text-align:right">Change</th></tr></thead>
      <tbody>
        <tr><td>Overall delivery satisfaction</td><td style="text-align:right">88</td><td style="text-align:right">91</td><td style="text-align:right;color:#1d6b3f"><b>+3</b></td></tr>
        <tr><td>Clarity of goals</td><td style="text-align:right">81</td><td style="text-align:right">79</td><td style="text-align:right">−2</td></tr>
        <tr><td>Workload is manageable</td><td style="text-align:right">74</td><td style="text-align:right">70</td><td style="text-align:right">−4</td></tr>
        <tr><td>I would recommend this team to a colleague</td><td style="text-align:right">76</td><td style="text-align:right">58</td><td style="text-align:right">−18</td></tr>
        <tr class="p-hi"><td><b>Overall engagement index</b></td><td style="text-align:right"><b>78</b></td><td style="text-align:right"><b>66</b></td><td style="text-align:right"><b>−12</b></td></tr>
      </tbody>
    </table>
    <div class="p-quote" style="--bar:#0f3b57">
      <span class="p-k">Free-text comments (2 of 6 shown, unedited)</span>
      <p>“No complaints about the work. We deliver.”<br>“I've stopped volunteering for the interesting things. Hard to explain why.”</p>
    </div>
  </div>
  <div class="p-foot"><span>Generated 02 October 2026 · PC-TP-4471</span><span>Line manager and above</span></div>
</div>`
  },

  op5: {
    title: "Project close-out record",
    sub: "Form ENG-CO-02 · signed 28 May 2026",
    html: `
<div class="paper">
  <div class="p-in">
    <div class="p-closehead">
      <div>
        <h3 class="p-h1">Project Close-Out Record</h3>
        <div class="p-sub">Hawrah North Debottlenecking Study · Form ENG-CO-02</div>
      </div>
      <span class="p-stamp">CLOSED</span>
    </div>
    <ul class="p-check">
      <li><i>✓</i><span>1. Technical deliverables issued and filed</span><em>Complete</em></li>
      <li><i>✓</i><span>2. Cost and schedule performance recorded</span><em>Complete</em></li>
      <li><i>✓</i><span>3. Lessons learned logged in the knowledge system</span><em>Complete</em></li>
    </ul>
    <div class="p-blank">
      <b>4. Contribution record — list each deliverable and the individual(s) who produced it</b>
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="p-foot"><span>Approved by: <b>Nasser Al Balushi</b>, Team Lead</span><span>28 May 2026</span></div>
</div>`
  },

  docA: {
    title: "Minutes of meeting — study kick-off",
    sub: "MoM-HN-001 · 3 February 2026",
    html: `
<div class="paper serif">
  <div class="p-in">
    <h3 class="p-h1">Minutes of Meeting — Study Kick-off</h3>
    <div class="p-sub">Hawrah North Debottlenecking Study · 03 February 2026, 09:00 · Meeting room B-214</div>
    <div class="p-k" style="margin-top:14px">Attendees</div>
    <p class="p-note">Nasser Al Balushi (Team Lead, chair) · Khalid Al Rashdi (Senior Process Engineer) · Maryam Al Hinai (Process Engineer) · Fatma Al Habsi (Planning)</p>
    <div class="p-k" style="margin-top:14px">Scope and ownership agreed</div>
    <table class="p-tbl">
      <thead><tr><th style="width:36px">Item</th><th>Deliverable</th><th style="width:108px">Responsible</th><th style="width:60px">Due</th></tr></thead>
      <tbody>
        <tr><td>1.1</td><td>Hydraulic model build and case matrix (12 cases)</td><td><b>M. Al Hinai</b></td><td>30 Apr</td></tr>
        <tr><td>1.2</td><td>Technical assurance review of model output</td><td>K. Al Rashdi</td><td>07 May</td></tr>
        <tr><td>1.3</td><td>Commercial case and committee submission</td><td>K. Al Rashdi</td><td>14 May</td></tr>
        <tr><td>1.4</td><td>Resourcing: 0.6 FTE allocated, single engineer</td><td><b>M. Al Hinai</b></td><td>—</td></tr>
      </tbody>
    </table>
    <p class="p-note"><b>Note 4:</b> Chair confirmed the study is a single-engineer scope. Modelling work sits wholly with item 1.1.</p>
  </div>
  <div class="p-foot"><span>Minuted by F. Al Habsi · circulated 03 Feb 2026</span><span>MoM-HN-001</span></div>
</div>`
  },

  docB: {
    title: "Email thread",
    sub: "11–12 May 2026",
    html: `
<div class="paper">
  <div class="p-bar" style="--bar:#4a4a47"><span>Mail — Hawrah North Debottlenecking Study</span><b>2 messages</b></div>
  <div class="p-in">
    <div class="p-mail">
      <div class="p-mailh"><b>Hawrah North — final model runs complete</b><span>Mon 11 May 2026, 23:14</span></div>
      <div class="p-sub">Maryam Al Hinai — Process Engineer · To: Khalid Al Rashdi · Cc: Nasser Al Balushi</div>
      <p>Khalid,</p>
      <p>All twelve cases are closed. The OMR 2.4m figure comes out of Case 9 — it holds without any new rotating equipment, which was the part we were unsure about.</p>
      <p>Charts are formatted for the committee deck. Shout if you want the sensitivity run as a backup slide.</p>
    </div>
    <div class="p-mail alt">
      <div class="p-mailh"><b>RE: Hawrah North — final model runs complete</b><span>Tue 12 May 2026, 07:02</span></div>
      <div class="p-sub">Khalid Al Rashdi — Senior Process Engineer · To: Maryam Al Hinai</div>
      <p>Thanks Maryam — good work. I'll take it from here for the steering committee.</p>
    </div>
  </div>
  <div class="p-foot"><span>Exported from the project mailbox during the review</span><span></span></div>
</div>`
  },

  docC: {
    title: "Steering committee slide",
    sub: "Slide 6 of 18 · 14 May 2026",
    html: `
<div class="paper">
  <div class="p-slidebar"></div>
  <div class="p-in">
    <h3 class="p-slide">Hawrah North Debottlenecking —<br>OMR 2.4m annual saving identified</h3>
    <div class="p-rule"></div>
    <ul class="p-dash">
      <li>Twelve operating cases modelled; Case 9 confirms the saving is deliverable without new rotating equipment.</li>
      <li>No additional capex required. Payback inside the current planning cycle.</li>
      <li>Recommendation: endorse for implementation in the 2027 work programme.</li>
    </ul>
  </div>
  <div class="p-foot"><span>Leadership Steering Committee · 14 May 2026 · Slide 6 of 18</span><span>Prepared by: <b>Khalid Al Rashdi</b></span></div>
</div>`
  },

  docD: {
    title: "WhatsApp exchange",
    sub: "Maryam Al Hinai's phone · 14 May 2026",
    html: `
<div class="paper">
  <div class="p-in">
    <div class="p-k">Screenshot supplied during the review — Maryam Al Hinai's phone</div>
    <div class="chat">
      <div class="chat-h"><span class="av">FH</span><span><b>Fatma Al Habsi</b><em>online</em></span></div>
      <div class="chat-b">
        <div class="day">14 May 2026</div>
        <div class="msg out">Did you see slide 6 from the steering committee today<i>20:41</i></div>
        <div class="msg in">I saw it.<i>20:43</i></div>
        <div class="msg out">I ran every one of those cases. Twelve model runs, most of them over the Eid break.<i>20:44</i></div>
        <div class="msg in">Then say something to Nasser.<i>20:46</i></div>
        <div class="msg out">And look like I'm chasing credit? No.<i>20:47</i></div>
        <div class="msg in">So you do nothing?<i>20:48</i></div>
        <div class="msg out">I do the next one slower.<i>20:52</i></div>
      </div>
    </div>
  </div>
</div>`
  },

  docE: {
    title: "Year-end calibration extract",
    sub: "PD-2026-0914 · 9 September 2026",
    html: `
<div class="paper">
  <div class="p-bar" style="--bar:#2b2b28"><span>Performance &amp; Development System</span><b style="color:#f0b86c">Restricted</b></div>
  <div class="p-in">
    <h3 class="p-h1">Year-end calibration extract</h3>
    <div class="p-sub">Hawrah North Project Team · calibration meeting held 09 September 2026</div>
    <div class="p-person" style="--bar:#1d6b3f">
      <div class="p-personh">
        <span><b>Khalid Al Rashdi</b><em>Senior Process Engineer</em></span>
        <span class="r"><b style="color:#1d6b3f">Exceeds expectations</b><em>Nominated — high-potential pool</em></span>
      </div>
      <p class="p-div"><b>Calibration comment:</b> Strong visibility with leadership. Presented the Hawrah North savings case to the LT and handled the questioning well.</p>
    </div>
    <div class="p-person" style="--bar:#8a8880">
      <div class="p-personh">
        <span><b>Maryam Al Hinai</b><em>Process Engineer</em></span>
        <span class="r"><b>Meets expectations</b><em>Not nominated</em></span>
      </div>
      <p class="p-div"><b>Calibration comment:</b> Solid technical delivery, reliable under pressure. Development area: needs to raise her profile with senior stakeholders.</p>
    </div>
  </div>
  <div class="p-foot"><span>Chair: Nasser Al Balushi, Team Lead</span><span>Extract PD-2026-0914</span></div>
</div>`
  }
};

window.CASE_OPENING = ["op1", "op2", "op3", "op4", "op5"];
