import { useMemo } from "react";
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

  return { image: typeImage, text: unitiesCount, fill, stroke };
}
