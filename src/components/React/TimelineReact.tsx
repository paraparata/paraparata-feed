import FeedReact from "./FeedReact";
import type { FeedType } from "../../libs/helper";

export interface FeedReactProps {
  feeds: FeedType[];
}

const TimelineReact: React.FC<FeedReactProps> = ({ feeds }) => {
  return (
    <>
      {feeds.map((feed) => {
        const slug = feed.parent ? `${feed.parent.id}#${feed.id}` : feed.id;

        return (
          <a key={feed.id} href={`/${slug}`} role="prefetch">
            <FeedReact data={feed} />
          </a>
        );
      })}
    </>
  );
};

export default TimelineReact;
