import { useStarredShows } from '../lib/useStarredShows';

export default function Starred() {
  const [starredShows] = useStarredShows();

  return <div>Starred Page {starredShows.length}</div>;
}
