function saveAndChange() {
  var original = document.getElementById("original").value;

  var translationS = document.getElementsByName('translation');       
		for(i = 0; i < translationS.length; i++) { 
            if(translationS[i].checked) 
            var translation = translationS[i].value; 
        } 

  console.log(original);
  console.log(translation);

  var translated = "";

  if (translation == "toCarnatic") {



	translated = original.replace(/C#/gi, 'R1'); 
	translated = translated.replace(new RegExp('C#', 'gi'), 'R1');

	translated = translated.replace(/C/gi, 'S'); 
	translated = translated.replace(new RegExp('C', 'gi'), 'S');

	translated = translated.replace(/Db/gi, 'R1'); 
	translated = translated.replace(new RegExp('Db', 'gi'), 'R1');

	translated = translated.replace(/G/gi, 'P'); 
	translated = translated.replace(new RegExp('G', 'gi'), 'P');

	translated = translated.replace(/D#/gi, 'G1'); 
	translated = translated.replace(new RegExp('D#', 'gi'), 'G1');

	translated = translated.replace(/D/gi, 'R2'); 
	translated = translated.replace(new RegExp('D', 'gi'), 'R2');

	translated = translated.replace(/Eb/gi, 'G1'); 
	translated = translated.replace(new RegExp('Eb', 'gi'), 'G1');

	translated = translated.replace(/E/gi, 'G2'); 
	translated = translated.replace(new RegExp('E', 'gi'), 'G2');

	translated = translated.replace(/F#/gi, 'M2'); 
	translated = translated.replace(new RegExp('F#', 'gi'), 'M2');

	translated = translated.replace(/F/gi, 'M1'); 
	translated = translated.replace(new RegExp('F', 'gi'), 'M1');

	translated = translated.replace(/Pb/gi, 'M2'); 
	translated = translated.replace(new RegExp('Gb', 'gi'), 'M2');

	translated = translated.replace(/P#/gi, 'D1'); 
	translated = translated.replace(new RegExp('G#', 'gi'), 'D1');

	translated = translated.replace(/Ab/gi, 'D1'); 
	translated = translated.replace(new RegExp('Ab', 'gi'), 'D1');

	translated = translated.replace(/A#/gi, 'N1'); 
	translated = translated.replace(new RegExp('A#', 'gi'), 'N1');

	translated = translated.replace(/A/gi, 'D2'); 
	translated = translated.replace(new RegExp('A', 'gi'), 'D2');

	translated = translated.replace(/Bb/gi, 'N1'); 
	translated = translated.replace(new RegExp('Bb', 'gi'), 'N1');

	translated = translated.replace(/B/gi, 'N2'); 
	translated = translated.replace(new RegExp('B', 'gi'), 'N2');

  }

  if (translation == "toWestern") {

	translated = original.replace(/S/gi, 'C'); 
	translated = translated.replace(new RegExp('S', 'gi'), 'C');

	translated = translated.replace(/R1/gi, 'C#'); 
	translated = translated.replace(new RegExp('R1', 'gi'), 'C#');

	translated = translated.replace(/R2/gi, 'D'); 
	translated = translated.replace(new RegExp('R2', 'gi'), 'D');

	translated = translated.replace(/G1/gi, 'Eb'); 
	translated = translated.replace(new RegExp('G1', 'gi'), 'Eb');

	translated = translated.replace(/G2/gi, 'E'); 
	translated = translated.replace(new RegExp('G2', 'gi'), 'E');

	translated = translated.replace(/M1/gi, 'F'); 
	translated = translated.replace(new RegExp('M1', 'gi'), 'F');

	translated = translated.replace(/M2/gi, 'F#'); 
	translated = translated.replace(new RegExp('M2', 'gi'), 'F#');

	translated = translated.replace(/P/gi, 'G'); 
	translated = translated.replace(new RegExp('P', 'gi'), 'G');

	translated = translated.replace(/D1/gi, 'Ab'); 
	translated = translated.replace(new RegExp('D1', 'gi'), 'Ab');

	translated = translated.replace(/D2/gi, 'A'); 
	translated = translated.replace(new RegExp('D2', 'gi'), 'A');

	translated = translated.replace(/N1/gi, 'Bb'); 
	translated = translated.replace(new RegExp('N1', 'gi'), 'Bb');

	translated = translated.replace(/N2/gi, 'B'); 
	translated = translated.replace(new RegExp('N2', 'gi'), 'B');

  }

  document.getElementById('changed').innerHTML = translated;
}