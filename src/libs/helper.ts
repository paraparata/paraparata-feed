export type FeedType = {
  id: string;
  title: string | null;
  parent: { id: string; title: string } | null;
  content: string;
  tags: string[] | null;
  created_at: string;
  updated_at: null | string;
};

export const formatDate = (dateISO: string, separator = "/") => {
  const date = new Date(dateISO);
  return `${date.getDate()}${separator}${date.getMonth()}${separator}${date.getFullYear()}`;
};

export const getTimeline = (feeds: FeedType[]) => {
  return feeds;
};

export const getTopicIds = (feeds: FeedType[]) => {
  return feeds
    .filter((item) => item.parent === null)
    .map((item) => ({ params: { id: item.id } }));
};

export const getTopics = (feeds: FeedType[]) => {
  return feeds.filter((item) => item.parent === null && !!item.title);
};

export const getTopic = (feeds: FeedType[], id: string) => {
  const topic = feeds.filter(
    (item) => item.id === id || (item.parent && item.parent.id === id)
  );

  return topic;
};

export const getTopicTitle = (topic: FeedType[]) => {
  return topic.filter((feed) => feed.parent === null)[0].title;
};
