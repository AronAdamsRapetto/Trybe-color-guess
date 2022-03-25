const boxCores = document.getElementById('box-ballCores');

function geraCores() {
  for (let i = 1; i <= 6; i += 1) {
    const novaCor = document.createElement('div');
    novaCor.classList.add('ball');
    boxCores.appendChild(novaCor);
  }
}

geraCores();
