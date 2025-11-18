export enum ApiErrorMessageVerify {
  INVALID_TOKEN = 'El token enviado no es válido.',
  TRADER_HAS_NOT_PHONE_NUMBER_YET = 'No tienes un número de teléfono asignado.',
  BAD_REQUEST = 'Los datos enviados no son válidos o no coinciden con el formato requerido.',
  UNAUTHORIZED = 'No estás autorizado. Inicia sesión nuevamente o verifica tus credenciales.',
  UNEXPECTED_ERROR = 'Ocurrió un error inesperado en el servidor.'
}