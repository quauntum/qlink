import applyReducer from '../utils/applyReducer';
import { Reducer } from '../types/redux';
import { JourneyState } from '../types/states';
import * as A from '../types/actions';
import { ToSuccess } from '../types/asyncActions';
import { ActionTypes as AT, AsyncActionTypes as AAT } from '../types/enums';

const DEFAULT_STATE: JourneyState = {
  persist: {
    tracks: {},
    trackIdList: [],
    levels: [],
    lastUpdated: null,
    spotlight: null,
    categories: null
  },
  lastJourneyChange: {
    updated: Date.now(),
    affectedTrackIds: []
  }
};

type R<X extends A.JourneyAction | A.IncomingWsAction> = Reducer<
  JourneyState,
  X
>;
type RSuccess<X> = Reducer<JourneyState, ToSuccess<X>>;

const getJourneySuccess: RSuccess<A.GetJourney> = (
  state,
  { result: { levels, last_updated: lastUpdated } }
) => ({
  ...state,
  persist: {
    ...state.persist,
    levels,
    lastUpdated
  }
});

const getTracksSuccess: RSuccess<A.GetTracks> = (
  state,
  { result: { tracks, categories } }
) => ({
  ...state,
  persist: {
    ...state.persist,
    categories,
    tracks: tracks.reduce(
      (acc, t) => {
        acc[t.id] = t;
        return acc;
      },
      { ...state.persist.tracks }
    ),
    trackIdList: tracks.map(t => t.id)
  }
});

const getTrackSuccess: RSuccess<A.GetTrack> = (state, { result: track }) => ({
  ...state,
  persist: {
    ...state.persist,
    tracks: {
      ...state.persist.tracks,
      [track.id]: track
    }
  }
});

const getSpotlightSuccess: RSuccess<A.GetSpotlight> = (
  state,
  { result: { spotlight } }
) => ({
  ...state,
  persist: {
    ...state.persist,
    spotlight
  }
});

const journeyChanged: R<A.JourneyChanged> = (state, { affectedTrackIds }) => ({
  ...state,
  lastJourneyChange: {
    updated: Date.now(),
    affectedTrackIds
  }
});

const resetJourney = () => ({
  ...DEFAULT_STATE
});

export default function journey(
  state: JourneyState = DEFAULT_STATE,
  action: A.AnyAction
): JourneyState {
  return applyReducer(
    'journey',
    {
      [AAT.GetJourney]: {
        success: getJourneySuccess
      },
      [AAT.GetTracks]: {
        success: getTracksSuccess
      },
      [AAT.GetTrack]: {
        success: getTrackSuccess
      },
      [AAT.GetSpotlight]: {
        success: getSpotlightSuccess
      },
      [AT.WsJourneyChanged]: journeyChanged,
      [AAT.Logout]: {
        success: resetJourney,
        error: resetJourney
      },
      [AAT.DeleteAccount]: {
        success: resetJourney
      }
    },
    state,
    action
  );
}
