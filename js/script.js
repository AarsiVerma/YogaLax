(function () {
  var minsEl = document.getElementById('timer-mins');
  var secsEl = document.getElementById('timer-secs');
  var msEl = document.getElementById('timer-ms');
  var startBtn = document.getElementById('startBtn');
  var stopBtn = document.getElementById('stopBtn');
  var resetBtn = document.getElementById('resetBtn');

  if (!minsEl || !startBtn) return;

  var msec = 0;
  var secs = 0;
  var mins = 0;
  var timerId = null;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function updateDisplay() {
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);
    msEl.textContent = pad(msec);
  }

  function setRunning(running) {
    startBtn.disabled = running;
    stopBtn.disabled = !running;
  }

  startBtn.addEventListener('click', function () {
    if (timerId !== null) clearInterval(timerId);
    timerId = setInterval(tick, 10);
    setRunning(true);
  });

  stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    setRunning(false);
  });

  resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    msec = secs = mins = 0;
    updateDisplay();
    setRunning(false);
  });

  function tick() {
    msec++;
    if (msec === 100) {
      msec = 0;
      secs++;
      if (secs === 60) {
        secs = 0;
        mins++;
      }
    }
    updateDisplay();
  }

  updateDisplay();
  setRunning(false);
})();
