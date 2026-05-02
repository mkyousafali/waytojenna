/**
 * Way to Jenna — Duas Data
 * Islamic Malayalam Dua App
 *
 * Each dua object:
 *   id          — unique slug
 *   category    — category id (must match a category.id below)
 *   title       — English title
 *   titleML     — Malayalam title
 *   arabic      — Arabic text (Unicode)
 *   transliteration — phonetic English romanisation
 *   malayalam   — Malayalam translation
 *   reference   — hadith / source reference (optional)
 */

/** @type {Array<{id:string, name:string, nameML:string, icon:string, description:string, descriptionML:string}>} */
export const categories = [
	{
		id: 'morning',
		name: 'Morning',
		nameML: 'രാവിലെ',
		icon: '🌅',
		description: 'Start your day with remembrance of Allah',
		descriptionML: 'നിങ്ങളുടെ ദിവസം അല്ലാഹുവിന്റെ സ്മരണയോടെ ആരംഭിക്കൂ'
	},
	{
		id: 'evening',
		name: 'Evening',
		nameML: 'വൈകുന്നേരം',
		icon: '🌆',
		description: 'Evening adhkar and supplications',
		descriptionML: 'വൈകുന്നേരത്തെ ദിക്‌റുകളും പ്രാർഥനകളും'
	},
	{
		id: 'toilet',
		name: 'Toilet',
		nameML: 'ശൗചാലയം',
		icon: '🚿',
		description: 'Duas when entering and leaving the toilet',
		descriptionML: 'ശൗചാലയത്തിൽ കടക്കുമ്പോഴും ഇറങ്ങുമ്പോഴും'
	},
	{
		id: 'eating',
		name: 'Eating',
		nameML: 'ഭക്ഷണം',
		icon: '🍽️',
		description: 'Duas before and after eating',
		descriptionML: 'ഭക്ഷണത്തിനു മുൻപും ശേഷവുമുള്ള പ്രാർഥനകൾ'
	},
	{
		id: 'sleeping',
		name: 'Sleeping',
		nameML: 'ഉറക്കം',
		icon: '🌙',
		description: 'Duas before sleep and upon waking',
		descriptionML: 'ഉറങ്ങുന്നതിനു മുൻപും ഉണരുമ്പോഴും'
	},
	{
		id: 'travel',
		name: 'Travel',
		nameML: 'യാത്ര',
		icon: '✈️',
		description: 'Supplications for journeys and travel',
		descriptionML: 'യാത്രകൾക്കുള്ള പ്രാർഥനകൾ'
	},
	{
		id: 'masjid',
		name: 'Masjid',
		nameML: 'മസ്ജിദ്',
		icon: '🕌',
		description: 'Duas for entering and leaving the mosque',
		descriptionML: 'മസ്ജിദിൽ കടക്കുമ്പോഴും ഇറങ്ങുമ്പോഴും'
	},
	{
		id: 'daily',
		name: 'Daily Life',
		nameML: 'ദൈനംദിന ജീവിതം',
		icon: '⭐',
		description: 'Everyday duas for various occasions',
		descriptionML: 'വിവിധ അവസരങ്ങൾക്കുള്ള ദൈനംദിന പ്രാർഥനകൾ'
	}
];

