import { useMemo } from "react";
import useImage from "use-image";
import { useTileStateTypes, useTileStateValidation } from "hooks";
import { crown, mountain, questionMark, tower } from "assets";

export default function useTileState(state) {
  const { typesEnum } = useTileStateTypes();
  const { typeKey, ownerId, unitiesCount } = useTileStateValidation(state);
  const typeValue = useMemo(() => typesEnum[typeKey], [typesEnum, typeKey]);
  const typeImageUrl = useMemo(
    () =>
      ({ BASE: crown, SPAWNER: tower, FOG: questionMark, BLANK: mountain }[
        typeValue
      ]),
    [typeValue]
  );

  const [typeImage] = useImage(typeImageUrl);

  return { typeKey, typeValue, typeImageUrl, typeImage, ownerId, unitiesCount };
}
