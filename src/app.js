const arrays = arr => arr[Math.floor(Math.random() * arr.length)],
quien = ['Mi gato', 'Tu madre', 'Hacienda', 'CR7'],
accion = ['se comió', 'se cagó', 'rompió', 'se fumó'],
que = ['mi nómina', 'mi Jaiphone', 'un Lamborghini Huracan (que es de pobres)'],
cuando = ['a final de mes', 'cuando estaba durmiendo', 'mientras hacia burpees', 'mientras cenaba', 'mientras veia la Isla de las Tentaciones'],
      
generarExcusa = () => `${arrays(quien)} ${arrays(accion)} ${arrays(que)} ${arrays(cuando)}.`;

document.getElementById("boton").addEventListener("click", () => {
  const excusa = generarExcusa();
  document.getElementById("excusa").textContent = excusa;
});
