import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
    const [suggetsions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm" >
            {suggetsions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </div>
    )
}

export default Stories
