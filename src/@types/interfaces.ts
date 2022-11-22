export interface NoticeState {
  notices: Array<Type>;
}

export interface Type {
  id: number;
  text: string;
  tag?: string;
}
