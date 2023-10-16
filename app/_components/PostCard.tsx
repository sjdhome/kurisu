import { PostMetadata } from "../_types/PostMetadata";
import Block from "./Block";

export default function PostCard({ post }: { post: PostMetadata }) {
	const created = new Date(post.created);
	const edited = new Date(post.edited);
	return <Block border={true}>
		<h1>{post.title}</h1>
		<small>{created.toLocaleDateString()}{ post.created !== post.edited ? ` · ${edited.toLocaleDateString()}` : "" }</small>
		<p>{post.description}</p>
	</Block>
}