const r = require('r-wrapper').async;

exports.rangeBatterLogs = async (startDate, endDate) => {
    const res = await r('./R/baseballreference.R', 'range_batter_logs', {
        t1: startDate,
        t2: endDate
    });
    
    return res;
}