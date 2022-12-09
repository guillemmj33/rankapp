import dataAPI from '../../data/dataAPI.json';

function asignDevice() {
  for (let i = 0; i < dataAPI.data.length; i++) {
    let aleatory = Math.round(Math.random() * 2);
    if (aleatory === 2) {
      dataAPI.data[i].device = "Versión móvil";
    } else if (aleatory === 1) {
      dataAPI.data[i].device = "Versión tablet";
    } else {
      dataAPI.data[i].device = "Versión escritorio";
    }
    // console.log(aleatory);
  }
  // console.log(dataAPI);

}

asignDevice()
