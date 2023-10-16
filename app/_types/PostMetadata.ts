import { Timestamp } from "./Timestamp";

type PostMetadata = {
	id: string;
  title: string;
  created: Timestamp;
  edited: Timestamp;
  author: string | string[];
  tags: string[]; // TODO: Not use for now.
  description: string;
  showComment: boolean;
  visible: boolean;
  pinToTop: boolean;
};

export type { PostMetadata };
