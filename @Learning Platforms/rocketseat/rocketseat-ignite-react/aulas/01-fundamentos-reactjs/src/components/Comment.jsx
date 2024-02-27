import { useState } from "react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";
import { PiThumbsUpBold, PiTrashLight } from "react-icons/pi";

function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => state + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src="https://github.com/rheav.png"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Victor Rhea</strong>
							<time
								title="11 de setembro às 08:50h"
								dateTime="2023-09-11 08:50"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<PiTrashLight onClick={handleDeleteComment} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<PiThumbsUpBold />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}

export default Comment;
