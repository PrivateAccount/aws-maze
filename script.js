window.onload = function() {

	var canvas = document.getElementById("maze-canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = parseInt(canvas.getAttribute('width'));
	canvas.height = parseInt(canvas.getAttribute('height'));

	canvas.background = "#def";

	var mazeMap = [];
	var mazeCount = [];
	var steps = 0;
	var record = 10000000;
	var markVisited = false;
	
	const MIN_STEPS = 50;
	const MAX_STEPS = 100;
	const MOVE_STEP_PERIOD = 20;
	const PLAY_STEP_PERIOD = 100;

	const direction = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
	const state = { STOP: 0, START: 1 };
	const areaSize = { COLS: 33, ROWS : 33 };
	const areaCell = { SIZE: 20, MARGIN: 2 };
	const finishRange = { LEFT: 14, RIGHT: 18, TOP: 14, BOTTOM: 18 };
	const areaMiddle = { X: 16, Y : 16 };
	const mode = { DEMO: 1, PLAY: 2, EDIT: 3 }

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

	const displayStep = document.getElementById('step');
	const displayPosX = document.getElementById('position-x');
	const displayPosY = document.getElementById('position-y');
	const displayTimeMin = document.getElementById('time-min');
	const displayTimeSec = document.getElementById('time-sec');
	const displayRecordMin = document.getElementById('record-min');
	const displayRecordSec = document.getElementById('record-sec');

	const modeDemo = document.getElementById('demo');
	modeDemo.addEventListener('click', function() {
		mazeMouse.mode = mode.DEMO;
		stopButton.click();
	});
	const modePlay = document.getElementById('play');
	modePlay.addEventListener('click', function() {
		mazeMouse.mode = mode.PLAY;
		stopButton.click();
	});

	const modeEdit = document.getElementById('edit');
	modeEdit.addEventListener('click', function() {
		mazeMouse.mode = mode.EDIT;
		stopButton.click();
	});

	const message = document.getElementById('msg');

	document.addEventListener('keydown', function(event) {
		if (mazeMouse.state == state.START) {
			event.preventDefault();
		}
		if (mazeMouse.mode == mode.PLAY) {
			switch (event.key) {
				case 'ArrowUp':
					mazeMouse.direction = direction.UP;
					startButton.click();
					break;
				case 'ArrowDown':
					mazeMouse.direction = direction.DOWN;
					startButton.click();
					break;
				case 'ArrowLeft':
					mazeMouse.direction = direction.LEFT;
					startButton.click();
					break;
				case 'ArrowRight':
					mazeMouse.direction = direction.RIGHT;
					startButton.click();
					break;
			}
		}
		if (mazeMouse.mode == mode.EDIT && mazeEditor.active) {
			switch (event.key) {
				case 'ArrowUp':
				case 'ArrowDown':
				case 'ArrowLeft':
				case 'ArrowRight':
					mazeEditor.move(event.key);
					break;
				case ' ':
					mazeEditor.changeCell();
					break;
				case 'c':
					mazeEditor.insertColumn();
					break;
				case 'r':
					mazeEditor.insertRow();
					break;
				case 'C':
					mazeEditor.removeColumn();
					break;
				case 'R':
					mazeEditor.removeRow();
					break;
				case 'Delete':
					mazeEditor.clearArea();
					break;	
			}
		}
	});

	var mazeArea = {
		cellSize: areaCell.SIZE,
		cellDist: areaCell.MARGIN,
		colsCount: areaSize.COLS,
		rowsCount: areaSize.ROWS,
		cellColor: "#cde",
		wallColor: '#666',
		hotColor: '#eca',
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
			displayRecordMin.innerText = '0';
			displayRecordSec.innerText = '0';
			stopButton.disabled = true;
		},
		paintCell: function(x, y, color) {
			ctx.fillStyle = color;
			ctx.fillRect(x * this.cellSize + this.cellDist, y * this.cellSize + this.cellDist, this.cellSize - this.cellDist, this.cellSize - this.cellDist);
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
					if (i == areaMiddle.X && j == areaMiddle.Y)
						this.paintCell(i, j, color);
					else if (i > finishRange.LEFT && i < finishRange.RIGHT && j > finishRange.TOP && j < finishRange.BOTTOM)
						this.paintCell(i, j, this.hotColor);
					else
						this.paintCell(i, j, color);
					mazeMap.push(data.charCodeAt(index) == 32);
					mazeCount.push(0);
					index++;
				}
			}
		},
		loadMaze: function(mazeIndex) {
			var gap = String.fromCharCode(10), stepsData = [];
			const patterns = [
				{ from: '---', to: '-' },
				{ from: '    ', to: 'D' },
				{ from: '   ', to: 'S' },
				{ from: 'D', to: '  ' },
				{ from: 'S', to: ' ' },
			];
			const gapDepth = mazeData[mazeIndex].data.indexOf('o') - 1;
			for (var i = 0; i < gapDepth; i++)
				gap += String.fromCharCode(32);
			stepsData[stepsData.length] = mazeData[mazeIndex].data.replace(new RegExp(gap, 'g'), String.fromCharCode(10));
			for (var i = 0; i < patterns.length; i++)
				stepsData[i + 1] = stepsData[i].replace(new RegExp(patterns[i].from, 'g'), patterns[i].to);
			this.pureMazeData = stepsData[patterns.length];
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
		branch: {},
		state: state.STOP,
		mode: mode.DEMO,
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
		preferBranch: function(currentCount) {
			var result = { found: false, direction: 0 };
			var indexes = [
				(this.y - 1) * mazeArea.colsCount + this.x,
				this.y * mazeArea.colsCount + this.x + 1,
				(this.y + 1) * mazeArea.colsCount + this.x,
				this.y * mazeArea.colsCount + this.x - 1,
			];
			var minCounter = currentCount;
			var counter = 0, which, idx;
			which = Math.floor(Math.random() * 2);
			for (var i = 0; i < indexes.length; i++) {
				idx = which ? i : indexes.length - i - 1;
				counter = mazeCount[indexes[idx]];
				if (mazeMap[indexes[idx]]) {
					if (counter < minCounter) {
						minCounter = counter;
						result.found = true;
						result.direction = idx;
					}
				}
			}
			return result;
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
			if (++steps >= Math.floor(Math.random() * MAX_STEPS) + MIN_STEPS) steps = 0;
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
			if (++steps >= Math.floor(Math.random() * MAX_STEPS) + MIN_STEPS) steps = 0;
			return mazeMap[index] && !steps;
		},
		move: function() {
			if (markVisited)
				mazeArea.paintCell(this.x, this.y, mazeArea.visitedColor);
			else
				mazeArea.paintCell(this.x, this.y, mazeArea.cellColor);
			const index = this.y * mazeArea.colsCount + this.x;
			mazeCount[index]++;
			this.branch = this.preferBranch(mazeCount[index]);
			if (this.branch.found) {
				this.direction = this.branch.direction;
			}
			var which = 0, newIndex = 0, found = false;
			do {
				which = Math.floor(Math.random() * 2);
				switch (this.direction) {
					case direction.UP:
						newIndex = (this.y - 1) * mazeArea.colsCount + this.x;
						if (this.isCollision()) { 
							this.direction = which ? direction.LEFT : direction.RIGHT; 
						}
						else if (this.isBranchLeft()) { 
							this.direction = direction.LEFT; 
							found = true;
						}
						else if (this.isBranchRight()) { 
							this.direction = direction.RIGHT; 
							found = true;
						}
						else if (mazeMap[newIndex]) { this.y--; found = true; }
						else this.direction = which ? direction.LEFT : direction.RIGHT;
						break;
					case direction.DOWN:
						newIndex = (this.y + 1) * mazeArea.colsCount + this.x;
						if (this.isCollision()) { 
							this.direction = which ? direction.LEFT : direction.RIGHT; 
						}
						else if (this.isBranchLeft()) { 
							this.direction = direction.LEFT; 
							found = true;
						}
						else if (this.isBranchRight()) { 
							this.direction = direction.RIGHT; 
							found = true;
						}
						else if (mazeMap[newIndex]) { this.y++; found = true; }
						else this.direction = which ? direction.LEFT : direction.RIGHT;
						break;
					case direction.LEFT:
						newIndex = this.y * mazeArea.colsCount + this.x - 1;
						if (this.isCollision()) { 
							this.direction = which ? direction.UP : direction.DOWN; 
						}
						else if (this.isBranchLeft()) { 
							this.direction = direction.DOWN; 
							found = true;
						}
						else if (this.isBranchRight()) { 
							this.direction = direction.UP; 
							found = true;
						}
						else if (mazeMap[newIndex]) { this.x--; found = true; }
						else this.direction = which ? direction.UP : direction.DOWN;
						break;
					case direction.RIGHT:
						newIndex = this.y * mazeArea.colsCount + this.x + 1;
						if (this.isCollision()) { 
							this.direction = which ? direction.UP : direction.DOWN; 
						}
						else if (this.isBranchLeft()) { 
							this.direction = direction.UP; 
							found = true;
						}
						else if (this.isBranchRight()) { 
							this.direction = direction.DOWN; 
							found = true;
						}
						else if (mazeMap[newIndex]) { this.x++; found = true; }
						else this.direction = which ? direction.UP : direction.DOWN;
						break;
				}
			}
			while (!found && mazeMap[newIndex]);
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
		play: function() {
			if (markVisited)
				mazeArea.paintCell(this.x, this.y, mazeArea.visitedColor);
			else
				mazeArea.paintCell(this.x, this.y, mazeArea.cellColor);
			const index = this.y * mazeArea.colsCount + this.x;
			mazeCount[index]++;
			var newIndex = 0, found = false;
			do {
				switch (this.direction) {
					case direction.UP:
						newIndex = (this.y - 1) * mazeArea.colsCount + this.x;
						if (this.isCollision()) stopButton.click();
						else if (mazeMap[newIndex]) { this.y--; found = true; }
						break;
					case direction.DOWN:
						newIndex = (this.y + 1) * mazeArea.colsCount + this.x;
						if (this.isCollision()) stopButton.click();
						else if (mazeMap[newIndex]) { this.y++; found = true; }
						break;
					case direction.LEFT:
						newIndex = this.y * mazeArea.colsCount + this.x - 1;
						if (this.isCollision()) stopButton.click();
						else if (mazeMap[newIndex]) { this.x--; found = true; }
						break;
					case direction.RIGHT:
						newIndex = this.y * mazeArea.colsCount + this.x + 1;
						if (this.isCollision()) stopButton.click();
						else if (mazeMap[newIndex]) { this.x++; found = true; }
						break;
				}
			}
			while (!found && this.state == state.START);
			mazeArea.paintCell(this.x, this.y, this.color);
			this.checkIsFinish();
			this.updateDisplay();
			if (this.state == state.START) {
				setTimeout(function() {
					mazeMouse.play();
				}, PLAY_STEP_PERIOD);
			}
			this.step++;
		},
		start: function() {
			startButton.disabled = true;
			stopButton.disabled = false;
			mapsControl.disabled = true;
			this.state = state.START;
			if (this.mode == mode.DEMO) this.move();
			if (this.mode == mode.PLAY) this.play();
			if (this.mode == mode.EDIT) mazeEditor.init();
		},
		stop: function() {
			startButton.disabled = false;
			stopButton.disabled = true;
			mapsControl.disabled = false;
			if (this.mode == mode.EDIT) mazeEditor.complete();
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
				this.showRecord();
				startButton.disabled = true;
			}
		},
		updateDisplay: function() {
			var dt, minute = 0, second = 0, ticks = 0;
			if (this.mode == mode.DEMO) dt = 1000 / MOVE_STEP_PERIOD;
			if (this.mode == mode.PLAY) dt = 1000 / PLAY_STEP_PERIOD;
			displayStep.innerText = this.step.toString();
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
		showRecord: function() {
			var dt, minute = 0, second = 0, ticks = 0;
			if (this.mode == mode.DEMO) dt = 1000 / MOVE_STEP_PERIOD;
			if (this.mode == mode.PLAY) dt = 1000 / PLAY_STEP_PERIOD;
			if (this.step && this.step < record) {
				record = this.step;
				ticks = record / dt;
				second = Math.floor(ticks % 60);
				minute = Math.floor(ticks / 60);
				displayRecordMin.innerText = minute.toString();
				displayRecordSec.innerText = second.toString();
			}
		},
	};

	var mazeEditor = {
		x: 0,
		y: 0,
		index: 0,
		cellColor: '#fc0',
		wallColor: '#36f',
		active: false,
		step: 0,
		init: function() {
			this.x = 1;
			this.y = 1;
			this.index = this.y * mazeArea.colsCount + this.x;
			this.active = true;
			this.step = 0;
			this.show();
			this.updateDisplay();
		},
		show: function() {
			const idx = this.y * mazeArea.colsCount + this.x;
			const color = mazeMap[idx] ? this.cellColor : this.wallColor;
			mazeArea.paintCell(this.x, this.y, color);
			message.innerText = 'Use keys: Up, Down, Left, Right, Space, (Shift) C, (Shift) R, Delete.';
		},
		hide: function() {
			const idx = this.y * mazeArea.colsCount + this.x;
			const color = mazeMap[idx] ? mazeArea.cellColor : mazeArea.wallColor;
			mazeArea.paintCell(this.x, this.y, color);
			message.innerText = '';
		},
		complete: function() {
			this.active = false;
			this.hide();
			const index = mazeMouse.y * mazeArea.colsCount + mazeMouse.x;
			mazeMap[index] = true;
			mazeArea.paintCell(mazeMouse.x, mazeMouse.y, mazeMouse.color);
		},
		move: function(direction) {
			this.hide();
			switch (direction) {
				case 'ArrowUp':
					if (this.y > 1) this.y--;
					if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) this.y++;
					break;
				case 'ArrowDown':
					if (this.y < mazeArea.rowsCount - 2) this.y++;
					if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) this.y--;
					break;
				case 'ArrowLeft':
					if (this.x > 1) this.x--;
					if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) this.x++;
					break;
				case 'ArrowRight':
					if (this.x < mazeArea.colsCount - 2) this.x++;
					if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) this.x--;
					break;
			}
			this.index = this.y * mazeArea.colsCount + this.x;
			this.show();
			this.step++;
			this.updateDisplay();
		},
		changeCell: function() {
			mazeMap[this.index] = !mazeMap[this.index];
			this.show();
		},
		insertColumn: function() {
			var idx = 0;
			for (var i = 1; i < mazeArea.rowsCount - 1; i++) {
				if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && i >= finishRange.TOP && i <= finishRange.BOTTOM) continue;
				idx = i * mazeArea.colsCount + this.x;
				mazeMap[idx] = false;
				mazeArea.paintCell(this.x, i, mazeArea.wallColor);
			}
			this.show();
		},
		insertRow: function() {
			var idx = 0;
			for (var i = 1; i < mazeArea.colsCount - 1; i++) {
				if (i >= finishRange.LEFT && i <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) continue;
				idx = this.y * mazeArea.colsCount + i;
				mazeMap[idx] = false;
				mazeArea.paintCell(i, this.y, mazeArea.wallColor);
			}
			this.show();
		},
		removeColumn: function() {
			var idx = 0;
			for (var i = 1; i < mazeArea.rowsCount - 1; i++) {
				if (this.x >= finishRange.LEFT && this.x <= finishRange.RIGHT && i >= finishRange.TOP && i <= finishRange.BOTTOM) continue;
				idx = i * mazeArea.colsCount + this.x;
				mazeMap[idx] = true;
				mazeArea.paintCell(this.x, i, mazeArea.cellColor);
			}
			this.show();
		},
		removeRow: function() {
			var idx = 0;
			for (var i = 1; i < mazeArea.colsCount - 1; i++) {
				if (i >= finishRange.LEFT && i <= finishRange.RIGHT && this.y >= finishRange.TOP && this.y <= finishRange.BOTTOM) continue;
				idx = this.y * mazeArea.colsCount + i;
				mazeMap[idx] = true;
				mazeArea.paintCell(i, this.y, mazeArea.cellColor);
			}
			this.show();
		},
		clearArea: function() {
			var idx = 0;
			for (var i = 1; i < mazeArea.rowsCount - 1; i++) {
				for (var j = 1; j < mazeArea.colsCount - 1; j++) {
					if (j >= finishRange.LEFT && j <= finishRange.RIGHT && i >= finishRange.TOP && i <= finishRange.BOTTOM) continue;
					idx = i * mazeArea.colsCount + j;
					mazeMap[idx] = true;
					mazeArea.paintCell(j, i, mazeArea.cellColor);
				}
			}
			this.show();
		},
		updateDisplay: function() {
			displayStep.innerText = this.step.toString();
			displayPosX.innerText = this.x;
			displayPosY.innerText = this.y;
		},
	};

	mazeArea.init();
	mazeArea.loadMaps();
	mazeArea.loadMaze(0);
	modeDemo.click();

}
