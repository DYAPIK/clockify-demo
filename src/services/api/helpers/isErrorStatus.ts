export function isErrorStatus(status: number): boolean {
  return status >= 400 && status <= 526;
}
