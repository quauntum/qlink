import { AsyncActionTypes as AAT, WsEventNames } from '../types/enums';
import { DA } from '../types/redux';
import fetchOptions from '../utils/fetchOptions';
import { API_BASE_URL } from '../utils/constants';
import * as A from '../types/actions';
import { apiAction, wsAction } from '../utils/asyncAction';
import { Journey, Track, Mission, Spotlight } from '../types/models';
import { sendMessage } from '../utils/websocket';

export const getJourney = (): DA<Journey> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetJourney>(
    AAT.GetJourney,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/journey`, fetchOpts)
    }
  );
};

export const getTracks = (): DA<{
  tracks: Track[];
  last_updated: string;
}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetTracks>(
    AAT.GetTracks,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/journey/tracks`, fetchOpts)
    }
  );
};

export const getTrack = (trackId: string): DA<Track> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetTrack>(
    AAT.GetTrack,
    dispatch,
    { trackId },
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/journey/tracks/${trackId}`, fetchOpts)
    }
  );
};

export const getMissions = (
  trackId: string
): DA<{ missions: Mission[]; last_updated: string }> => async (
  dispatch,
  getState
) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetMissions>(
    AAT.GetMissions,
    dispatch,
    {},
    {
      onRequest: () =>
        fetch(`${API_BASE_URL}/journey/tracks/${trackId}/missions`, fetchOpts)
    }
  );
};

export const startMission = (
  missionId: string,
  currentMissionAction?: 'skip' | 'drop'
): DA<{}> => async (dispatch, getState) => {
  return wsAction(
    AAT.WsStartMission,
    dispatch,
    { missionId },
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.StartMission,
            payload: {
              mission_id: missionId,
              current_mission_action: currentMissionAction
            }
          },
          getState()
        ),
      onSuccess: () => {
        getSpotlight()(dispatch, getState);
      }
    }
  );
};

export const skipMission = (): DA<{}> => async (dispatch, getState) => {
  return wsAction(
    AAT.WsSkipMission,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.SkipMission,
            payload: {}
          },
          getState()
        ),
      onSuccess: () => {
        getSpotlight()(dispatch, getState);
      }
    }
  );
};

export const dropMission = (): DA<{}> => async (dispatch, getState) => {
  return wsAction(
    AAT.WsDropMission,
    dispatch,
    {},
    {
      onRequest: () =>
        sendMessage(
          {
            event_name: WsEventNames.DropMission,
            payload: {}
          },
          getState()
        ),
      onSuccess: () => {
        getSpotlight()(dispatch, getState);
      }
    }
  );
};

export const getSpotlight = (): DA<{
  spotlight: Spotlight | null;
  last_updated: string;
}> => async (dispatch, getState) => {
  const fetchOpts = fetchOptions(getState(), 'GET');

  return apiAction<A.GetSpotlight>(
    AAT.GetSpotlight,
    dispatch,
    {},
    {
      onRequest: () => fetch(`${API_BASE_URL}/journey/spotlight`, fetchOpts)
    }
  );
};
