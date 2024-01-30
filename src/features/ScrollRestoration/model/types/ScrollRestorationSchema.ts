// key - page name, value - scroll position
export type Scroll = Record<string, number>;

export interface ScrollRestorationSchema {
  scroll: Scroll;
}
