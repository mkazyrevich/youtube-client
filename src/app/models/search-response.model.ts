import { ISearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: { [key: string]: number };
  items: ISearchItem[];
}
