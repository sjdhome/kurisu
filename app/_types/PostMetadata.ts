type PostMetadata = {
  id: string;
  title: string;
  created: number;
  modified: number;
  author: string[];
  tags: string[];
  description: string;
  enableComment: boolean;
  visible: boolean;
};

export type { PostMetadata };
