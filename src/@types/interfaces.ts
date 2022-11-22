export interface NoticeState {
  notices: Type[];
  searchByTag: string;
}

export interface Type {
  id: number;
  text: string;
  tag: string[];
}

export interface TagState {
  tags: string[];
  activeTag: string;
}
