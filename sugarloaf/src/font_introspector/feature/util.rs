use super::internal::{raw_tag, RawTag};

#[derive(Copy, Clone)]
pub struct SeenFeatures {
    bits: [u32; 6],
}

impl SeenFeatures {
    pub fn new() -> Self {
        Self { bits: [0; 6] }
    }

    pub fn mark(&mut self, feature_index: usize) -> bool {
        let word = &mut self.bits[feature_index / 32];
        let bit = 1 << (feature_index % 32);
        if *word & bit == 0 {
            *word |= bit;
            true
        } else {
            false
        }
    }
}

/// Returns a feature description for the specified tag.
pub fn desc_from_at(tag: RawTag) -> Option<(usize, &'static str)> {
    Some(match FEATURES.binary_search_by(|e| e.0.cmp(&tag)) {
        Ok(index) => (index, FEATURES[index].1),
        _ => return None,
    })
}

/// Returns a feature tag and description from an AAT feature
/// and selector.
pub fn desc_from_aat(
    feature: u16,
    selector: u16,
) -> Option<(usize, RawTag, &'static str)> {
    let key = ((feature << 8) | selector) as u16;
    Some(match AAT_TO_AT.binary_search_by(|pair| pair.0.cmp(&key)) {
        Ok(index) => {
            let (tag, desc) = FEATURES[AAT_TO_AT[index].1 as usize];
            (index, tag, desc)
        }
        _ => return None,
    })
}

