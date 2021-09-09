export function Left(value) {
  return {
    map: () => Left(value),
    fold: (_, fn) => fn(value),
  };
}

export function Right(value) {
  return {
    map: (fn) => Right(fn(value)),
    fold: (fn) => fn(value),
  };
}

export function makeEither(payload) {
  return payload.error ? Left(payload.data) : Right(payload.data);
}
