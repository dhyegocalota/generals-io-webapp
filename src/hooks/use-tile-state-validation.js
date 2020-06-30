import { useMemo } from "react";
import { useTileStateTypes } from "hooks";

export default function useTileStateValidation(state) {
  const { typeKeys } = useTileStateTypes();
  const isStateNotAnArray = useMemo(() => !Array.isArray(state), [state]);

  if (isStateNotAnArray) {
    throw new Error("State must be an array");
  }

  const [typeKey, ownerId, unitiesCount] = state;

  const isValidTypeKey = useMemo(
    () =>
      Number.isInteger(typeKey) && typeKey >= 0 && typeKey < typeKeys.length,
    [typeKey, typeKeys]
  );

  if (!isValidTypeKey) {
    throw new Error("Type is not valid");
  }

  const isValidOwnerId = useMemo(() => {
    const isNull = ownerId === null;
    const isInteger = Number.isInteger(ownerId);

    return isNull || isInteger;
  }, [ownerId]);

  if (!isValidOwnerId) {
    throw new Error("Owner ID is not valid");
  }

  const isValidUnitiesCount = useMemo(() => {
    const isNull = unitiesCount === null;
    const isInteger = Number.isInteger(unitiesCount);
    const isPositive = unitiesCount > 0;
    const isIntegerAndPositive = isInteger && isPositive;

    return isNull || isIntegerAndPositive;
  }, [unitiesCount]);

  if (!isValidUnitiesCount) {
    throw new Error("Unities count is not valid");
  }

  return { typeKey, ownerId, unitiesCount };
}
