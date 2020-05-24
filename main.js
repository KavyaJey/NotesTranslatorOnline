function saveAndChange() {
  var original = document.getElementById("original").value;
  var translation = document.getElementsByName('translation');

  if (translation == "toCarnatic") {
	translation.replace(/C/gi, 'S'); 
	translation.replace(new RegExp('C', 'gi'), 'S');
  }

  if (translation == "toWestern") {
	translation.replace(/hello/gi, 'hi'); 
	translation.replace(new RegExp('hello', 'gi'), 'hi');
  }

  document.getElementById('changed').innerHTML = translation;
}