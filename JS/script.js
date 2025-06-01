// Select DOM elements
const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".characters");
const wordsNumberEl = document.querySelector(".words");
const twitterNumberEl = document.querySelector(".twitter");
const facebookNumberEl = document.querySelector(".facebook");

// Listen for input changes on the textarea
textareaEl.addEventListener("input", () => {
    // Sanitize input: remove any <script> tags (case-insensitive)
    textareaEl.value = textareaEl.value.replace(/<\s*script.*?>/gi, "");

    // Get current text
    const text = textareaEl.value;

    // Character count
    const characterCount = text.length;

    // Word count using trim + split by any whitespace (handles multiple spaces/newlines)
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    // Character limits
    const twitterLimit = 280;
    const facebookLimit = 2200;

    // Calculate remaining characters
    const twitterRemaining = twitterLimit - characterCount;
    const facebookRemaining = facebookLimit - characterCount;

    // Update counters in UI
    charactersNumberEl.textContent = characterCount;
    wordsNumberEl.textContent = wordCount;
    twitterNumberEl.textContent = twitterRemaining;
    facebookNumberEl.textContent = facebookRemaining;

    // Apply red warning style if over limit
    twitterNumberEl.classList.toggle("numbers-limit", twitterRemaining < 0);
    facebookNumberEl.classList.toggle("numbers-limit", facebookRemaining < 0);
});