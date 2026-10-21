SPEED:


(function () {
  'use strict';

  if (window.HNB_SPEED_V2) return;
  window.HNB_SPEED_V2 = true;

  window.__speedFactor = 1;

  const realNow = Date.now.bind(Date);
  const realPerfNow = performance.now.bind(performance);
  const startReal = realNow();
  const startPerf = realPerfNow();

  let speed = 1;

  Date.now = function () {
    return startReal + (realNow() - startReal) * speed;
  };

  try {
    Object.defineProperty(performance, 'now', {
      configurable: true,
      value: function () {
        return startPerf + (realPerfNow() - startPerf) * speed;
      }
    });
  } catch (e) {}

  const originalRAF = window.requestAnimationFrame.bind(window);

  window.requestAnimationFrame = function (callback) {
    return originalRAF(function (timestamp) {
      callback(startPerf + (timestamp - startPerf) * speed);
    });
  };

  function addBar() {
    if (!document.body ||
        document.getElementById('hnb-speed-panel')) return;

    const bar = document.createElement('div');
    bar.id = 'hnb-speed-panel';
    bar.style.cssText =
      'position:fixed;top:6px;left:50%;' +
      'transform:translateX(-50%);z-index:2147483647;' +
      'display:flex;align-items:center;gap:6px;padding:8px;' +
      'background:#171717;border:1px solid #c6ff3f;' +
      'border-radius:16px;font:bold 13px sans-serif;' +
      'box-shadow:0 3px 12px #0008;';

    const toggle = document.createElement('button');
    toggle.textContent = 'Ẩn −';
    toggle.style.cssText =
      'padding:8px 10px;border:0;border-radius:10px;' +
      'background:#c6ff3f;color:#000;font-weight:bold;';

    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:6px;';

    [1, 2, 4, 5, 10].forEach(function (factor) {
      const button = document.createElement('button');
      button.textContent = 'x' + factor;
      button.style.cssText =
        'padding:8px 10px;border:0;border-radius:10px;' +
        'background:' + (factor === 1 ? '#c6ff3f' : '#444') +
        ';color:' + (factor === 1 ? '#000' : '#fff') +
        ';font-weight:bold;';

      button.onclick = function () {
        speed = factor;
        window.__speedFactor = factor;

        controls.querySelectorAll('button').forEach(function (b) {
          b.style.background = '#444';
          b.style.color = '#fff';
        });

        button.style.background = '#c6ff3f';
        button.style.color = '#000';
      };

      controls.appendChild(button);
    });

    toggle.onclick = function () {
      const hidden = controls.style.display === 'none';
      controls.style.display = hidden ? 'flex' : 'none';
      toggle.textContent = hidden ? 'Ẩn −' : 'Hiện +';
    };

    bar.appendChild(toggle);
    bar.appendChild(controls);
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBar);
  } else {
    addBar();
  }
})();


Ngày giờ:



(function () {
  'use strict';

  if (window.__HNB_CLOCK_V1__) return;
  window.__HNB_CLOCK_V1__ = true;

  function addClock() {
    const menu = document.getElementById('hnb-speed-panel');

    if (!menu) {
      setTimeout(addClock, 500);
      return;
    }

    if (document.getElementById('hnb-clock')) return;

    const clock = document.createElement('div');
    clock.id = 'hnb-clock';
    clock.style.cssText =
      'position:fixed;top:58px;left:50%;' +
      'transform:translateX(-50%);' +
      'z-index:2147483647;' +
      'padding:7px 12px;' +
      'background:rgba(23,23,23,.95);' +
      'border:1px solid #c6ff3f;' +
      'border-radius:12px;' +
      'color:#c6ff3f;' +
      'font:bold 13px monospace;' +
      'white-space:nowrap;' +
      'box-shadow:0 3px 12px #0008;' +
      'pointer-events:none;';

    document.body.appendChild(clock);

    function updateClock() {
      const now = new Date();

      const date = [
        now.getDate(),
        now.getMonth() + 1,
        now.getFullYear()
      ].map(function (n, i) {
        return i < 2 ? String(n).padStart(2, '0') : String(n);
      }).join('/');

      const time = [
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
      ].map(function (n) {
        return String(n).padStart(2, '0');
      }).join(':');

      clock.textContent = '📅 ' + date + '  |  🕒 ' + time;
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addClock);
  } else {
    addClock();
  }
})();


