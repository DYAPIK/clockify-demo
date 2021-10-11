export type Option<T extends string | number = string | number> = {
  label: string;
  value: T;
};
