type PostMetadata = {
  id: string;
  title: string;
  created: string;
  edited: string;
  author: string;
  tags: string[];
  description: string;
  commentable: boolean;
  visible: boolean;
  pinToTop: boolean;
};

export type { PostMetadata };
