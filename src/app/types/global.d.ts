declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const __IS_DEV__: boolean;

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
