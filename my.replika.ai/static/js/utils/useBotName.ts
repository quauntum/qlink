import { useSelector } from 'react-redux';

export default function useBotName(defaultName = 'Your Replika') {
  const bot = useSelector(state => state.profile.persist.bot);
  return bot?.name ?? defaultName;
}
