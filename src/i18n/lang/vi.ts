export const initial = {
  'Xin chào': '',
};

type TObj = typeof initial;

const mappedObj = Object.entries(initial).reduce(
  (prev, [key, value]) => ({ ...prev, [key]: value || key }),
  {} as TObj,
);

export const vi = mappedObj;
