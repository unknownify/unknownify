declare global {
  interface JSON {
    parse (text: string, reviver?: (this: unknown, key: string, value: unknown) => unknown): unknown
    stringify(value: unknown, replacer?: (this: unknown, key: string, value: unknown) => unknown, space?: string | number): string;
    stringify(value: unknown, replacer?: (number | string)[] | null, space?: string | number): string;
  }
}

export {}
