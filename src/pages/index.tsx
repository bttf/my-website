import Link from "next/link";
import { FC, ReactNode } from "react";
import { getPosts, PostOrPage } from "@/lib/ghost";

interface Props {
  posts: PostOrPage[];
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

const Home: FC<Props> = ({ posts }) => {
  return (
    <div className="flex px-4">
      <div className="w-1/2 pr-4">
        <div className="mb-2">
          <div className="text-xl text-right">Blog posts</div>
          <hr className="my-2" />
          <li className="list-none text-sm">Service Workers</li>
          <li className="list-none text-sm">Rich Text Editors</li>
          {posts.map((p, i) => (
            <li key={i} className="list-none text-sm">
              {p.title}
            </li>
          ))}
        </div>
        <div>
          <div className="text-xl text-right mb-2">Music recordings</div>
          <hr className="my-2" />
          <li className="list-none text-sm">Chocolate Milk</li>
          <li className="list-none text-sm">The Bike Song</li>
          <li className="list-none text-sm">Gandhi's Way</li>
          <li className="list-none text-sm">Mr. Toad</li>
          <li className="list-none text-sm">Blues Explosion</li>
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <div>
          <div className="text-xl text-right mb-2">Projects</div>
          <hr className="my-2" />
          <li className="list-none text-sm">
            A Surfer's Paradise - Interactive Fiction Game
          </li>
          <li className="list-none text-sm">Scribble</li>
          <li className="list-none text-sm">Slab</li>
          <li className="list-none text-sm">One bullet - Ludum Dare 48 Game</li>
          <li className="list-none text-sm">Standup.rocks</li>
        </div>

        <div>
          <div className="text-xl text-right mb-2">Content creation</div>
          <hr className="my-2" />
          <li className="list-none text-sm">Schfifty Five</li>
          <li className="list-none text-sm">Wise words from the Saad</li>
        </div>
      </div>
    </div>
  );
};

export default Home;
