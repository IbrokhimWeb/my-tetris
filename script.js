var main = function() {
    function s(a, g, d) {
        var f, c, e;
        for (c = 0; c < 30; c++)
            for (f = 0; f < 73; f++) e = (f + c * 74) * 4, a[e] = a[e + 4], a[e + 1] = a[e + 5], a[e + 2] = a[e + 6];
        for (c = 0; c < 30; c++) e = (73 + c * 74) * 4, c < g ? (a[e] = b[d].bg.r, a[e + 1] = b[d].bg.g, a[e + 2] = b[d].bg.b) : (a[e] = b[d].fg.r, a[e + 1] = b[d].fg.g, a[e + 2] = b[d].fg.b)
    }
    var r = 0,
        t = 2,
        g, u = 0,
        j = (new Date).getTime(),
        F = j,
        v = j,
        l = 0,
        w = 1E3,
        x = 0,
        k, d, a, m, y, n = 0,
        z = 1E3,
        A = 0,
        f, c, o, B, p = 0,
        C = 1E3,
        D = 0,
        h, i, q, E, b = {
            fps: {
                bg: {
                    r: 16,
                    g: 16,
                    b: 48
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 255
                }
            },
            ms: {
                bg: {
                    r: 16,
                    g: 48,
                    b: 16
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 0
                }
            },
            mb: {
                bg: {
                    r: 48,
                    g: 16,
                    b: 26
                },
                fg: {
                    r: 255,
                    g: 0,
                    b: 128
                }
            }
        };
    g = document.createElement("div");
    g.style.cursor = "pointer";
    g.style.width = "80px";
    g.style.opacity = "0.9";
    g.style.zIndex = "10001";
    g.addEventListener("click", function() {
        r++;
        r == t && (r = 0);
        k.style.display = "none";
        f.style.display = "none";
        h.style.display = "none";
        switch (r) {
            case 0:
                k.style.display = "block";
                break;
            case 1:
                f.style.display = "block";
                break;
            case 2:
                h.style.display = "block"
        }
    }, !1);
    k = document.createElement("div");
    k.style.backgroundColor = "rgb(" + Math.floor(b.fps.bg.r / 2) + "," + Math.floor(b.fps.bg.g /
        2) + "," + Math.floor(b.fps.bg.b / 2) + ")";
    k.style.padding = "2px 0px 3px 0px";
    g.appendChild(k);
    d = document.createElement("div");
    d.style.fontFamily = "Helvetica, Arial, sans-serif";
    d.style.textAlign = "left";
    d.style.fontSize = "9px";
    d.style.color = "rgb(" + b.fps.fg.r + "," + b.fps.fg.g + "," + b.fps.fg.b + ")";
    d.style.margin = "0px 0px 1px 3px";
    d.innerHTML = '<span style="font-weight:bold">FPS</span>';
    k.appendChild(d);
    a = document.createElement("canvas");
    a.width = 74;
    a.height = 30;
    a.style.display = "block";
    a.style.marginLeft = "3px";
    k.appendChild(a);
    m = a.getContext("2d");
    m.fillStyle = "rgb(" + b.fps.bg.r + "," + b.fps.bg.g + "," + b.fps.bg.b + ")";
    m.fillRect(0, 0, a.width, a.height);
    y = m.getImageData(0, 0, a.width, a.height);
    f = document.createElement("div");
    f.style.backgroundColor = "rgb(" + Math.floor(b.ms.bg.r / 2) + "," + Math.floor(b.ms.bg.g / 2) + "," + Math.floor(b.ms.bg.b / 2) + ")";
    f.style.padding = "2px 0px 3px 0px";
    f.style.display = "none";
    g.appendChild(f);
    c = document.createElement("div");
    c.style.fontFamily = "Helvetica, Arial, sans-serif";
    c.style.textAlign = "left";
    c.style.fontSize =
        "9px";
    c.style.color = "rgb(" + b.ms.fg.r + "," + b.ms.fg.g + "," + b.ms.fg.b + ")";
    c.style.margin = "0px 0px 1px 3px";
    c.innerHTML = '<span style="font-weight:bold">MS</span>';
    f.appendChild(c);
    a = document.createElement("canvas");
    a.width = 74;
    a.height = 30;
    a.style.display = "block";
    a.style.marginLeft = "3px";
    f.appendChild(a);
    o = a.getContext("2d");
    o.fillStyle = "rgb(" + b.ms.bg.r + "," + b.ms.bg.g + "," + b.ms.bg.b + ")";
    o.fillRect(0, 0, a.width, a.height);
    B = o.getImageData(0, 0, a.width, a.height);
    try {
        performance && performance.memory && performance.memory.totalJSHeapSize &&
            (t = 3)
    } catch (G) {}
    h = document.createElement("div");
    h.style.backgroundColor = "rgb(" + Math.floor(b.mb.bg.r / 2) + "," + Math.floor(b.mb.bg.g / 2) + "," + Math.floor(b.mb.bg.b / 2) + ")";
    h.style.padding = "2px 0px 3px 0px";
    h.style.display = "none";
    g.appendChild(h);
    i = document.createElement("div");
    i.style.fontFamily = "Helvetica, Arial, sans-serif";
    i.style.textAlign = "left";
    i.style.fontSize = "9px";
    i.style.color = "rgb(" + b.mb.fg.r + "," + b.mb.fg.g + "," + b.mb.fg.b + ")";
    i.style.margin = "0px 0px 1px 3px";
    i.innerHTML = '<span style="font-weight:bold">MB</span>';
    h.appendChild(i);
    a = document.createElement("canvas");
    a.width = 74;
    a.height = 30;
    a.style.display = "block";
    a.style.marginLeft = "3px";
    h.appendChild(a);
    q = a.getContext("2d");
    q.fillStyle = "#301010";
    q.fillRect(0, 0, a.width, a.height);
    E = q.getImageData(0, 0, a.width, a.height);
    return {
        domElement: g,
        update: function() {
            u++;
            j = (new Date).getTime();
            n = j - F;
            z = Math.min(z, n);
            A = Math.max(A, n);
            s(B.data, Math.min(30, 30 - n / 200 * 30), "ms");
            c.innerHTML = '<span style="font-weight:bold">' + n + " MS</span> (" + z + "-" + A + ")";
            o.putImageData(B, 0, 0);
            F = j;
            if (j >
                v + 1E3) {
                l = Math.round(u * 1E3 / (j - v));
                w = Math.min(w, l);
                x = Math.max(x, l);
                s(y.data, Math.min(30, 30 - l / 100 * 30), "fps");
                d.innerHTML = '<span style="font-weight:bold">' + l + " FPS</span> (" + w + "-" + x + ")";
                m.putImageData(y, 0, 0);
                if (t == 3) p = performance.memory.usedJSHeapSize * 9.54E-7, C = Math.min(C, p), D = Math.max(D, p), s(E.data, Math.min(30, 30 - p / 2), "mb"), i.innerHTML = '<span style="font-weight:bold">' + Math.round(p) + " MB</span> (" + Math.round(C) + "-" + Math.round(D) + ")", q.putImageData(E, 0, 0);
                v = j;
                u = 0
            }
        }
    }
};