MOD BY



(function () {
  'use strict';

  var ID = 'hnb-test-banner';

  function showBanner() {
    if (!document.body) {
      setTimeout(showBanner, 300);
      return;
    }

    // Xóa bản cũ nếu script chạy lại
    var old = document.getElementById(ID);
    if (old) old.remove();

    var box = document.createElement('div');
    box.id = ID;
    box.textContent = '★ MOD BY HÀ NHẤT BẢN ★';

    box.style.cssText =
      'position:fixed!important;' +
      'right:10px!important;' +
      'bottom:10px!important;' +
      'left:auto!important;' +
      'top:auto!important;' +
      'transform:none!important;' +
      'z-index:2147483647!important;' +
      'display:block!important;' +
      'padding:10px 12px!important;' +
      'background:rgba(20,20,20,.92)!important;' +
      'color:#c6ff3f!important;' +
      'font:bold 14px Arial,sans-serif!important;' +
      'border:2px solid #c6ff3f!important;' +
      'border-radius:12px!important;' +
      'box-shadow:0 0 12px #c6ff3f88!important;' +
      'white-space:nowrap!important;' +
      'pointer-events:none!important;' +
      'animation:hnbGlow 1.5s ease-in-out infinite alternate!important;';

    // Tạo hiệu ứng phát sáng
    if (!document.getElementById('hnb-glow-style')) {
      var style = document.createElement('style');
      style.id = 'hnb-glow-style';
      style.textContent =
        '@keyframes hnbGlow {' +
        'from { box-shadow:0 0 5px #c6ff3f55; opacity:.85; }' +
        'to { box-shadow:0 0 18px #c6ff3f; opacity:1; }' +
        '}';
      (document.head || document.body).appendChild(style);
    }

    document.body.appendChild(box);
  }

  showBanner();
})();


Goback


