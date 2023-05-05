import FeedReact from "./FeedReact";
import type { FeedType } from "../../libs/helper";

export interface FeedReactProps {
  feeds: FeedType[];
}

const TimelineReact: React.FC<FeedReactProps> = ({ feeds }) => {
  if (feeds.length === 0)
    return (
      <p style={{ marginTop: "3rem", color: "coral", textAlign: "center" }}>
        x_x
        <br />
        <br />
        No data..
      </p>
    );

  return (
    <>
      {feeds.map((feed) => {
        const slug = feed.parent ? `${feed.parent.id}#${feed.id}` : feed.id;

        return (
          <a key={feed.id} href={`/feeds/${slug}`} role="prefetch">
            <FeedReact data={feed} />
          </a>
        );
      })}
    </>
  );
};

export default TimelineReact;
