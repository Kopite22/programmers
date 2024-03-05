const solution = (name, yearning, photo) =>
  photo.map((v) =>
    v.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] ?? 0), 0),
  );
