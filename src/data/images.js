const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: u('photo-1492684223066-81342ee5ff30', 1920),
  about: u('photo-1511795409834-ef04bbd61622', 1400),
  office: u('photo-1497366216548-37526070297c', 1400),
  team: u('photo-1522071820081-009f0129c71c', 1400),
  stage: u('photo-1470229722913-7c0e2dbbafd3', 1600),
  wedding: u('photo-1519741497674-611481863552', 1400),
  corporate: u('photo-1540575467063-178a50c2df87', 1400),
  festival: u('photo-1459749411175-04bf5292ceea', 1400),
  launch: u('photo-1559223607-a43c990c692c', 1400),
  school: u('photo-1523580494863-6f303122d308', 1400),
  awards: u('photo-1464366400600-7168b8af9bc3', 1400),
  dinner: u('photo-1414235077428-338989a2e8c0', 1400),
  lighting: u('photo-1501281668745-f7f57925c3b4', 1400),
  gallery: [
    u('photo-1492684223066-81342ee5ff30'),
    u('photo-1511795409834-ef04bbd61622'),
    u('photo-1470229722913-7c0e2dbbafd3'),
    u('photo-1519741497674-611481863552'),
    u('photo-1540575467063-178a50c2df87'),
    u('photo-1459749411175-04bf5292ceea'),
    u('photo-1559223607-a43c990c692c'),
    u('photo-1523580494863-6f303122d308'),
    u('photo-1464366400600-7168b8af9bc3'),
    u('photo-1414235077428-338989a2e8c0'),
    u('photo-1501281668745-f7f57925c3b4'),
    u('photo-1533174072545-7a4b6ad7a6c3'),
  ],
  portraits: [
    u('photo-1560250097-0b93528c311a', 600),
    u('photo-1573496359142-b8d87734a5a2', 600),
    u('photo-1472099645785-5658abf4ff4e', 600),
    u('photo-1580489944761-15a19d654956', 600),
    u('photo-1519085360753-af0119f7cbe7', 600),
    u('photo-1438761681033-6461ffad8d80', 600),
  ],
  clients: [
    u('photo-1560179707-f14e90ef3623', 400),
    u('photo-1486406146926-c627a92ad1ab', 400),
    u('photo-1497366811353-6870744d04b2', 400),
  ],
}

export const videoPoster = images.stage
export const showcaseVideo =
  'https://cdn.coverr.co/videos/coverr-people-dancing-at-a-concert-5726/1080p.mp4'
