"use strict";

// node_modules/rybitten/dist/cubes.mjs
var r = [
  // white
  [0.9921568627450981, 0.9647058823529412, 0.9294117647058824],
  // red
  [0.8901960784313725, 0.1411764705882353, 0.12941176470588237],
  // yellow
  [0.9529411764705882, 0.9019607843137255, 0],
  // orange
  [0.9411764705882353, 0.5568627450980392, 0.10980392156862745],
  // blue
  [0.08627450980392157, 0.6, 0.8549019607843137],
  // pink / but often violet in old color wheels
  [0.47058823529411764, 0.13333333333333333, 0.6666666666666666],
  // green
  [0, 0.5568627450980392, 0.3568627450980392],
  // black
  [0.11372549019607843, 0.10980392156862745, 0.10980392156862745]
];
var t = [
  [253 / 255, 246 / 255, 237 / 255],
  [247 / 255, 45 / 255, 41 / 255],
  [253 / 255, 203 / 255, 0 / 255],
  [250 / 255, 102 / 255, 13 / 255],
  [17 / 255, 97 / 255, 170 / 255],
  [101 / 255, 57 / 255, 138 / 255],
  [70 / 255, 139 / 255, 73 / 255],
  [29 / 255, 28 / 255, 28 / 255]
];
var o = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0],
  [1, 0.5, 0],
  [0.163, 0.373, 0.6],
  [0.5, 0, 0.5],
  [0, 0.66, 0.2],
  [0.2, 0.094, 0]
];
var a = [
  [245 / 255, 238 / 255, 226 / 255],
  [170 / 255, 14 / 255, 1 / 255],
  [224 / 255, 178 / 255, 0 / 255],
  [217 / 255, 104 / 255, 5 / 255],
  [18 / 255, 107 / 255, 145 / 255],
  [103 / 255, 15 / 255, 128 / 255],
  [88 / 255, 133 / 255, 30 / 255],
  [44 / 255, 37 / 255, 30 / 255]
];
var n = [
  [254 / 255, 250 / 255, 226 / 255],
  [237 / 255, 55 / 255, 58 / 255],
  [255 / 255, 233 / 255, 111 / 255],
  [250 / 255, 102 / 255, 13 / 255],
  [33 / 255, 112 / 255, 163 / 255],
  [238 / 255, 131 / 255, 154 / 255],
  [59 / 255, 155 / 255, 83 / 255],
  [24 / 255, 10 / 255, 1 / 255]
];
var s = [
  [255 / 255, 255 / 255, 255 / 255],
  [218 / 255, 105 / 255, 104 / 255],
  [255 / 255, 244 / 255, 122 / 255],
  [232 / 255, 154 / 255, 113 / 255],
  [73 / 255, 138 / 255, 186 / 255],
  [97 / 255, 96 / 255, 178 / 255],
  [144 / 255, 191 / 255, 140 / 255],
  [8 / 255, 8 / 255, 8 / 255]
];
var c = [
  [240 / 255, 234 / 255, 214 / 255],
  [204 / 255, 50 / 255, 53 / 255],
  [253 / 255, 222 / 255, 20 / 255],
  [230 / 255, 152 / 255, 92 / 255],
  [1 / 255, 88 / 255, 140 / 255],
  [107 / 255, 51 / 255, 111 / 255],
  [51 / 255, 138 / 255, 92 / 255],
  [55 / 255, 39 / 255, 23 / 255]
];
var l = [
  [249 / 255, 232 / 255, 209 / 255],
  [216 / 255, 43 / 255, 59 / 255],
  [231 / 255, 175 / 255, 2 / 255],
  [224 / 255, 89 / 255, 31 / 255],
  [92 / 255, 123 / 255, 145 / 255],
  [77 / 255, 58 / 255, 78 / 255],
  [107 / 255, 129 / 255, 53 / 255],
  [14 / 255, 8 / 255, 7 / 255]
];
var u = [
  // white
  [241 / 255, 236 / 255, 213 / 255],
  // red
  [235 / 255, 66 / 255, 35 / 255],
  // yellow
  [253 / 255, 236 / 255, 1 / 255],
  // orange
  [254 / 255, 130 / 255, 39 / 255],
  // blue
  [3 / 255, 7 / 255, 171 / 255],
  // pink / but often violet in old color wheels
  [74 / 255, 50 / 255, 86 / 255],
  // green
  [55 / 255, 131 / 255, 74 / 255],
  // black
  [2 / 255, 1 / 255, 0 / 255]
];
var i = [
  [238 / 255, 232 / 255, 206 / 255],
  [222 / 255, 62 / 255, 29 / 255],
  [247 / 255, 225 / 255, 7 / 255],
  [254 / 255, 130 / 255, 39 / 255],
  [4 / 255, 6 / 255, 139 / 255],
  [74 / 255, 50 / 255, 86 / 255],
  [56 / 255, 131 / 255, 75 / 255],
  [2 / 255, 1 / 255, 0 / 255]
];
var h = [
  [239 / 255, 235 / 255, 225 / 255],
  [182 / 255, 53 / 255, 55 / 255],
  [253 / 255, 203 / 255, 0 / 255],
  [222 / 255, 69 / 255, 20 / 255],
  [95 / 255, 157 / 255, 191 / 255],
  [83 / 255, 70 / 255, 98 / 255],
  [58 / 255, 90 / 255, 66 / 255],
  [8 / 255, 9 / 255, 13 / 255]
];
var _ = [
  [228 / 255, 218 / 255, 197 / 255],
  [181 / 255, 65 / 255, 60 / 255],
  [229 / 255, 193 / 255, 81 / 255],
  [220 / 255, 137 / 255, 61 / 255],
  [59 / 255, 143 / 255, 171 / 255],
  [121 / 255, 97 / 255, 134 / 255],
  [13 / 255, 170 / 255, 114 / 255],
  [46 / 255, 44 / 255, 38 / 255]
];
var p = [
  [206 / 255, 205 / 255, 209 / 255],
  [181 / 255, 38 / 255, 54 / 255],
  [221 / 255, 187 / 255, 23 / 255],
  [208 / 255, 120 / 255, 37 / 255],
  [10 / 255, 71 / 255, 129 / 255],
  [101 / 255, 36 / 255, 66 / 255],
  [75 / 255, 129 / 255, 131 / 255],
  [26 / 255, 30 / 255, 47 / 255]
];
var f = [
  [237 / 255, 213 / 255, 177 / 255],
  [167 / 255, 33 / 255, 28 / 255],
  [245 / 255, 181 / 255, 18 / 255],
  [204 / 255, 93 / 255, 46 / 255],
  [71 / 255, 122 / 255, 141 / 255],
  [99 / 255, 79 / 255, 93 / 255],
  [109 / 255, 143 / 255, 118 / 255],
  [44 / 255, 44 / 255, 37 / 255]
];
var y = [
  [240 / 255, 236 / 255, 235 / 255],
  [247 / 255, 65 / 255, 51 / 255],
  [243 / 255, 187 / 255, 6 / 255],
  [251 / 255, 130 / 255, 2 / 255],
  [37 / 255, 71 / 255, 169 / 255],
  [176 / 255, 121 / 255, 177 / 255],
  [2 / 255, 117 / 255, 111 / 255],
  [41 / 255, 42 / 255, 45 / 255]
];
var b = [
  [231 / 255, 235 / 255, 237 / 255],
  [229 / 255, 30 / 255, 38 / 255],
  [255 / 255, 198 / 255, 12 / 255],
  [245 / 255, 119 / 255, 34 / 255],
  [17 / 255, 97 / 255, 170 / 255],
  [139 / 255, 47 / 255, 146 / 255],
  [1 / 255, 167 / 255, 98 / 255],
  [0 / 255, 0 / 255, 1 / 255]
];
var R = [
  [236 / 255, 237 / 255, 241 / 255],
  [200 / 255, 75 / 255, 49 / 255],
  [235 / 255, 207 / 255, 13 / 255],
  [228 / 255, 168 / 255, 21 / 255],
  [39 / 255, 108 / 255, 176 / 255],
  [188 / 255, 57 / 255, 104 / 255],
  [122 / 255, 176 / 255, 62 / 255],
  [4 / 255, 4 / 255, 4 / 255]
];
var C = [
  [241 / 255, 236 / 255, 230 / 255],
  [185 / 255, 34 / 255, 17 / 255],
  [231 / 255, 200 / 255, 52 / 255],
  [232 / 255, 90 / 255, 26 / 255],
  [26 / 255, 70 / 255, 79 / 255],
  [82 / 255, 15 / 255, 47 / 255],
  [67 / 255, 111 / 255, 33 / 255],
  [29 / 255, 28 / 255, 28 / 255]
];
var m = [
  [215 / 255, 208 / 255, 180 / 255],
  [202 / 255, 0 / 255, 17 / 255],
  [220 / 255, 170 / 255, 0 / 255],
  [229 / 255, 76 / 255, 32 / 255],
  [0 / 255, 126 / 255, 157 / 255],
  [137 / 255, 37 / 255, 79 / 255],
  [0 / 255, 110 / 255, 60 / 255],
  [31 / 255, 27 / 255, 28 / 255]
];
var B = [
  [236 / 255, 231 / 255, 213 / 255],
  [188 / 255, 32 / 255, 43 / 255],
  [233 / 255, 201 / 255, 0 / 255],
  [197 / 255, 72 / 255, 30 / 255],
  [50 / 255, 42 / 255, 115 / 255],
  [116 / 255, 48 / 255, 101 / 255],
  [69 / 255, 118 / 255, 61 / 255],
  [56 / 255, 44 / 255, 42 / 255]
];
var g = [
  [209 / 255, 194 / 255, 173 / 255],
  [159 / 255, 36 / 255, 31 / 255],
  [231 / 255, 191 / 255, 6 / 255],
  [231 / 255, 155 / 255, 7 / 255],
  [75 / 255, 90 / 255, 200 / 255],
  [121 / 255, 100 / 255, 188 / 255],
  [115 / 255, 179 / 255, 63 / 255],
  [52 / 255, 49 / 255, 40 / 255]
];
var T = [
  [250 / 255, 248 / 255, 244 / 255],
  [255 / 255, 41 / 255, 37 / 255],
  [251 / 255, 223 / 255, 47 / 255],
  [253 / 255, 151 / 255, 35 / 255],
  [31 / 255, 106 / 255, 184 / 255],
  [159 / 255, 68 / 255, 150 / 255],
  [80 / 255, 180 / 255, 122 / 255],
  [36 / 255, 38 / 255, 39 / 255]
];
var Y = [
  [233 / 255, 199 / 255, 173 / 255],
  [214 / 255, 76 / 255, 127 / 255],
  [238 / 255, 204 / 255, 124 / 255],
  [230 / 255, 174 / 255, 115 / 255],
  [86 / 255, 141 / 255, 146 / 255],
  [118 / 255, 83 / 255, 97 / 255],
  [196 / 255, 192 / 255, 118 / 255],
  [60 / 255, 52 / 255, 40 / 255]
];
var E = [
  [255 / 255, 244 / 255, 216 / 255],
  [248 / 255, 80 / 255, 46 / 255],
  [255 / 255, 213 / 255, 44 / 255],
  [254 / 255, 129 / 255, 5 / 255],
  [0 / 255, 124 / 255, 197 / 255],
  [132 / 255, 77 / 255, 139 / 255],
  [120 / 255, 160 / 255, 66 / 255],
  [2 / 255, 4 / 255, 6 / 255]
];
var A = [
  [254 / 255, 249 / 255, 246 / 255],
  [248 / 255, 20 / 255, 35 / 255],
  [237 / 255, 199 / 255, 8 / 255],
  [254 / 255, 128 / 255, 11 / 255],
  [48 / 255, 140 / 255, 206 / 255],
  [182 / 255, 40 / 255, 94 / 255],
  [135 / 255, 187 / 255, 26 / 255],
  [29 / 255, 27 / 255, 28 / 255]
];
var M = [
  [226 / 255, 216 / 255, 205 / 255],
  [224 / 255, 43 / 255, 39 / 255],
  [251 / 255, 204 / 255, 38 / 255],
  [255 / 255, 138 / 255, 4 / 255],
  [82 / 255, 103 / 255, 202 / 255],
  [199 / 255, 112 / 255, 253 / 255],
  [104 / 255, 182 / 255, 90 / 255],
  [22 / 255, 19 / 255, 11 / 255]
];
var H = [
  [221 / 255, 219 / 255, 211 / 255],
  [196 / 255, 82 / 255, 69 / 255],
  [196 / 255, 167 / 255, 80 / 255],
  [200 / 255, 123 / 255, 70 / 255],
  [74 / 255, 104 / 255, 167 / 255],
  [94 / 255, 89 / 255, 161 / 255],
  [86 / 255, 139 / 255, 70 / 255],
  [38 / 255, 38 / 255, 38 / 255]
];
var d = [
  [237 / 255, 235 / 255, 236 / 255],
  [242 / 255, 146 / 255, 109 / 255],
  [245 / 255, 234 / 255, 143 / 255],
  [247 / 255, 194 / 255, 115 / 255],
  [89 / 255, 118 / 255, 212 / 255],
  [237 / 255, 191 / 255, 243 / 255],
  [153 / 255, 201 / 255, 113 / 255],
  [50 / 255, 63 / 255, 66 / 255]
];
var S = [
  [255 / 255, 251 / 255, 230 / 255],
  [238 / 255, 86 / 255, 46 / 255],
  [249 / 255, 213 / 255, 50 / 255],
  [252 / 255, 132 / 255, 4 / 255],
  [43 / 255, 103 / 255, 175 / 255],
  [246 / 255, 137 / 255, 163 / 255],
  [171 / 255, 205 / 255, 94 / 255],
  [5 / 255, 5 / 255, 5 / 255]
];
var N = [
  [246 / 255, 248 / 255, 244 / 255],
  [248 / 255, 20 / 255, 40 / 255],
  [255 / 255, 198 / 255, 8 / 255],
  [248 / 255, 140 / 255, 18 / 255],
  [8 / 255, 41 / 255, 148 / 255],
  [152 / 255, 56 / 255, 142 / 255],
  [8 / 255, 156 / 255, 49 / 255],
  [12 / 255, 17 / 255, 15 / 255]
];
var e = /* @__PURE__ */ new Map();
e.set("itten", {
  title: "Chromatic Circle",
  author: "Johannes Itten",
  year: 1961,
  reference: "farbkreis_extended.png",
  cube: r
});
e.set("itten-normalized", {
  title: "Chromatic Circle (Paper-white)",
  author: "Johannes Itten",
  year: 1961,
  reference: "Johannes-Itten-The-chromatic-circle-some-exercises-on-the-contrast-of-pure-colors.webp",
  cube: t
});
e.set("itten-neutral", {
  title: "Nathan Gossett & Baoquan Chen",
  author: "Johannes Itten",
  year: 1961,
  reference: "itten-ryb.pdf",
  cube: o
});
e.set("bezold", {
  title: "Farbentafel",
  author: "Wilhelm von Bezold",
  year: 1874,
  reference: "Bezold_Farbentafel_1874.jpg",
  cube: a
});
e.set("boutet", {
  title: "Twelve-color color circles ",
  author: "Claude Boutet",
  year: 1708,
  reference: "Boutet_1708_color_circles.jpg",
  cube: n
});
e.set("hett", {
  title: "RGV Color Wheel",
  author: "J. A. H. Hett",
  year: 1908,
  reference: "RGV_color_wheel_1908",
  cube: s
});
e.set("schiffermueller", {
  title: "Versuch eines Farbensystems",
  author: "Ignaz Schifferm\xFCller",
  year: 1772,
  reference: "020_schiffermueller1.jpg",
  cube: c
});
e.set("harris", {
  title: "The Natural System of Colours",
  author: "Moses Harris",
  year: 1766,
  reference: "Moses_Harris_The_Natural_System_of_Colours.jpg",
  cube: l
});
e.set("harrisc82", {
  title: "The Natural System of Colours",
  author: "Moses Harris / C82",
  year: 1766,
  reference: "harrisc82.png",
  cube: u
});
e.set("harrisc82alt", {
  title: "The Natural System of Colours",
  author: "Moses Harris / C82",
  year: 1766,
  reference: "harrisc82alt.png",
  cube: i
});
e.set("goethe", {
  title: "Farbenkreis",
  author: "Johann Wolfgang von Goethe",
  year: 1809,
  reference: "Goethe_Farbenkreis_zur_Symbolisierung_des_menschlichen_Geistes-_und_Seelenlebens_1809.jpg",
  cube: h
});
e.set("munsell", {
  title: "Munsell Color System",
  author: "Albert Henry Munsell",
  year: 1905,
  reference: "munsell-atlas-11.jpg",
  cube: _
});
e.set("munsell-alt", {
  title: "A Grammar of Color",
  author: "Cleland, T. M. & Albert Henry Munsell",
  year: 1921,
  reference: "munsell-alt.jpg",
  cube: p
});
e.set("hayter", {
  title: "New Practical Treatise on the Three Primitive Colours",
  author: "Charles Hayter",
  year: 1826,
  reference: "Color_diagram_Charles_Hayter.jpg",
  cube: f
});
e.set("bormann", {
  title: "Gouache tint study for Josef Alber's Preliminary Course",
  author: "Heinrich-Siegfried Bormann",
  year: 1931,
  reference: "bormann.png",
  cube: y
});
e.set("albers", {
  title: "Interaction of Color",
  author: "Josef Albers",
  year: 1942,
  reference: "albers-color-harmony.jpg",
  cube: b
});
e.set("lohse", {
  title: "Kunsthalle Bern Poster",
  author: "Richard Paul Lohse",
  year: 1970,
  reference: "lohse.png",
  cube: R
});
e.set("chevreul", {
  title: "Cercle chromatique",
  author: "Michel Eug\xE8ne Chevreul",
  year: 1839,
  reference: "Cercle_chromatique_Chevreul_2.jpg",
  cube: C
});
e.set("maycock", {
  title: "Scale of Normal Colors and their Hues",
  author: "Mark M. Maycock",
  year: 1895,
  reference: "maycock.png",
  cube: g
});
e.set("colorprinter", {
  title: "The Color Printer",
  author: "John Earhart",
  year: 1892,
  reference: "colorprinter.png",
  cube: T
});
e.set("japschool", {
  title: "Japanese Textbook",
  author: "Japanese School",
  year: 1930,
  reference: "japschool.png",
  cube: m
});
e.set("kindergarten1890", {
  title: "Kindergarten Workbook",
  author: "Milton Bradley",
  year: 1890,
  reference: "kindergarten1890.jpg",
  cube: B
});
e.set("marvel-news", {
  title: "64 Color Chart on Newsprint",
  author: "Marvel Comics",
  year: 1982,
  reference: "marvel-news.png",
  cube: Y
});
e.set("apple90s", {
  title: "Macintosh Reference Manual",
  author: "Apple",
  year: 1990,
  reference: "apple90s.png",
  cube: E
});
e.set("apple80s", {
  title: "HyperCard User Manual",
  author: "Apple",
  year: 1989,
  reference: "apple80s.png",
  cube: A
});
e.set("clayton", {
  title: "Intrinsic Value Plate",
  author: "Greg Clayton",
  year: 2017,
  reference: "A260P03_IntrinsicValue1.gif",
  cube: N
});
e.set("pixelart", {
  title: "Pixel Art",
  author: "Tofu",
  year: 2024,
  reference: "pixelart.png",
  cube: M
});
e.set("ippsketch", {
  title: "Imposter Syndrome",
  author: "Ippsketch",
  year: 2021,
  reference: "ippsketch.png",
  cube: H
});
e.set("ryan", {
  title: "Compositions Palette",
  author: "Ryan",
  year: 2024,
  reference: "ryan.png",
  cube: d
});
e.set("ten", {
  title: "Ten",
  author: "Roni Kaufman",
  year: 2022,
  reference: "ten.png",
  cube: S
});
e.set("rgb", {
  title: "Inverted RGB",
  author: "James Clerk Maxwell",
  year: 1860,
  reference: "rgb-cube.png",
  cube: [
    [1, 1, 1],
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 0]
  ]
});

