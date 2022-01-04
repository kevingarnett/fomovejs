batter_game_logs <- function(fangraphsid, season=2021) {
  x <- baseballr::batter_game_logs_fg(fangraphsid, season);
  return(x)
}

pitcher_game_logs <- function(fangraphsid, season=2021) {
  x <- baseballr::pitcher_game_logs_fg(fangraphsid, season);
  return(x)
}