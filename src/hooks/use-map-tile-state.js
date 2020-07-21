import { useCallback, useMemo } from "react";
import { Stage } from "konva";
import { usePlayerState, useTileState } from "hooks";

export default function useMapTileState({
  players,
  tile,
  rowIndex,
  columnIndex,
  selectedMapPosition,
  onChangeSelectedMapPosition: triggerChangeSelectedMapPosition,
  notRevealedFill = "#363636",
  notOwnedArmyFill = "#D7D7D7",
  notOwnedSpawnerFill = "#757575",
  blankFill = "#B3B3B3",
  selectedStroke = "#fff",
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

  const isSelected = useMemo(() => {
    return (
      rowIndex === selectedMapPosition.rowIndex &&
      columnIndex === selectedMapPosition.columnIndex
    );
  }, [selectedMapPosition, rowIndex, columnIndex]);

  const stroke = useMemo(() => {
    if (isSelected) {
      return selectedStroke;
    }

    if (isRevealed) {
      return revealedStroke;
    }
  }, [isSelected, selectedStroke, isRevealed, revealedStroke]);

  const getStageByEventTarget = useCallback((eventTarget) => {
    const isStage = eventTarget instanceof Stage;

    if (isStage) {
      return eventTarget;
    }

    return getStageByEventTarget(eventTarget.getParent());
  }, []);

  const canMove = isOwned;

  const handleMouseEnter = useCallback(
    (event) => {
      if (canMove) {
        const stage = getStageByEventTarget(event.currentTarget);
        stage.container().style.cursor = "pointer";
      }
    },
    [canMove, getStageByEventTarget]
  );

  const handleMouseLeave = useCallback(
    (event) => {
      if (canMove) {
        const stage = getStageByEventTarget(event.currentTarget);
        stage.container().style.cursor = "default";
      }
    },
    [canMove, getStageByEventTarget]
  );

  const handleClick = useCallback(() => {
    if (canMove) {
      triggerChangeSelectedMapPosition({ rowIndex, columnIndex });
    }
  }, [canMove, rowIndex, columnIndex, triggerChangeSelectedMapPosition]);

  return {
    image: typeImage,
    text: unitiesCount,
    fill,
    stroke,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
  };
}
