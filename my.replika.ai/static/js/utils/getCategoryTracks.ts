import { Track, TrackCategory } from '../types/models';

const getCategoryTracks = (
  tracks: Track[],
  categories: TrackCategory[] = [],
  selected: string | null
) => {
  const getCategoryTitleById = (id: string) => {
    const c = categories.find(cat => cat.id === id);

    return c?.title ?? null;
  };

  return tracks.filter(
    track =>
      track.categories_ids.map(getCategoryTitleById).indexOf(selected) !== -1
  );
};

export default getCategoryTracks;