function get(id) {
    return document.getElementById(id);
};

function hide(id) {
    get(id).style.visibility = 'hidden';
};

function show(id) {
    get(id).style.visibility = null;
};

function html(id, html) {
    get(id).innerHTML = html;
};

function timestamp() {
    return new Date().getTime();
};

function random(min, max) {
    return (min + (Math.random() * (max - min)));
};

function randomChoice(choices) {
    return choices[Math.round(random(0, choices.length - 1))];
};

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
        }
}


var KEY = {
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    },
    DIR = {
        UP: 0,
        RIGHT: 1,
        DOWN: 2,
        LEFT: 3,
        MIN: 0,
        MAX: 3
    },
    main = new main(),
    canvas = get('canvas'),
    ctx = canvas.getContext('2d'),
    ucanvas = get('upcoming'),
    uctx = ucanvas.getContext('2d'),
    speed = {
        start: 0.6,
        decrement: 0.005,
        min: 0.1
    },
    nx = 10,
    ny = 20,
    nu = 5;


var dx, dy,
    blocks,
    actions,
    playing,
    dt,
    current,
    next,
    score,
    vscore,
    rows,
    step;

var i = {
    id: 'i',
    size: 4,
    blocks: [0x0F00, 0x2222, 0x00F0, 0x4444],
    color: 'cyan'
};
var j = {
    id: 'j',
    size: 3,
    blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20],
    color: 'blue'
};
var l = {
    id: 'l',
    size: 3,
    blocks: [0x4460, 0x0E80, 0xC440, 0x2E00],
    color: 'orange'
};
var o = {
    id: 'o',
    size: 2,
    blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00],
    color: 'yellow'
};
var s = {
    id: 's',
    size: 3,
    blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620],
    color: 'green'
};
var t = {
    id: 't',
    size: 3,
    blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640],
    color: 'purple'
};
var z = {
    id: 'z',
    size: 3,
    blocks: [0x0C60, 0x4C80, 0xC600, 0x2640],
    color: 'red'
};


