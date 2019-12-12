export interface SwapiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
