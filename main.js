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

	translated = original.replace(/C/g, 'S'); 
	translated = translated.replace(new RegExp('C', 'g'), 'S');

	translated = translated.replace(/C#/g, 'R1'); 
	translated = translated.replace(new RegExp('C#', 'g'), 'R1');

	translated = translated.replace(/Db/g, 'R1'); 
	translated = translated.replace(new RegExp('Db', 'g'), 'R1');

	translated = translated.replace(/D/g, 'R2'); 
	translated = translated.replace(new RegExp('D', 'g'), 'R2');

	translated = translated.replace(/D#/g, 'G1'); 
	translated = translated.replace(new RegExp('D#', 'g'), 'G1');

	translated = translated.replace(/Eb/g, 'G1'); 
	translated = translated.replace(new RegExp('Eb', 'g'), 'G1');

	translated = translated.replace(/E/g, 'G2'); 
	translated = translated.replace(new RegExp('E', 'g'), 'G2');

	translated = translated.replace(/F/g, 'M1'); 
	translated = translated.replace(new RegExp('F', 'g'), 'M1');

	translated = translated.replace(/F#/g, 'M2'); 
	translated = translated.replace(new RegExp('F#', 'g'), 'M2');

	translated = translated.replace(/Gb/g, 'M2'); 
	translated = translated.replace(new RegExp('Gb', 'g'), 'M2');

	translated = translated.replace(/G/g, 'P'); 
	translated = translated.replace(new RegExp('G', 'g'), 'P');

	translated = translated.replace(/G#/g, 'D1'); 
	translated = translated.replace(new RegExp('G#', 'g'), 'D1');

	translated = translated.replace(/Ab/g, 'D1'); 
	translated = translated.replace(new RegExp('Ab', 'g'), 'D1');

	translated = translated.replace(/A/g, 'D2'); 
	translated = translated.replace(new RegExp('A', 'g'), 'D2');

	translated = translated.replace(/A#/g, 'N1'); 
	translated = translated.replace(new RegExp('A#', 'g'), 'N1');

	translated = translated.replace(/Bb/g, 'N1'); 
	translated = translated.replace(new RegExp('Bb', 'g'), 'N1');

	translated = translated.replace(/B/g, 'N2'); 
	translated = translated.replace(new RegExp('B', 'g'), 'N2');

  }

  if (translation == "toWestern") {

	translated = original.replace(/S/g, 'C'); 
	translated = translated.replace(new RegExp('S', 'g'), 'C');

	translated = translated.replace(/R1/g, 'C#'); 
	translated = translated.replace(new RegExp('R1', 'g'), 'C#');

	translated = translated.replace(/R2/g, 'D'); 
	translated = translated.replace(new RegExp('R2', 'g'), 'D');

	translated = translated.replace(/G1/g, 'Eb'); 
	translated = translated.replace(new RegExp('G1', 'g'), 'Eb');

	translated = translated.replace(/G2/g, 'E'); 
	translated = translated.replace(new RegExp('G2', 'g'), 'E');

	translated = translated.replace(/M1/g, 'F'); 
	translated = translated.replace(new RegExp('M1', 'g'), 'F');

	translated = translated.replace(/M2/g, 'F#'); 
	translated = translated.replace(new RegExp('M2', 'g'), 'F#');

	translated = translated.replace(/P/g, 'G'); 
	translated = translated.replace(new RegExp('P', 'g'), 'G');

	translated = translated.replace(/D1/g, 'Ab'); 
	translated = translated.replace(new RegExp('D1', 'g'), 'Ab');

	translated = translated.replace(/D2/g, 'A'); 
	translated = translated.replace(new RegExp('D2', 'g'), 'A');

	translated = translated.replace(/N1/g, 'Bb'); 
	translated = translated.replace(new RegExp('N1', 'g'), 'Bb');

	translated = translated.replace(/N2/g, 'B'); 
	translated = translated.replace(new RegExp('N2', 'g'), 'B');

  }

  document.getElementById('changed').innerHTML = translated;
}