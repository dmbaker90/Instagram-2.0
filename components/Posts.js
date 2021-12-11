import Post from "./Post";
import { onSnapshot, collection, orderBy, query } from "@firebase/firestore";
import { db, storage } from "../firebase";
import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        }),
        [db]
    );

    console.log('posts = ', posts);

    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption} />
            ))}
        </div>
    )
}

export default Posts
