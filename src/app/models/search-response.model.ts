export interface SearchResponse {
  'kind': string;
  'etag': string;
  'pageInfo': {
    'totalResults': number;
    'resultsPerPage': number
  };
  'items': [
    {
      'kind': string;
      'etag': string;
      'id': string;
      'snippet': {
        'publishedAt': string;
        'channelId': string;
        'title': string;
        'description': string;
        'thumbnails': {
          'default': {
            'url': string;
            'width': number;
            'height': number
          };
          'medium': {
            'url': string;
            'width': number;
            'height': number
          };
          'high': {
            'url': string;
            'width': number;
            'height': number
          };
          'standard': {
            'url': string;
            'width': number;
            'height': number
          };
          'maxres': {
            'url': string;
            'width': number;
            'height': number
          }
        };
        'channelTitle': string;
        'tags': string[];
        'categoryId': string;
        'liveBroadcastContent': string;
        'defaultLanguage'?: string;
        'localized': {
          'title': string;
          'description': string
        };
        'defaultAudioLanguage': string
      };
      'statistics': {
        'viewCount': string;
        'likeCount': string;
        'dislikeCount': string;
        'favoriteCount': string;
        'commentCount': string;
      }
    }
  ];
}
