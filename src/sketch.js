let capture
let detector
let bg
let  = false

let img
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
let img11
let img12
let img13
let img14
let img15
let img16
let img17
let img18
let img19
let img20
let img21
let img22
let img23
let img24
let img25
let img26
let img27
let img28
let img29
let img30
let img31
let img32
let img33
let img34
let img35
let img36
let img37
let img38
let img39
let img40

let bocca
let occhiod
let occhios
let sopras
let soprad

// const imgsize = 300
// const img2size = 300
// const img3size = 300
// const img4size = 300
// const img5size = 300
// const img6size = 300
// const img7size = 300
// const img8size = 300
// const img9size = 300
// const img10size = 300




async function setup() {
  
	createCanvas(windowWidth, windowHeight)

	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()
	
	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")
	//img.resize(200,81)
	// img2.resize(300,300)
	// img3.resize(300,300)
	// img4.resize(300,300)
	// img5.resize(300,300)
	// img6.resize(300,300)
	// img7.resize(300,300)
	// img8.resize(300,300)
	// img9.resize(300,300)
	// img10.resize(300,300)

	    bocca = img6
		occhiod = img7
		occhios = img8
		sopras = img10
		soprad = img9


	// console.log (sopras)
}

function preload() {
	img = loadImage('img/01_Bocca_felice_1.png')
	img2 = loadImage ('img/01_Occhio_DX_1.png')
	img3 = loadImage ('img/01_Occhio_SX_1.png')
	img4 = loadImage ('img/01_Sopra_DX_1.png')
	img5 = loadImage ('img/01_Sopra_SX_1.png')
	img6 = loadImage ('img/02_Bocca_sorride_2.png')
	img7 = loadImage  ('img/02_Occhio_DX_2.png')
	img8 = loadImage ('img/02_Occhio_SX_2.png')
	img9 = loadImage ('img/02_Sopra_DX_2.png')
	img10 = loadImage ('img/02_Sopra_SX_2.png')
	img11 = loadImage ('img/03_Bocca_seria_3.png')
	img12 = loadImage ('img/03_Occhio_DX_3.png')
	img13 = loadImage ('img/03_Occhio_SX_3.png')
	img14 = loadImage ('img/03_Sopra_DX_3.png')
	img15 = loadImage ('img/03_Sopra_SX_3.png')
	img16 = loadImage ('img/04_Bocca_incurvata_4.png')
	img17 = loadImage ('img/04_Occhio_DX_4.png')
	img18 = loadImage ('img/04_Occhio_SX_4.png')
	img19 = loadImage ('img/04_Sopra_DX_4.png')
	img20 = loadImage ('img/04_Sopra_SX_4.png')
	img21 = loadImage ('img/05_Bocca_poco_arrab_5.png')
	img22 = loadImage ('img/05_Occhio_DX_5.png')
	img23 = loadImage ('img/05_Occhio_SX_5.png')
	img24 = loadImage ('img/05_Sopra_DX_5.png')
	img25 = loadImage ('img/05_Sopra_SX_5.png')
	img26 = loadImage ('img/06_Bocca_arrab_6.png')
	img27 = loadImage ('img/06_Occhio_DX_6.png')
	img28 = loadImage ('img/06_Occhio_SX_6.png')
	img29 = loadImage ('img/06_Sopra_DX_6.png')
	img30 = loadImage ('img/06_Sopra_SX_6.png')
	img31 = loadImage ('img/07_Bocca_arrab_7.png')
	img32 = loadImage ('img/07_Occhio_DX_7.png')
	img33 = loadImage ('img/07_Occhio_SX_7.png')
	img34 = loadImage ('img/07_Sopra_DX_7.png')
	img35 = loadImage ('img/07_Sopra_SX_7.png')
	img36 = loadImage ('img/08_Bocca_super_arrab_8.png')
	img37 = loadImage ('img/08_Occhio_DX_8.png')
	img38 = loadImage ('img/08_Occhio_SX_8.png')
	img39 = loadImage ('img/08_Sopra_DX_8.png')
	img40 = loadImage ('img/08_Sopra_SX_8.png')
}

function windowResized (){
	resizeCanvas (windowWidth, windowHeight)
}

function keyPressed () {
	//console.log(keyCode)
	// keyCode = !keyCode

	if (key == '1'){	
		
		bocca = img
		occhiod = img2
		occhios = img3
		sopras = img5
		soprad = img4
		
	} else if (key == '2'){
		bocca = img6
		occhiod = img7
		occhios = img8
		sopras = img10
		soprad = img9
	}

	if (key == '3'){	
		
		bocca = img11
		occhiod = img12
		occhios = img13
		sopras = img15
		soprad = img14
		
	} else if (key == '4'){
		bocca = img16
		occhiod = img17
		occhios = img18
		sopras = img19
		soprad = img20
	}

	if (key == '5'){	
		
		bocca = img21
		occhiod = img22
		occhios = img23
		sopras = img25
		soprad = img24
		
	} else if (key == '6'){
		bocca = img26
		occhiod = img27
		occhios = img28
		sopras = img30
		soprad = img29
	}

	if (key == '7'){	
		
		bocca = img31
		occhiod = img32
		occhios = img33
		sopras = img35
		soprad = img34
		
	} else if (key == '8'){
		bocca = img36
		occhiod = img37
		occhios = img38
		sopras = img40
		soprad = img39
	}





}

async function draw() {

	scale (min(windowWidth/640, windowHeight/2))
	background(156,156,156)

	// Disegna la webcam sullo stage, a specchio
	// push()
	// scale(-1, 1)
	// image(capture, -640, 0)
	// pop()

	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })

		for (let j=0; j<hands.length; j++) {
			const hand = hands[j]
			const handedness = hand.handedness // Left : Right
			noStroke()
			fill(0) 

		  //bg = background(255,0,0)
		
			image (sopras, hand.keypoints[8].x, hand.keypoints[8].y)
			image(soprad, hand.keypoints[12].x, hand.keypoints[12].y);
			image (occhiod, hand.keypoints[7].x, hand.keypoints[7].y);			
			image (occhios, hand.keypoints[11].x, hand.keypoints[11].y);				
			image (bocca, hand.keypoints[4].x, hand.keypoints[4].y);
			
		}		
	}
}




async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 2,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
