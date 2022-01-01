const r = require('r-wrapper').async;

exports.findByName = async (last=null, first=null) => {
    const res = await r('./R/player_lookup.R', 'findByName', {
        last_name: last,
        first_name: first
    });
    
    return res;
}