window.onload = function() {

    var canvas = document.getElementById("maze-canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = parseInt(canvas.getAttribute('width'));
	canvas.height = parseInt(canvas.getAttribute('height'));

    canvas.background = "#def";

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
            for (j = 0; j < this.rowsCount; j++) {
			    for (i = 0; i < this.colsCount; i++) {				
                    if (data.charCodeAt(index) == 10) index++;
                    if (data.charCodeAt(index) == 111) color = this.wallColor;
                    if (data.charCodeAt(index) == 45) color = this.wallColor;
                    if (data.charCodeAt(index) == 124) color = this.wallColor;
                    if (data.charCodeAt(index) == 32) color = this.cellColor;
					this.paintCell(i, j, color);
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
        },
    }

    mazeArea.init();
    mazeArea.loadMaze(0);
}
