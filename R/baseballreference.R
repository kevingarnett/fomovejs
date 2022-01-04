range_batter_logs <- function(t1, t2) {
  x <- baseballr::daily_batter_bref(t1, t2)
  return(x)
}

range_pitcher_logs <- function(t1, t2) {
  x <- baseballr::daily_pitcher_bref(t1, t2)
  return(x)
}