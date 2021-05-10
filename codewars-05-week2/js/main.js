function filter_list(l) {
  return l.filter(num => Number.isFinite(num) === true && num >= 0)
}

