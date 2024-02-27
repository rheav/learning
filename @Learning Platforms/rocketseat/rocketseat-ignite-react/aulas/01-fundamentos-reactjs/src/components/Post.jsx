import { useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(["Post muito legal!"]);
	const [newCommentTxt, setNewCommentTxt] = useState("");

	console.log(newCommentTxt);

	const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' H:mm'h'", { locale: ptBR });

	const pubDateRelativeNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleNewCommentChange(e) {
		console.log(e.target.setCustomValidity(""));

		setNewCommentTxt(e.target.value);
	}

	function handleCreateNewComment(e) {
		e.preventDefault();

		setComments([...comments, newCommentTxt]);

		setNewCommentTxt("");
	}

	function handleNewCommentInvalid(e) {
		console.log(e.target.setCustomValidity("Esse campo é obrigatório!"));
	}

	function deleteComment(commentToDelete) {
		//imutabilidade -> as variáveis não sofrem mutação -> nao alterar valor de var na memoria -> criamos um novo valor (novo espaço na memoria)

		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	}

	let isNewCommentEmpty = newCommentTxt.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar
						hasBorder={true}
						src={author.avatarUrl}
					/>
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{pubDateRelativeNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((post) => {
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
							commentList={comments}
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
