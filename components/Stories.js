import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { signOut, useSession } from "next-auth/react";

function Stories() {
    const [suggetsions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
            border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black" >

            {session && (
                <Story img={session.user.image} username={session.user.username} />
            )}

            {suggetsions.map(profile => (
                <Story
                    key={profile.id}
                    img="https://links.papareact.com/3ke"//{profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