function eachblock(type, x, y, dir, fn) {
    var bit, result, row = 0,
        col = 0,
        blocks = type.blocks[dir];
    for (bit = 0x8000; bit > 0; bit = bit >> 1) {
        if (blocks & bit) {
            fn(x + col, y + row);
        }
        if (++col === 4) {
            col = 0;
            ++row;
        }
    }
};

function occupied(type, x, y, dir) {
    var result = false
    eachblock(type, x, y, dir, function(x, y) {
        if ((x < 0) || (x >= nx) || (y < 0) || (y >= ny) || getBlock(x, y))
            result = true;
    });
    return result;
};

function unoccupied(type, x, y, dir) {
    return !occupied(type, x, y, dir);
};


var pieces = [];

function randomPiece() {
    if (pieces.length == 0)
        pieces = [i, i, i, i, j, j, j, j, l, l, l, l, o, o, o, o, s, s, s, s, t, t, t, t, z, z, z, z];
    var type = pieces.splice(random(0, pieces.length - 1), 1)[0];
    return {
        type: type,
        dir: DIR.UP,
        x: Math.round(random(0, nx - type.size)),
        y: 0
    };
};


function run() {

    showmain();
    addEvents();

    var last = now = timestamp();

    function frame() {
        now = timestamp();
        update(Math.min(1, (now - last) / 1000.0));
        draw();
        main.update();
        last = now;
        requestAnimationFrame(frame, canvas);
    }

    resize();
    reset();
    frame();

};

function showmain() {
    main.domElement.id = 'main';
    get('menu').appendChild(main.domElement);
};

function addEvents() {
    document.addEventListener('keydown', keydown, false);
    window.addEventListener('resize', resize, false);
};

function resize(event) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ucanvas.width = ucanvas.clientWidth;
    ucanvas.height = ucanvas.clientHeight;
    dx = canvas.width / nx;
    dy = canvas.height / ny;
    invalidate();
    invalidateNext();
};

function keydown(ev) {
    var handled = false;
    if (playing) {
        switch (ev.keyCode) {
            case KEY.LEFT:
                actions.push(DIR.LEFT);
                handled = true;
                break;
            case KEY.RIGHT:
                actions.push(DIR.RIGHT);
                handled = true;
                break;
            case KEY.UP:
                actions.push(DIR.UP);
                handled = true;
                break;
            case KEY.DOWN:
                actions.push(DIR.DOWN);
                handled = true;
                break;
            case KEY.ESC:
                lose();
                handled = true;
                break;
        }
    } else if (ev.keyCode == KEY.SPACE) {
        play();
        handled = true;
    }
    if (handled)
        ev.preventDefault();
};

function play() {
    hide('start');
    reset();
    playing = true;
};

function lose() {
    show('start');
    setVisualScore();
    playing = false;
};

function setVisualScore(n) {
    vscore = n || score;
    invalidateScore();
};

function setScore(n) {
    score = n;
    setVisualScore(n);
};

function addScore(n) {
    score = score + n;
};

function clearScore() {
    setScore(0);
};

function clearRows() {
    setRows(0);
};

function setRows(n) {
    rows = n;
    step = Math.max(speed.min, speed.start - (speed.decrement * rows));
    invalidateRows();
};

function addRows(n) {
    setRows(rows + n);
};

function getBlock(x, y) {
    return (blocks && blocks[x] ? blocks[x][y] : null);
};

function setBlock(x, y, type) {
    blocks[x] = blocks[x] || [];
    blocks[x][y] = type;
    invalidate();
};

function clearBlocks() {
    blocks = [];
    invalidate();
}

function clearActions() {
    actions = [];
};

function setCurrentPiece(piece) {
    current = piece || randomPiece();
    invalidate();
};

function setNextPiece(piece) {
    next = piece || randomPiece();
    invalidateNext();
};

function reset() {
    dt = 0;
    clearActions();
    clearBlocks();
    clearRows();
    clearScore();
    setCurrentPiece(next);
    setNextPiece();
};

