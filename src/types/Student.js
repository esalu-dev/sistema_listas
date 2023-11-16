export class Student {
  constructor(
    nombre,
    paterno,
    materno,
    carrera,
    semestre,
    num_control,
    imgUrl,
    horario,
    materias_acreditadas
  ) {
    this.nombre = nombre;
    this.paterno = paterno;
    this.materno = materno;
    this.carrera = carrera;
    this.semestre = semestre;
    this.num_control = num_control;
    this.imgUrl = imgUrl;
    this.horario = horario;
    this.materias_acreditadas = materias_acreditadas;
  }

  getFullName() {
    return `${this.nombre} ${this.paterno} ${this.materno}`;
  }
}
