import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'dmbaker90',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'this is dope'
    },
    {
        id: '124',
        username: 'dmbaker90',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'this is dope'
    }
]


function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
