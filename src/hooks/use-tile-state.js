import { useMemo } from "react";
import useImage from "use-image";
import { useTileStateTypes, useTileStateValidation } from "hooks";
import { crown, mountain, questionMark, tower } from "assets";

/**
 * useTileState
 *
 * @param {Array<Array>} tile - An implementation of column/rows
 *
 * tile Array<[type, playerId, unitiesCount]>
 *    type {enum}
 *      0: base
 *      1: spawner
 *      2: fog
 *      3: army
 *      4: blank
 *    playerId {number}
 *    unitiesCount {number}
 *
 * @returns {object}
 *    typeKey:      0 | 1 | 2 | 3 | 4
 *    typeValue:    "BASE" | "SPAWNER" | "FOG" | "ARMY" | "BLANK"
 *    typeImageUrl: "https://link.to/the-image"
 *    typeImage:    {HTMLImage}
 *    playerId:      {number}
 *    unitiesCount: {number}
 */
export default function useTileState(tile) {
  const { typesEnum } = useTileStateTypes();
  const { typeKey, playerId, unitiesCount } = useTileStateValidation(tile);
  const typeValue = useMemo(() => typesEnum[typeKey], [typesEnum, typeKey]);
  const typeImageUrl = useMemo(
    () =>
      ({ BASE: crown, SPAWNER: tower, FOG: questionMark, BLANK: mountain }[
        typeValue
      ]),
    [typeValue]
  );

  const [typeImage] = useImage(typeImageUrl);
  const isOwned = useMemo(() => !!playerId, [playerId]);

  return {
    typeKey,
    typeValue,
    typeImageUrl,
    typeImage,
    playerId,
    unitiesCount,
    isOwned,
  };
}
