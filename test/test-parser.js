var expect = require('chai').expect,
  fs = require('fs'),
  Path = require('path'),
  parser = require('../lib/parser');

describe('Sysstat parser', function(){
  it('should parse a simple sar output', function(done){
    var sarOutput = fs.readFileSync(Path.join(__dirname, 'fixture', 'simple-sar-output.txt')).toString();
    parser(sarOutput, function(err, parsed){
      done();
      expect(parsed).to.deep.equal([ {
        "time": "09:11:01",
        "CPU_all_%user": "3,36",
        "CPU_all_%nice": "0,65",
        "CPU_all_%system": "1,37",
        "CPU_all_%iowait": "0,01",
        "CPU_all_%steal": "0,00",
        "CPU_all_%idle": "94,61"
      },
      {
        "time": "09:21:01",
        "CPU_all_%user": "1,94",
        "CPU_all_%nice": "1,11",
        "CPU_all_%system": "0,96",
        "CPU_all_%iowait": "0,02",
        "CPU_all_%steal": "0,00",
        "CPU_all_%idle": "95,97"
      },
      {
        "time": "22:01:01",
        "CPU_all_%user": "0,00",
        "CPU_all_%nice": "0,00",
        "CPU_all_%system": "0,00",
        "CPU_all_%iowait": "0,00",
        "CPU_all_%steal": "0,00",
        "CPU_all_%idle": "0,00"
      },
      {
        "time": "22:11:01",
        "CPU_all_%user": "1,61",
        "CPU_all_%nice": "0,39",
        "CPU_all_%system": "0,86",
        "CPU_all_%iowait": "0,08",
        "CPU_all_%steal": "0,00",
        "CPU_all_%idle": "97,06"
      },
      {
        "time": "Average",
        "CPU_:_%user": "all",
        "CPU_:_%nice": "0,00",
        "CPU_:_%system": "0,00",
        "CPU_:_%iowait": "0,00",
        "CPU_:_%steal": "0,00",
        "CPU_:_%idle": "0,00"
      } ]);
    });
  });

  it('should parse a complex sar output', function(done){
    var sarOutput = fs.readFileSync(Path.join(__dirname, 'fixture', 'complex-sar-output.txt')).toString();
    parser(sarOutput, function(err, parsed){
      done();
      expect(parsed).to.deep.equal([ { time: '09:11:01',
        'CPU_all_%usr': '3,36',
        'CPU_all_%nice': '0,65',
        'CPU_all_%sys': '1,37',
        'CPU_all_%iowait': '0,01',
        'CPU_all_%steal': '0,00',
        'CPU_all_%irq': '0,00',
        'CPU_all_%soft': '0,00',
        'CPU_all_%guest': '0,00',
        'CPU_all_%idle': '94,61',
        'CPU_0_%usr': '3,80',
        'CPU_0_%nice': '0,60',
        'CPU_0_%sys': '1,71',
        'CPU_0_%iowait': '0,01',
        'CPU_0_%steal': '0,00',
        'CPU_0_%irq': '0,00',
        'CPU_0_%soft': '0,01',
        'CPU_0_%guest': '0,00',
        'CPU_0_%idle': '93,87',
        'CPU_1_%usr': '3,70',
        'CPU_1_%nice': '0,50',
        'CPU_1_%sys': '1,75',
        'CPU_1_%iowait': '0,01',
        'CPU_1_%steal': '0,00',
        'CPU_1_%irq': '0,00',
        'CPU_1_%soft': '0,01',
        'CPU_1_%guest': '0,00',
        'CPU_1_%idle': '94,05',
        'CPU_2_%usr': '2,84',
        'CPU_2_%nice': '0,85',
        'CPU_2_%sys': '1,01',
        'CPU_2_%iowait': '0,01',
        'CPU_2_%steal': '0,00',
        'CPU_2_%irq': '0,00',
        'CPU_2_%soft': '0,00',
        'CPU_2_%guest': '0,00',
        'CPU_2_%idle': '95,29',
        'CPU_3_%usr': '3,10',
        'CPU_3_%nice': '0,65',
        'CPU_3_%sys': '1,00',
        'CPU_3_%iowait': '0,01',
        'CPU_3_%steal': '0,00',
        'CPU_3_%irq': '0,00',
        'CPU_3_%soft': '0,00',
        'CPU_3_%guest': '0,00',
        'CPU_3_%idle': '95,23',
        'proc/s': '0,02',
        'cswch/s': '1219,66',
        'pswpin/s': '0,00',
        'pswpout/s': '0,00',
        'pgpgin/s': '1,37',
        'pgpgout/s': '14,59',
        'fault/s': '670,83',
        'majflt/s': '0,00',
        'pgfree/s': '6332,31',
        'pgscank/s': '0,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: '2,14',
        rtps: '0,26',
        wtps: '1,88',
        'bread/s': '2,73',
        'bwrtn/s': '29,17',
        'frmpg/s': '-28,70',
        'bufpg/s': '0,33',
        'campg/s': '2,88',
        kbmemfree: '2848480',
        kbmemused: '1203948',
        '%memused': '29,71',
        kbbuffers: '42884',
        kbcached: '265928',
        kbcommit: '1757852',
        '%commit': '40,71',
        kbactive: '818788',
        kbinact: '239768',
        kbswpfree: '265068',
        kbswpused: '0',
        '%swpused': '0,00',
        kbswpcad: '0',
        '%swpcad': '0,00',
        kbhugfree: '0',
        kbhugused: '0',
        '%hugused': '0,00',
        dentunusd: '25560',
        'file-nr': '2176',
        'inode-nr': '18155',
        'pty-nr': '2',
        'runq-sz': '0',
        'plist-sz': '261',
        'ldavg-1': '0,15',
        'ldavg-5': '0,49',
        'ldavg-15': '0,61',
        blocked: '0',
        'TTY_0_rcvin/s': '0,00',
        'TTY_0_xmtin/s': '0,00',
        'TTY_0_framerr/s': '0,00',
        'TTY_0_prtyerr/s': '0,00',
        'TTY_0_brk/s': '0,00',
        'TTY_0_ovrun/s': '0,00',
        'IFACE_eth0_rxpck/s': '1,15',
        'IFACE_eth0_txpck/s': '1,62',
        'IFACE_eth0_rxkB/s': '0,91',
        'IFACE_eth0_txkB/s': '0,15',
        'IFACE_eth0_rxcmp/s': '0,00',
        'IFACE_eth0_txcmp/s': '0,00',
        'IFACE_eth0_rxmcst/s': '0,00',
        'IFACE_lo_rxpck/s': '0,00',
        'IFACE_lo_txpck/s': '0,00',
        'IFACE_lo_rxkB/s': '0,00',
        'IFACE_lo_txkB/s': '0,00',
        'IFACE_lo_rxcmp/s': '0,00',
        'IFACE_lo_txcmp/s': '0,00',
        'IFACE_lo_rxmcst/s': '0,00',
        'IFACE_eth0_rxerr/s': '0,00',
        'IFACE_eth0_txerr/s': '0,00',
        'IFACE_eth0_coll/s': '0,00',
        'IFACE_eth0_rxdrop/s': '0,00',
        'IFACE_eth0_txdrop/s': '0,00',
        'IFACE_eth0_txcarr/s': '0,00',
        'IFACE_eth0_rxfram/s': '0,00',
        'IFACE_eth0_rxfifo/s': '0,00',
        'IFACE_eth0_txfifo/s': '0,00',
        'IFACE_lo_rxerr/s': '0,00',
        'IFACE_lo_txerr/s': '0,00',
        'IFACE_lo_coll/s': '0,00',
        'IFACE_lo_rxdrop/s': '0,00',
        'IFACE_lo_txdrop/s': '0,00',
        'IFACE_lo_txcarr/s': '0,00',
        'IFACE_lo_rxfram/s': '0,00',
        'IFACE_lo_rxfifo/s': '0,00',
        'IFACE_lo_txfifo/s': '0,00',
        'call/s': '0,00',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': '0,00',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: '267',
        tcpsck: '10',
        udpsck: '2',
        rawsck: '0',
        'ip-frag': '0',
        'tcp-tw': '0' },
      { time: '09:21:01',
        'CPU_all_%usr': '1,94',
        'CPU_all_%nice': '1,11',
        'CPU_all_%sys': '0,95',
        'CPU_all_%iowait': '0,02',
        'CPU_all_%steal': '0,00',
        'CPU_all_%irq': '0,00',
        'CPU_all_%soft': '0,01',
        'CPU_all_%guest': '0,00',
        'CPU_all_%idle': '95,97',
        'CPU_0_%usr': '1,96',
        'CPU_0_%nice': '1,30',
        'CPU_0_%sys': '0,88',
        'CPU_0_%iowait': '0,02',
        'CPU_0_%steal': '0,00',
        'CPU_0_%irq': '0,00',
        'CPU_0_%soft': '0,02',
        'CPU_0_%guest': '0,00',
        'CPU_0_%idle': '95,83',
        'CPU_1_%usr': '1,70',
        'CPU_1_%nice': '1,70',
        'CPU_1_%sys': '0,98',
        'CPU_1_%iowait': '0,04',
        'CPU_1_%steal': '0,00',
        'CPU_1_%irq': '0,00',
        'CPU_1_%soft': '0,01',
        'CPU_1_%guest': '0,00',
        'CPU_1_%idle': '95,58',
        'CPU_2_%usr': '1,96',
        'CPU_2_%nice': '0,70',
        'CPU_2_%sys': '0,98',
        'CPU_2_%iowait': '0,01',
        'CPU_2_%steal': '0,00',
        'CPU_2_%irq': '0,00',
        'CPU_2_%soft': '0,00',
        'CPU_2_%guest': '0,00',
        'CPU_2_%idle': '96,34',
        'CPU_3_%usr': '2,13',
        'CPU_3_%nice': '0,75',
        'CPU_3_%sys': '0,97',
        'CPU_3_%iowait': '0,02',
        'CPU_3_%steal': '0,00',
        'CPU_3_%irq': '0,00',
        'CPU_3_%soft': '0,01',
        'CPU_3_%guest': '0,00',
        'CPU_3_%idle': '96,12',
        'proc/s': '3,14',
        'cswch/s': '2876,34',
        'pswpin/s': '0,00',
        'pswpout/s': '0,00',
        'pgpgin/s': '21,25',
        'pgpgout/s': '55,81',
        'fault/s': '1748,51',
        'majflt/s': '0,17',
        'pgfree/s': '3271,46',
        'pgscank/s': '0,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: '7,61',
        rtps: '2,10',
        wtps: '5,50',
        'bread/s': '42,49',
        'bwrtn/s': '111,63',
        'frmpg/s': '-66,99',
        'bufpg/s': '2,07',
        'campg/s': '6,10',
        kbmemfree: '2687700',
        kbmemused: '1364728',
        '%memused': '33,68',
        kbbuffers: '47844',
        kbcached: '280576',
        kbcommit: '2012196',
        '%commit': '46,61',
        kbactive: '954188',
        kbinact: '246684',
        kbswpfree: '265068',
        kbswpused: '0',
        '%swpused': '0,00',
        kbswpcad: '0',
        '%swpcad': '0,00',
        kbhugfree: '0',
        kbhugused: '0',
        '%hugused': '0,00',
        dentunusd: '41002',
        'file-nr': '2240',
        'inode-nr': '32821',
        'pty-nr': '2',
        'runq-sz': '0',
        'plist-sz': '271',
        'ldavg-1': '0,64',
        'ldavg-5': '0,65',
        'ldavg-15': '0,65',
        blocked: '0',
        'TTY_0_rcvin/s': '0,00',
        'TTY_0_xmtin/s': '0,00',
        'TTY_0_framerr/s': '0,00',
        'TTY_0_prtyerr/s': '0,00',
        'TTY_0_brk/s': '0,00',
        'TTY_0_ovrun/s': '0,00',
        'IFACE_eth0_rxpck/s': '7,56',
        'IFACE_eth0_txpck/s': '6,15',
        'IFACE_eth0_rxkB/s': '7,55',
        'IFACE_eth0_txkB/s': '0,74',
        'IFACE_eth0_rxcmp/s': '0,00',
        'IFACE_eth0_txcmp/s': '0,00',
        'IFACE_eth0_rxmcst/s': '0,00',
        'IFACE_lo_rxpck/s': '0,00',
        'IFACE_lo_txpck/s': '0,00',
        'IFACE_lo_rxkB/s': '0,00',
        'IFACE_lo_txkB/s': '0,00',
        'IFACE_lo_rxcmp/s': '0,00',
        'IFACE_lo_txcmp/s': '0,00',
        'IFACE_lo_rxmcst/s': '0,00',
        'IFACE_eth0_rxerr/s': '0,00',
        'IFACE_eth0_txerr/s': '0,00',
        'IFACE_eth0_coll/s': '0,00',
        'IFACE_eth0_rxdrop/s': '0,00',
        'IFACE_eth0_txdrop/s': '0,00',
        'IFACE_eth0_txcarr/s': '0,00',
        'IFACE_eth0_rxfram/s': '0,00',
        'IFACE_eth0_rxfifo/s': '0,00',
        'IFACE_eth0_txfifo/s': '0,00',
        'IFACE_lo_rxerr/s': '0,00',
        'IFACE_lo_txerr/s': '0,00',
        'IFACE_lo_coll/s': '0,00',
        'IFACE_lo_rxdrop/s': '0,00',
        'IFACE_lo_txdrop/s': '0,00',
        'IFACE_lo_txcarr/s': '0,00',
        'IFACE_lo_rxfram/s': '0,00',
        'IFACE_lo_rxfifo/s': '0,00',
        'IFACE_lo_txfifo/s': '0,00',
        'call/s': '0,00',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': '0,00',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: '301',
        tcpsck: '26',
        udpsck: '2',
        rawsck: '0',
        'ip-frag': '0',
        'tcp-tw': '1' },
      { time: '22:01:01',
        'CPU_all_%usr': '0,00',
        'CPU_all_%nice': '0,00',
        'CPU_all_%sys': '0,00',
        'CPU_all_%iowait': '0,00',
        'CPU_all_%steal': '0,00',
        'CPU_all_%irq': '0,00',
        'CPU_all_%soft': '0,00',
        'CPU_all_%guest': '0,00',
        'CPU_all_%idle': '0,00',
        'CPU_0_%usr': '0,00',
        'CPU_0_%nice': '0,00',
        'CPU_0_%sys': '0,00',
        'CPU_0_%iowait': '0,00',
        'CPU_0_%steal': '0,00',
        'CPU_0_%irq': '0,00',
        'CPU_0_%soft': '0,00',
        'CPU_0_%guest': '0,00',
        'CPU_0_%idle': '0,00',
        'CPU_1_%usr': '0,00',
        'CPU_1_%nice': '0,00',
        'CPU_1_%sys': '0,00',
        'CPU_1_%iowait': '0,00',
        'CPU_1_%steal': '0,00',
        'CPU_1_%irq': '0,00',
        'CPU_1_%soft': '0,00',
        'CPU_1_%guest': '0,00',
        'CPU_1_%idle': '0,00',
        'CPU_2_%usr': '0,00',
        'CPU_2_%nice': '0,00',
        'CPU_2_%sys': '0,00',
        'CPU_2_%iowait': '0,00',
        'CPU_2_%steal': '0,00',
        'CPU_2_%irq': '0,00',
        'CPU_2_%soft': '0,00',
        'CPU_2_%guest': '0,00',
        'CPU_2_%idle': '0,00',
        'CPU_3_%usr': '0,00',
        'CPU_3_%nice': '0,00',
        'CPU_3_%sys': '0,00',
        'CPU_3_%iowait': '0,00',
        'CPU_3_%steal': '0,00',
        'CPU_3_%irq': '0,00',
        'CPU_3_%soft': '0,00',
        'CPU_3_%guest': '0,00',
        'CPU_3_%idle': '0,00',
        'proc/s': '100,00',
        'cswch/s': '0,00',
        'pswpin/s': '0,00',
        'pswpout/s': '0,00',
        'pgpgin/s': '100,00',
        'pgpgout/s': '100,00',
        'fault/s': '100,00',
        'majflt/s': '100,00',
        'pgfree/s': '100,00',
        'pgscank/s': '0,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: '0,00',
        rtps: '0,00',
        wtps: '0,00',
        'bread/s': '0,00',
        'bwrtn/s': '0,00',
        'frmpg/s': '0,00',
        'bufpg/s': '-0,00',
        'campg/s': '-0,00',
        kbmemfree: '3801016',
        kbmemused: '251412',
        '%memused': '6,20',
        kbbuffers: '21512',
        kbcached: '71576',
        kbcommit: '231120',
        '%commit': '5,35',
        kbactive: '65576',
        kbinact: '79812',
        kbswpfree: '265068',
        kbswpused: '0',
        '%swpused': '0,00',
        kbswpcad: '0',
        '%swpcad': '0,00',
        kbhugfree: '0',
        kbhugused: '0',
        '%hugused': '0,00',
        dentunusd: '4396',
        'file-nr': '928',
        'inode-nr': '10892',
        'pty-nr': '0',
        'runq-sz': '0',
        'plist-sz': '173',
        'ldavg-1': '0,12',
        'ldavg-5': '0,03',
        'ldavg-15': '0,01',
        blocked: '0',
        'TTY_0_rcvin/s': '0,00',
        'TTY_0_xmtin/s': '0,00',
        'TTY_0_framerr/s': '0,00',
        'TTY_0_prtyerr/s': '0,00',
        'TTY_0_brk/s': '0,00',
        'TTY_0_ovrun/s': '0,00',
        'IFACE_eth0_rxpck/s': '0,00',
        'IFACE_eth0_txpck/s': '0,00',
        'IFACE_eth0_rxkB/s': '0,00',
        'IFACE_eth0_txkB/s': '0,00',
        'IFACE_eth0_rxcmp/s': '0,00',
        'IFACE_eth0_txcmp/s': '0,00',
        'IFACE_eth0_rxmcst/s': '0,00',
        'IFACE_lo_rxpck/s': '0,00',
        'IFACE_lo_txpck/s': '0,00',
        'IFACE_lo_rxkB/s': '0,00',
        'IFACE_lo_txkB/s': '0,00',
        'IFACE_lo_rxcmp/s': '0,00',
        'IFACE_lo_txcmp/s': '0,00',
        'IFACE_lo_rxmcst/s': '0,00',
        'IFACE_eth0_rxerr/s': '0,00',
        'IFACE_eth0_txerr/s': '0,00',
        'IFACE_eth0_coll/s': '0,00',
        'IFACE_eth0_rxdrop/s': '0,00',
        'IFACE_eth0_txdrop/s': '0,00',
        'IFACE_eth0_txcarr/s': '0,00',
        'IFACE_eth0_rxfram/s': '0,00',
        'IFACE_eth0_rxfifo/s': '0,00',
        'IFACE_eth0_txfifo/s': '0,00',
        'IFACE_lo_rxerr/s': '0,00',
        'IFACE_lo_txerr/s': '0,00',
        'IFACE_lo_coll/s': '0,00',
        'IFACE_lo_rxdrop/s': '0,00',
        'IFACE_lo_txdrop/s': '0,00',
        'IFACE_lo_txcarr/s': '0,00',
        'IFACE_lo_rxfram/s': '0,00',
        'IFACE_lo_rxfifo/s': '0,00',
        'IFACE_lo_txfifo/s': '0,00',
        'call/s': '0,00',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': '0,00',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: '114',
        tcpsck: '2',
        udpsck: '2',
        rawsck: '0',
        'ip-frag': '0',
        'tcp-tw': '0' },
      { time: '22:11:01',
        'CPU_all_%usr': '1,61',
        'CPU_all_%nice': '0,39',
        'CPU_all_%sys': '0,85',
        'CPU_all_%iowait': '0,08',
        'CPU_all_%steal': '0,00',
        'CPU_all_%irq': '0,00',
        'CPU_all_%soft': '0,01',
        'CPU_all_%guest': '0,00',
        'CPU_all_%idle': '97,06',
        'CPU_0_%usr': '1,46',
        'CPU_0_%nice': '0,48',
        'CPU_0_%sys': '0,82',
        'CPU_0_%iowait': '0,06',
        'CPU_0_%steal': '0,00',
        'CPU_0_%irq': '0,00',
        'CPU_0_%soft': '0,02',
        'CPU_0_%guest': '0,00',
        'CPU_0_%idle': '97,16',
        'CPU_1_%usr': '2,00',
        'CPU_1_%nice': '0,35',
        'CPU_1_%sys': '0,91',
        'CPU_1_%iowait': '0,08',
        'CPU_1_%steal': '0,00',
        'CPU_1_%irq': '0,00',
        'CPU_1_%soft': '0,01',
        'CPU_1_%guest': '0,00',
        'CPU_1_%idle': '96,65',
        'CPU_2_%usr': '1,39',
        'CPU_2_%nice': '0,41',
        'CPU_2_%sys': '0,80',
        'CPU_2_%iowait': '0,12',
        'CPU_2_%steal': '0,00',
        'CPU_2_%irq': '0,00',
        'CPU_2_%soft': '0,01',
        'CPU_2_%guest': '0,00',
        'CPU_2_%idle': '97,27',
        'CPU_3_%usr': '1,58',
        'CPU_3_%nice': '0,32',
        'CPU_3_%sys': '0,86',
        'CPU_3_%iowait': '0,07',
        'CPU_3_%steal': '0,00',
        'CPU_3_%irq': '0,00',
        'CPU_3_%soft': '0,01',
        'CPU_3_%guest': '0,00',
        'CPU_3_%idle': '97,16',
        'proc/s': '0,97',
        'cswch/s': '1209,76',
        'pswpin/s': '0,00',
        'pswpout/s': '0,00',
        'pgpgin/s': '294,94',
        'pgpgout/s': '91,99',
        'fault/s': '1606,00',
        'majflt/s': '1,54',
        'pgfree/s': '3070,63',
        'pgscank/s': '0,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: '15,25',
        rtps: '10,29',
        wtps: '4,96',
        'bread/s': '589,88',
        'bwrtn/s': '183,97',
        'frmpg/s': '-234,07',
        'bufpg/s': '8,70',
        'campg/s': '78,55',
        kbmemfree: '3239252',
        kbmemused: '813176',
        '%memused': '20,07',
        kbbuffers: '42392',
        kbcached: '260084',
        kbcommit: '1077776',
        '%commit': '24,96',
        kbactive: '458824',
        kbinact: '226348',
        kbswpfree: '265068',
        kbswpused: '0',
        '%swpused': '0,00',
        kbswpcad: '0',
        '%swpcad': '0,00',
        kbhugfree: '0',
        kbhugused: '0',
        '%hugused': '0,00',
        dentunusd: '26691',
        'file-nr': '1920',
        'inode-nr': '16896',
        'pty-nr': '2',
        'runq-sz': '0',
        'plist-sz': '225',
        'ldavg-1': '0,93',
        'ldavg-5': '0,58',
        'ldavg-15': '0,27',
        blocked: '0',
        'TTY_0_rcvin/s': '0,00',
        'TTY_0_xmtin/s': '0,00',
        'TTY_0_framerr/s': '0,00',
        'TTY_0_prtyerr/s': '0,00',
        'TTY_0_brk/s': '0,00',
        'TTY_0_ovrun/s': '0,00',
        'IFACE_eth0_rxpck/s': '14,84',
        'IFACE_eth0_txpck/s': '11,52',
        'IFACE_eth0_rxkB/s': '16,29',
        'IFACE_eth0_txkB/s': '1,66',
        'IFACE_eth0_rxcmp/s': '0,00',
        'IFACE_eth0_txcmp/s': '0,00',
        'IFACE_eth0_rxmcst/s': '0,00',
        'IFACE_lo_rxpck/s': '0,00',
        'IFACE_lo_txpck/s': '0,00',
        'IFACE_lo_rxkB/s': '0,00',
        'IFACE_lo_txkB/s': '0,00',
        'IFACE_lo_rxcmp/s': '0,00',
        'IFACE_lo_txcmp/s': '0,00',
        'IFACE_lo_rxmcst/s': '0,00',
        'IFACE_eth0_rxerr/s': '0,00',
        'IFACE_eth0_txerr/s': '0,00',
        'IFACE_eth0_coll/s': '0,00',
        'IFACE_eth0_rxdrop/s': '0,00',
        'IFACE_eth0_txdrop/s': '0,00',
        'IFACE_eth0_txcarr/s': '0,00',
        'IFACE_eth0_rxfram/s': '0,00',
        'IFACE_eth0_rxfifo/s': '0,00',
        'IFACE_eth0_txfifo/s': '0,00',
        'IFACE_lo_rxerr/s': '0,00',
        'IFACE_lo_txerr/s': '0,00',
        'IFACE_lo_coll/s': '0,00',
        'IFACE_lo_rxdrop/s': '0,00',
        'IFACE_lo_txdrop/s': '0,00',
        'IFACE_lo_txcarr/s': '0,00',
        'IFACE_lo_rxfram/s': '0,00',
        'IFACE_lo_rxfifo/s': '0,00',
        'IFACE_lo_txfifo/s': '0,00',
        'call/s': '0,00',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': '0,00',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: '271',
        tcpsck: '70',
        udpsck: '2',
        rawsck: '0',
        'ip-frag': '0',
        'tcp-tw': '27' },
      { time: '22:21:01',
        'CPU_all_%usr': '2,31',
        'CPU_all_%nice': '0,16',
        'CPU_all_%sys': '1,09',
        'CPU_all_%iowait': '0,04',
        'CPU_all_%steal': '0,00',
        'CPU_all_%irq': '0,00',
        'CPU_all_%soft': '0,01',
        'CPU_all_%guest': '0,00',
        'CPU_all_%idle': '96,39',
        'CPU_0_%usr': '2,08',
        'CPU_0_%nice': '0,09',
        'CPU_0_%sys': '1,07',
        'CPU_0_%iowait': '0,02',
        'CPU_0_%steal': '0,00',
        'CPU_0_%irq': '0,00',
        'CPU_0_%soft': '0,02',
        'CPU_0_%guest': '0,00',
        'CPU_0_%idle': '96,73',
        'CPU_1_%usr': '2,44',
        'CPU_1_%nice': '0,22',
        'CPU_1_%sys': '1,15',
        'CPU_1_%iowait': '0,03',
        'CPU_1_%steal': '0,00',
        'CPU_1_%irq': '0,00',
        'CPU_1_%soft': '0,01',
        'CPU_1_%guest': '0,00',
        'CPU_1_%idle': '96,15',
        'CPU_2_%usr': '2,35',
        'CPU_2_%nice': '0,16',
        'CPU_2_%sys': '1,08',
        'CPU_2_%iowait': '0,06',
        'CPU_2_%steal': '0,00',
        'CPU_2_%irq': '0,00',
        'CPU_2_%soft': '0,01',
        'CPU_2_%guest': '0,00',
        'CPU_2_%idle': '96,35',
        'CPU_3_%usr': '2,37',
        'CPU_3_%nice': '0,17',
        'CPU_3_%sys': '1,08',
        'CPU_3_%iowait': '0,03',
        'CPU_3_%steal': '0,00',
        'CPU_3_%irq': '0,00',
        'CPU_3_%soft': '0,01',
        'CPU_3_%guest': '0,00',
        'CPU_3_%idle': '96,35',
        'proc/s': '0,30',
        'cswch/s': '1871,53',
        'pswpin/s': '0,00',
        'pswpout/s': '0,00',
        'pgpgin/s': '71,39',
        'pgpgout/s': '152,49',
        'fault/s': '978,78',
        'majflt/s': '0,24',
        'pgfree/s': '2677,23',
        'pgscank/s': '0,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: '12,48',
        rtps: '6,96',
        wtps: '5,52',
        'bread/s': '142,77',
        'bwrtn/s': '304,97',
        'frmpg/s': '-20,71',
        'bufpg/s': '5,30',
        'campg/s': '33,77',
        kbmemfree: '3189552',
        kbmemused: '862876',
        '%memused': '21,29',
        kbbuffers: '55116',
        kbcached: '341124',
        kbcommit: '893348',
        '%commit': '20,69',
        kbactive: '427084',
        kbinact: '293656',
        kbswpfree: '265068',
        kbswpused: '0',
        '%swpused': '0,00',
        kbswpcad: '0',
        '%swpcad': '0,00',
        kbhugfree: '0',
        kbhugused: '0',
        '%hugused': '0,00',
        dentunusd: '63455',
        'file-nr': '2016',
        'inode-nr': '22792',
        'pty-nr': '1',
        'runq-sz': '1',
        'plist-sz': '208',
        'ldavg-1': '0,42',
        'ldavg-5': '0,68',
        'ldavg-15': '0,48',
        blocked: '0',
        'TTY_0_rcvin/s': '0,00',
        'TTY_0_xmtin/s': '0,00',
        'TTY_0_framerr/s': '0,00',
        'TTY_0_prtyerr/s': '0,00',
        'TTY_0_brk/s': '0,00',
        'TTY_0_ovrun/s': '0,00',
        'IFACE_eth0_rxpck/s': '73,99',
        'IFACE_eth0_txpck/s': '61,20',
        'IFACE_eth0_rxkB/s': '104,55',
        'IFACE_eth0_txkB/s': '4,86',
        'IFACE_eth0_rxcmp/s': '0,00',
        'IFACE_eth0_txcmp/s': '0,00',
        'IFACE_eth0_rxmcst/s': '0,00',
        'IFACE_lo_rxpck/s': '0,00',
        'IFACE_lo_txpck/s': '0,00',
        'IFACE_lo_rxkB/s': '0,00',
        'IFACE_lo_txkB/s': '0,00',
        'IFACE_lo_rxcmp/s': '0,00',
        'IFACE_lo_txcmp/s': '0,00',
        'IFACE_lo_rxmcst/s': '0,00',
        'IFACE_eth0_rxerr/s': '0,00',
        'IFACE_eth0_txerr/s': '0,00',
        'IFACE_eth0_coll/s': '0,00',
        'IFACE_eth0_rxdrop/s': '0,00',
        'IFACE_eth0_txdrop/s': '0,00',
        'IFACE_eth0_txcarr/s': '0,00',
        'IFACE_eth0_rxfram/s': '0,00',
        'IFACE_eth0_rxfifo/s': '0,00',
        'IFACE_eth0_txfifo/s': '0,00',
        'IFACE_lo_rxerr/s': '0,00',
        'IFACE_lo_txerr/s': '0,00',
        'IFACE_lo_coll/s': '0,00',
        'IFACE_lo_rxdrop/s': '0,00',
        'IFACE_lo_txdrop/s': '0,00',
        'IFACE_lo_txcarr/s': '0,00',
        'IFACE_lo_rxfram/s': '0,00',
        'IFACE_lo_rxfifo/s': '0,00',
        'IFACE_lo_txfifo/s': '0,00',
        'call/s': '0,00',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': '0,00',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: '211',
        tcpsck: '10',
        udpsck: '2',
        rawsck: '0',
        'ip-frag': '0',
        'tcp-tw': '0' },
      { time: 'Moyenne',
        'CPU_:_%usr': '3',
        'CPU_:_%nice': '0,00',
        'CPU_:_%sys': '0,00',
        'CPU_:_%iowait': '0,00',
        'CPU_:_%steal': '0,00',
        'CPU_:_%irq': '0,00',
        'CPU_:_%soft': '0,00',
        'CPU_:_%guest': '0,00',
        'CPU_:_%idle': '0,00',
        'proc/s': ':',
        'cswch/s': '100,00',
        'pswpin/s': ':',
        'pswpout/s': '0,00',
        'pgpgin/s': ':',
        'pgpgout/s': '0,00',
        'fault/s': '0,00',
        'majflt/s': '100,00',
        'pgfree/s': '0,00',
        'pgscank/s': '100,00',
        'pgscand/s': '0,00',
        'pgsteal/s': '0,00',
        '%vmeff': '0,00',
        tps: ':',
        rtps: '0,00',
        wtps: '0,00',
        'bread/s': '0,00',
        'bwrtn/s': '0,00',
        'frmpg/s': ':',
        'bufpg/s': '0,00',
        'campg/s': '0,00',
        kbmemfree: ':',
        kbmemused: '3153200',
        '%memused': '899228',
        kbbuffers: '22,19',
        kbcached: '41950',
        kbcommit: '243858',
        '%commit': '1194458',
        kbactive: '27,67',
        kbinact: '544892',
        kbswpfree: ':',
        kbswpused: '265068',
        '%swpused': '0',
        kbswpcad: '0,00',
        '%swpcad': '0',
        kbhugfree: ':',
        kbhugused: '0',
        '%hugused': '0',
        dentunusd: ':',
        'file-nr': '32221',
        'inode-nr': '1856',
        'pty-nr': '20311',
        'runq-sz': ':',
        'plist-sz': '0',
        'ldavg-1': '228',
        'ldavg-5': '0,45',
        'ldavg-15': '0,49',
        blocked: '0,40',
        'TTY_:_rcvin/s': '0',
        'TTY_:_xmtin/s': '0,00',
        'TTY_:_framerr/s': '0,00',
        'TTY_:_prtyerr/s': '0,00',
        'TTY_:_brk/s': '0,00',
        'TTY_:_ovrun/s': '0,00',
        'IFACE_:_rxpck/s': 'lo',
        'IFACE_:_txpck/s': '0,00',
        'IFACE_:_rxkB/s': '0,00',
        'IFACE_:_txkB/s': '0,00',
        'IFACE_:_rxcmp/s': '0,00',
        'IFACE_:_txcmp/s': '0,00',
        'IFACE_:_rxmcst/s': '0,00',
        'IFACE_:_rxerr/s': 'lo',
        'IFACE_:_txerr/s': '0,00',
        'IFACE_:_coll/s': '0,00',
        'IFACE_:_rxdrop/s': '0,00',
        'IFACE_:_txdrop/s': '0,00',
        'IFACE_:_txcarr/s': '0,00',
        'IFACE_:_rxfram/s': '0,00',
        'IFACE_:_rxfifo/s': '0,00',
        'IFACE_:_txfifo/s': '0,00',
        'call/s': ':',
        'retrans/s': '0,00',
        'read/s': '0,00',
        'write/s': '0,00',
        'access/s': '0,00',
        'getatt/s': '0,00',
        'scall/s': ':',
        'badcall/s': '0,00',
        'packet/s': '0,00',
        'udp/s': '0,00',
        'tcp/s': '0,00',
        'hit/s': '0,00',
        'miss/s': '0,00',
        'sread/s': '0,00',
        'swrite/s': '0,00',
        'saccess/s': '0,00',
        'sgetatt/s': '0,00',
        totsck: ':',
        tcpsck: '233',
        udpsck: '24',
        rawsck: '2',
        'ip-frag': '0',
        'tcp-tw': '0' }
      ]);
    });
  });
});
