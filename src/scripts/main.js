AOS.init();

const dataDoEvento = new Date('june 31, 2023 19:00:00');
const timeTempDoEvento = dataDoEvento.getTime();


const passaTempo = setInterval(function(){
  const dataAtual = new Date();
  const timeAtual = dataAtual.getTime();

  const tempoAteOEvento = timeTempDoEvento - timeAtual;
  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEms = 1000 * 60;

  const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
  const horasAteOevento = Math.floor((tempoAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOevento = Math.floor((tempoAteOEvento % horaEmMs) / minutosEms);
  const segundosAteOvento = Math.floor((tempoAteOEvento % minutosEms) / 1000);

  

  document.getElementById('contador').innerHTML = ` ${diasAteOEvento}d ${horasAteOevento}hs ${minutosAteOevento}m ${segundosAteOvento}s`;
    if(tempoAteOEvento < 0 ){
        clearInterval(passaTempo);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)