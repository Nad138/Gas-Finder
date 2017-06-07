const Gasfinder = () => {
  const parent = $('<div class="search"></div>');
  const input = $("<input class='input-search' type='text' placeholder='Ingresa tu destino a buscar'>");
  const search = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const result = $('<div class="result"></div>');
  const options = $('<div class="options"></div>');
  const name = $('<h1>Grifo '+ +'</h1>');
  const span = $('<span class="station"></span>');


  input.append(search);
  parent.append(input);

  return parent;

}
