type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  console.log(cls);
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
}
