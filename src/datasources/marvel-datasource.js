import md5 from 'md5';
import axios from 'axios';

export const marvelDataSource = {
  _buildKey() {
    const ts = new Date().getTime().toString();
    return {
      apikey: process.env.REACT_APP_PUBLIC_KEY,
      hash: md5(ts + process.env.REACT_APP_SECRET_KEY + process.env.REACT_APP_PUBLIC_KEY),
      ts: ts
    };
  },

  _urlFormat(entity, options) {
    let auth = this._buildKey();
    let url = `${process.env.REACT_APP_BASE_URL}${entity}`;
    url = options.characterId ? url.replace(/##id##/, options.characterId) : url;
    url = `${url}?ts=${auth.ts}&apikey=${auth.apikey}&hash=${auth.hash}`;
    url = options.characterName ? `${url}&nameStartsWith=${options.characterName}` : url;

    return url;
  },
  request(entity, options) {
    const axiosOptions = {
      method: options.method,
      url: this._urlFormat(entity, options)
    };

    if (options.method === 'post') {
      axiosOptions.data = options.data;
    }

    return axios(axiosOptions);
  }
};
