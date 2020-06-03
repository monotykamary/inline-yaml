const map = yaml`
map:
  Block style: !!map
    Clark : Evans
    Ingy  : döt Net
    Oren  : Ben-Kiki
  Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }
`

const omap = /* yaml */`
omap:
  Bestiary: !!omap
    - aardvark: African pig-like ant eater. Ugly.
    - anteater: South-American ant eater. Two species.
    - anaconda: South-American constrictor snake. Scaly.
  Numbers: !!omap [ one: 1, two: 2, three : 3 ]
`
const pairs = YAML`
pairs:
  Block tasks: !!pairs
    - meeting: with team.
    - meeting: with boss.
    - break: lunch.
    - meeting: with client.
  Flow tasks: !!pairs [ meeting: with team, meeting: with boss ]
`

const set = /* YAML */`
set:
  baseball players: !!set
    ? Mark McGwire
    ? Sammy Sosa
    ? Ken Griffey
  baseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }
`
const seq = yaml`
seq:
  Block style: !!seq
  - Mercury
  - Venus
  - Earth
  - Mars
  - Jupiter
  - Saturn
  - Uranus
  - Neptune
  - Pluto
  Flow style: !!seq [ Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto ]
`