pub const FEATURES: [(u32, &'static str); 142] = [
    (raw_tag(b"aalt"), "Access All Alternates"),
    (raw_tag(b"abvf"), "Above-base Forms"),
    (raw_tag(b"abvm"), "Above-base Mark Positioning"),
    (raw_tag(b"abvs"), "Above-base Substitutions"),
    (raw_tag(b"afrc"), "Alternative Fractions"),
    (raw_tag(b"akhn"), "Akhands"),
    (raw_tag(b"blwf"), "Below-base Forms"),
    (raw_tag(b"blwm"), "Below-base Mark Positioning"),
    (raw_tag(b"blws"), "Below-base Substitutions"),
    (raw_tag(b"c2pc"), "Petite Capitals From Capitals"),
    (raw_tag(b"c2sc"), "Small Capitals From Capitals"),
    (raw_tag(b"calt"), "Contextual Alternates"),
    (raw_tag(b"case"), "Case-Sensitive Forms"),
    (raw_tag(b"ccmp"), "Glyph Composition / Decomposition"),
    (raw_tag(b"cfar"), "Conjunct Form After Ro"),
    (raw_tag(b"chws"), "Contextual Half-width Spacing"),
    (raw_tag(b"cjct"), "Conjunct Forms"),
    (raw_tag(b"clig"), "Contextual Ligatures"),
    (raw_tag(b"cpct"), "Centered CJK Punctuation"),
    (raw_tag(b"cpsp"), "Capital Spacing"),
    (raw_tag(b"cswh"), "Contextual Swash"),
    (raw_tag(b"curs"), "Cursive Positioning"),
    (raw_tag(b"dist"), "Distances"),
    (raw_tag(b"dlig"), "Discretionary Ligatures"),
    (raw_tag(b"dnom"), "Denominators"),
    (raw_tag(b"dtls"), "Dotless Forms"),
    (raw_tag(b"expt"), "Expert Forms"),
    (raw_tag(b"falt"), "Final Glyph on Line Alternates"),
    (raw_tag(b"fin2"), "Terminal Forms #2"),
    (raw_tag(b"fin3"), "Terminal Forms #3"),
    (raw_tag(b"fina"), "Terminal Forms"),
    (raw_tag(b"flac"), "Flattened accent forms"),
    (raw_tag(b"frac"), "Fractions"),
    (raw_tag(b"fwid"), "Full Widths"),
    (raw_tag(b"half"), "Half Forms"),
    (raw_tag(b"haln"), "Halant Forms"),
    (raw_tag(b"halt"), "Alternate Half Widths"),
    (raw_tag(b"hist"), "Historical Forms"),
    (raw_tag(b"hkna"), "Horizontal Kana Alternates"),
    (raw_tag(b"hlig"), "Historical Ligatures"),
    (raw_tag(b"hngl"), "Hangul"),
    (raw_tag(b"hojo"), "Hojo Kanji Forms"),
    (raw_tag(b"hwid"), "Half Widths"),
    (raw_tag(b"init"), "Initial Forms"),
    (raw_tag(b"isol"), "Isolated Forms"),
    (raw_tag(b"ital"), "Italics"),
    (raw_tag(b"jalt"), "Justification Alternates"),
    (raw_tag(b"jp78"), "JIS78 Forms"),
    (raw_tag(b"jp83"), "JIS83 Forms"),
    (raw_tag(b"jp90"), "JIS90 Forms"),
    (raw_tag(b"jp04"), "JIS2004 Forms"),
    (raw_tag(b"kern"), "Kerning"),
    (raw_tag(b"lfbd"), "Left Bounds"),
    (raw_tag(b"liga"), "Standard Ligatures"),
    (raw_tag(b"ljmo"), "Leading Jamo Forms"),
    (raw_tag(b"lnum"), "Lining Figures"),
    (raw_tag(b"locl"), "Localized Forms"),
    (raw_tag(b"ltra"), "Left-to-right alternates"),
    (raw_tag(b"ltrm"), "Left-to-right mirrored forms"),
    (raw_tag(b"mark"), "Mark Positioning"),
    (raw_tag(b"med2"), "Medial Forms #2"),
    (raw_tag(b"medi"), "Medial Forms"),
    (raw_tag(b"mgrk"), "Mathematical Greek"),
    (raw_tag(b"mkmk"), "Mark to Mark Positioning"),
    (raw_tag(b"mset"), "Mark Positioning via Substitution"),
    (raw_tag(b"nalt"), "Alternate Annotation Forms"),
    (raw_tag(b"nlck"), "NLC Kanji Forms"),
    (raw_tag(b"nukt"), "Nukta Forms"),
    (raw_tag(b"numr"), "Numerators"),
    (raw_tag(b"onum"), "Oldstyle Figures"),
    (raw_tag(b"opbd"), "Optical Bounds"),
    (raw_tag(b"ordn"), "Ordinals"),
    (raw_tag(b"ornm"), "Ornaments"),
    (raw_tag(b"palt"), "Proportional Alternate Widths"),
    (raw_tag(b"pcap"), "Petite Capitals"),
    (raw_tag(b"pkna"), "Proportional Kana"),
    (raw_tag(b"pnum"), "Proportional Figures"),
    (raw_tag(b"pref"), "Pre-Base Forms"),
    (raw_tag(b"pres"), "Pre-base Substitutions"),
    (raw_tag(b"pstf"), "Post-base Forms"),
    (raw_tag(b"psts"), "Post-base Substitutions"),
    (raw_tag(b"pwid"), "Proportional Widths"),
    (raw_tag(b"qwid"), "Quarter Widths"),
    (raw_tag(b"rand"), "Randomize"),
    (raw_tag(b"rclt"), "Required Contextual Alternates"),
    (raw_tag(b"rkrf"), "Rakar Forms"),
    (raw_tag(b"rlig"), "Required Ligatures"),
    (raw_tag(b"rphf"), "Reph Forms"),
    (raw_tag(b"rtbd"), "Right Bounds"),
    (raw_tag(b"rtla"), "Right-to-left alternates"),
    (raw_tag(b"rtlm"), "Right-to-left mirrored forms"),
    (raw_tag(b"ruby"), "Ruby Notation Forms"),
    (raw_tag(b"rvrn"), "Required Variation Alternates"),
    (raw_tag(b"salt"), "Stylistic Alternates"),
    (raw_tag(b"sinf"), "Scientific Inferiors"),
    (raw_tag(b"size"), "Optical size"),
    (raw_tag(b"smcp"), "Small Capitals"),
    (raw_tag(b"smpl"), "Simplified Forms"),
    (raw_tag(b"ss01"), "Stylistic Set 1"),
    (raw_tag(b"ss02"), "Stylistic Set 2"),
    (raw_tag(b"ss03"), "Stylistic Set 3"),
    (raw_tag(b"ss04"), "Stylistic Set 4"),
    (raw_tag(b"ss05"), "Stylistic Set 5"),
    (raw_tag(b"ss06"), "Stylistic Set 6"),
    (raw_tag(b"ss07"), "Stylistic Set 7"),
    (raw_tag(b"ss08"), "Stylistic Set 8"),
    (raw_tag(b"ss09"), "Stylistic Set 9"),
    (raw_tag(b"ss10"), "Stylistic Set 10"),
    (raw_tag(b"ss11"), "Stylistic Set 11"),
    (raw_tag(b"ss12"), "Stylistic Set 12"),
    (raw_tag(b"ss13"), "Stylistic Set 13"),
    (raw_tag(b"ss14"), "Stylistic Set 14"),
    (raw_tag(b"ss15"), "Stylistic Set 15"),
    (raw_tag(b"ss16"), "Stylistic Set 16"),
    (raw_tag(b"ss17"), "Stylistic Set 17"),
    (raw_tag(b"ss18"), "Stylistic Set 18"),
    (raw_tag(b"ss19"), "Stylistic Set 19"),
    (raw_tag(b"ss20"), "Stylistic Set 20"),
    (raw_tag(b"ssty"), "Math script style alternates"),
    (raw_tag(b"stch"), "Stretching Glyph Decomposition"),
    (raw_tag(b"subs"), "Subscript"),
    (raw_tag(b"sups"), "Superscript"),
    (raw_tag(b"swsh"), "Swash"),
    (raw_tag(b"titl"), "Titling"),
    (raw_tag(b"tjmo"), "Trailing Jamo Forms"),
    (raw_tag(b"tnam"), "Traditional Name Forms"),
    (raw_tag(b"tnum"), "Tabular Figures"),
    (raw_tag(b"trad"), "Traditional Forms"),
    (raw_tag(b"twid"), "Third Widths"),
    (raw_tag(b"unic"), "Unicase"),
    (raw_tag(b"valt"), "Alternate Vertical Metrics"),
    (raw_tag(b"vatu"), "Vattu Variants"),
    (raw_tag(b"vchw"), "Vertical Contextual Half-width Spacing"),
    (raw_tag(b"vert"), "Vertical Writing"),
    (raw_tag(b"vhal"), "Alternate Vertical Half Metrics"),
    (raw_tag(b"vjmo"), "Vowel Jamo Forms"),
    (raw_tag(b"vkna"), "Vertical Kana Alternates"),
    (raw_tag(b"vkrn"), "Vertical Kerning"),
    (raw_tag(b"vpal"), "Proportional Alternate Vertical Metrics"),
    (raw_tag(b"vrt2"), "Vertical Alternates and Rotation"),
    (raw_tag(b"vrtr"), "Vertical Alternates for Rotation"),
    (raw_tag(b"zero"), "Slashed Zero"),
];

pub const AAT_TO_AT: [(u16, u16); 77] = [
    (256, 86),
    (258, 53),
    (260, 23),
    (274, 15),
    (276, 37),
    (276, 39),
    (782, 129),
    (1024, 133),
    (1024, 139),
    (1536, 126),
    (1537, 76),
    (2561, 121),
    (2562, 120),
    (2563, 71),
    (2564, 94),
    (2817, 4),
    (2818, 32),
    (3588, 141),
    (3850, 62),
    (4868, 123),
    (5120, 127),
    (5121, 97),
    (5122, 47),
    (5123, 48),
    (5124, 49),
    (5130, 26),
    (5131, 50),
    (5132, 41),
    (5133, 66),
    (5134, 125),
    (5376, 69),
    (5377, 55),
    (5632, 81),
    (5632, 75),
    (5633, 33),
    (5634, 42),
    (5635, 128),
    (5636, 82),
    (5637, 73),
    (5637, 130),
    (5637, 138),
    (5638, 36),
    (5638, 134),
    (5889, 40),
    (7170, 91),
    (8194, 45),
    (8448, 10),
    (8450, 17),
    (8704, 38),
    (8706, 136),
    (8962, 98),
    (8964, 99),
    (8966, 100),
    (8968, 101),
    (8970, 102),
    (8972, 103),
    (8974, 104),
    (8976, 105),
    (8978, 106),
    (8980, 107),
    (8982, 108),
    (8984, 109),
    (8986, 110),
    (8988, 111),
    (8990, 112),
    (8992, 113),
    (8994, 114),
    (8996, 115),
    (8998, 116),
    (9000, 117),
    (9216, 9),
    (9218, 122),
    (9220, 18),
    (9473, 96),
    (9474, 74),
    (9729, 21),
    (9730, 20),
];