// node_modules/rybitten/dist/rybitten.mjs
var g2 = (t2) => t2 * t2 * (3 - 2 * t2);
var l2 = (t2, n2, s2) => t2 + s2 * (n2 - t2);
var m2 = (t2, n2, s2, e2, r2, o2) => l2(l2(t2, n2, r2), l2(s2, e2, r2), o2);
var p2 = (t2, n2, s2, e2, r2, o2, c2, u2, b2, a2, i2) => l2(
  m2(t2, n2, s2, e2, b2, a2),
  m2(r2, o2, c2, u2, b2, a2),
  i2
);
function k(t2, { cube: n2 = r, easingFn: s2 = g2 } = {}) {
  const e2 = s2(t2[0]), r2 = s2(t2[1]), o2 = s2(t2[2]), c2 = n2.map((a2) => a2[0]), u2 = n2.map((a2) => a2[1]), b2 = n2.map((a2) => a2[2]);
  return [
    p2(...c2, e2, r2, o2),
    p2(...u2, e2, r2, o2),
    p2(...b2, e2, r2, o2)
  ];
}

// node_modules/rampensau/dist/index.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var utils_exports = {};
__export(utils_exports, {
  lerp: () => lerp,
  makeCurveEasings: () => makeCurveEasings,
  pointOnCurve: () => pointOnCurve,
  scaleSpreadArray: () => scaleSpreadArray,
  shuffleArray: () => shuffleArray
});
function shuffleArray(array, rndFn = Math.random) {
  const copy = [...array];
  let currentIndex = copy.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(rndFn() * currentIndex);
    currentIndex--;
    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex],
      copy[currentIndex]
    ];
  }
  return copy;
}
var lerp = (amt, from, to) => from + amt * (to - from);
var scaleSpreadArray = (valuesToFill, targetSize, padding = 0, fillFunction = lerp) => {
  if (!valuesToFill || valuesToFill.length < 2) {
    throw new Error("valuesToFill array must have at least two values.");
  }
  if (targetSize < 1 && padding > 0) {
    throw new Error("Target size must be at least 1");
  }
  if (targetSize < valuesToFill.length && padding === 0) {
    throw new Error(
      "Target size must be greater than or equal to the valuesToFill array length."
    );
  }
  if (padding <= 0) {
    const valuesToAdd = targetSize - valuesToFill.length;
    const chunkArray = valuesToFill.map((value) => [value]);
    for (let i2 = 0; i2 < valuesToAdd; i2++) {
      const idx = i2 % (valuesToFill.length - 1);
      if (idx >= 0 && idx < chunkArray.length) {
        const chunk = chunkArray[idx];
        if (chunk) {
          chunk.push(null);
        }
      }
    }
    for (let i2 = 0; i2 < chunkArray.length - 1; i2++) {
      const currentChunk = chunkArray[i2];
      const nextChunk = chunkArray[i2 + 1];
      if (!currentChunk || !nextChunk) {
        continue;
      }
      const currentValue = currentChunk[0];
      const nextValue = nextChunk[0];
      if (currentValue === void 0 || nextValue === void 0) {
        continue;
      }
      for (let j = 1; j < currentChunk.length; j++) {
        const percent = j / currentChunk.length;
        currentChunk[j] = fillFunction(percent, currentValue, nextValue);
      }
    }
    return chunkArray.flat();
  }
  const result = [];
  const domainStart = padding;
  const domainEnd = 1 - padding;
  for (let i2 = 0; i2 < targetSize; i2++) {
    const t2 = targetSize === 1 ? 0.5 : i2 / (targetSize - 1);
    const adjustedT = domainStart + t2 * (domainEnd - domainStart);
    let segmentIndex = 0;
    const normalizedPositions = valuesToFill.map(
      (_2, i22) => i22 / (valuesToFill.length - 1)
    );
    for (let j = 1; j < normalizedPositions.length; j++) {
      const position = normalizedPositions[j];
      if (position !== void 0 && adjustedT <= position) {
        segmentIndex = j - 1;
        break;
      }
      if (j === normalizedPositions.length - 1) {
        segmentIndex = j - 1;
      }
    }
    segmentIndex = Math.min(Math.max(0, segmentIndex), valuesToFill.length - 2);
    const segmentStart = normalizedPositions[segmentIndex] || 0;
    const segmentEnd = normalizedPositions[segmentIndex + 1] || 1;
    let segmentT = 0;
    if (segmentEnd > segmentStart) {
      segmentT = (adjustedT - segmentStart) / (segmentEnd - segmentStart);
    }
    const fromValue = valuesToFill[segmentIndex];
    const toValue = valuesToFill[segmentIndex + 1];
    if (fromValue === void 0 || toValue === void 0) {
      throw new Error(`Invalid segment values at index ${segmentIndex}`);
    }
    const value = fillFunction(segmentT, fromValue, toValue);
    result.push(value);
  }
  return result;
};
var pointOnCurve = (curveMethod, curveAccent) => {
  return (t2) => {
    const limit = Math.PI / 2;
    const slice = limit / 1;
    const percentile = t2;
    let x = 0, y2 = 0;
    if (curveMethod === "lam\xE9") {
      const t22 = percentile * limit;
      const exp = 2 / (2 + 20 * curveAccent);
      const cosT = Math.cos(t22);
      const sinT = Math.sin(t22);
      x = Math.sign(cosT) * Math.abs(cosT) ** exp;
      y2 = Math.sign(sinT) * Math.abs(sinT) ** exp;
    } else if (curveMethod === "arc") {
      y2 = Math.cos(-Math.PI / 2 + t2 * slice + curveAccent);
      x = Math.sin(Math.PI / 2 + t2 * slice - curveAccent);
    } else if (curveMethod === "pow") {
      x = Math.pow(1 - percentile, 1 - curveAccent);
      y2 = Math.pow(percentile, 1 - curveAccent);
    } else if (curveMethod === "powY") {
      x = Math.pow(1 - percentile, curveAccent);
      y2 = Math.pow(percentile, 1 - curveAccent);
    } else if (curveMethod === "powX") {
      x = Math.pow(percentile, curveAccent);
      y2 = Math.pow(percentile, 1 - curveAccent);
    } else if (typeof curveMethod === "function") {
      const [xFunc, yFunc] = curveMethod(t2, curveAccent);
      x = xFunc;
      y2 = yFunc;
    } else {
      throw new Error(
        `pointOnCurve() curveAccent parameter is expected to be "lam\xE9" | "arc" | "pow" | "powY" | "powX" or a function but \`${curveMethod}\` given.`
      );
    }
    return { x, y: y2 };
  };
};
var makeCurveEasings = (curveMethod, curveAccent) => {
  const point = pointOnCurve(curveMethod, curveAccent);
  return {
    sEasing: (t2) => point(t2).x,
    lEasing: (t2) => point(t2).y
  };
};
var colorUtils_exports = {};
__export(colorUtils_exports, {
  colorHarmonies: () => colorHarmonies,
  colorToCSS: () => colorToCSS,
  harveyHue: () => harveyHue,
  hsv2hsl: () => hsv2hsl,
  normalizeHue: () => normalizeHue,
  uniqueRandomHues: () => uniqueRandomHues
});
function normalizeHue(h2) {
  return (h2 % 360 + 360) % 360;
}
function harveyHue(h2) {
  h2 = normalizeHue(h2) / 360;
  if (h2 === 1 || h2 === 0) return h2;
  h2 = 1 + h2 % 1;
  const seg = 1 / 6;
  const a2 = h2 % seg / seg * Math.PI / 2;
  const [b2, c2] = [seg * Math.cos(a2), seg * Math.sin(a2)];
  const i2 = Math.floor(h2 * 6);
  const cases = [c2, 1 / 3 - b2, 1 / 3 + c2, 2 / 3 - b2, 2 / 3 + c2, 1 - b2];
  return cases[i2 % 6] * 360;
}
var colorHarmonies = {
  complementary: (h2) => [normalizeHue(h2), normalizeHue(h2 + 180)],
  splitComplementary: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 150),
    normalizeHue(h2 - 150)
  ],
  triadic: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 120),
    normalizeHue(h2 + 240)
  ],
  tetradic: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 90),
    normalizeHue(h2 + 180),
    normalizeHue(h2 + 270)
  ],
  monochromatic: (h2) => [normalizeHue(h2), normalizeHue(h2)],
  // min 2 for RampenSau
  doubleComplementary: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 180),
    normalizeHue(h2 + 30),
    normalizeHue(h2 + 210)
  ],
  compound: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 180),
    normalizeHue(h2 + 60),
    normalizeHue(h2 + 240)
  ],
  analogous: (h2) => [
    normalizeHue(h2),
    normalizeHue(h2 + 30),
    normalizeHue(h2 + 60),
    normalizeHue(h2 + 90),
    normalizeHue(h2 + 120),
    normalizeHue(h2 + 150)
  ]
};
function uniqueRandomHues({
  startHue = 0,
  total = 9,
  minHueDiffAngle = 60,
  rndFn = Math.random
} = {}) {
  minHueDiffAngle = Math.min(minHueDiffAngle, 360 / total);
  const baseHue = startHue || rndFn() * 360;
  const huesToPickFrom = Array.from(
    {
      length: Math.round(360 / minHueDiffAngle)
    },
    (_2, i2) => (baseHue + i2 * minHueDiffAngle) % 360
  );
  let randomizedHues = shuffleArray(huesToPickFrom, rndFn);
  if (randomizedHues.length > total) {
    randomizedHues = randomizedHues.slice(0, total);
  }
  return randomizedHues;
}
var hsv2hsl = ([h2, s2, v]) => {
  const l3 = v - v * s2 / 2;
  const m3 = Math.min(l3, 1 - l3);
  const s_hsl = m3 === 0 ? 0 : (v - l3) / m3;
  return [h2, s_hsl, l3];
};
var colorModsCSS = {
  oklch: (color) => [color[2] * 100 + "%", color[1] * 100 + "%", color[0]],
  lch: (color) => [color[2] * 100 + "%", color[1] * 100 + "%", color[0]],
  hsl: (color) => [color[0], color[1] * 100 + "%", color[2] * 100 + "%"],
  hsv: (color) => {
    const [h2, s2, l3] = hsv2hsl(color);
    return [h2, s2 * 100 + "%", l3 * 100 + "%"];
  }
};
var colorToCSS = (color, mode = "oklch") => {
  const cssMode = mode === "hsv" ? "hsl" : mode;
  return `${cssMode}(${colorModsCSS[mode](color).join(" ")})`;
};
var generateColorRampParams = {
  total: {
    default: 5,
    props: { min: 4, max: 50, step: 1 }
  },
  hStart: {
    default: 0,
    props: { min: 0, max: 360, step: 0.1 }
  },
  hCycles: {
    default: 1,
    props: { min: -2, max: 2, step: 1e-3 }
  },
  hStartCenter: {
    default: 0.5,
    props: { min: 0, max: 1, step: 1e-3 }
  },
  minLight: {
    default: Math.random() * 0.2,
    props: { min: 0, max: 1, step: 1e-3 }
  },
  maxLight: {
    default: 0.89 + Math.random() * 0.11,
    props: { min: 0, max: 1, step: 1e-3 }
  },
  minSaturation: {
    default: Math.random() < 0.5 ? 0.4 : 0.8 + Math.random() * 0.2,
    props: { min: 0, max: 1, step: 1e-3 }
  },
  maxSaturation: {
    default: Math.random() < 0.5 ? 0.35 : 0.9 + Math.random() * 0.1,
    props: { min: 0, max: 1, step: 1e-3 }
  },
  curveMethod: {
    default: "lam\xE9",
    props: { options: ["lam\xE9", "sine", "power", "linear"] }
  },
  curveAccent: {
    default: 0.5,
    props: { min: 0, max: 5, step: 0.01 }
  }
};

