import BlogHeader from "@/app/_components/BlogHeader";
import Copyright from "@/app/_components/Copyright";
import { PostMetadata } from "@/app/_types/PostMetadata";

export default function Page({ metadata, content }: { metadata: PostMetadata, content: string }) {
	const created = new Date(metadata.created);
	const edited = new Date(metadata.edited);
	return <>
		<header>
			<BlogHeader />
		</header>
		<div>
			<main>
				<h1>{metadata.title}</h1>
				<small>创作于<time dateTime={created.toISOString()}>{created.toLocaleDateString()}</time>，编辑于<time dateTime={edited.toISOString()}>{edited.toLocaleDateString()}</time></small>
				<div dangerouslySetInnerHTML={{__html: content}}></div>
			</main>
		</div>
		<footer>
			<Copyright />
		</footer>
	</>
}