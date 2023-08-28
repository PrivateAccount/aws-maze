window.onload = function() {

	var canvas = document.getElementById("maze-canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = parseInt(canvas.getAttribute('width'));
	canvas.height = parseInt(canvas.getAttribute('height'));

	canvas.background = "#def";

	var mazeMap = [];
	var mazeCount = [];
	var steps = 0;
	var markVisited = false;
	const MAX_STEPS = 5;
	const MOVE_STEP_PERIOD = 20;

	const direction = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
	const state = { STOP: 0, START: 1 };
    const finishRange = { LEFT: 28, RIGHT: 36, TOP: 14, BOTTOM: 18 };

	const mapsControl = document.getElementById('maze-select');

	const startButton = document.getElementById('start');
	startButton.addEventListener('click', function() {
		mazeMouse.start();
	});

	const stopButton = document.getElementById('stop');
	stopButton.addEventListener('click', function() {
		mazeMouse.stop();
	});

	const markHistory = document.getElementById('mark-history');
	markHistory.addEventListener('click', function() {
		markVisited = markHistory.checked;
	});

    const displayPosX = document.getElementById('position-x');
    const displayPosY = document.getElementById('position-y');
    const displayTimeMin = document.getElementById('time-min');
    const displayTimeSec = document.getElementById('time-sec');

	stopButton.disabled = true;
	
	var mazeArea = {
		cellSize: 18,
		cellDist: 2,
		colsCount: 65,
		rowsCount: 33,
		cellColor: "#cde",
		wallColor: '#666',
		visitedColor: '#abc',
		pureMazeData: '',
		init: function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = canvas.background;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			for (i = 0; i < this.colsCount; i++) {
				for (j = 0; j < this.rowsCount; j++) {
					this.paintCell(i, j, this.cellColor);
				}
			}
		},
		paintCell: function(x, y, color) {
			ctx.fillStyle = color;
			ctx.fillRect(x * this.cellSize + this.cellDist / 2 + 1, y * this.cellSize + this.cellDist / 2 + 1, this.cellSize - this.cellDist, this.cellSize - this.cellDist);
		},
		paintWalls: function(data) {
			var index = 0, color = '#fff';
			mazeMap = [];
			mazeCount = [];
			for (j = 0; j < this.rowsCount; j++) {
				for (i = 0; i < this.colsCount; i++) {				
					if (data.charCodeAt(index) == 10) index++;
					if (data.charCodeAt(index) == 111) color = this.wallColor;
					if (data.charCodeAt(index) == 45) color = this.wallColor;
					if (data.charCodeAt(index) == 124) color = this.wallColor;
					if (data.charCodeAt(index) == 32) color = this.cellColor;
					this.paintCell(i, j, color);
					mazeMap.push(data.charCodeAt(index) == 32);
					mazeCount.push(0);
					index++;
				}
			}
		},
		loadMaze: function(mazeIndex) {
			var gap = String.fromCharCode(10);
			const gapDepth = mazeData[mazeIndex].data.indexOf('o') - 1;
			for (var i = 0; i < gapDepth; i++)
				gap += String.fromCharCode(32);
			this.pureMazeData = mazeData[mazeIndex].data.replace(new RegExp(gap, 'g'), String.fromCharCode(10));
			this.paintWalls(this.pureMazeData);
			mazeMouse.init();
		},
		loadMaps: function() {
			var options = '';
			for (var i = 0; i < mazeData.length; i++) {
				options += '<option value="' + i + '">' + mazeData[i].name + '</option>'
			}
			mapsControl.innerHTML = options;
			mapsControl.addEventListener('change', function() {
				mazeArea.loadMaze(mapsControl.value);
			});
		},
	};

	var mazeMouse = {
		x: 0,
		y: 0,
		direction: direction.RIGHT,
		state: state.STOP,
        step: 0,
		color: '#c00',
        finish: '#090',
		init: function() {
			this.x = 1;
			this.y = 1;
            this.step = 0;
			mazeArea.paintCell(this.x, this.y, this.color);
            this.updateDisplay();
            startButton.disabled = false;
		},
		isCollision: function() {
			var index = 0;
			switch (this.direction) {
				case direction.UP:
					index = (this.y - 1) * mazeArea.colsCount + this.x;
					break;
				case direction.DOWN:
					index = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
				case direction.LEFT:
					index = this.y * mazeArea.colsCount + this.x - 1;
					break;
				case direction.RIGHT:
					index = this.y * mazeArea.colsCount + this.x + 1;
					break;
			}
			return !mazeMap[index];
		},
		isCornerLeft: function() {
			var leftIndex = 0, rightIndex = 0;
			switch (this.direction) {
				case direction.UP:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.DOWN:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.LEFT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
				case direction.RIGHT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
			}
			return !mazeMap[leftIndex] && mazeMap[rightIndex];
		},
		isCornerRight: function() {
			var leftIndex = 0, rightIndex = 0;
			switch (this.direction) {
				case direction.UP:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.DOWN:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.LEFT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
				case direction.RIGHT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
			}
			return mazeMap[leftIndex] && !mazeMap[rightIndex];
		},
		isLocking: function() {
			var leftIndex = 0, rightIndex = 0;
			switch (this.direction) {
				case direction.UP:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.DOWN:
					leftIndex = this.y * mazeArea.colsCount + this.x - 1;
					rightIndex = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.LEFT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
				case direction.RIGHT:
					leftIndex = (this.y - 1) * mazeArea.colsCount + this.x;
					rightIndex = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
			}
			return !mazeMap[leftIndex] && !mazeMap[rightIndex];
		},
		isBranchLeft: function() {
			var index = 0;
			switch (this.direction) {
				case direction.UP:
					index = this.y * mazeArea.colsCount + this.x - 1;
					break;
				case direction.DOWN:
					index = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.LEFT:
					index = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
				case direction.RIGHT:
					index = (this.y - 1) * mazeArea.colsCount + this.x;
					break;
			}
			if (mazeMap[index]) steps++;
			if (steps >= Math.floor(Math.random() * MAX_STEPS) + MAX_STEPS) steps = 0;
			return mazeMap[index] && !steps;
		},
		isBranchRight: function() {
			var index = 0;
			switch (this.direction) {
				case direction.UP:
					index = this.y * mazeArea.colsCount + this.x + 1;
					break;
				case direction.DOWN:
					index = this.y * mazeArea.colsCount + this.x - 1;
					break;
				case direction.LEFT:
					index = (this.y - 1) * mazeArea.colsCount + this.x;
					break;
				case direction.RIGHT:
					index = (this.y + 1) * mazeArea.colsCount + this.x;
					break;
			}
			if (mazeMap[index]) steps++;
			if (steps >= Math.floor(Math.random() * MAX_STEPS) + MAX_STEPS) steps = 0;
			return mazeMap[index] && !steps;
		},
		move: function() {
			if (markVisited)
				mazeArea.paintCell(this.x, this.y, mazeArea.visitedColor);
			else
				mazeArea.paintCell(this.x, this.y, mazeArea.cellColor);
			const index = this.y * mazeArea.colsCount + this.x;
			mazeCount[index]++;
			const which = Math.floor(Math.random() * 2);
			switch (this.direction) {
				case direction.UP:
					if (this.isCollision()) { 
						if (this.isCornerLeft()) {
							this.direction = direction.RIGHT;
						} 
						else if (this.isCornerRight()) {
							this.direction = direction.LEFT;
						} 
						else if (this.isLocking()) {
							this.direction = direction.DOWN;
							mazeMap[index] = false;
						} 
						else { 
							this.direction = which ? direction.LEFT : direction.RIGHT; 
						}
					}
					else if (this.isBranchLeft()) { this.direction = direction.LEFT; this.x--; }
					else if (this.isBranchRight()) { this.direction = direction.RIGHT; this.x++; }
					else if (this.y > 1) this.y--;
					break;
				case direction.DOWN:
					if (this.isCollision()) { 
						if (this.isCornerLeft()) {
							this.direction = direction.RIGHT;
						} 
						else if (this.isCornerRight()) {
							this.direction = direction.LEFT;
						} 
						else if (this.isLocking()) {
							this.direction = direction.UP;
							mazeMap[index] = false;
						} 
						else { 
							this.direction = which ? direction.LEFT : direction.RIGHT; 
						}
					}
					else if (this.isBranchLeft()) { this.direction = direction.RIGHT; this.x++; }
					else if (this.isBranchRight()) { this.direction = direction.LEFT; this.x--; }
					else if (this.y < mazeArea.rowsCount - 1) this.y++;
					break;
				case direction.LEFT:
					if (this.isCollision()) { 
						if (this.isCornerLeft()) {
							this.direction = direction.UP;
						} 
						else if (this.isCornerRight()) {
							this.direction = direction.DOWN;
						} 
						else if (this.isLocking()) {
							this.direction = direction.RIGHT;
							mazeMap[index] = false;
						} 
						else { 
							this.direction = which ? direction.UP : direction.DOWN; 
						}
					}
					else if (this.isBranchLeft()) { this.direction = direction.DOWN; this.y++; }
					else if (this.isBranchRight()) { this.direction = direction.UP; this.y--; }
					else if (this.x > 1) this.x--;
					break;
				case direction.RIGHT:
					if (this.isCollision()) { 
						if (this.isCornerLeft()) {
							this.direction = direction.DOWN;
						} 
						else if (this.isCornerRight()) {
							this.direction = direction.UP;
						} 
						else if (this.isLocking()) {
							this.direction = direction.LEFT;
							mazeMap[index] = false;
						} 
						else { 
							this.direction = which ? direction.UP : direction.DOWN; 
						}
					}
					else if (this.isBranchLeft()) { this.direction = direction.UP; this.y--; }
					else if (this.isBranchRight()) { this.direction = direction.DOWN; this.y++; }
					else if (this.x < mazeArea.colsCount - 1) this.x++;
					break;
			}
			mazeArea.paintCell(this.x, this.y, this.color);
            this.checkIsFinish();
            this.updateDisplay();
			if (this.state == state.START) {
				setTimeout(function() {
					mazeMouse.move();
				}, MOVE_STEP_PERIOD);
			}
            this.step++;
		},
		start: function() {
			startButton.disabled = true;
			stopButton.disabled = false;
			mapsControl.disabled = true;
			this.state = state.START;
			this.move();
		},
		stop: function() {
			startButton.disabled = false;
			stopButton.disabled = true;
			mapsControl.disabled = false;
			this.state = state.STOP;
		},
        checkIsFinish: function() {
            if (this.x > finishRange.LEFT && this.x < finishRange.RIGHT && this.y > finishRange.TOP && this.y < finishRange.BOTTOM) {
                mazeArea.paintCell(this.x - 1, this.y - 1, this.finish);
                mazeArea.paintCell(this.x + 1, this.y - 1, this.finish);
                mazeArea.paintCell(this.x, this.y - 1, this.finish);
                mazeArea.paintCell(this.x - 1, this.y, this.finish);
                mazeArea.paintCell(this.x + 1, this.y, this.finish);
                mazeArea.paintCell(this.x - 1, this.y + 1, this.finish);
                mazeArea.paintCell(this.x + 1, this.y + 1, this.finish);
                mazeArea.paintCell(this.x, this.y + 1, this.finish);
                this.stop();
                startButton.disabled = true;
            }
        },
        updateDisplay: function() {
            const dt = 1000 / MOVE_STEP_PERIOD;
            var minute = 0, second = 0, ticks = 0;
            displayPosX.innerText = this.x;
            displayPosY.innerText = this.y;
            if (this.step % dt == 0) {
                ticks = this.step / dt;
                second = Math.floor(ticks % 60);
                minute = Math.floor(ticks / 60);
                displayTimeMin.innerText = minute.toString();
                displayTimeSec.innerText = second.toString();
            }
        },
	};

	mazeArea.init();
	mazeArea.loadMaps();
	mazeArea.loadMaze(0);

}