// code.ts
figma.showUI(__html__, { width: 400, height: 600 });
figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  if (selection.length === 1 && selection[0].type === "FRAME") {
    const frame = selection[0];
    const match = frame.name.match(/\[rampensau\|(.+)\]$/);
    if (match) {
      const values = match[1].split("|");
      if (values.length === 15 || values.length === 16) {
        const config = {
          total: parseInt(values[0]),
          hStart: parseFloat(values[1]),
          hCycles: parseFloat(values[2]),
          hStartCenter: parseFloat(values[3]),
          minLight: parseFloat(values[4]),
          maxLight: parseFloat(values[5]),
          minSaturation: parseFloat(values[6]),
          maxSaturation: parseFloat(values[7]),
          easingMode: values[8],
          easingH: values[9],
          easingS: values[10],
          easingL: values[11],
          easingCurve: values[12],
          transformFn: values[13],
          colorMode: values[14],
          rybGamut: values[15] || "default"
        };
        figma.ui.postMessage({
          type: "load-config",
          config
        });
      }
    }
  }
});
figma.ui.onmessage = async (msg) => {
  if (msg.type === "generate-palette" && msg.config) {
    const colors = generateColorPalette(msg.config);
    const frame = figma.createFrame();
    const configString = [
      msg.config.total,
      msg.config.hStart,
      msg.config.hCycles,
      msg.config.hStartCenter,
      msg.config.minLight,
      msg.config.maxLight,
      msg.config.minSaturation,
      msg.config.maxSaturation,
      msg.config.easingMode,
      msg.config.easingH,
      msg.config.easingS,
      msg.config.easingL,
      msg.config.easingCurve,
      msg.config.transformFn,
      msg.config.colorMode,
      msg.config.rybGamut || "default"
    ].join("|");
    frame.name = `Color Palette [rampensau|${configString}]`;
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.itemSpacing = 0;
    frame.paddingLeft = 0;
    frame.paddingRight = 0;
    frame.paddingTop = 0;
    frame.paddingBottom = 0;
    colors.forEach((color, index) => {
      const rect = figma.createRectangle();
      rect.name = `Color ${index + 1}`;
      rect.resize(60, 120);
      rect.fills = [{
        type: "SOLID",
        color: {
          r: color.r / 255,
          g: color.g / 255,
          b: color.b / 255
        }
      }];
      frame.appendChild(rect);
    });
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
    figma.ui.postMessage({ type: "palette-generated" });
  }
  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
function oklchToRgb(l3, c2, h2) {
  l3 = Math.max(0, Math.min(1, l3));
  c2 = Math.max(0, c2);
  h2 = h2 % 360;
  if (h2 < 0) h2 += 360;
  const hRad = h2 * Math.PI / 180;
  const a2 = c2 * Math.cos(hRad);
  const b2 = c2 * Math.sin(hRad);
  const l_ = l3 + 0.3963377774 * a2 + 0.2158037573 * b2;
  const m_ = l3 - 0.1055613458 * a2 - 0.0638541728 * b2;
  const s_ = l3 - 0.0894841775 * a2 - 1.291485548 * b2;
  const l32 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;
  const r2 = 4.0767416621 * l32 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g3 = -1.2684380046 * l32 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_ = -0.0041960863 * l32 - 0.7034186147 * m3 + 1.707614701 * s3;
  const gammaCorrect = (channel) => {
    channel = Math.max(0, channel);
    if (channel <= 31308e-7) {
      return 12.92 * channel;
    }
    return 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
  };
  return {
    r: Math.round(Math.max(0, Math.min(255, gammaCorrect(r2) * 255))),
    g: Math.round(Math.max(0, Math.min(255, gammaCorrect(g3) * 255))),
    b: Math.round(Math.max(0, Math.min(255, gammaCorrect(b_) * 255)))
  };
}
function hslToRyb(h2, s2, l3) {
  const rgb = hslToRgb(h2, s2, l3);
  const r2 = rgb.r / 255;
  const g3 = rgb.g / 255;
  const b2 = rgb.b / 255;
  const w = Math.min(r2, g3, b2);
  const r1 = r2 - w;
  const g1 = g3 - w;
  const b1 = b2 - w;
  const mg = Math.max(r1, g1, b1);
  let y2 = Math.min(r1, g1);
  let ry = r1 - y2;
  let gy = g1 - y2;
  let by = b1;
  if (by > 0 && gy > 0) {
    by /= 2;
    gy /= 2;
  }
  ry += gy;
  by += gy;
  const max = Math.max(ry, y2, by);
  if (max > 0) {
    const n2 = mg / max;
    ry *= n2;
    y2 *= n2;
    by *= n2;
  }
  ry += w;
  y2 += w;
  by += w;
  return { r: ry, y: y2, b: by };
}
function rybToRgb(r2, y2, b2, gamut = "itten") {
  const cubeData = e.get(gamut);
  const cube = cubeData ? cubeData.cube : void 0;
  const rgb = k([r2, y2, b2], { cube });
  return {
    r: Math.round(Math.max(0, Math.min(255, rgb[0] * 255))),
    g: Math.round(Math.max(0, Math.min(255, rgb[1] * 255))),
    b: Math.round(Math.max(0, Math.min(255, rgb[2] * 255)))
  };
}
function generateColorPalette(config) {
  const colors = [];
  for (let i2 = 0; i2 < config.total; i2++) {
    const t2 = i2 / (config.total - 1);
    let hue;
    let saturation;
    let lightness;
    if (config.easingMode === "individualAxis") {
      const easedT_h = applyEasing(t2, config.easingH);
      const easedT_s = applyEasing(t2, config.easingS);
      const easedT_l = applyEasing(t2, config.easingL);
      const hueRange = config.hCycles * 360;
      const hueOffset = config.hStart + (easedT_h - config.hStartCenter) * hueRange;
      hue = (hueOffset + 360) % 360;
      saturation = config.minSaturation + easedT_s * (config.maxSaturation - config.minSaturation);
      lightness = config.minLight + easedT_l * (config.maxLight - config.minLight);
    } else {
      const easedT = applyEasing(t2, config.easingCurve);
      const hueRange = config.hCycles * 360;
      const hueOffset = config.hStart + (easedT - config.hStartCenter) * hueRange;
      hue = (hueOffset + 360) % 360;
      saturation = config.minSaturation + easedT * (config.maxSaturation - config.minSaturation);
      lightness = config.minLight + easedT * (config.maxLight - config.minLight);
    }
    let rgb;
    if (config.colorMode === "oklch") {
      rgb = oklchToRgb(lightness / 100, saturation / 100 * 0.4, hue);
    } else if (config.colorMode === "rybitten") {
      const ryb = hslToRyb(hue / 360, saturation / 100, lightness / 100);
      rgb = rybToRgb(ryb.r, ryb.y, ryb.b, config.rybGamut || "default");
    } else {
      rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
    }
    const transformedRgb = applyTransform(rgb, config.transformFn, hue);
    colors.push(transformedRgb);
  }
  return colors;
}
function applyEasing(t2, easingType) {
  switch (easingType) {
    case "linear":
      return t2;
    case "easeInSine":
      return 1 - Math.cos(t2 * Math.PI / 2);
    case "easeOutSine":
      return Math.sin(t2 * Math.PI / 2);
    case "easeInOutSine":
      return -(Math.cos(Math.PI * t2) - 1) / 2;
    case "easeInQuad":
      return t2 * t2;
    case "easeOutQuad":
      return 1 - (1 - t2) * (1 - t2);
    case "easeInOutQuad":
      return t2 < 0.5 ? 2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 2) / 2;
    case "easeInCubic":
      return t2 * t2 * t2;
    case "easeOutCubic":
      return 1 - Math.pow(1 - t2, 3);
    case "easeInOutCubic":
      return t2 < 0.5 ? 4 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 3) / 2;
    case "easeInQuart":
      return t2 * t2 * t2 * t2;
    case "easeOutQuart":
      return 1 - Math.pow(1 - t2, 4);
    case "easeInOutQuart":
      return t2 < 0.5 ? 8 * t2 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 4) / 2;
    case "easeInQuint":
      return t2 * t2 * t2 * t2 * t2;
    case "easeOutQuint":
      return 1 - Math.pow(1 - t2, 5);
    case "easeInOutQuint":
      return t2 < 0.5 ? 16 * t2 * t2 * t2 * t2 * t2 : 1 - Math.pow(-2 * t2 + 2, 5) / 2;
    case "easeInExpo":
      return t2 === 0 ? 0 : Math.pow(2, 10 * t2 - 10);
    case "easeOutExpo":
      return t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2);
    case "easeInOutExpo":
      return t2 === 0 ? 0 : t2 === 1 ? 1 : t2 < 0.5 ? Math.pow(2, 20 * t2 - 10) / 2 : (2 - Math.pow(2, -20 * t2 + 10)) / 2;
    case "easeInCirc":
      return 1 - Math.sqrt(1 - Math.pow(t2, 2));
    case "easeOutCirc":
      return Math.sqrt(1 - Math.pow(t2 - 1, 2));
    case "easeInOutCirc":
      return t2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t2 + 2, 2)) + 1) / 2;
    default:
      return t2;
  }
}
function hslToRgb(h2, s2, l3) {
  let r2, g3, b2;
  if (s2 === 0) {
    r2 = g3 = b2 = l3;
  } else {
    const hue2rgb = (p4, q2, t2) => {
      if (t2 < 0) t2 += 1;
      if (t2 > 1) t2 -= 1;
      if (t2 < 1 / 6) return p4 + (q2 - p4) * 6 * t2;
      if (t2 < 1 / 2) return q2;
      if (t2 < 2 / 3) return p4 + (q2 - p4) * (2 / 3 - t2) * 6;
      return p4;
    };
    const q = l3 < 0.5 ? l3 * (1 + s2) : l3 + s2 - l3 * s2;
    const p3 = 2 * l3 - q;
    r2 = hue2rgb(p3, q, h2 + 1 / 3);
    g3 = hue2rgb(p3, q, h2);
    b2 = hue2rgb(p3, q, h2 - 1 / 3);
  }
  return {
    r: Math.round(r2 * 255),
    g: Math.round(g3 * 255),
    b: Math.round(b2 * 255)
  };
}
var { harveyHue: harveyHue2 } = utils_exports;
function rgbToHsl(r2, g3, b2) {
  r2 /= 255;
  g3 /= 255;
  b2 /= 255;
  const max = Math.max(r2, g3, b2);
  const min = Math.min(r2, g3, b2);
  let h2 = 0;
  let s2 = 0;
  const l3 = (max + min) / 2;
  if (max === min) {
    h2 = s2 = 0;
  } else {
    const d2 = max - min;
    s2 = l3 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = ((g3 - b2) / d2 + (g3 < b2 ? 6 : 0)) / 6;
        break;
      case g3:
        h2 = ((b2 - r2) / d2 + 2) / 6;
        break;
      case b2:
        h2 = ((r2 - g3) / d2 + 4) / 6;
        break;
    }
  }
  return { h: h2, s: s2, l: l3 };
}
function applyTransform(rgb, transformFn, originalHue) {
  switch (transformFn) {
    case "harveyHue": {
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      const transformedHue = harveyHue2((originalHue || 0) / 360);
      return hslToRgb(transformedHue, hsl.s, hsl.l);
    }
    case "muted":
      return {
        r: Math.round(rgb.r * 0.8),
        g: Math.round(rgb.g * 0.8),
        b: Math.round(rgb.b * 0.8)
      };
    case "pastel":
      return {
        r: Math.round(rgb.r * 0.7 + 255 * 0.3),
        g: Math.round(rgb.g * 0.7 + 255 * 0.3),
        b: Math.round(rgb.b * 0.7 + 255 * 0.3)
      };
    case "none":
    default:
      return rgb;
  }
}
