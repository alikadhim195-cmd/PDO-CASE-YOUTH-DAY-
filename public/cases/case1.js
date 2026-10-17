/* Case 1 — The credit (Hawrah North). Content for the phone case-desk chat.
   Document cards come from docs.js; the statements below are short desk answers.
   The diagnosis is NOT in this file: it lives only in the server function. */
window.CASE_BOT = {
  id: "1",
  eyebrow: "Youth Day · Case 1 · The credit",
  title: "Hawrah North case desk",
  brief: "A grievance has reached the Director, Engineering. A process engineer on the Hawrah North debottlenecking study says she has been told to “raise her profile” and wants to understand what that means here. She names no one. Listen to the Director, read the opening pack, and ask the case desk for anything else you need. Your job: what is really going on, why, and what would you do about it?",
  welcome: "Opening pack is on the table: five documents above. Tap any one to read it. More documents and statements are on file. Ask me while the Director talks.",
  suggestions: ["Who was assigned the modelling?", "Who presented to the committee?", "How were they rated at year end?", "How does recognition work here?", "Has this happened before?"],
  docs: ["docA", "docB", "docC", "docD", "docE", "docF"],
  statements: {
    intK: { t: "Statement — Khalid Al Rashdi", s: "Senior Process Engineer", b: "I presented it because the committee submission was my item in the plan. Maryam did the modelling and I said so in the room. The figure went into my objective because that is the only place it goes. I do not know what else I was meant to do." },
    intN: { t: "Statement — Nasser Al Balushi", s: "Team Lead", b: "The close-out was done properly and signed. The study was a team effort and Khalid carried it to the committee. If there is a complaint about recognition I would rather hear it from the person than from a form." },
    intM: { t: "Statement — Maryam Al Hinai", s: "Process Engineer", b: "I am not accusing anybody and I do not want anyone disciplined. I want to understand how it is decided whose name the result goes to, because I was told to raise my profile and nobody can tell me what that means." },
    askForm: { t: "Records check — performance form", s: "HR systems", b: "The objective field accepts one accountable owner. There is no contributor field on the form. Contributors are recorded in the project close-out record, section 4." },
    askCloseout: { t: "Records check — close-out form", s: "Form ENG-CO-02", b: "Sections 1 to 3 complete and signed. Section 4, the contribution record, was left blank. The form does not require it." },
    askPattern: { t: "Records check — similar grievances", s: "Employee Relations", b: "Two in the last eighteen months. Both Category 2, both different assets, neither named a person. Both were closed with no action taken." },
    evNom: { t: "Recognition system — nomination submitted", s: "27 September 2026", b: "Shukran nomination · Category: Project Delivery\nNominee: Al Hinai, Maryam\nSubmitted by: Al Rashdi, Khalid\nSubmitted 27 September 2026, 16:42\nStatus: pending team lead approval" },
    evER: { t: "Employee Relations — second matter logged", s: "ER-2026-0351", b: "ER-2026-0351 raised today. Category 2 — Fairness and recognition. Different asset, different team, no parties named. The wording is close enough to ER-2026-0338 that Employee Relations have flagged the two as related." }
  },
  // Offline fallback only (used if the AI desk cannot be reached)
  keywords: {
    docA: ["kick", "scope", "assign", "plan", "minute", "responsib", "who did", "resourc", "modelling", "modeling"],
    docB: ["email", "mail", "sent", "reply", "handover", "hand over"],
    docC: ["slide", "steering", "committee", "present", "submission"],
    docD: ["whatsapp", "feel", "react", "fatma", "message", "upset", "morale"],
    docE: ["rating", "rated", "calibrat", "year-end", "year end", "potential", "appraisal"],
    docF: ["policy", "framework", "award", "value delivery", "recognition work"],
    intK: ["khalid say", "ask khalid", "interview khalid", "khalid's side"],
    intN: ["nasser say", "ask nasser", "interview nasser", "team lead say", "nasser's side"],
    intM: ["maryam say", "ask maryam", "interview maryam", "she want", "maryam want"],
    askForm: ["two people", "share", "contributor", "more than one", "form handle"],
    askCloseout: ["close-out", "closeout", "close out", "section 4"],
    askPattern: ["before", "pattern", "other grievance", "happened again", "similar"],
    evNom: ["since", "after the grievance", "done anything"],
    evER: ["anyone else", "new complaint", "other asset", "another team"]
  }
};