/** @type {Array<{id:string, category:string, title:string, titleML:string, arabic:string, transliteration:string, malayalam:string, reference?:string}>} */
export const duas = [
	/* ─────────── MORNING ─────────── */
	{
		id: 'morning-waking-up',
		category: 'morning',
		title: 'Waking Up',
		titleML: 'ഉണർന്നെഴുന്നേൽക്കുമ്പോൾ',
		arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
		transliteration: "Alhamdu lillahil-lathee ahyana ba'da ma amatana wa ilayhin-nushoor",
		malayalam:
			'ഞങ്ങളെ മരിപ്പിച്ച ശേഷം ജീവിപ്പിച്ചവനായ അല്ലാഹുവിന് സ്തുതി. അവങ്കലേക്കാണ് (അന്ത്യദിനത്തിൽ) ഉയിർത്തെഴുന്നേൽക്കൽ.',
		reference: 'Sahih al-Bukhari 6312'
	},
	{
		id: 'morning-dhikr-subhanallah',
		category: 'morning',
		title: 'Morning Glorification',
		titleML: 'രാവിലെ തസ്ബീഹ്',
		arabic:
			'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',
		transliteration:
			"Subhanallahi wa bihamdihi 'adada khalqihi wa rida nafsihi wa zinata 'arshihi wa midada kalimatihi",
		malayalam:
			'അവന്റെ സൃഷ്ടികളുടെ എണ്ണത്തോളം, അവന്റെ ആത്മതൃപ്തിക്ക് ആവശ്യമായ അളവോളം, അവന്റെ അർശിന്റെ ഭാരത്തോളം, അവന്റെ വചനങ്ങൾക്കുള്ള മഷിയോളം — അല്ലാഹുവിനെ ഞാൻ സ്തുതിക്കൊണ്ട് പ്രകീർത്തിക്കുന്നു.',
		reference: 'Sahih Muslim 2726'
	},
	{
		id: 'morning-protection',
		category: 'morning',
		title: 'Morning Protection',
		titleML: 'രാവിലത്തെ സംരക്ഷണം',
		arabic:
			'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
		transliteration:
			"Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushoor",
		malayalam:
			'അല്ലാഹുവേ, നിന്നോടൊപ്പം ഞങ്ങൾ പ്രഭാതം ചെയ്തു, നിന്നോടൊപ്പം ഞങ്ങൾ സന്ധ്യ ചെയ്തു, നിന്നോടൊപ്പം ഞങ്ങൾ ജീവിക്കുന്നു, നിന്നോടൊപ്പം ഞങ്ങൾ മരിക്കുന്നു. നിങ്കലേക്കാണ് ഉയിർത്തെഴുന്നേൽക്കൽ.',
		reference: 'Abu Dawud 5068, Tirmidhi 3391'
	},
	{
		id: 'morning-seeking-good',
		category: 'morning',
		title: 'Seeking Goodness of the Day',
		titleML: 'ദിവസത്തിന്റെ നന്മ തേടൽ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ',
		transliteration:
			"Allahumma innee as-aluka khayra hadhal-yawm, fat-hahu wa nasrahu wa nurahu wa barakatahu wa hudah",
		malayalam:
			'അല്ലാഹുവേ, ഈ ദിവസത്തിന്റെ നന്മ, അതിന്റെ വിജയം, സഹായം, പ്രകാശം, അനുഗ്രഹം, മാർഗദർശനം — ഇവ ഞാൻ നിന്നോടർഥിക്കുന്നു.',
		reference: 'Abu Dawud 5084'
	},
	{
		id: 'morning-complete-words',
		category: 'morning',
		title: 'Complete Words of Allah',
		titleML: 'അല്ലാഹുവിന്റെ വചനങ്ങൾ കൊണ്ടുള്ള രക്ഷ',
		arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		transliteration: "A'oothu bikalimatillahit-tammati min sharri ma khalaq",
		malayalam:
			'അല്ലാഹു സൃഷ്ടിച്ചതിന്റെ ദോഷത്തിൽ നിന്ന് അല്ലാഹുവിന്റെ സമ്പൂർണ വചനങ്ങൾ കൊണ്ട് ഞാൻ അഭയം തേടുന്നു.',
		reference: 'Sahih Muslim 2709'
	},

	/* ─────────── EVENING ─────────── */
	{
		id: 'evening-dhikr',
		category: 'evening',
		title: 'Evening Remembrance',
		titleML: 'വൈകുന്നേരത്തെ ദിക്‌ർ',
		arabic:
			'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
		transliteration:
			"Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah",
		malayalam:
			'ഞങ്ങൾ സന്ധ്യ ചെയ്തു, ആധിപത്യം അല്ലാഹുവിനു. സ്തുതി അല്ലാഹുവിന്. അല്ലാഹു അല്ലാതെ ആരാധനയ്ക്കർഹനായ ഒരു ദൈവവുമില്ല, അവൻ ഏകൻ, അവന് പങ്കുകാരനില്ല.',
		reference: 'Sahih Muslim 2723'
	},
	{
		id: 'evening-protection-from-evil',
		category: 'evening',
		title: 'Evening Protection',
		titleML: 'വൈകുന്നേരത്തെ സംരക്ഷണ പ്രാർഥന',
		arabic:
			'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ',
		transliteration:
			"Allahumma innee amsaytu ushhiduka wa ushhidu hamalata 'arshika wa mala-ikataka wa jami'a khalqika annaka antallahu la ilaha illa anta wa anna Muhammadan 'abduka wa rasooluk",
		malayalam:
			'അല്ലാഹുവേ, ഞാൻ ഈ സന്ധ്യ നിന്നെ, നിന്റെ അർശ് വഹിക്കുന്നവരെ, നിന്റെ മലക്കുകളെ, നിന്റെ സകല സൃഷ്ടികളെയും സാക്ഷ്യമാക്കി ഉണർത്തിക്കുന്നു — നീ അല്ലാഹുവാണ്, നിനക്ക് പുറമേ ഒരു ദൈവവുമില്ല, മുഹമ്മദ് നബി നിന്റെ ദാസനും ദൂതനുമാണ്.',
		reference: 'Abu Dawud 5069'
	},
	{
		id: 'evening-seeking-forgiveness',
		category: 'evening',
		title: 'Evening Forgiveness',
		titleML: 'വൈകുന്നേരത്തെ പാപമോചനം',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
		transliteration: "Allahumma innee as-alukal-'afwa wal-'afiyata fid-dunya wal-akhirah",
		malayalam:
			'അല്ലാഹുവേ, ഇഹലോകത്തിലും പരലോകത്തിലും ക്ഷമയും ആരോഗ്യ-സമൃദ്ധിയും ഞാൻ നിന്നോടർഥിക്കുന്നു.',
		reference: 'Ibn Majah 3871'
	},
	{
		id: 'evening-ayatul-kursi',
		category: 'evening',
		title: 'Ayatul Kursi (Evening)',
		titleML: 'ആയത്തുൽ കുർസി (വൈകുന്നേരം)',
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
		transliteration:
			"Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard",
		malayalam:
			'അല്ലാഹു — അവൻ അല്ലാതെ ഒരു ദൈവവുമില്ല. അവൻ ചിരഞ്ജീവി, സ്വയംഭൂ. അവനെ മയക്കമോ ഉറക്കമോ ബാധിക്കില്ല. ആകാശഭൂമികളിലുള്ളതെല്ലാം അവനുള്ളതാണ്.',
		reference: 'Quran 2:255 — recite after every prayer for protection'
	},

	/* ─────────── TOILET ─────────── */
	{
		id: 'toilet-entering',
		category: 'toilet',
		title: 'Entering the Toilet',
		titleML: 'ശൗചാലയത്തിൽ കടക്കുമ്പോൾ',
		arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
		transliteration: "Allahumma innee a'oothu bika minal-khubuthi wal-khaba-ith",
		malayalam:
			'അല്ലാഹുവേ, ആൺ-പിശാചുകളിൽ നിന്നും പെൺ-പിശാചുകളിൽ നിന്നും ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
		reference: 'Bukhari and Muslim'
	},
	{
		id: 'toilet-leaving',
		category: 'toilet',
		title: 'Leaving the Toilet',
		titleML: 'ശൗചാലയത്തിൽ നിന്ന് ഇറങ്ങുമ്പോൾ',
		arabic: 'غُفْرَانَكَ',
		transliteration: 'Ghufranaka',
		malayalam: 'അല്ലാഹുവേ, ഞാൻ നിന്നോട് പൊറുതി ചോദിക്കുന്നു.',
		reference: 'Abu Dawud 30, Tirmidhi 7, Ibn Majah 300'
	},

	/* ─────────── EATING ─────────── */
	{
		id: 'eating-before',
		category: 'eating',
		title: 'Before Eating',
		titleML: 'ഭക്ഷണത്തിനു മുൻപ്',
		arabic: 'بِسْمِ اللَّهِ',
		transliteration: 'Bismillah',
		malayalam: 'അല്ലാഹുവിന്റെ നാമത്തിൽ (ആരംഭിക്കുന്നു).',
		reference: 'Abu Dawud 3767'
	},
	{
		id: 'eating-forgot-bismillah',
		category: 'eating',
		title: 'Forgot to Say Bismillah',
		titleML: 'ബിസ്മില്ലാഹ് മറന്നുപോയാൽ',
		arabic: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ',
		transliteration: 'Bismillahi awwalahu wa akhirahu',
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ — ഭക്ഷണത്തിന്റെ തുടക്കത്തിലും അവസാനത്തിലും.',
		reference: 'Abu Dawud 3767, Tirmidhi 1858'
	},
	{
		id: 'eating-after',
		category: 'eating',
		title: 'After Eating',
		titleML: 'ഭക്ഷണത്തിനു ശേഷം',
		arabic:
			'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
		transliteration:
			"Alhamdu lillahil-lathee at-'amanee hadha wa razaqaneehi min ghayri hawlin minnee wa la quwwah",
		malayalam:
			'ഈ ഭക്ഷണം തന്ന് ജീവിതോപാധി ഒരുക്കിയ അല്ലാഹുവിന് സ്തുതി — ഇതിൽ എന്റെ ഭാഗത്ത് നിന്ന് യാതൊരു കഴിവും ശക്തിയും ഇല്ലാതെ.',
		reference: 'Abu Dawud 4023, Tirmidhi 3458'
	},
	{
		id: 'eating-drinking-water',
		category: 'eating',
		title: 'Before Drinking Water',
		titleML: 'വെള്ളം കുടിക്കുന്നതിന് മുൻപ്',
		arabic: 'بِسْمِ اللَّهِ، اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ',
		transliteration: "Bismillah, Allahumma barik lana feehi wa zidna minhu",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. അല്ലാഹുവേ, ഇതിൽ ഞങ്ങൾക്ക് അനുഗ്രഹം ചൊരിഞ്ഞുതരൂ, ഇതിൽ ഞങ്ങൾക്ക് വർദ്ധനയുണ്ടാക്കൂ.',
		reference: 'Ibn Majah 3322'
	},

	/* ─────────── SLEEPING ─────────── */
	{
		id: 'sleeping-before-sleep',
		category: 'sleeping',
		title: 'Before Sleeping',
		titleML: 'ഉറക്കത്തിനു മുൻപ്',
		arabic:
			'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
		transliteration: 'Bismika Allahumma amootu wa ahya',
		malayalam:
			'നിന്റെ നാമത്തിൽ, അല്ലാഹുവേ, ഞാൻ മരിക്കുന്നു (ഉറങ്ങുന്നു), ഞാൻ ജീവിക്കുന്നു (ഉണരുന്നു).',
		reference: 'Bukhari 6312'
	},
	{
		id: 'sleeping-ayatul-kursi',
		category: 'sleeping',
		title: 'Ayatul Kursi Before Sleep',
		titleML: 'ഉറക്കത്തിനു മുൻപ് ആയത്തുൽ കുർസി',
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
		transliteration:
			"Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm",
		malayalam:
			'അല്ലാഹു — അവൻ അല്ലാതെ ഒരു ദൈവവുമില്ല. ചിരഞ്ജീവി, സ്വയംഭൂ. മയക്കമോ ഉറക്കമോ അവനെ ബാധിക്കില്ല. (ഉറക്കത്തിന് മുൻപ് ഓതുന്നവനെ അല്ലാഹു കാക്കും).',
		reference: 'Bukhari 2311 — recite before sleep; an angel guards you till morning'
	},
	{
		id: 'sleeping-three-quls',
		category: 'sleeping',
		title: 'Three Quls Before Sleep',
		titleML: 'ഉറക്കത്തിനു മുൻപ് മൂന്ന് ഖുൽ',
		arabic:
			'قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
		transliteration:
			"Qul Huwal-lahu Ahad, Allahus-Samad, Lam yalid wa lam yoolad, wa lam yakun lahu kufuwan ahad",
		malayalam:
			'പറയൂ: അവൻ അല്ലാഹുവാണ്, ഏകൻ. അല്ലാഹു നിരപേക്ഷൻ (ആശ്രയകേന്ദ്രം). അവൻ ജനിക്കുകയോ ജനിപ്പിക്കുകയോ ചെയ്തിട്ടില്ല. അവന് തുല്യനായി ഒരാളും ഇല്ല. (സൂറ അൽ ഇഖ്‌ലാസ് — 3 തവണ ഓതുക)',
		reference: 'Bukhari 5017'
	},
	{
		id: 'sleeping-waking-up-night',
		category: 'sleeping',
		title: 'Waking Up at Night',
		titleML: 'രാത്രി ഉണർന്നെഴുന്നേൽക്കുമ്പോൾ',
		arabic:
			'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		transliteration:
			"La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay-in qadeer",
		malayalam:
			'അല്ലാഹു അല്ലാതെ ഒരു ദൈവവുമില്ല, അവൻ ഏകൻ, അവന് പങ്കുകാരനില്ല. ആധിപത്യം അവനുള്ളതാണ്, സ്തുതി അവനുള്ളതാണ്. അവൻ സർവ്വ ശക്തൻ.',
		reference: 'Bukhari 1154'
	},

	/* ─────────── TRAVEL ─────────── */
	{
		id: 'travel-before-journey',
		category: 'travel',
		title: 'Before a Journey',
		titleML: 'യാത്ര ആരംഭിക്കുന്നതിനു മുൻപ്',
		arabic:
			'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
		transliteration:
			"Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanal-lathee sakhkhara lana hadha wa ma kunna lahu muqrineen. Wa inna ila Rabbina lamunqaliboon",
		malayalam:
			'അല്ലാഹു ഏറ്റവും വലിയവൻ (3 തവണ). ഇതിനെ ഞങ്ങൾക്ക് വശപ്പെടുത്തിത്തന്ന അവനെ പ്രകീർത്തിക്കുന്നു — ഞങ്ങൾ ഇതിനെ നിയന്ത്രിക്കാൻ ശക്തരായിരുന്നില്ല. ഞങ്ങൾ ഞങ്ങളുടെ രക്ഷിതാവിങ്കലേക്ക് മടങ്ങുന്നവർ തന്നെ.',
		reference: 'Muslim 1342'
	},
	{
		id: 'travel-entering-vehicle',
		category: 'travel',
		title: 'Entering a Vehicle',
		titleML: 'വാഹനത്തിൽ കയറുമ്പോൾ',
		arabic: 'بِسْمِ اللَّهِ',
		transliteration: 'Bismillah',
		malayalam: 'അല്ലാഹുവിന്റെ നാമത്തിൽ (വാഹനത്തിൽ കയറുക).',
		reference: 'Abu Dawud 2602'
	},
	{
		id: 'travel-returning-home',
		category: 'travel',
		title: 'Returning Home',
		titleML: 'വീട്ടിലേക്ക് മടങ്ങുമ്പോൾ',
		arabic: 'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ',
		transliteration: "Aayiboona ta-iboona 'aabidoona li-Rabbina hamidoon",
		malayalam:
			'ഞങ്ങൾ മടങ്ങി വരുന്നവരും, പശ്ചാത്തപിക്കുന്നവരും, ആരാധന ചെയ്യുന്നവരും, ഞങ്ങളുടെ രക്ഷിതാവിനെ സ്തുതിക്കുന്നവരും ആകുന്നു.',
		reference: 'Bukhari 3085, Muslim 1342'
	},
	{
		id: 'travel-new-place',
		category: 'travel',
		title: 'Arriving at a New Place',
		titleML: 'പുതിയ സ്ഥലത്ത് എത്തുമ്പോൾ',
		arabic:
			'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		transliteration: "A'oothu bikalimatillahit-tammati min sharri ma khalaq",
		malayalam:
			'അല്ലാഹു സൃഷ്ടിച്ചതിന്റെ ദോഷത്തിൽ നിന്ന് അല്ലാഹുവിന്റെ സമ്പൂർണ വചനങ്ങൾ കൊണ്ട് ഞാൻ അഭയം തേടുന്നു.',
		reference: 'Muslim 2708'
	},

	/* ─────────── MASJID ─────────── */
	{
		id: 'masjid-entering',
		category: 'masjid',
		title: 'Entering the Masjid',
		titleML: 'മസ്ജിദിൽ കടക്കുമ്പോൾ',
		arabic:
			'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
		transliteration: "Allahummaf-tah lee abwaba rahmatik",
		malayalam: 'അല്ലാഹുവേ, നിന്റെ കാരുണ്യത്തിന്റെ വാതിലുകൾ എനിക്ക് തുറന്നുതരൂ.',
		reference: 'Muslim 713'
	},
	{
		id: 'masjid-leaving',
		category: 'masjid',
		title: 'Leaving the Masjid',
		titleML: 'മസ്ജിദിൽ നിന്ന് ഇറങ്ങുമ്പോൾ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
		transliteration: "Allahumma innee as-aluka min fadlik",
		malayalam: 'അല്ലാഹുവേ, ഞാൻ നിന്റെ ഔദാര്യം ചോദിക്കുന്നു.',
		reference: 'Muslim 713'
	},
	{
		id: 'masjid-adhan-response',
		category: 'masjid',
		title: 'Response to Adhan',
		titleML: 'അദാനിന് ഉത്തരം',
		arabic:
			'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
		transliteration:
			"Allahumma Rabba hadhihid-da'watit-tammati was-salatil-qaimah, ati Muhammadanil-waseelata wal-fadeelah, wab-'ath-hu maqamam mahmudanil-lathee wa-'adtah",
		malayalam:
			'അല്ലാഹുവേ, ഈ സമ്പൂർണ ആഹ്വാനത്തിന്റെ രക്ഷിതാവേ, നടക്കാൻ പോകുന്ന നമസ്‌കാരത്തിന്റെ രക്ഷിതാവേ, മുഹമ്മദ് നബിക്ക് (ﷺ) "വസീല"യും പ്രത്യേക മഹത്ത്വവും നൽകൂ. നീ വാഗ്ദാനം ചെയ്ത "മഖാമ് മഹ്‌മൂദ്" (പ്രശംസ്യ സ്ഥാനം) അദ്ദേഹത്തിന് നൽകൂ.',
		reference: 'Bukhari 614'
	},

	/* ─────────── DAILY LIFE ─────────── */
	{
		id: 'daily-entering-home',
		category: 'daily',
		title: 'Entering Home',
		titleML: 'വീട്ടിൽ കടക്കുമ്പോൾ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
		transliteration:
			"Allahumma innee as-aluka khayral-mawlaji wa khayral-makhraj, bismillahi walajnaa wa bismillahi kharajnaa wa 'alallahi Rabbina tawakkalnaa",
		malayalam:
			'അല്ലാഹുവേ, ഈ പ്രവേശനത്തിന്റെ നന്മയും ഈ പ്രസ്ഥാനത്തിന്റെ നന്മയും ഞാൻ ചോദിക്കുന്നു. അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ (വീട്ടിൽ) കടക്കുന്നു; അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ ഇറങ്ങുന്നു; ഞങ്ങളുടെ രക്ഷിതാവായ അല്ലാഹുവിൽ ഞങ്ങൾ ഭരമേൽപ്പിക്കുന്നു.',
		reference: 'Abu Dawud 5096'
	},
	{
		id: 'daily-leaving-home',
		category: 'daily',
		title: 'Leaving Home',
		titleML: 'വീട്ടിൽ നിന്ന് ഇറങ്ങുമ്പോൾ',
		arabic:
			'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
		transliteration:
			"Bismillah, tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. ഞാൻ അല്ലാഹുവിൽ ഭരമേൽപ്പിക്കുന്നു. അല്ലാഹുവിന്റെ (സഹായം) ഒഴികെ ഒരു കഴിവോ ശക്തിയോ ഇല്ല.',
		reference: 'Abu Dawud 5095, Tirmidhi 3426'
	},
	{
		id: 'daily-after-wudu',
		category: 'daily',
		title: 'After Wudu (Ablution)',
		titleML: 'വുദൂ ചെയ്ത ശേഷം',
		arabic:
			'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
		transliteration:
			"Ash-hadu an la ilaha illallahu wahdahu la shareeka lah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh. Allahummaj-'alnee minat-tawwabeen waj-'alnee minal-mutatahhireen",
		malayalam:
			'അല്ലാഹു അല്ലാതെ ഒരു ദൈവവുമില്ലെന്ന് ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു, അവൻ ഏകൻ, അവന് പങ്കുകാരനില്ല. മുഹമ്മദ് (ﷺ) അല്ലാഹുവിന്റെ ദാസനും ദൂതനുമാണ് എന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു. അല്ലാഹുവേ, ഞാൻ ഏറ്റവും കൂടുതൽ പശ്ചാത്തപിക്കുന്നവരിൽ ഒരാളാകാൻ ഉണ്ടാക്കേണമേ; ഞാൻ ഏറ്റവും കൂടുതൽ ശുദ്ധി പാലിക്കുന്നവരിൽ ഒരാളാകാൻ ഉണ്ടാക്കേണമേ.',
		reference: 'Muslim 234, Tirmidhi 55'
	},
	{
		id: 'daily-sneezing',
		category: 'daily',
		title: 'When Sneezing',
		titleML: 'തുമ്മുമ്പോൾ',
		arabic: 'الْحَمْدُ لِلَّهِ',
		transliteration: 'Alhamdu lillah',
		malayalam: 'എല്ലാ സ്തുതിയും അല്ലാഹുവിന് (തുമ്മിയ ഉടനെ പറയണം).',
		reference: 'Bukhari 6224'
	},
	{
		id: 'daily-sneezing-reply',
		category: 'daily',
		title: 'Reply to a Sneeze',
		titleML: 'തുമ്മിയ ആൾക്ക് ഉത്തരം',
		arabic: 'يَرْحَمُكَ اللَّهُ',
		transliteration: 'Yarhamukallah',
		malayalam: 'അല്ലാഹു നിന്നോട് കരുണ കാണിക്കട്ടെ. (തുമ്മിയ ആൾ "الحمد لله" പറഞ്ഞാൽ ഉത്തരം ഇതാണ്).',
		reference: 'Bukhari 6224'
	},
	{
		id: 'daily-dua-anxiety',
		category: 'daily',
		title: 'Dua for Anxiety and Grief',
		titleML: 'ആകുലതയ്ക്കും ദുഃഖത്തിനും',
		arabic:
			'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
		transliteration:
			"Allahumma innee a'oothu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal",
		malayalam:
			'അല്ലാഹുവേ, ആകുലതയിൽ നിന്നും ദുഃഖത്തിൽ നിന്നും, കഴിവ് കേടിൽ നിന്നും അലസതയിൽ നിന്നും, പിശുക്കിൽ നിന്നും ഭീരുത്വത്തിൽ നിന്നും, കടഭാരത്തിൽ നിന്നും ആൾക്കാർ കീഴ്‌പ്പെടുത്തുന്നതിൽ നിന്നും ഞാൻ നിന്നോടഭയം തേടുന്നു.',
		reference: 'Bukhari 6369'
	},
	{
		id: 'daily-istikhara',
		category: 'daily',
		title: 'Dua al-Istikhara',
		titleML: 'ഇസ്തിഖാറ പ്രാർഥന',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ',
		transliteration:
			"Allahumma innee astakheeruka bi-'ilmik, wa astaq-diruka bi-qudratik, wa as-aluka min fadlikal-'adheem fa-innaka taqdiru wa la aq-dir, wa ta'lamu wa la a'lam, wa Anta 'Allamul-ghuyoob",
		malayalam:
			'അല്ലാഹുവേ, ഞാൻ നിന്റെ അറിവ് കൊണ്ട് (നന്മ) ഇച്ഛിക്കുന്നു; നിന്റെ ശക്തി കൊണ്ട് ശക്തി ചോദിക്കുന്നു; നിന്റെ മഹത്തായ ഔദാര്യം ചോദിക്കുന്നു. നിനക്ക് ശക്തിയുണ്ട്, എനിക്കില്ല; നീ അറിയുന്നു, ഞാൻ അറിയുന്നില്ല. നീ അദൃശ്യ ജ്ഞാനിയാണ്.',
		reference: "Bukhari 6382 — recite 2 rak'ahs then this dua for any important decision"
	},
	{
		id: 'daily-seeking-knowledge',
		category: 'daily',
		title: 'Seeking Beneficial Knowledge',
		titleML: 'ഉപകാരപ്രദമായ അറിവ് തേടൽ',
		arabic:
			'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',
		transliteration:
			"Allahumman-fa'nee bima 'allamtanee, wa 'allimnee ma yanfa'unee, wa zidnee 'ilma",
		malayalam:
			'അല്ലാഹുവേ, നീ എനിക്ക് പഠിപ്പിച്ചു തന്നതു കൊണ്ട് എനിക്ക് പ്രയോജനമുണ്ടാക്കൂ; എനിക്ക് ഉപകാരപ്രദമായത് പഠിപ്പിക്കൂ; എന്റെ അറിവ് വർദ്ധിപ്പിക്കൂ.',
		reference: 'Ibn Majah 251, Tirmidhi 3599'
	}
];

/**
 * Get duas by category id
 * @param {string} categoryId
 */
export function getDuasByCategory(categoryId) {
	return duas.filter((d) => d.category === categoryId);
}

/**
 * Get a single dua by id
 * @param {string} id
 */
export function getDuaById(id) {
	return duas.find((d) => d.id === id) ?? null;
}

/**
 * Get a category by id
 * @param {string} id
 */
export function getCategoryById(id) {
	return categories.find((c) => c.id === id) ?? null;
}
