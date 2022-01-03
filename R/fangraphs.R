batter_game_logs <- function(fangraphsid, season=2021) {
  x <- baseballr::batter_game_logs_fg(fangraphsid, season);
  return(x)
}