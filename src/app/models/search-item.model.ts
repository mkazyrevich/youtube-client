export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: {[key: string]: string};
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { [key: string]: IThumbnailsItem };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}
