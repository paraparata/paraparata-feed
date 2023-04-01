import { formatDate } from "../../libs/helper";
import type { FeedType } from "../../libs/helper";

export interface FeedReactProps {
  data: FeedType;
}

const FeedReact: React.FC<FeedReactProps> = ({ data }) => {
  const handleClickParent = () => {
    if (data.parent) location.href = `/feeds/${data.parent.id}`;
  };

  return (
    <article id={data.id} className="feed">
      <section className="feed-data">
        {data.parent && (
          <span className="parent" role="button" onClick={handleClickParent}>
            on: {data.parent.title}
          </span>
        )}
        {data.title && (
          <h3>
            <b>[{data.title}]</b>
          </h3>
        )}
        <p>{data.content}</p>
      </section>

      <section className="feed-meta">
        <div className="tag-list">{data.tags && <span>#ui</span>}</div>
        <time dateTime={data.created_at}>{formatDate(data.created_at)}</time>
      </section>
    </article>
  );
};

export default FeedReact;