function update(idt) {
    if (playing) {
        if (vscore < score)
            setVisualScore(vscore + 1);
        handle(actions.shift());
        dt = dt + idt;
        if (dt > step) {
            dt = dt - step;
            drop();
        }
    }
};

function handle(action) {
    switch (action) {
        case DIR.LEFT:
            move(DIR.LEFT);
            break;
        case DIR.RIGHT:
            move(DIR.RIGHT);
            break;
        case DIR.UP:
            rotate();
            break;
        case DIR.DOWN:
            drop();
            break;
    }
};

function move(dir) {
    var x = current.x,
        y = current.y;
    switch (dir) {
        case DIR.RIGHT:
            x = x + 1;
            break;
        case DIR.LEFT:
            x = x - 1;
            break;
        case DIR.DOWN:
            y = y + 1;
            break;
    }
    if (unoccupied(current.type, x, y, current.dir)) {
        current.x = x;
        current.y = y;
        invalidate();
        return true;
    } else {
        return false;
    }
};

function rotate(dir) {
    var newdir = (current.dir == DIR.MAX ? DIR.MIN : current.dir + 1);
    if (unoccupied(current.type, current.x, current.y, newdir)) {
        current.dir = newdir;
        invalidate();
    }
};

function drop() {
    if (!move(DIR.DOWN)) {
        addScore(10);
        dropPiece();
        removeLines();
        setCurrentPiece(next);
        setNextPiece(randomPiece());
        clearActions();
        if (occupied(current.type, current.x, current.y, current.dir)) {
            lose();
        }
    }
};

function dropPiece() {
    eachblock(current.type, current.x, current.y, current.dir, function(x, y) {
        setBlock(x, y, current.type);
    });
};

function removeLines() {
    var x, y, complete, n = 0;
    for (y = ny; y > 0; --y) {
        complete = true;
        for (x = 0; x < nx; ++x) {
            if (!getBlock(x, y))
                complete = false;
        }
        if (complete) {
            removeLine(y);
            y = y + 1;
            n++;
        }
    }
    if (n > 0) {
        addRows(n);
        addScore(100 * Math.pow(2, n - 1));
    }
};

function removeLine(n) {
    var x, y;
    for (y = n; y >= 0; --y) {
        for (x = 0; x < nx; ++x)
            setBlock(x, y, (y == 0) ? null : getBlock(x, y - 1));
    }
};

var invalid = {};

function invalidate() {
    invalid.court = true;
}

function invalidateNext() {
    invalid.next = true;
}

function invalidateScore() {
    invalid.score = true;
}

function invalidateRows() {
    invalid.rows = true;
}

function draw() {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.translate(0.5, 0.5);
    drawCourt();
    drawNext();
    drawScore();
    drawRows();
    ctx.restore();
};

function drawCourt() {
    if (invalid.court) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (playing)
            drawPiece(ctx, current.type, current.x, current.y, current.dir);
        var x, y, block;
        for (y = 0; y < ny; y++) {
            for (x = 0; x < nx; x++) {
                if (block = getBlock(x, y))
                    drawBlock(ctx, x, y, block.color);
            }
        }
        ctx.strokeRect(0, 0, nx * dx - 1, ny * dy - 1);
        invalid.court = false;
    }
};

function drawNext() {
    if (invalid.next) {
        var padding = (nu - next.type.size) / 2;
        uctx.save();
        uctx.translate(0.5, 0.5);
        uctx.clearRect(0, 0, nu * dx, nu * dy);
        drawPiece(uctx, next.type, padding, padding, next.dir);
        uctx.strokeStyle = 'black';
        uctx.strokeRect(0, 0, nu * dx - 1, nu * dy - 1);
        uctx.restore();
        invalid.next = false;
    }
};

function drawScore() {
    if (invalid.score) {
        html('score', ("00000" + Math.floor(vscore)).slice(-5));
        invalid.score = false;
    }
};

function drawRows() {
    if (invalid.rows) {
        html('rows', rows);
        invalid.rows = false;
    }
};

function drawPiece(ctx, type, x, y, dir) {
    eachblock(type, x, y, dir, function(x, y) {
        drawBlock(ctx, x, y, type.color);
    });
};

function drawBlock(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * dx, y * dy, dx, dy);
    ctx.strokeRect(x * dx, y * dy, dx, dy)
};

run();