const r = require('r-wrapper').async;

exports.batterGameLogs = async (fangraphsid, season) => {
    const res = await r('./R/fangraphs.R', 'batter_game_logs', {
        fangraphsid: fangraphsid,
        season: season
    });
    
    return res;
}