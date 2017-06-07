const print = () => {
  const result = $('<div class="result"></div>'); // Se muestra en esta parte los resultados//
  const options = $('<div class="options"></div>');
  const resultName = $('<p>Grifo</p>');
  const resultHouse = $('<span class="station">direccion</span>');

  options.append(resultName);
  options.append(resultHouse);
  result.append(options);

  return result;
  }

const Gasfinder = () => {
  const parent = $('<div class="search"></div>');
  const input = $("<input class='input-search' type='text' placeholder='Ingresa tu destino a buscar'>");
  const search = $('<i class="fa fa-search" aria-hidden="true"></i>');

  input.append(search);
  parent.append(input);

  input.on('keyup',(e) => {
    if (e.which === '13') {
      if (input.val() != "") {
        filterByDistrict();
      }
      }
  });

  return parent;

}
