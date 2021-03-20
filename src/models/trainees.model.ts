export class TraineesModel {
  static idCounter = 0;
  id: number;
  traineeName: string;
  courseName: string;
  joiningDate: string;
  courseDate: string;

  constructor(
    traineeName: string,
    courseName: string,
    joiningDate: string,
    courseDate: string
  ) {
    this.id = TraineesModel.idCounter++;
    this.courseDate = courseDate;
    this.joiningDate = joiningDate;
    this.courseName = courseName;
    this.traineeName = traineeName;
  }
}
