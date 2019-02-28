export const SEARCH_HERO_LOADING = 'SEARCH_HERO_LOADING';
export const SEARCH_HERO_ENDS = 'SEARCH_HERO_ENDS';
export const SEARCH_HERO_ERROR = 'SEARCH_HERO_ERROR';

function searchHeroLoading(name) {
  return {
    type: SEARCH_HERO_LOADING,
    payload: {
      name: name
    }
  };
}

function searchHeroEnds(heroes) {
  return {
    type: SEARCH_HERO_ENDS,
    payload: {
      heroes: heroes
    }
  };
}

function searchHeroError(error) {
  return {
    type: SEARCH_HERO_ERROR,
    payload: {
      error: error
    }
  };
}
