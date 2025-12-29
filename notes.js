// 🔴 Problem jo hume solve karni thi

// Chat input box hamesha chat window ke bottom me chipka rahe

// 🧠 CSS ka basic rule (yaad rakhna)

// position: absolute apni jagah nahi dekhta,
// wo apne parent me se “pehla relative / absolute / fixed” dhoondta hai

// 🔹 Case 1 – absolute bina relative (GALAT)
// .chat-input {
//   position: absolute;
//   bottom: 0;
// }


// Agar parent sab position: static (default) hain:

// 👉 Browser bolega:

// “Koi relative parent nahi mila, chalo page ke hisaab se lagate hain”

// Result ❌

// Input box pure page ke bottom chala jata

// Chat window se bahar

// 🔹 Case 2 – Parent relative, child absolute (SAHI)
// .chat-window {
//   position: relative;
// }

// .chat-input {
//   position: absolute;
//   bottom: 0;
// }

// Browser ka logic:

// “Oh, parent relative hai → ab child isi ke andar position lega”

// Result ✅

// Input box chat window ke bottom me chipak jata



// 🧱 Visual samjho (bahut important)
// ❌ Without relative
// PAGE
// ┌──────────────────────────┐
// │                          │
// │   Chat Window            │
// │                          │
// │                          │
// │                          │
// │  Input ❌ (page bottom)  │
// └──────────────────────────┘

// ✅ With relative
// PAGE
// ┌──────────────────────────┐
// │   Chat Window (relative) │
// │   ┌──────────────────┐  │
// │   │ messages         │  │
// │   │                  │  │
// │   │ Input ✅ bottom   │  │
// │   └──────────────────┘  │
// └──────────────────────────┘