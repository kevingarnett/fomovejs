findByName <- function(last_name = NULL, first_name = NULL) {
  x <- baseballr::playerid_lookup(last_name, first_name)
  return(x)
}