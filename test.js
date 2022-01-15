const helper = (t, ls) => {
  return ls.map((e, i) => [t - e, rmByIndex(ls, i)]).filter(([e]) => e > 0);
};

const rm = (xs, x) => {
  const arr = [...xs];
  const idx = arr.indexOf(x);
  idx !== -1 && arr.splice(idx, 1);
  return arr;
};

const rmByIndex = (xs, idx) => {
  const arr = [...xs];
  arr.splice(idx, 1);
  return arr;
};

const min = (xs) => xs.reduce((m, x) => (x < m ? x : m), xs[0]);

const range = (x) => Array.from({ length: x }, (_, i) => i);

const iterate = (f, n, initValue) =>
  range(n).reduce((acc) => f(acc), initValue);

const chooseOptimalDistance = (t, k, ls) => {
  // helper(t, ls).flatMap((e) => helper());
  // return iterate(
  //   ([e, arr]) => {
  //     console.log({ e, arr });
  //     const res = helper(e, arr);
  //     console.log(res.flatMap((e) => helper(...e)));
  //     return res.flatMap((e) => helper(...e));
  //   },
  //   k,
  //   [t, ls]
  // );
  // const res1 = helper(t, ls);
  // console.log(res1);
  // const res2 = res1.flatMap((e) => helper(...e));
  // console.log(res2);
  // const res3 = res2.flatMap((e) => helper(...e));
  // console.log(res3);
  // const res = helper(t, ls)
  //   .flatMap(([e, arr]) => helper(e, arr))
  //   .flatMap(([e, arr]) => helper(e, arr));

  // const res = range(k - 1).reduce(
  //   (acc) => acc.flatMap((e) => helper(...e)),
  //   helper(t, ls)
  // );
  const res = iterate(
    (acc) => acc.flatMap((e) => helper(...e)),
    k - 1,
    helper(t, ls)
  );

  const answer = t - min(res.map((e) => e[0]));
  // const res = helper(t, ls).map(([e, arr]) =>
  //   iterate((res) => res.flatMap((e) => helper(...e)), k - 1, [e, arr])
  // );

  // console.log(res);
  console.log(answer);
};

const test = () => {
  return chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]);
};

test();