(function () {
  'use strict';

  if (window.__HNB_GOBACK_V5__) return;
  window.__HNB_GOBACK_V5__ = true;

  var KEY_HIST = 'hnb_goback_history';
  var KEY_DEATH = 'hnb_goback_death';
  var MAX_HISTORY = 30;
  var POLL_MS = 1000;
  var TILE_SIZE = 32;
  var SAVE_EVERY = 10;

  function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  var history = loadJSON(KEY_HIST, []);
  var lastCoord = history.length ? history[history.length - 1] : null;
  var deathCoord = loadJSON(KEY_DEATH, null);
  var deathActive = false;
  var returnPending = false;
  var returnDeadline = 0;
  var pendingReturn = null;
  var saveTick = 0;
  // Map id phải giống nhau hai vòng quét liên tiếp mới tin là đã đổi map xong
  var prevMapId = null;
  var stableMapId = null;
  var replanCount = 0;

  function dbg() {
    try { console.log.apply(console, ['%c[GoBack]', 'color:#c6ff3f'].concat([].slice.call(arguments))); } catch (e) {}
  }

  var gameWin = null;
  function getGameWin() {
    if (gameWin) {
      try { if (gameWin.PNTT && gameWin.PNTT.Game) return gameWin; } catch (e) {}
      gameWin = null;
    }
    try { if (window.PNTT && window.PNTT.Game) { gameWin = window; return gameWin; } } catch (e) {}
    for (var i = 0; i < window.frames.length; i++) {
      try {
        var w = window.frames[i];
        if (w.PNTT && w.PNTT.Game) { gameWin = w; return gameWin; }
      } catch (e) {}
    }
    return null;
  }

  function readPlayerPos() {
    try {
      var p = getGameWin().PNTT.Game.scene.player;
      if (p && typeof p.x === 'number' && typeof p.y === 'number') {
        return { x: Math.round(p.x), y: Math.round(p.y) };
      }
    } catch (e) {}
    return null;
  }
  function readMapId() {
    try { return getGameWin().PNTT.Game.scene.map.data.id || null; } catch (e) { return null; }
  }
  function readDeadFlag() {
    try {
      var p = getGameWin().PNTT.Game.scene.player;
      if (p.dead === true || p.isDead === true) return true;
      if (typeof p.hp === 'number' && p.hp <= 0) return true;
      if (typeof p.curHp === 'number' && p.curHp <= 0) return true;
    } catch (e) {}
    return false;
  }
  function tileCenter(tx, ty) {
    return { x: tx * TILE_SIZE + TILE_SIZE / 2, y: ty * TILE_SIZE + TILE_SIZE / 2 };
  }
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  function buildGraph() {
    var graph = {};
    try {
      var MD = getGameWin().PNTT.MapData;
      for (var key in MD) {
        var m = MD[key];
        if (!m || !m.portals || !m.id) continue;
        graph[m.id] = m.portals.map(function (p) {
          return { toMap: p.toMap, tx: p.tx, ty: p.ty };
        });
      }
    } catch (e) {}
    return graph;
  }
  function findPath(graph, fromMap, toMap) {
    if (fromMap === toMap) return [];
    var visited = {}; visited[fromMap] = true;
    var queue = [{ map: fromMap, path: [] }];
    while (queue.length) {
      var cur = queue.shift();
      var edges = graph[cur.map] || [];
      for (var i = 0; i < edges.length; i++) {
        var e = edges[i];
        if (visited[e.toMap]) continue;
        var newPath = cur.path.concat([{ from: cur.map, to: e.toMap, tx: e.tx, ty: e.ty }]);
        if (e.toMap === toMap) return newPath;
        visited[e.toMap] = true;
        queue.push({ map: e.toMap, path: newPath });
      }
    }
    return null;
  }

  // --- UI -------------------------------------------------------------
  var panel = document.createElement('div');
  panel.id = 'hnb-goback-panel';
  panel.style.cssText =
    'position:fixed;right:10px;top:50%;transform:translateY(-50%);' +
    'z-index:2147483646;background:#171717;color:#fff;' +
    'border:1px solid #c6ff3f;border-radius:12px;' +
    'padding:12px;font:14px Arial;max-width:260px;';

  var title = document.createElement('div');
  title.textContent = 'HNB GoBack';
  title.style.cssText = 'font-weight:bold;color:#c6ff3f;margin-bottom:8px;';

  var status = document.createElement('div');
  status.style.cssText = 'margin-bottom:10px;';
  function setStatus(text) { status.innerHTML = String(text).replace(/\n/g, '<br>'); }

  var btnStyle =
    'padding:8px;border:0;border-radius:6px;margin-right:6px;margin-bottom:6px;' +
    'font-weight:bold;';

  var offBtn = document.createElement('button');
  offBtn.textContent = 'Tắt GoBack';
  offBtn.style.cssText = btnStyle + 'background:#c0392b;color:#fff;';
  offBtn.onclick = function () {
    shutdownScript();
  };

  var walkBtn = document.createElement('button');
  walkBtn.textContent = 'Quay lại chỗ chết';
  walkBtn.style.cssText =
    'display:block;padding:8px;border:0;border-radius:6px;margin-bottom:6px;' +
    'background:#58a6ff;color:#111;font-weight:bold;width:100%;';
  walkBtn.onclick = function () {
    if (!deathCoord) { setStatus('Chưa có vị trí nào được lưu.'); return; }
    returnPending = false;
    replanCount = 0;
    startReturn(deathCoord.mapId, deathCoord.x, deathCoord.y);
  };

  var saveHereBtn = document.createElement('button');
  saveHereBtn.textContent = 'Ghi điểm tại đây';
  saveHereBtn.style.cssText = btnStyle + 'background:#3fb950;color:#111;';
  saveHereBtn.onclick = function () {
    var pos = readPlayerPos();
    if (!pos) { setStatus('Không đọc được toạ độ hiện tại.'); return; }
    deathCoord = { x: pos.x, y: pos.y, t: Date.now(), mapId: readMapId() };
    saveJSON(KEY_DEATH, deathCoord);
    renderStatus();
    setStatus('Đã ghi điểm:\n(' + pos.x + ', ' + pos.y + ') map ' + deathCoord.mapId);
  };

  var clearBtn = document.createElement('button');
  clearBtn.textContent = 'Xoá điểm đã lưu';
  clearBtn.style.cssText = btnStyle + 'background:#444;color:#fff;';
  clearBtn.onclick = function () {
    deathCoord = null;
    saveJSON(KEY_DEATH, null);
    returnPending = false;
    deathActive = true;
    renderStatus();
    setStatus('Đã xoá điểm đã lưu.');
  };

  var close = document.createElement('button');
  close.textContent = 'Ẩn';
  close.style.cssText = btnStyle + 'background:#333;color:#fff;';
  close.onclick = function () { panel.style.display = 'none'; reopen.style.display = 'block'; };

  var reopen = document.createElement('button');
  reopen.textContent = 'GoBack';
  reopen.style.cssText =
    'display:none;position:fixed;right:10px;top:50%;transform:translateY(-50%);' +
    'z-index:2147483646;padding:10px;background:#171717;' +
    'color:#c6ff3f;border:1px solid #c6ff3f;border-radius:8px;';
  reopen.onclick = function () { panel.style.display = 'block'; reopen.style.display = 'none'; };

  panel.append(title, status, offBtn, walkBtn, saveHereBtn, clearBtn, close);

  // Tắt hẳn GoBack: dừng mọi tự động, gỡ panel, giữ điểm đã lưu trong
  // localStorage. Nạp lại script nếu muốn dùng tiếp.
  var shuttingDown = false;
  function shutdownScript() {
    shuttingDown = true;
    pendingReturn = null;
    returnPending = false;
    deathActive = false;
    autoWasOn = null;
    if (timer) clearInterval(timer);
    if (observer) observer.disconnect();
    panel.remove();
    reopen.remove();
    document.getElementById('hnb-goback-panel')?.remove();
    window.__HNB_GOBACK_V5__ = false;
    console.log('[GoBack] Đã tắt. Nạp lại script để dùng tiếp.');
  }
  var timer = null;
  var observer = null;

  function mount() {
    if (!document.body) { setTimeout(mount, 300); return; }
    document.body.append(panel, reopen);
    renderStatus();
  }

  function renderStatus() {
    if (pendingReturn || returnPending) return;
    if (deathCoord) {
      setStatus('☠ Điểm đã lưu:\n(' + deathCoord.x + ', ' + deathCoord.y + ')\n' +
        'Map: ' + (deathCoord.mapId || '?') + '\n' +
        'Lúc: ' + new Date(deathCoord.t).toLocaleTimeString());
    } else if (lastCoord) {
      setStatus('Vị trí hiện tại:\n(' + lastCoord.x + ', ' + lastCoord.y + ')\n' +
        'Map: ' + (lastCoord.mapId || '?'));
    } else if (!getGameWin()) {
      setStatus('⚠ Không đọc được PNTT.Game\n(đã quét ' + (1 + window.frames.length) + ' frame)');
    } else {
      setStatus('Đã thấy game, đang chờ toạ độ...');
    }
  }

  function walkToSpot(x, y) {
    try {
      var gw = getGameWin();
      var scene = gw.PNTT.Game.scene;
      var path = gw.PNTT.Pathfinder.route(scene.map, scene.player.x, scene.player.y, x, y, false, false);
      if (!path || !path.length) return false;
      scene.player.setPath(path);
      return true;
    } catch (e) { return false; }
  }

  // Dừng hẳn bước chân trước khi gọi switchMap, nếu không game hay bỏ qua
  function stopPlayer() {
    try {
      var p = getGameWin().PNTT.Game.scene.player;
      if (typeof p.stop === 'function') p.stop();
      else if (typeof p.stopMove === 'function') p.stopMove();
      else p.setPath([]);
    } catch (e) {}
  }

  // --- Máy trạng thái tự quay lại --------------------------------------
  function startReturn(targetMap, targetX, targetY) {
    var curMapId = readMapId();
    dbg('startReturn: đang ở map', curMapId, '→ đích', targetMap, 'điểm', targetX, targetY);
    if (!curMapId) { setStatus('Chưa đọc được map hiện tại.'); return; }
    if (!targetMap) { setStatus('Điểm đã lưu không có map, xoá đi ghi lại nhé.'); return; }
    if (curMapId === targetMap) {
      pendingReturn = { phase: 'walking_to_target', targetMap: targetMap, targetX: targetX, targetY: targetY, lastAction: 0, attempts: 0, stuck: 0 };
      dbg('Cùng map, đi bộ thẳng');
      return;
    }
    var graph = buildGraph();
    var plan = findPath(graph, curMapId, targetMap);
    if (!plan) {
      setStatus('Không tìm được đường từ "' + curMapId + '" tới "' + targetMap + '".');
      dbg('BFS thất bại. Số map trong đồ:', Object.keys(graph).length);
      return;
    }
    pendingReturn = {
      phase: 'walking_to_portal',
      plan: plan, hopIndex: 0,
      targetMap: targetMap, targetX: targetX, targetY: targetY,
      lastAction: 0, attempts: 0, stuck: 0,
      switchTries: 0, maneuver: false
    };
    setStatus('Tìm được đường qua ' + plan.length + ' cổng. Đang đi tới cổng đầu tiên...');
    dbg('Lộ trình:', plan.map(function (h) { return h.to; }).join(' -> '));
  }

  function abortReturn(msg) {
    pendingReturn = null;
    setStatus(msg + '\nĐi gần tới rồi bấm "Quay lại chỗ chết" lại.');
    dbg('Dừng:', msg);
  }

  function stepReturn() {
    if (!pendingReturn) return;
    var now = Date.now();
    var curMapId = readMapId();
    var pos = readPlayerPos();
    if (!pos || !curMapId) return;

    if (pendingReturn.lastPos && dist(pos, pendingReturn.lastPos) < 1) {
      pendingReturn.stuck++;
    } else {
      pendingReturn.stuck = 0;
      pendingReturn.lastPos = { x: pos.x, y: pos.y };
    }
    if (pendingReturn.stuck > 20) {
      abortReturn('Nhân vật đứng yên quá lâu (có thể đang đánh quên).');
      return;
    }

    if (pendingReturn.phase === 'walking_to_portal') {
      var hop = pendingReturn.plan[pendingReturn.hopIndex];

      // Đã lỡ bắt được lúc đổi map: nếu đang đứng ở map đích của bước này
      // thì nhảy qua bước luôn thay vì đi lùi về cổng cũ.
      if (curMapId === hop.to) {
        dbg('Bỏ qua cổng, map đã là', hop.to);
        advanceHop();
        return;
      }

      var portalPx = tileCenter(hop.tx, hop.ty);
      if (dist(pos, portalPx) < TILE_SIZE * 0.7) {
        // Đứng đủ gần: dừng chân, đợi một nhịp rồi mới xin đổi map
        if (!pendingReturn.stopSent) {
          pendingReturn.stopSent = true;
          stopPlayer();
          pendingReturn.lastAction = now;
          return; // vòng sau mới switch
        }
        if (now - pendingReturn.lastAction > 400) {
          try { getGameWin().PNTT.Game.scene.switchMap(hop.to); } catch (e) {}
          pendingReturn.phase = 'waiting_switch';
          pendingReturn.lastAction = now;
          pendingReturn.switchTries = 0;
          pendingReturn.stopSent = false;
          setStatus('Đang qua map "' + hop.to + '"...');
        }
      } else if (now - pendingReturn.lastAction > 3000) {
        pendingReturn.lastAction = now;
        pendingReturn.stopSent = false;
        if (!walkToSpot(portalPx.x, portalPx.y)) {
          pendingReturn.attempts++;
          if (pendingReturn.attempts > 8) {
            abortReturn('Không tính được đường tới cổng (' + hop.tx + ',' + hop.ty + ').');
            return;
          }
        }
        setStatus('Đang đi tới cổng (' + hop.tx + ',' + hop.ty + ') → "' + hop.to + '"...');
      }
    } else if (pendingReturn.phase === 'waiting_switch') {
      var hop2 = pendingReturn.plan[pendingReturn.hopIndex];
      if (curMapId === hop2.to) {
        advanceHop();
      } else if (now - pendingReturn.lastAction > 2500) {
        pendingReturn.switchTries++;
        if (pendingReturn.switchTries > 3) {
          // Lùi ra xa hai ô rồi đi lại cổng để kích hoạt lại cổng dịch chuyển
          var portal2 = tileCenter(hop2.tx, hop2.ty);
          if (!pendingReturn.maneuver) {
            pendingReturn.maneuver = true;
            var backX = portal2.x + TILE_SIZE * 2.5, backY = portal2.y;
            dbg('Cổng không nhận, lùi ra rồi đi lại');
            setStatus('Cổng chưa nhận, thử lùi ra rồi đi lại...');
            walkToSpot(backX, backY);
            pendingReturn.lastAction = now;
            pendingReturn.phase = 'walking_to_portal'; // sẽ tự đi lại cổng
          } else {
            pendingReturn.maneuver = false;
            pendingReturn.switchTries = 0;
            pendingReturn.lastAction = now;
            try { getGameWin().PNTT.Game.scene.switchMap(hop2.to); } catch (e) {}
          }
        } else {
          try { getGameWin().PNTT.Game.scene.switchMap(hop2.to); } catch (e) {}
          pendingReturn.lastAction = now;
        }
      }
    } else if (pendingReturn.phase === 'walking_to_target') {
      if (curMapId !== pendingReturn.targetMap) {
        // Thay vì dừng, vẽ lại lộ trình từ vị trí hiện tại
        replanCount++;
        if (replanCount > 3) {
          abortReturn('Sai map nhiều lần: đang ở "' + curMapId + '" cần "' + pendingReturn.targetMap + '".');
          return;
        }
        var wantMap = pendingReturn.targetMap, wantX = pendingReturn.targetX, wantY = pendingReturn.targetY;
        pendingReturn = null;
        dbg('Sai map, vẽ lại lộ trình lần', replanCount);
        startReturn(wantMap, wantX, wantY);
        return;
      }
      if (dist(pos, { x: pendingReturn.targetX, y: pendingReturn.targetY }) < TILE_SIZE) {
        setStatus('Đã về tới đúng chỗ, bật lại tự đánh ✓');
        if (autoWasOn !== false) setAutoFight(true); // trả về trạng thái trước khi chết
        autoWasOn = null;
        deathCoord = null;
        saveJSON(KEY_DEATH, null);
        pendingReturn = null;
        replanCount = 0;
        renderStatus();
        return;
      }
      if (now - pendingReturn.lastAction > 3000) {
        pendingReturn.lastAction = now;
        if (!walkToSpot(pendingReturn.targetX, pendingReturn.targetY)) {
          pendingReturn.attempts++;
          if (pendingReturn.attempts > 8) {
            abortReturn('Không tính được đường về (' + pendingReturn.targetX + ',' + pendingReturn.targetY + ').');
            return;
          }
        }
        setStatus('Đang đi về (' + pendingReturn.targetX + ', ' + pendingReturn.targetY + ')...');
      }
    }
  }

  function advanceHop() {
    pendingReturn.hopIndex++;
    pendingReturn.attempts = 0;
    pendingReturn.switchTries = 0;
    pendingReturn.stuck = 0;
    pendingReturn.lastPos = null;
    pendingReturn.stopSent = false;
    pendingReturn.maneuver = false;
    pendingReturn.phase = (pendingReturn.hopIndex >= pendingReturn.plan.length) ? 'walking_to_target' : 'walking_to_portal';
    pendingReturn.lastAction = 0;
    dbg('Qua map xong, chặng', pendingReturn.hopIndex + 1, '/', pendingReturn.plan.length);
  }

  // --- Phát hiện chết ---------------------------------------------------
  var DEATH_WORDS = ['gục', 'tự hồi', 'tử nạn'];
  function normText(s) { return String(s || '').toLowerCase(); }
  function gameText() {
    var texts = [];
    try {
      var kids = document.body ? document.body.children : [];
      for (var i = 0; i < kids.length; i++) {
        var el = kids[i];
        if (el === panel || el === reopen) continue;
        texts.push(el.innerText || el.textContent || '');
      }
    } catch (e) {}
    for (var f = 0; f < window.frames.length; f++) {
      try { texts.push(window.frames[f].document.body.innerText || ''); } catch (e) {}
    }
    return normText(texts.join('\n'));
  }
  function deathVisible() {
    var t = gameText();
    for (var i = 0; i < DEATH_WORDS.length; i++) {
      if (t.indexOf(DEATH_WORDS[i]) !== -1) return true;
    }
    return false;
  }

  function findButtonsIn(word) {
    var found = [];
    var roots = [];
    try { roots.push(document); } catch (e) {}
    for (var f = 0; f < window.frames.length; f++) {
      try { roots.push(window.frames[f].document); } catch (e) {}
    }
    for (var r = 0; r < roots.length; r++) {
      var els = roots[r].querySelectorAll('button, div, span, a, [role="button"]');
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (panel.contains(el) || reopen === el) continue;
        var txt = normText(el.textContent).trim();
        if (txt && txt.indexOf(word) !== -1 && txt.length < 30) found.push(el);
      }
    }
    return found;
  }
  function hardClick(el) {
    try {
      var r = el.getBoundingClientRect();
      var x = r.left + r.width / 2, y = r.top + r.height / 2;
      ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(function (type) {
        el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y }));
      });
    } catch (e) {
      try { el.click(); } catch (e2) {}
    }
  }
  function autoClickVeLang() {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      var btns = findButtonsIn('làng');
      if (btns.length) {
        dbg('Bấm nút:', JSON.stringify(normText(btns[btns.length - 1].textContent)));
        hardClick(btns[btns.length - 1]);
        clearInterval(timer);
        return;
      }
      if (tries > 10) clearInterval(timer);
    }, 500);
  }

  // --- Bật/tắt tự động đánh (nút khoanh đỏ) -----------------------------
  // Chết: tắt để đường về không bị dừng lại đánh quái. Tới nơi: bật lại.
  // Thử hai đường: (1) API trong bộ nhớ game, (2) bấm vào phần tử chữ
  // "Tự Động" của mod trên màn hình (như người chơi chạm nút).
  var autoWasOn = null;
  function findAutoElements() {
    var found = [];
    var roots = [document];
    for (var f = 0; f < window.frames.length; f++) {
      try { roots.push(window.frames[f].document); } catch (e) {}
    }
    for (var r = 0; r < roots.length; r++) {
      var els = roots[r].querySelectorAll('div, span, button, p');
      for (var i = 0; i < els.length; i++) {
        var txt = (els[i].textContent || '').toLowerCase();
        if (txt.indexOf('tự động') !== -1 && txt.length < 30) found.push(els[i]);
      }
    }
    return found;
  }
  function autoStateFromUI() {
    var els = findAutoElements();
    for (var i = 0; i < els.length; i++) {
      var t = (els[i].textContent || '').toLowerCase();
      if (t.indexOf('bật') !== -1) return true;
      if (t.indexOf('tắt') !== -1) return false;
    }
    return null;
  }
  function setAutoFight(on) {
    var done = false;
    try {
      var gw = getGameWin();
      if (!gw) return false;
      var scene = gw.PNTT.Game.scene, p = scene.player;
      var methods = ['setAutoFight', 'setAuto', 'setAutoAttack'];
      for (var i = 0; i < methods.length; i++) {
        if (typeof p[methods[i]] === 'function') { p[methods[i]](on); done = true; break; }
        if (typeof scene[methods[i]] === 'function') { scene[methods[i]](on); done = true; break; }
      }
      if (!done) {
        var flags = ['autoFight', 'auto', 'isAuto', 'autoAttack'];
      for (var i = 0; i < flags.length; i++) {
        if (typeof p[flags[i]] === 'boolean') return p[flags[i]];
      }
    } catch (e) {}
    return null;
  }

  function onDeath() {
    deathCoord = lastCoord;
    if (deathCoord) saveJSON(KEY_DEATH, deathCoord);
    autoWasOn = readAutoState(); // nhớ trạng thái auto đánh để bật lại khi tới nơi
    panel.style.display = 'block';
    reopen.style.display = 'none';
    renderStatus();
    if (deathCoord) autoClickVeLang();
    dbg('Phát hiện chết! Lưu', deathCoord && deathCoord.x, deathCoord && deathCoord.y,
      'map', deathCoord && deathCoord.mapId);
  }

  // Ghi chú: biến timer/observer được gán ở phần cuối (setInterval/MutationObserver)
  // nên shutdownScript cần chạy sau khi chúng đã được gán; dùng cờ shuttingDown
  // để vòng tự gắn lại panel không ngóc đầu dậy sau khi đã bấm tắt.

  // --- Vòng quét chính --------------------------------------------------
  timer = setInterval(function () {
    if (shuttingDown) return;
    // Game/client mod thỉnh thoảng dựng lại body, panel bị gỡ mất.
    // Mỗi giây kiểm tra và gắn lại, trừ khi đã bấm "Tắt GoBack".
    if (!panel.isConnected && !shuttingDown) {
      try {
        document.body.append(panel, reopen);
        reopen.style.display = panel.style.display === 'none' ? 'block' : 'none';
        dbg('Đã gắn lại panel sau khi trang bị dựng lại');
      } catch (e) {
        if (document.body) document.body.append(panel, reopen);
      }
    }

    var pos = readPlayerPos();
    if (pos) {
      lastCoord = { x: pos.x, y: pos.y, t: Date.now(), mapId: readMapId() };
      history.push(lastCoord);
      if (++saveTick % SAVE_EVERY === 0) saveJSON(KEY_HIST, history.slice(-MAX_HISTORY));
    }

    // Map id chỉ được tin khi hai vòng liên tiếp đọc giống nhau,
    // tránh bắt nhầm map cũ trong lúc game đang chuyển cảnh.
    var mid = readMapId();
    if (mid === prevMapId) {
      stableMapId = mid;
    } else {
      stableMapId = null;
    }
    prevMapId = mid;

    var visible = deathVisible();
    if (visible && !deathActive) {
      if (lastCoord) {
        deathActive = true;
        onDeath();
      }
    } else if (!visible && deathActive) {
      deathActive = false;
      if (deathCoord && !pendingReturn) {
        returnPending = true;
        returnDeadline = Date.now() + 6000;
        setAutoFight(false); // đã về làng: tắt auto đánh để đường về sạch sẽ
        dbg('Đã về làng, tắt auto đánh, chờ hồi sinh rồi quay lại');
      }
    }

    if (!deathActive && !pendingReturn && !deathCoord && lastCoord && readDeadFlag()) {
      deathActive = true;
      onDeath();
    }

    if (returnPending && deathCoord && !pendingReturn) {
      // Xuất phát chỉ khi map đã ổn định, hoặc quá 6 giây thì đành đi luôn
      if ((stableMapId && stableMapId !== deathCoord.mapId) || Date.now() > returnDeadline) {
        returnPending = false;
        replanCount = 0;
        dbg('Hồi sinh xong (map ổn định:', stableMapId, '), bắt đầu quay lại');
        startReturn(deathCoord.mapId, deathCoord.x, deathCoord.y);
      }
    }

    stepReturn();
  }, POLL_MS);

  mount();
})();
