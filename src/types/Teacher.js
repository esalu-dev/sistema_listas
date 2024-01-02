export class Teacher {
  constructor(nombre, paterno, materno, user, password, departamento, imgUrl) {
    this.nombre = nombre;
    this.paterno = paterno;
    this.materno = materno;
    this.user = user;
    this.password = password;
    this.departamento = departamento;
    this.imgUrl = imgUrl;
  }

  getFullName() {
    return `${this.nombre} ${this.paterno} ${this.materno}`;
  }
}
