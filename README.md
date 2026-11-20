# The World in One Day — Friday, 20 November 2026

Entry for the make.fun `news-image-20261120` bounty: one image summing up
Friday 20 November 2026's world news.

`entry.png` (1024×1024) is a drawn newspaper-style infographic with the
day's six biggest stories, verified against the day's reporting:

1. **Justice** — The ICJ rules Myanmar committed genocide against the
   Rohingya, the court's first-ever state genocide verdict (Reuters, BBC,
   CNN, Le Monde).
2. **Politics** — Trump says he is "not rushing" a decision on Iran and
   will "see what happens after January 1", pushing any new strikes to 2027
   (Reuters).
3. **Weather** — Cyclone Akvan bears down on Odisha; 300,000 people
   evacuated, 423 rescue teams deployed (The Hindu).
4. **Space** — NASA confirms Voyager 1 has reached one light-day from
   Earth, the first human-made object ever that far (NASA, Smithsonian).
5. **Culture** — GTA 6 day-one sales pass $1.8 billion, overtaking The
   Odyssey's entire global box-office run.
6. **Sport** — Henry Nicholls 113 not out on day one of the first Test
   against India in Wellington; New Zealand 243/5.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. Run it twice and the bytes are identical.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
