export class ApiResponse<T> {
  code: number;
  message: string;
  data?: T[];

  constructor(code: number, message: string, data?: T[] | undefined) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
