window.onload = function() {

	var canvas = document.getElementById("maze-canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = parseInt(canvas.getAttribute('width'));
	canvas.height = parseInt(canvas.getAttribute('height'));

	canvas.background = "#def";

	const direction = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3 };
	const state = { STOP: 0, START: 1 };

	const mapsControl = document.getElementById('maze-select');

	const startButton = document.getElementById('start');
	startButton.addEventListener('click', function() {
		mazeMouse.start();
	});

	const stopButton = document.getElementById('stop');
	stopButton.addEventListener('click', function() {
		mazeMouse.stop();
	});

	stopButton.disabled = true;
	
	var mazeMap = [];
	var mazeCount = [];
	var steps = 0;
	const MAX_STEPS = 5;

	var mazeArea = {
		cellSize: 18,
		cellDist: 2,
		colsCount: 65,
		rowsCount: 33,
		cellColor: "#cde",
		wallColor: '#666',
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
		color: '#c00',
		init: function() {
			this.x = 1;
			this.y = 1;
			mazeArea.paintCell(this.x, this.y, this.color);
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
			mazeArea.paintCell(this.x, this.y, mazeArea.cellColor);
			const index = this.y * mazeArea.colsCount + this.x;
			mazeCount[index]++;
			const which = Math.floor(Math.random() * 2);
			switch (this.direction) {
				case direction.UP:
					if (this.isCollision()) this.direction = which ? direction.LEFT : direction.RIGHT;
					else if (this.isBranchLeft()) { this.direction = direction.LEFT; this.x--; }
					else if (this.isBranchRight()) { this.direction = direction.RIGHT; this.x++; }
					else if (this.y > 1) this.y--;
					break;
				case direction.DOWN:
					if (this.isCollision()) this.direction = which ? direction.LEFT : direction.RIGHT;
					else if (this.isBranchLeft()) { this.direction = direction.RIGHT; this.x++; }
					else if (this.isBranchRight()) { this.direction = direction.LEFT; this.x--; }
					else if (this.y < mazeArea.rowsCount - 1) this.y++;
					break;
				case direction.LEFT:
					if (this.isCollision()) this.direction = which ? direction.UP : direction.DOWN;
					else if (this.isBranchLeft()) { this.direction = direction.DOWN; this.y++; }
					else if (this.isBranchRight()) { this.direction = direction.UP; this.y--; }
					else if (this.x > 1) this.x--;
					break;
				case direction.RIGHT:
					if (this.isCollision()) this.direction = which ? direction.UP : direction.DOWN;
					else if (this.isBranchLeft()) { this.direction = direction.UP; this.y--; }
					else if (this.isBranchRight()) { this.direction = direction.DOWN; this.y++; }
					else if (this.x < mazeArea.colsCount - 1) this.x++;
					break;
			}
			mazeArea.paintCell(this.x, this.y, this.color);
			if (this.state == state.START) {
				setTimeout(function() {
					mazeMouse.move();
				}, 20);
			}
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
	};

	mazeArea.init();
	mazeArea.loadMaps();
	mazeArea.loadMaze(0);

}
