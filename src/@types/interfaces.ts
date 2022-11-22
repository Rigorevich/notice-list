export interface NoticeState {
  notices: Type[];
}

export interface Type {
  id: number;
  text: string;
  tag?: string[];
}
