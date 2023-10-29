export type Message = {
  code?: number,
  message: string,
  category: Category
}

export enum Category {
  ERROR = 'error',
  INFO = 'info'
}