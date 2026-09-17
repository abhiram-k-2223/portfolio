const year = document.getElementById('year')
if (year) year.textContent = String(new Date().getFullYear())

const root = document.documentElement

const themeToggle = document.getElementById('theme-toggle')
const themeColor = document.querySelector('meta[name="theme-color"]')

function applyTheme() {
  const light = root.classList.contains('light')
  if (themeToggle) {
    themeToggle.textContent = light ? 'go dark' : 'go light'
    themeToggle.setAttribute('aria-pressed', String(light))
  }
  if (themeColor) themeColor.setAttribute('content', light ? '#f4f5f1' : '#000000')
}

applyTheme()

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light')
    try {
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark')
    } catch (e) {}
    applyTheme()
  })
}

const tapeItems = [
  { t: 'seed $2,000 to +$46,931, 782 trades, 24 h', g: true },
  { t: '65.6% of closed tokens green', g: false },
  { t: '1,331 parameter combos swept', g: false },
  { t: '+461% over 3 y, 77.6% CAGR', g: true },
  { t: '99%+ ROC-AUC across 6M+ transactions', g: false },
  { t: 'query latency 100 ms to 5 ms, 20x', g: false },
  { t: 'retrieval time down ~70%', g: false },
  { t: '214 passing tests, 19k lines of Rust', g: false },
  { t: 'fail-closed risk controls', g: false },
]

const track = document.getElementById('tape-track')
if (track) {
  const build = (hidden) => {
    const group = document.createElement('div')
    group.className = 'flex shrink-0 items-center'
    if (hidden) group.setAttribute('aria-hidden', 'true')
    for (const item of tapeItems) {
      const s = document.createElement('span')
      s.className = 'mr-12 whitespace-nowrap ' + (item.g ? 'text-tape-pnl' : 'text-tape-text')
      s.textContent = item.t
      group.append(s)
    }
    const cursor = document.createElement('span')
    cursor.className = 'ml-3 inline-block h-3.5 w-2 shrink-0 animate-cursor bg-tape-text'
    group.append(cursor)
    return group
  }
  track.append(build(false), build(true))
}