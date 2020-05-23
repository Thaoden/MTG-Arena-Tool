import { useDispatch } from "react-redux";
import { reduxAction } from "../../shared-redux/sharedRedux";
import { IPC_NONE } from "../../shared/constants";
import { useCallback } from "react";

type HoverCardHook = (() => void)[];

export default function useHoverCard(
  card: number,
  wanted?: number
): HoverCardHook {
  const dispatcher = useDispatch();

  const hoverIn = useCallback((): void => {
    reduxAction(
      dispatcher,
      {
        type: "SET_HOVER_IN",
        arg: { grpId: card, wanted }
      },
      "SET_HOVER_IN",
      { grpId: card, wanted },
      IPC_NONE
    );
  }, [card, dispatcher, wanted]);

  let never: never;
  const hoverOut = useCallback((): void => {
    reduxAction(
      dispatcher,
      {
        type: "SET_HOVER_OUT",
        arg: never
      },
      "SET_HOVER_OUT",
      card,
      IPC_NONE
    );
  }, [card, dispatcher]);

  return [hoverIn, hoverOut];
}
