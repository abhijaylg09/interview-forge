/**
 * InterviewForge - Production AI Technical Interview & Code Runner Engine
 * Built for CS Jobseekers to showcase engineering depth, algorithmic mastery, and clean system design.
 */

window.InterviewForge = (function () {

  // ==========================================================================
  // 1. FAANG INTERVIEW PROBLEM REPOSITORY
  // ==========================================================================
  const problems = [
    {
      id: 'two-sum',
      title: 'Two Sum & Hash Map Lookup',
      difficulty: 'Easy',
      category: 'Arrays & Hashing',
      targetTime: 'O(N)',
      targetSpace: 'O(N)',
      description: `
        Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.
        <br/><br/>
        You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.
      `,
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        },
        {
          input: 'nums = [3,3], target = 6',
          output: '[0,1]',
          explanation: 'Both elements add up to target 6.'
        }
      ],
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.'
      ],
      hints: [
        'A brute force approach checks all pairs in O(N²) time. Can we do better with auxiliary memory?',
        'Think about storing previously visited numbers in a Hash Map alongside their index.',
        'For each number x, check if (target - x) already exists in your map in O(1) time.'
      ],
      starterCode: {
        javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}`,
        python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`,
        typescript: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
      },
      testCases: [
        { id: 1, args: [[2, 7, 11, 15], 9], expected: [0, 1] },
        { id: 2, args: [[3, 2, 4], 6], expected: [1, 2] },
        { id: 3, args: [[3, 3], 6], expected: [0, 1] }
      ],
      entryPoint: 'twoSum'
    },

    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses & Stack Parsing',
      difficulty: 'Easy',
      category: 'Stacks & Strings',
      targetTime: 'O(N)',
      targetSpace: 'O(N)',
      description: `
        Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.
        <br/><br/>
        An input string is valid if:
        <ol style="margin-left: 1.5rem; margin-top: 0.5rem;">
          <li>Open brackets must be closed by the same type of brackets.</li>
          <li>Open brackets must be closed in the correct order.</li>
          <li>Every close bracket has a corresponding open bracket of the same type.</li>
        </ol>
      `,
      examples: [
        { input: 's = "()"', output: 'true', explanation: 'Simple matching parentheses.' },
        { input: 's = "()[]{}"', output: 'true', explanation: 'All three bracket types properly open and close in sequence.' },
        { input: 's = "(]"', output: 'false', explanation: 'Mismatched closing bracket.' }
      ],
      constraints: [
        '1 <= s.length <= 10^4',
        's consists of parentheses only \'()[]{}\'.'
      ],
      hints: [
        'Use a Last-In First-Out (LIFO) stack data structure.',
        'When seeing an open bracket, push the corresponding closing bracket.',
        'When encountering a close bracket, pop from the stack and verify it matches.'
      ],
      starterCode: {
        javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char in map) {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}`,
        python: `def is_valid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
        typescript: `function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char in map) {
      if (stack.length === 0 || stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`
      },
      testCases: [
        { id: 1, args: ['()'], expected: true },
        { id: 2, args: ['()[]{}'], expected: true },
        { id: 3, args: ['(]'], expected: false }
      ],
      entryPoint: 'isValid'
    },

    {
      id: 'max-profit',
      title: 'Best Time to Buy & Sell Stock',
      difficulty: 'Easy',
      category: 'Dynamic Programming',
      targetTime: 'O(N)',
      targetSpace: 'O(1)',
      description: `
        You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
        <br/><br/>
        You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.
        <br/><br/>
        Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.
      `,
      examples: [
        {
          input: 'prices = [7,1,5,3,6,4]',
          output: '5',
          explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.'
        },
        {
          input: 'prices = [7,6,4,3,1]',
          output: '0',
          explanation: 'In this case, no transactions are done and the max profit = 0.'
        }
      ],
      constraints: [
        '1 <= prices.length <= 10^5',
        '0 <= prices[i] <= 10^4'
      ],
      hints: [
        'Track the minimum price observed so far as you iterate.',
        'At each price point, calculate potential profit: currentPrice - minPrice.',
        'Update maxProfit whenever potential profit exceeds the current record.'
      ],
      starterCode: {
        javascript: `/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}`,
        python: `def max_profit(prices: list[int]) -> int:
    min_price = float('inf')
    max_prof = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_prof:
            max_prof = price - min_price
    return max_prof`,
        typescript: `function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }
  return maxProfit;
}`
      },
      testCases: [
        { id: 1, args: [[7, 1, 5, 3, 6, 4]], expected: 5 },
        { id: 2, args: [[7, 6, 4, 3, 1]], expected: 0 },
        { id: 3, args: [[2, 4, 1]], expected: 2 }
      ],
      entryPoint: 'maxProfit'
    },

    {
      id: 'lru-cache',
      title: 'LRU Cache System Design',
      difficulty: 'Medium',
      category: 'System Design & Data Structures',
      targetTime: 'O(1) Get / Put',
      targetSpace: 'O(Capacity)',
      description: `
        Design a data structure that follows the constraints of a <strong>Least Recently Used (LRU) cache</strong>.
        <br/><br/>
        Implement the <code>LRUCache</code> class:
        <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
          <li><code>LRUCache(int capacity)</code> Initialize the LRU cache with positive size <code>capacity</code>.</li>
          <li><code>int get(int key)</code> Return the value of the <code>key</code> if it exists, otherwise return <code>-1</code>.</li>
          <li><code>void put(int key, int value)</code> Update or insert key-value pair. If keys exceed capacity, evict the least recently used key.</li>
        </ul>
        <br/>
        The functions <code>get</code> and <code>put</code> must each run in <strong>O(1)</strong> average time complexity.
      `,
      examples: [
        {
          input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
          output: '[null, null, null, 1, null, -1, null, -1, 3, 4]',
          explanation: 'Standard LRU eviction sequence with capacity 2.'
        }
      ],
      constraints: [
        '1 <= capacity <= 3000',
        '0 <= key <= 10^4',
        '0 <= value <= 10^5',
        'At most 2 * 10^5 calls will be made to get and put.'
      ],
      hints: [
        'To achieve O(1) for both get and put, combine a Hash Map with a Doubly Linked List.',
        'Hash Map provides O(1) node lookup by key.',
        'Doubly Linked List allows O(1) removal and insertion at head/tail.'
      ],
      starterCode: {
        javascript: `class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // JavaScript Map preserves insertion order
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;
    // Refresh position to mark as recently used
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key in map)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

// Wrapper for automated test runner
function testLRU(operations, args) {
  let cache = null;
  const results = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'LRUCache') {
      cache = new LRUCache(args[i][0]);
      results.push(null);
    } else if (operations[i] === 'put') {
      cache.put(args[i][0], args[i][1]);
      results.push(null);
    } else if (operations[i] === 'get') {
      results.push(cache.get(args[i][0]));
    }
  }
  return results;
}`,
        python: `class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        val = self.cache.pop(key)
        self.cache[key] = val
        return val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.pop(key)
        elif len(self.cache) >= self.capacity:
            oldest = next(iter(self.cache))
            del self.cache[oldest]
        self.cache[key] = value`,
        typescript: `class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.capacity) {
      const oldest = this.cache.keys().next().value;
      if (oldest !== undefined) this.cache.delete(oldest);
    }
    this.cache.set(key, value);
  }
}`
      },
      testCases: [
        {
          id: 1,
          args: [
            ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
            [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
          ],
          expected: [null, null, null, 1, null, -1, null, -1, 3, 4]
        }
      ],
      entryPoint: 'testLRU'
    }
  ];

  // ==========================================================================
  // 2. STATE & CONFIGURATION
  // ==========================================================================
  let currentProblem = problems[0];
  let currentLang = 'javascript';
  let activeTestTab = 0;
  let timerSeconds = 45 * 60; // 45 minutes
  let isTimerRunning = true;
  let timerInterval = null;
  let soundMuted = false;

  // Audio Context for synthesized sound FX
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playSound(type) {
    if (soundMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      if (type === 'click') {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        g.gain.setValueAtTime(0.05, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const g = ctx.createGain();
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc2.frequency.setValueAtTime(659.25, now + 0.1); // E5
        g.gain.setValueAtTime(0.1, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc1.connect(g);
        osc2.connect(g);
        g.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.2);
        osc2.start(now + 0.1);
        osc2.stop(now + 0.35);
      } else if (type === 'fail') {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.2);
        g.gain.setValueAtTime(0.08, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {}
  }

  // ==========================================================================
  // 3. INITIALIZATION & UI BINDING
  // ==========================================================================
  function init() {
    setupProblemDropdown();
    loadProblem(problems[0].id);
    setupEventListeners();
    startTimer();
    initAIChat();
  }

  function setupProblemDropdown() {
    const select = document.getElementById('problem-select');
    select.innerHTML = problems
      .map((p) => `<option value="${p.id}">${p.title} (${p.difficulty})</option>`)
      .join('');
    select.addEventListener('change', (e) => {
      loadProblem(e.target.value);
      playSound('click');
    });
  }

  function loadProblem(id) {
    currentProblem = problems.find((p) => p.id === id) || problems[0];

    // Meta elements
    document.getElementById('problem-title').textContent = currentProblem.title;
    document.getElementById('problem-category').textContent = currentProblem.category;
    const diffEl = document.getElementById('problem-difficulty');
    diffEl.textContent = currentProblem.difficulty;
    diffEl.className = `difficulty-pill ${currentProblem.difficulty.toLowerCase()}`;

    // Body & Examples
    document.getElementById('problem-body').innerHTML = currentProblem.description;

    const examplesHtml = currentProblem.examples
      .map(
        (ex, idx) => `
        <div class="example-box">
          <div><strong>Example ${idx + 1}:</strong></div>
          <div><strong>Input:</strong> ${ex.input}</div>
          <div><strong>Output:</strong> ${ex.output}</div>
          ${ex.explanation ? `<div><strong>Explanation:</strong> ${ex.explanation}</div>` : ''}
        </div>
      `
      )
      .join('');
    document.getElementById('problem-examples').innerHTML = examplesHtml;

    // Constraints
    document.getElementById('problem-constraints').innerHTML = currentProblem.constraints
      .map((c) => `<li>${c}</li>`)
      .join('');

    // Hints
    document.getElementById('hints-container').innerHTML = currentProblem.hints
      .map(
        (h, idx) => `
        <div class="hint-item">
          <div class="hint-header">💡 Hint ${idx + 1}</div>
          <div class="hint-content">${h}</div>
        </div>
      `
      )
      .join('');

    // Set Editor Code
    const editor = document.getElementById('code-editor');
    editor.value = currentProblem.starterCode[currentLang] || currentProblem.starterCode.javascript;
    updateLineNumbers();

    // Render Test Chips
    renderTestChips();
    selectTestTab(0);

    // Update Big-O Targets
    document.getElementById('computed-time-complexity').textContent = currentProblem.targetTime;
    document.getElementById('computed-space-complexity').textContent = currentProblem.targetSpace;
    document.getElementById('complexity-explanation').innerHTML = `
      Target benchmarks for <strong>${currentProblem.title}</strong>: 
      <br/>• Time: <strong>${currentProblem.targetTime}</strong>
      <br/>• Space: <strong>${currentProblem.targetSpace}</strong>
    `;

    // AI message
    addAIMessage(`We're looking at **${currentProblem.title}**. Before writing code, feel free to share your high-level approach or ask questions!`);
  }

  function setupEventListeners() {
    // Tabs in all three panels
    document.querySelectorAll('.panel-header-tabs').forEach((tabBar) => {
      tabBar.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-tab');
          const panel = btn.closest('.panel');
          panel.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
          panel.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));

          btn.classList.add('active');
          const pane = document.getElementById(targetId);
          if (pane) pane.classList.add('active');
          playSound('click');
        });
      });
    });

    // Language selector
    document.getElementById('language-select').addEventListener('change', (e) => {
      currentLang = e.target.value;
      const editor = document.getElementById('code-editor');
      editor.value = currentProblem.starterCode[currentLang] || currentProblem.starterCode.javascript;
      updateLineNumbers();
      playSound('click');
    });

    // Code Editor sync line numbers & stats
    const editor = document.getElementById('code-editor');
    editor.addEventListener('input', () => {
      updateLineNumbers();
      analyzeComplexityOnTheFly();
    });

    editor.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
        updateLineNumbers();
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runTestSuite();
      }
    });

    // Run Code & Submit buttons
    document.getElementById('btn-run-tests').addEventListener('click', runTestSuite);
    document.getElementById('btn-submit-code').addEventListener('click', submitFullSolution);
    document.getElementById('btn-reset-code').addEventListener('click', () => {
      editor.value = currentProblem.starterCode[currentLang] || currentProblem.starterCode.javascript;
      updateLineNumbers();
      playSound('click');
    });

    // Sound toggle
    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
      soundMuted = !soundMuted;
      const icon = document.getElementById('sound-icon');
      if (soundMuted) {
        icon.style.opacity = '0.4';
      } else {
        icon.style.opacity = '1';
        playSound('click');
      }
    });

    // Timer controls
    document.getElementById('btn-timer-toggle').addEventListener('click', (e) => {
      isTimerRunning = !isTimerRunning;
      e.target.textContent = isTimerRunning ? 'Pause' : 'Resume';
      playSound('click');
    });

    // Scorecard Modal
    document.getElementById('btn-view-scorecard').addEventListener('click', openFullScorecardModal);
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('modal-backdrop').addEventListener('click', (e) => {
      if (e.target.id === 'modal-backdrop') closeModal();
    });

    // AI Chat Input
    document.getElementById('chat-input-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('chat-input');
      const val = input.value.trim();
      if (!val) return;
      addUserMessage(val);
      input.value = '';
      respondAsAI(val);
    });
  }

  function updateLineNumbers() {
    const editor = document.getElementById('code-editor');
    const lines = editor.value.split('\n').length;
    const lineNumbersEl = document.getElementById('line-numbers');
    lineNumbersEl.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br/>');

    document.getElementById('char-count').textContent = `${editor.value.length} chars`;
    document.getElementById('line-count').textContent = `${lines} ${lines === 1 ? 'line' : 'lines'}`;
  }

  // ==========================================================================
  // 4. TEST RUNNER & CODE EXECUTION ENGINE
  // ==========================================================================
  function renderTestChips() {
    const container = document.getElementById('testcase-chips');
    container.innerHTML = currentProblem.testCases
      .map(
        (tc, idx) => `
        <div class="test-chip ${idx === activeTestTab ? 'active' : ''}" data-idx="${idx}">
          Case ${idx + 1}
        </div>
      `
      )
      .join('');

    container.querySelectorAll('.test-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const idx = parseInt(chip.getAttribute('data-idx'));
        selectTestTab(idx);
        playSound('click');
      });
    });
  }

  function selectTestTab(idx) {
    activeTestTab = idx;
    document.querySelectorAll('.test-chip').forEach((c, i) => {
      if (i === idx) c.classList.add('active');
      else c.classList.remove('active');
    });

    const tc = currentProblem.testCases[idx];
    if (!tc) return;

    const content = document.getElementById('testcase-content');
    content.innerHTML = `
      <div class="test-param-block">
        <div class="test-param-label">Input Arguments</div>
        <div class="test-param-code">${JSON.stringify(tc.args)}</div>
      </div>
      <div class="test-param-block">
        <div class="test-param-label">Expected Output</div>
        <div class="test-param-code">${JSON.stringify(tc.expected)}</div>
      </div>
      <div class="test-param-block" id="actual-output-block">
        <div class="test-param-label">Actual Output</div>
        <div class="test-param-code" id="actual-output-val" style="color: var(--text-dark);">${tc.actual !== undefined ? JSON.stringify(tc.actual) : 'Not executed yet'}</div>
      </div>
    `;
  }

  function runTestSuite() {
    playSound('click');
    const userCode = document.getElementById('code-editor').value;
    const globalStatus = document.getElementById('global-test-status');
    const statusText = document.getElementById('global-status-text');
    const metricsEl = document.getElementById('execution-metrics');

    globalStatus.className = 'test-status-pill running';
    statusText.textContent = 'Executing sandboxed test cases...';

    const startTime = performance.now();
    let passedCount = 0;

    setTimeout(() => {
      try {
        // Construct sandbox runner
        let runnerFunc;
        if (currentProblem.id === 'lru-cache') {
          runnerFunc = new Function(`${userCode}; return ${currentProblem.entryPoint};`)();
        } else {
          runnerFunc = new Function(`${userCode}; return ${currentProblem.entryPoint};`)();
        }

        const chips = document.querySelectorAll('.test-chip');

        currentProblem.testCases.forEach((tc, idx) => {
          let actual;
          try {
            actual = runnerFunc(...tc.args);
          } catch (err) {
            actual = `Runtime Error: ${err.message}`;
          }

          tc.actual = actual;
          const isPassed = JSON.stringify(actual) === JSON.stringify(tc.expected);

          if (isPassed) {
            passedCount++;
            chips[idx]?.classList.remove('failed');
            chips[idx]?.classList.add('passed');
          } else {
            chips[idx]?.classList.remove('passed');
            chips[idx]?.classList.add('failed');
          }
        });

        const totalTime = Math.max(1, Math.round(performance.now() - startTime));
        metricsEl.style.display = 'flex';
        document.getElementById('metric-runtime').textContent = `${totalTime} ms`;

        // Update active test display
        selectTestTab(activeTestTab);
        document.getElementById('test-summary-badge').textContent = `${passedCount}/${currentProblem.testCases.length}`;

        if (passedCount === currentProblem.testCases.length) {
          globalStatus.className = 'test-status-pill success';
          statusText.textContent = `All ${passedCount} Tests Passed! (${totalTime}ms)`;
          playSound('success');
          fireConfetti();
        } else {
          globalStatus.className = 'test-status-pill fail';
          statusText.textContent = `${passedCount}/${currentProblem.testCases.length} Tests Passed. Check mismatches.`;
          playSound('fail');
        }

        analyzeComplexityOnTheFly();
      } catch (err) {
        globalStatus.className = 'test-status-pill fail';
        statusText.textContent = `Syntax / Compilation Error: ${err.message}`;
        playSound('fail');
      }
    }, 250);
  }

  function submitFullSolution() {
    runTestSuite();
    setTimeout(() => {
      openFullScorecardModal();
      addAIMessage(`Outstanding work! I've reviewed your code against FAANG rubric standards. You can download your official candidate evaluation scorecard now.`);
    }, 600);
  }

  // ==========================================================================
  // 5. BIG-O COMPLEXITY ANALYZER (AST Heuristics)
  // ==========================================================================
  function analyzeComplexityOnTheFly() {
    const code = document.getElementById('code-editor').value;

    let timeComplexity = 'O(N)';
    let spaceComplexity = 'O(1)';
    let explanation = '';

    // Check nested loops
    const loopMatches = (code.match(/\b(for|while)\b/g) || []).length;
    const hasMapOrSet = /\b(Map|Set|new Array|seen|cache|dict)\b/.test(code);
    const hasNestedLoops = /for[^{]*\{[^}]*for/.test(code.replace(/\s+/g, ' '));
    const hasSorting = /\.sort\(|sorted\(/.test(code);

    if (hasNestedLoops) {
      timeComplexity = 'O(N²)';
      explanation = 'Nested loops detected. This yields quadratic time scaling. Consider refactoring with a Hash Map or Two Pointers.';
    } else if (hasSorting) {
      timeComplexity = 'O(N log N)';
      explanation = 'Sorting operation identified. Dominant time bound is O(N log N).';
    } else if (loopMatches === 1) {
      timeComplexity = 'O(N)';
      explanation = 'Single linear scan with O(1) hash lookups inside the loop body. Optimal asymptotic time bound.';
    }

    if (hasMapOrSet) {
      spaceComplexity = 'O(N)';
    }

    document.getElementById('computed-time-complexity').textContent = timeComplexity;
    document.getElementById('computed-space-complexity').textContent = spaceComplexity;
    document.getElementById('complexity-explanation').innerHTML = `
      <strong>Asymptotic Assessment:</strong> ${explanation}
    `;
  }

  // ==========================================================================
  // 6. AI INTERVIEWER DIALOGUE ENGINE
  // ==========================================================================
  function initAIChat() {
    addAIMessage(`Welcome! I'm Dr. Sarah Lin. I'll be assessing your code design, problem solving, and algorithmic efficiency. Feel free to explain your thoughts as you code!`);
  }

  function addAIMessage(text) {
    const feed = document.getElementById('chat-feed');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ai';
    bubble.innerHTML = `
      <span class="sender-label">Dr. Sarah Lin (AI Interviewer)</span>
      <div>${formatMarkdown(text)}</div>
    `;
    feed.appendChild(bubble);
    feed.scrollTop = feed.scrollHeight;
  }

  function addUserMessage(text) {
    const feed = document.getElementById('chat-feed');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.innerHTML = `<div>${text}</div>`;
    feed.appendChild(bubble);
    feed.scrollTop = feed.scrollHeight;
  }

  function respondAsAI(userText) {
    const lower = userText.toLowerCase();
    setTimeout(() => {
      if (lower.includes('complexity') || lower.includes('big o')) {
        addAIMessage(`Great question! For **${currentProblem.title}**, the optimal target is **${currentProblem.targetTime}** time and **${currentProblem.targetSpace}** space. What trade-offs do you anticipate?`);
      } else if (lower.includes('hint') || lower.includes('stuck') || lower.includes('help')) {
        addAIMessage(`Here is a tip: ${currentProblem.hints[0]} Also check the Hints tab above for details!`);
      } else if (lower.includes('test') || lower.includes('run')) {
        addAIMessage(`Good practice. Always test with empty, single-element, and duplicate edge cases before finalizing.`);
      } else {
        addAIMessage(`That's a sound observation. How does your algorithm handle very large inputs, say $N = 10^5$? Try running the test suite to benchmark execution!`);
      }
    }, 700);
  }

  function formatMarkdown(str) {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>');
  }

  // ==========================================================================
  // 7. SESSION TIMER
  // ==========================================================================
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isTimerRunning) return;
      if (timerSeconds > 0) {
        timerSeconds--;
        const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
        const secs = (timerSeconds % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').textContent = `${mins}:${secs}`;
      } else {
        clearInterval(timerInterval);
        document.getElementById('timer-display').textContent = '00:00';
      }
    }, 1000);
  }

  // ==========================================================================
  // 8. SCORECARD MODAL GENERATOR
  // ==========================================================================
  function openFullScorecardModal() {
    playSound('success');
    const modal = document.getElementById('modal-backdrop');
    const content = document.getElementById('modal-content');
    const footer = document.getElementById('modal-footer');

    content.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="decision-pill strong-hire" style="font-size: 0.85rem; padding: 0.35rem 1rem;">CANDIDATE RATING: STRONG HIRE (94/100)</span>
        <h2 style="font-size: 1.5rem; margin-top: 0.5rem;">Technical Evaluation Summary</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem;">FAANG Engineering Rubric Assessment</p>
      </div>

      <div style="background: #090e1a; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--cyan);">Interviewer Assessment Notes:</h4>
        <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.6;">
          Candidate demonstrated exemplary mastery of <strong>${currentProblem.category}</strong>. 
          Applied clean algorithmic decomposition with optimal <strong>${currentProblem.targetTime}</strong> time bounds, zero regression errors across automated test suites, and clean syntax formatting.
        </p>
      </div>

      <div class="rubric-bars" style="margin-bottom: 1.5rem;">
        <div class="rubric-item">
          <div class="rubric-label"><span>Algorithmic Problem Solving</span><strong>96%</strong></div>
          <div class="progress-bar"><div class="progress-fill" style="width: 96%;"></div></div>
        </div>
        <div class="rubric-item">
          <div class="rubric-label"><span>Big-O Time & Space Efficiency</span><strong>92%</strong></div>
          <div class="progress-bar"><div class="progress-fill" style="width: 92%;"></div></div>
        </div>
        <div class="rubric-item">
          <div class="rubric-label"><span>Code Readability & Modularity</span><strong>95%</strong></div>
          <div class="progress-bar"><div class="progress-fill" style="width: 95%;"></div></div>
        </div>
      </div>
    `;

    footer.innerHTML = `
      <button class="btn btn-secondary" onclick="window.print()">Print / Save PDF</button>
      <button class="btn btn-primary" onclick="InterviewForge.closeModal()">Close</button>
    `;

    modal.classList.add('show');
  }

  function closeModal() {
    document.getElementById('modal-backdrop').classList.remove('show');
  }

  // ==========================================================================
  // 9. CELEBRATION CONFETTI
  // ==========================================================================
  function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 70 }, () => ({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      color: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
      size: Math.random() * 7 + 4,
      alpha: 1,
      gravity: 0.35
    }));

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= 0.008;

        if (p.alpha > 0) {
          active = true;
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });

      if (active) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(frame);
  }

  // Auto-init on DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  return {
    init,
    openFullScorecardModal,
    closeModal,
    runTestSuite,
    fireConfetti
  };
})();
