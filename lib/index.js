var util  = require('util'),
    spawn = require('child_process').spawn,
    _ = require('underscore'),
    EE = require('events').EventEmitter;

// Quick and dirty sar parser
module.exports = function(params){
  params = params || ['-A', '1'];
    sar    = spawn('sar', params, { cwd: undefined,
    env: _.extend({}, process.env, {LANG: 'C'})
  });

  var output = '';

  sar.stdout.on('data', function (data) {
    data = data.toString();
    output = output + data;
    readData();
  });

  var readData = _.debounce(function(){
    var stats = output.split('\n');
    output = '';

    var blocks = [];
    if(stats.length == 2) return;

    var category, keys, id, toSend = [];
    _(stats).forEach(function(stat){
      if(stat === '') {
        keys = null;
        category = null;
        return;
      }
      if(!keys) {
        keys = stat.split(' ');
        keys.splice(0,1);
        keys = _.compact(keys);
        if(/[A-Z]/.test(keys[0])) category = keys.splice(0,1)[0];
        return;
      }else{
        var values = stat.split(' ');
        values = _.compact(values);
        var date = values.splice(0,1)[0];
        var subCategory;
        if(category) subCategory = values.splice(0,1)[0];
        keys.forEach(function(key, i){
          var o = {};
          o['date'] = date;
          if(category) key = category + '_' + subCategory + '_' + key;
          o[key] = values[i];
          toSend.push(o);
        });
      }
    });
    var grouped = _(toSend).groupBy(function(o){
      return o.date;
    });


    _(grouped).forEach(function(group, date){
      var o =_.extend.apply(_, group);
      sar.emit('stats', o);
    });

  }, 100);

  sar.stderr.on('data', function (data) {
    console.error(data);
  });

  return sar;
};


