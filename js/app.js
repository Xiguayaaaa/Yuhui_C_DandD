(()=>{
    //stub
    console.log("fired!");

    const puzzlePieces = document.querySelector(".puzzle-pieces"),
          gameboard = document.querySelector(".puzzle-board"),
          puzzleButtons = document.querySelectorAll(".buttonHolder img"),
          dropZones = document.querySelectorAll(".dropzone");

    let draggablePieces = puzzlePieces.querySelectorAll("img");

    const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

    function changeImageSet() {
        console.log(this);

        let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

        gameboard.style.backgroundImage = `url(${bgImage})`;

        draggablePieces.forEach((image,index) => {

            console.log(image,index);


            image.src = `images/${pieceNames[index]}${this.dataset.puzzleref}.jpg`;
            //debugger;
        });

		dropZones.forEach(zone => {
			zone.removeChild(zone.firstChild);
		});
    }

    puzzleButtons.forEach(thumbnail => { thumbnail.addEventListener("click", changeImageSet); });

    draggablePieces.forEach(piece => {
        piece.addEventListener("dragstart", function(e){
            console.log('draggin...');

            e.dataTransfer.setData("text/plain", this.id);
        });
    });


    dropZones.forEach(zone =>{

        zone.addEventListener("dragover", function(e) {
            e.preventDefault();
            console.log('dragged sumpin over me');
        });

        zone.addEventListener("drop", function(e) {
            e.preventDefault();

            console.log('you dropped sumpin on me');

            let draggedElement = e.dataTransfer.getData("text/plain");
            console.log('you dragged: ', draggedElement);

			if (zone.childElementCount == 0) {
				e.target.appendChild(document.querySelector(`#${draggedElement}`));
			}

			//debugger;
		});
    });

})();
