import React from "react";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/* SECTION */}
      <section className="col-span-2">
        {/* STORIES */}
        {/* STORIES ENDS */}

        {/* POSTS */}
        <Posts />
        {/* POSTS ENDS */}
      </section>

      {/* SECTION */}
      {session && (
        <>
          <section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed top-20">
              {/* MINI PROFILE */}
              <MiniProfile />
              {/* SUGGESTIONS */}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Feed;
