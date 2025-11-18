export interface ApiError {
  errorCode: string; // Ej: "INVALID_PASSWORD_FORMAT" [cite: 54]
  message: string; // Mensaje descriptivo para el usuario
  statusCode: number; // Ej: 400
}