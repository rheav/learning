import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: "paragraph" | "link";
	content: string;
}

export interface PostType {
	id: number;
	author: Author;
	publishedAt: Date;
	content: Content[];
}

interface PostProps {
	post: PostType;
}

export function Post({ post }: PostProps) {
	const [comments, setComments] = useState(["Post muito legal!"]);
	const [newCommentTxt, setNewCommentTxt] = useState("");

	console.log(newCommentTxt);

	const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' H:mm'h'", {
		locale: ptBR,
	});

	const pubDateRelativeNow = formatDistanceToNow(post.publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
		console.log(e.target.setCustomValidity(""));

		setNewCommentTxt(e.target.value);
	}

	function handleCreateNewComment(e: FormEvent) {
		e.preventDefault();

		setComments([...comments, newCommentTxt]);

		setNewCommentTxt("");
	}

	function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
		console.log(e.target.setCustomValidity("Esse campo é obrigatório!"));
	}

	function deleteComment(commentToDelete: string) {
		//imutabilidade -> as variáveis não sofrem mutação -> nao alterar valor de var na memoria -> criamos um novo valor (novo espaço na memoria)

		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentTxt.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar
						hasBorder={true}
						src={post.author.avatarUrl}
					/>
					<div className={styles.authorInfo}>
						<strong>{post.author.name}</strong>
						<span>{post.author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={post.publishedAt.toISOString()}
				>
					{pubDateRelativeNow}
				</time>
			</header>

			<div className={styles.content}>
				{post.content.map((post) => {
					if (post.type === "paragraph") {
						return <p key={post.content}>{post.content}</p>;
					} else if (post.type === "link") {
						return (
							<p key={post.content}>
								<a>{post.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu feedback</strong>
				<textarea
					onChange={handleNewCommentChange}
					placeholder="Deixe um comentário"
					value={newCommentTxt}
					onInvalid={handleNewCommentInvalid}
					required
				></textarea>
				<footer>
					<button
						type="submit"
						disabled={isNewCommentEmpty}
					>
						Publicar
					</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}

export default Post;
