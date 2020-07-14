import { useCallback, useMemo } from "react";
import { Stage } from "konva";
import { usePlayerState, useTileState } from "hooks";

export default function useMapTileState({
  players,
  tile,
  rowIndex,
  columnIndex,
  notRevealedFill = "#363636",
  notOwnedArmyFill = "#D7D7D7",
  notOwnedSpawnerFill = "#757575",
  blankFill = "#B3B3B3",
  revealedStroke = "#000",
}) {
  const tileState = useTileState(tile);
  const {
    isOwned,
    playerId,
    typeImage,
    unitiesCount,
    isRevealed,
    isSpawnerType,
    isBlankType,
    isArmyType,
  } = tileState;

  const player = useMemo(() => {
    if (isOwned) {
      return players[playerId];
    }
  }, [isOwned, players, playerId]);

  const { color: playerColor } = usePlayerState(player);
  const fill = useMemo(() => {
    if (isOwned) {
      return playerColor;
    }

    if (!isRevealed) {
      return notRevealedFill;
    }

    if (isArmyType) {
      return notOwnedArmyFill;
    }

    if (isSpawnerType) {
      return notOwnedSpawnerFill;
    }

    if (isBlankType) {
      return blankFill;
    }
  }, [
    isOwned,
    playerColor,
    isRevealed,
    notRevealedFill,
    isArmyType,
    notOwnedArmyFill,
    isSpawnerType,
    notOwnedSpawnerFill,
    isBlankType,
    blankFill,
  ]);

  const stroke = useMemo(() => {
    if (isRevealed) {
      return revealedStroke;
    }
  }, [isRevealed, revealedStroke]);

  const getStageByEventTarget = useCallback((eventTarget) => {
    const isStage = eventTarget instanceof Stage;

    if (isStage) {
      return eventTarget;
    }

    return getStageByEventTarget(eventTarget.getParent());
  }, []);

  const handleMouseEnter = useCallback(
    (event) => {
      if (isOwned) {
        const stage = getStageByEventTarget(event.currentTarget);
        stage.container().style.cursor = "pointer";
      }
    },
    [isOwned, getStageByEventTarget]
  );

  const handleMouseLeave = useCallback(
    (event) => {
      if (isOwned) {
        const stage = getStageByEventTarget(event.currentTarget);
        stage.container().style.cursor = "default";
      }
    },
    [isOwned, getStageByEventTarget]
  );

  return {
    image: typeImage,
    text: unitiesCount,
    fill,
    stroke,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
