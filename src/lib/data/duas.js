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
			'ഞങ്ങളെ മരിപ്പിച്ചതിന് ശേഷം വീണ്ടും ജീവിപ്പിച്ച അല്ലാഹുവിന് സ്തുതി. അവനിലേക്കാണ് ഉയിർത്തെഴുന്നേൽക്കൽ.',
		reference: 'Sahih al-Bukhari 6312'
	},
	{
		id: 'morning-dhikr-subhanallah',
		category: 'morning',
		title: 'Morning Glorification',
		titleML: 'പ്രഭാത തസ്ബീഹ്',
		arabic:
			'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',
		transliteration:
			"Subhanallahi wa bihamdihi, 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatihi",
		malayalam:
			'അല്ലാഹുവിനെ അവന്റെ സ്തുതിയോടുകൂടി ഞാൻ പരിശുദ്ധനായി പ്രഖ്യാപിക്കുന്നു; അവന്റെ സൃഷ്ടികളുടെ എണ്ണത്തോളം, അവന്റെ തൃപ്തിയുടെ അളവോളം, അവന്റെ അർശിന്റെ ഭാരത്തോളം, അവന്റെ വചനങ്ങളുടെ മഷിയോളം.',
		reference: 'Sahih Muslim 2726'
	},
	{
		id: 'morning-protection',
		category: 'morning',
		title: 'Morning Remembrance',
		titleML: 'പ്രഭാത ദിക്‌ർ',
		arabic:
			'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
		transliteration:
			"Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushoor",
		malayalam:
			'അല്ലാഹുവേ, നിന്നാൽ ഞങ്ങൾ പ്രഭാതത്തിലേക്ക് പ്രവേശിച്ചു, നിന്നാൽ ഞങ്ങൾ സന്ധ്യയിലേക്കും പ്രവേശിക്കുന്നു. നിന്നാൽ ഞങ്ങൾ ജീവിക്കുന്നു, നിന്നാൽ ഞങ്ങൾ മരിക്കുന്നു. നിനക്കാണ് ഉയിർത്തെഴുന്നേൽക്കൽ.',
		reference: 'Abu Dawud 5068, Tirmidhi 3391'
	},
	{
		id: 'morning-seeking-good',
		category: 'morning',
		title: 'Seeking Goodness of the Day',
		titleML: 'ദിവസത്തിന്റെ നന്മ തേടൽ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ، فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ',
		transliteration:
			"Allahumma inni as'aluka khayra hadhal-yawm, fathahu, wa nasrahu, wa nurahu, wa barakatahu, wa hudahu, wa a'udhu bika min sharri ma fihi wa sharri ma ba'dah",
		malayalam:
			'അല്ലാഹുവേ, ഈ ദിവസത്തിന്റെ നന്മ, അതിന്റെ വിജയം, സഹായം, പ്രകാശം, അനുഗ്രഹം, മാർഗദർശനം എന്നിവ ഞാൻ നിന്നോട് ചോദിക്കുന്നു. അതിലുള്ള ദോഷത്തിൽ നിന്നും അതിന് ശേഷമുള്ള ദോഷത്തിൽ നിന്നും ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
		reference: 'Abu Dawud 5084'
	},
	{
		id: 'morning-complete-words',
		category: 'morning',
		title: 'Protection with the Perfect Words of Allah',
		titleML: 'അല്ലാഹുവിന്റെ സമ്പൂർണ വചനങ്ങളാൽ സംരക്ഷണം',
		arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
		malayalam:
			'അല്ലാഹു സൃഷ്ടിച്ചിരിക്കുന്ന എല്ലാ വസ്തുക്കളുടെ ദോഷത്തിൽ നിന്നും, അല്ലാഹുവിന്റെ സമ്പൂർണ വചനങ്ങളാൽ ഞാൻ അഭയം തേടുന്നു.',
		reference: 'Sahih Muslim 2709'
	},

	/* ─────────── EVENING ─────────── */
	{
		id: 'evening-dhikr',
		category: 'evening',
		title: 'Evening Remembrance',
		titleML: 'വൈകുന്നേര ദിക്‌ർ',
		arabic:
			'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا',
		transliteration:
			"Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer. Rabbi as'aluka khayra ma fee hadhihil-laylah wa khayra ma ba'daha, wa a'udhu bika min sharri ma fee hadhihil-laylah wa sharri ma ba'daha",
		malayalam:
			'ഞങ്ങൾ സന്ധ്യയിൽ പ്രവേശിച്ചു, രാജ്യം അല്ലാഹുവിനാണ്. സ്തുതി അല്ലാഹുവിനാണ്. അല്ലാഹുവല്ലാതെ ആരാധനയ്ക്കർഹനായ ദൈവമില്ല. അവൻ ഏകൻ, അവന് പങ്കാളിയില്ല. രാജ്യം അവനുടേതാണ്, സ്തുതിയും അവനുടേതാണ്, അവൻ എല്ലാറ്റിനും ശക്തനാണ്. എന്റെ രക്ഷിതാവേ, ഈ രാത്രിയിലെ നന്മയും അതിന് ശേഷം ഉള്ള നന്മയും ഞാൻ നിന്നോട് ചോദിക്കുന്നു. ഈ രാത്രിയിലെ ദോഷവും അതിന് ശേഷം ഉള്ള ദോഷവും നിന്നിൽ നിന്ന് അഭയം തേടുന്നു.',
		reference: 'Sahih Muslim 2723'
	},
	{
		id: 'evening-protection-from-evil',
		category: 'evening',
		title: 'Evening Testimony of Faith',
		titleML: 'വൈകുന്നേര സാക്ഷ്യപ്രഖ്യാപനം',
		arabic:
			'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ',
		transliteration:
			"Allahumma inni amsaytu ushhiduka, wa ushhidu hamalata 'arshika, wa malaa'ikataka, wa jamee'a khalqika, annaka anta Allahu la ilaha illa anta, wa anna Muhammadan 'abduka wa rasooluk",
		malayalam:
			'അല്ലാഹുവേ, ഈ സന്ധ്യയിൽ ഞാൻ നിന്നെ സാക്ഷിയാക്കുന്നു. നിന്റെ അർശ് വഹിക്കുന്നവരെയും, നിന്റെ മലക്കുകളെയും, നിന്റെ സകല സൃഷ്ടികളെയും സാക്ഷിയാക്കുന്നു — നീ അല്ലാഹുവാണ്, നിനക്കല്ലാതെ ആരാധനയ്ക്കർഹനായ ദൈവമില്ല. മുഹമ്മദ് (ﷺ) നിന്റെ ദാസനും ദൂതനുമാണ്.',
		reference: 'Abu Dawud 5069'
	},
	{
		id: 'evening-seeking-forgiveness',
		category: 'evening',
		title: 'Evening Forgiveness and Well-being',
		titleML: 'വൈകുന്നേര ക്ഷമയും സുരക്ഷയും തേടൽ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
		transliteration:
			"Allahumma inni as'alukal 'afwa wal 'afiyah fid-dunya wal akhirah, Allahumma inni as'alukal 'afwa wal 'afiyah fi deeni wa dunyaya wa ahli wa maali, Allahummastur 'awrati wa aamin raw'ati, Allahummahfazni min bayni yadayya wa min khalfi wa 'an yameeni wa 'an shimali wa min fawqi, wa a'udhu bi 'azamatika an ughtala min tahti",
		malayalam:
			'അല്ലാഹുവേ, ഇഹലോകത്തും പരലോകത്തും ഞാൻ നിന്നോട് ക്ഷമയും സമ്പൂർണ്ണ സുരക്ഷയും ചോദിക്കുന്നു. അല്ലാഹുവേ, എന്റെ ദീനും ലോകജീവിതവും കുടുംബവും സമ്പത്തും സംബന്ധിച്ചും ഞാൻ നിന്നോട് ക്ഷമയും സുരക്ഷയും ചോദിക്കുന്നു. അല്ലാഹുവേ, എന്റെ ദൗർബല്യങ്ങൾ മറച്ചിടുകയും എന്റെ ഭയങ്ങൾ നീക്കുകയും ചെയ്യേണമേ. എന്റെ മുന്നിലും പിന്നിലും വലത്തും ഇടത്തും മുകളിലും നിന്നെനിക്ക് സംരക്ഷണം നൽകേണമേ. താഴെ നിന്നും അപ്രതീക്ഷിതമായി നാശം വരാതിരിക്കുവാൻ ഞാൻ നിന്റെ മഹത്വത്തിൽ അഭയം തേടുന്നു.',
		reference: 'Abu Dawud 5074, Ibn Majah 3871'
	},
	{
		id: 'evening-ayatul-kursi',
		category: 'evening',
		title: 'Ayatul Kursi (Evening)',
		titleML: 'ആയത്തുൽ കുർസി (വൈകുന്നേരം)',
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		transliteration:
			"Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem",
		malayalam:
			'അല്ലാഹു — അവൻ അല്ലാതെ ആരാധനയ്ക്കർഹനായ ദൈവമില്ല. അവൻ നിത്യജീവിയും എല്ലാം നിലനിർത്തുന്നവനും ആണ്. അവനെ മയക്കമോ ഉറക്കമോ ബാധിക്കില്ല. ആകാശങ്ങളിലും ഭൂമിയിലും ഉള്ളതെല്ലാം അവനുടേതാണ്. അവന്റെ അനുമതിയില്ലാതെ അവന്റെ സന്നിധിയിൽ ശിപാർശ ചെയ്യാൻ ആരുണ്ട്? അവർക്ക് മുമ്പിലും പിന്നിലും ഉള്ളതെല്ലാം അവൻ അറിയുന്നു. അവൻ ഉദ്ദേശിക്കുന്നതൊഴികെ അവന്റെ അറിവിൽ നിന്ന് ഒന്നും അവർക്ക് അറിഞ്ഞുകൂടാ. അവന്റെ കുർസി ആകാശഭൂമികളെ മുഴുവനും വ്യാപിച്ചിരിക്കുന്നു. അവയെ സംരക്ഷിക്കുന്നത് അവന് ഭാരമാകുന്നില്ല. അവൻ ഉന്നതനും മഹത്തുമായവനുമാണ്.',
		reference: 'Quran 2:255'
	},

	/* ─────────── TOILET ─────────── */
	{
		id: 'toilet-entering',
		category: 'toilet',
		title: 'Entering the Toilet',
		titleML: 'ശൗചാലയത്തിൽ കടക്കുമ്പോൾ',
		arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
		transliteration: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
		malayalam:
			'അല്ലാഹുവേ, ആൺ ജിന്നുകളുടെയും പെൺ ജിന്നുകളുടെയും ദോഷത്തിൽ നിന്ന് ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
		reference: 'Sahih al-Bukhari 142, Sahih Muslim 375'
	},
	{
		id: 'toilet-leaving',
		category: 'toilet',
		title: 'Leaving the Toilet',
		titleML: 'ശൗചാലയത്തിൽ നിന്ന് ഇറങ്ങുമ്പോൾ',
		arabic: 'غُفْرَانَكَ',
		transliteration: 'Ghufranaka',
		malayalam: 'അല്ലാഹുവേ, നിന്റെ പൊറുതി ഞാൻ ചോദിക്കുന്നു.',
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
		malayalam: 'അല്ലാഹുവിന്റെ നാമത്തിൽ (ഭക്ഷണം ആരംഭിക്കുന്നു).',
		reference: 'Abu Dawud 3767, Tirmidhi 1858'
	},
	{
		id: 'eating-forgot-bismillah',
		category: 'eating',
		title: 'If You Forget Bismillah',
		titleML: 'ബിസ്മില്ലാഹ് മറന്നുപോയാൽ',
		arabic: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ',
		transliteration: 'Bismillahi awwalahu wa akhirahu',
		malayalam: 'ഭക്ഷണത്തിന്റെ തുടക്കത്തിലും അവസാനത്തിലും അല്ലാഹുവിന്റെ നാമത്തിൽ.',
		reference: 'Abu Dawud 3767, Tirmidhi 1858'
	},
	{
		id: 'eating-after',
		category: 'eating',
		title: 'After Eating',
		titleML: 'ഭക്ഷണത്തിനു ശേഷം',
		arabic:
			'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
		transliteration:
			"Alhamdu lillahil-lathee at'amani hadha, wa razaqaneehi min ghayri hawlin minnee wa la quwwah",
		malayalam:
			'എനിക്ക് ഈ ഭക്ഷണം നൽകി അനുഗ്രഹിച്ച അല്ലാഹുവിന് സ്തുതി. ഇത് നേടാൻ എനിക്ക് യാതൊരു ശക്തിയോ കഴിവോ ഉണ്ടായിരുന്നില്ല.',
		reference: 'Abu Dawud 4023, Tirmidhi 3458'
	},
	{
		id: 'eating-drinking-water',
		category: 'eating',
		title: 'Before Drinking',
		titleML: 'വെള്ളം കുടിക്കുന്നതിന് മുൻപ്',
		arabic: 'بِسْمِ اللَّهِ، اللَّهُمَّ بَارِكْ لَنَا فِيهِ، وَزِدْنَا مِنْهُ',
		transliteration: "Bismillah, Allahumma barik lana fihi, wa zidna minhu",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. അല്ലാഹുവേ, ഇതിൽ ഞങ്ങൾക്ക് അനുഗ്രഹം നൽകുകയും ഇതിൽ വർദ്ധനയും നൽകുകയും ചെയ്യേണമേ.',
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
			'അല്ലാഹുവേ, നിന്റെ നാമത്തിൽ ഞാൻ മരിക്കുന്നു (ഉറങ്ങുന്നു) കൂടാതെ ഞാൻ ജീവിക്കുന്നു (ഉണരുന്നു).',
		reference: 'Sahih al-Bukhari 6312'
	},
	{
		id: 'sleeping-ayatul-kursi',
		category: 'sleeping',
		title: 'Ayatul Kursi Before Sleep',
		titleML: 'ഉറക്കത്തിനു മുൻപ് ആയത്തുൽ കുർസി',
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		transliteration:
			"Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem",
		malayalam:
			'അല്ലാഹു — അവൻ അല്ലാതെ ആരാധനയ്ക്കർഹനായ ദൈവമില്ല. അവൻ നിത്യജീവിയും എല്ലാം നിലനിർത്തുന്നവനും ആണ്. അവനെ മയക്കമോ ഉറക്കമോ ബാധിക്കില്ല. ആകാശങ്ങളിലും ഭൂമിയിലും ഉള്ളതെല്ലാം അവനുടേതാണ്. അവന്റെ അനുമതിയില്ലാതെ അവന്റെ സന്നിധിയിൽ ശിപാർശ ചെയ്യാൻ ആരുണ്ട്? അവർക്ക് മുമ്പിലും പിന്നിലും ഉള്ളതെല്ലാം അവൻ അറിയുന്നു. അവൻ ഉദ്ദേശിക്കുന്നതൊഴികെ അവന്റെ അറിവിൽ നിന്ന് ഒന്നും അവർക്ക് അറിഞ്ഞുകൂടാ. അവന്റെ കുർസി ആകാശഭൂമികളെ മുഴുവനും വ്യാപിച്ചിരിക്കുന്നു. അവയെ സംരക്ഷിക്കുന്നത് അവന് ഭാരമാകുന്നില്ല. അവൻ ഉന്നതനും മഹത്തുമായവനുമാണ്.',
		reference: 'Sahih al-Bukhari 5010'
	},
	{
		id: 'sleeping-three-quls',
		category: 'sleeping',
		title: 'Three Quls Before Sleep',
		titleML: 'ഉറക്കത്തിനു മുൻപ് മൂന്ന് ഖുൽ',
		arabic:
			'قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ — قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ — قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَٰهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ',
		transliteration: "Qul huwallahu ahad... (3 surahs)",
		malayalam: 'സൂറത്ത് ഇഖ്‌ലാസ്, ഫലഖ്, നാസ് — ഓരോന്നും 3 പ്രാവശ്യം ഓതുക, ശേഷം കൈകളിൽ ഊതി ശരീരത്തിൽ തുടയ്ക്കുക.',
		reference: 'Sahih al-Bukhari 5017'
	},
	{
		id: 'sleeping-waking-up-night',
		category: 'sleeping',
		title: 'Waking Up at Night',
		titleML: 'രാത്രിയിൽ ഉണരുമ്പോൾ',
		arabic:
			'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		transliteration:
			"La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay-in qadeer",
		malayalam:
			'അല്ലാഹു അല്ലാതെ ഒരു ദൈവവുമില്ല, അവൻ ഏകൻ, അവന് പങ്കാളിയില്ല. ആധിപത്യം അവനുടേതാണ്, സ്തുതി അവനുടേതാണ്, അവൻ എല്ലാറ്റിനും ശക്തനാണ്.',
		reference: 'Sahih al-Bukhari 1154'
	},

	/* ─────────── TRAVEL ─────────── */
	{
		id: 'travel-before-journey',
		category: 'travel',
		title: 'Before a Journey',
		titleML: 'യാത്ര ആരംഭിക്കുമ്പോൾ',
		arabic:
			'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا، وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
		transliteration:
			"Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanallathee sakhkhara lana hadha, wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqaliboon",
		malayalam:
			'അല്ലാഹു ഏറ്റവും മഹാനാണ്, അല്ലാഹു ഏറ്റവും മഹാനാണ്, അല്ലാഹു ഏറ്റവും മഹാനാണ്. ഇതിനെ ഞങ്ങൾക്ക് കീഴ്പ്പെടുത്തിത്തന്നവൻ പരിശുദ്ധനാകുന്നു. ഞങ്ങൾക്ക് ഇതിനെ നിയന്ത്രിക്കാൻ കഴിവുണ്ടായിരുന്നില്ല. നിശ്ചയമായും ഞങ്ങൾ നമ്മുടെ രക്ഷിതാവിലേക്കാണ് മടങ്ങുന്നത്.',
		reference: 'Sahih Muslim 1342'
	},
	{
		id: 'travel-entering-vehicle',
		category: 'travel',
		title: 'Entering a Vehicle',
		titleML: 'വാഹനത്തിൽ കയറുമ്പോൾ',
		arabic:
			'بِسْمِ اللَّهِ وَالْحَمْدُ لِلَّهِ سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
		transliteration:
			"Bismillahi walhamdu lillah, subhanal-lathee sakhkhara lana hadha wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqaliboon",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ, സ്തുതി അല്ലാഹുവിന്. ഇതിനെ ഞങ്ങൾക്ക് കീഴ്‌പ്പെടുത്തിത്തന്ന അവനെ ഞങ്ങൾ പ്രകീർത്തിക്കുന്നു — ഞങ്ങൾ ഇതിനെ നിയന്ത്രിക്കാൻ ശക്തരായിരുന്നില്ല. ഞങ്ങൾ ഞങ്ങളുടെ രക്ഷിതാവിങ്കലേക്ക് തിരിച്ചുപോകുന്നവർ തന്നെ.',
		reference: 'Abu Dawud 2602, Tirmidhi 3446 — based on Quran 43:13-14'
	},
	{
		id: 'travel-returning-home',
		category: 'travel',
		title: 'Returning from Travel',
		titleML: 'യാത്രയിൽ നിന്ന് മടങ്ങുമ്പോൾ',
		arabic: 'آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ',
		transliteration: "Aayiboona, taa'iboona, 'aabidoona, li-Rabbina haamidoon",
		malayalam:
			'ഞങ്ങൾ മടങ്ങിവരുന്നവരും, പശ്ചാത്തപിക്കുന്നവരും, ആരാധന ചെയ്യുന്നവരും, നമ്മുടെ രക്ഷിതാവിനെ സ്തുതിക്കുന്നവരുമാണ്.',
		reference: 'Sahih al-Bukhari 3085, Sahih Muslim 1342'
	},
	{
		id: 'travel-new-place',
		category: 'travel',
		title: 'Arriving at a New Place',
		titleML: 'പുതിയ സ്ഥലത്ത് എത്തുമ്പോൾ',
		arabic:
			'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
		malayalam:
			'അല്ലാഹു സൃഷ്ടിച്ചിരിക്കുന്ന എല്ലാ വസ്തുക്കളുടെ ദോഷത്തിൽ നിന്നും, അല്ലാഹുവിന്റെ സമ്പൂർണ വചനങ്ങളാൽ ഞാൻ അഭയം തേടുന്നു.',
		reference: 'Sahih Muslim 2708'
	},

	/* ─────────── MASJID ─────────── */
	{
		id: 'masjid-entering',
		category: 'masjid',
		title: 'Entering the Masjid',
		titleML: 'മസ്ജിദിൽ കടക്കുമ്പോൾ',
		arabic:
			'بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
		transliteration:
			"Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahumma iftah li abwaba rahmatik",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. അല്ലാഹുവിന്റെ ദൂതന്റെ മേൽ സ്വലാത്തും സലാമും ഉണ്ടാകട്ടെ. അല്ലാഹുവേ, നിന്റെ കാരുണ്യത്തിന്റെ വാതിലുകൾ എനിക്ക് തുറന്നുതരേണമേ.',
		reference: 'Sahih Muslim 713, Abu Dawud 465'
	},
	{
		id: 'masjid-leaving',
		category: 'masjid',
		title: 'Leaving the Masjid',
		titleML: 'മസ്ജിദിൽ നിന്ന് ഇറങ്ങുമ്പോൾ',
		arabic:
			'بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
		transliteration:
			"Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahumma inni as'aluka min fadlik",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. അല്ലാഹുവിന്റെ ദൂതന്റെ മേൽ സ്വലാത്തും സലാമും ഉണ്ടാകട്ടെ. അല്ലാഹുവേ, ഞാൻ നിന്റെ ഔദാര്യം ചോദിക്കുന്നു.',
		reference: 'Sahih Muslim 713, Abu Dawud 465'
	},
	{
		id: 'masjid-adhan-response',
		category: 'masjid',
		title: 'Dua After Adhan',
		titleML: 'അദാനിന് ശേഷം പ്രാർഥന',
		arabic:
			'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
		transliteration:
			"Allahumma Rabba hadhihid-da'watit-tammah, was-salatil-qaa'imah, ati Muhammadanil-waseelata wal-fadeelah, wab'athhu maqamam mahmudanilladhi wa'adtah",
		malayalam:
			'അല്ലാഹുവേ, ഈ സമ്പൂർണ ആഹ്വാനത്തിന്റെയും നിലനിൽക്കുന്ന നമസ്‌കാരത്തിന്റെയും രക്ഷിതാവേ, മുഹമ്മദ് നബിക്ക് വസീലയും പ്രത്യേക മഹത്വവും നൽകേണമേ. നീ വാഗ്ദാനം ചെയ്ത പ്രശംസനീയമായ സ്ഥാനത്തേക്ക് അദ്ദേഹത്തെ ഉയർത്തേണമേ.',
		reference: 'Sahih al-Bukhari 614'
	},

	/* ─────────── DAILY LIFE ─────────── */
	{
		id: 'daily-entering-home',
		category: 'daily',
		title: 'Entering Home',
		titleML: 'വീട്ടിൽ കടക്കുമ്പോൾ',
		arabic:
			'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ، وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
		transliteration:
			"Allahumma inni as'aluka khayral-mawlaji, wa khayral-makhraj. Bismillahi walajna, wa bismillahi kharajna, wa 'ala Allahi Rabbina tawakkalna",
		malayalam:
			'അല്ലാഹുവേ, നല്ല പ്രവേശനവും നല്ല പുറപ്പെടലും ഞാൻ നിന്നോട് ചോദിക്കുന്നു. അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ പ്രവേശിച്ചു, അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ പുറപ്പെട്ടു, ഞങ്ങളുടെ രക്ഷിതാവായ അല്ലാഹുവിൽ ഞങ്ങൾ ഭരമേൽപ്പിച്ചു.',
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
			"Bismillah, tawakkaltu 'ala Allah, wa la hawla wa la quwwata illa billah",
		malayalam:
			'അല്ലാഹുവിന്റെ നാമത്തിൽ. ഞാൻ അല്ലാഹുവിൽ ഭരമേൽപ്പിച്ചു. അല്ലാഹുവിന്റെ സഹായമില്ലാതെ യാതൊരു കഴിവും ശക്തിയും ഇല്ല.',
		reference: 'Abu Dawud 5095, Tirmidhi 3426'
	},
	{
		id: 'daily-after-wudu',
		category: 'daily',
		title: 'After Wudu',
		titleML: 'വുദൂ ചെയ്ത ശേഷം',
		arabic:
			'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
		transliteration:
			"Ash-hadu an la ilaha illallahu wahdahu la shareeka lah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh. Allahummaj'alni minat-tawwabeen, waj'alni minal-mutatahhireen",
		malayalam:
			'അല്ലാഹുവല്ലാതെ ആരാധനയ്ക്കർഹനായ ദൈവമില്ലെന്ന് ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു. അവൻ ഏകൻ, അവന് പങ്കാളിയില്ല. മുഹമ്മദ് നബി അല്ലാഹുവിന്റെ ദാസനും ദൂതനുമാണെന്നും ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു. അല്ലാഹുവേ, എന്നെ അധികം പശ്ചാത്തപിക്കുന്നവരിലും ശുദ്ധി പാലിക്കുന്നവരിലും ഉൾപ്പെടുത്തേണമേ.',
		reference: 'Sahih Muslim 234, Tirmidhi 55'
	},
	{
		id: 'daily-sneezing',
		category: 'daily',
		title: 'When Sneezing',
		titleML: 'തുമ്മുമ്പോൾ',
		arabic: 'الْحَمْدُ لِلَّهِ',
		transliteration: 'Alhamdu lillah',
		malayalam: 'എല്ലാ സ്തുതിയും അല്ലാഹുവിന്.',
		reference: 'Sahih al-Bukhari 6224'
	},
	{
		id: 'daily-sneezing-reply',
		category: 'daily',
		title: 'Reply to a Sneeze',
		titleML: 'തുമ്മിയയാൾക്ക് പറയേണ്ടത്',
		arabic: 'يَرْحَمُكَ اللَّهُ',
		transliteration: 'Yarhamukallah',
		malayalam: 'അല്ലാഹു നിന്നോട് കരുണ കാണിക്കട്ടെ.',
		reference: 'Sahih al-Bukhari 6224'
	},
	{
		id: 'daily-dua-anxiety',
		category: 'daily',
		title: 'Dua for Anxiety and Grief',
		titleML: 'ആകുലതക്കും ദുഃഖത്തിനും പ്രാർഥന',
		arabic:
			'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
		transliteration:
			"Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal, wa a'udhu bika minal-jubni wal-bukhl, wa a'udhu bika min ghalabatid-dayni wa qahrir-rijal",
		malayalam:
			'അല്ലാഹുവേ, വിഷമത്തിലും ദുഃഖത്തിലും നിന്നും, അസമർത്ഥതയിലും അലസതയിലും നിന്നും, ഭീരുത്വത്തിലും പിശുക്കിലും നിന്നും, കടബാധ്യതയുടെ ഭാരം കൂടുന്നതിലും ആളുകൾ കീഴ്‌പ്പെടുത്തുന്നതിലും നിന്നും ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
		reference: 'Sahih al-Bukhari 6369'
	},
	{
		id: 'daily-istikhara',
		category: 'daily',
		title: 'Dua al-Istikhara',
		titleML: 'ഇസ്തിഖാറ പ്രാർഥന',
		arabic: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ',
		transliteration:
			"Allahumma inni astakheeruka bi'ilmik, wa astaqdiruka biqudratik, wa as'aluka min fadlikal-'azeem, fa innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyub",
		malayalam:
			'അല്ലാഹുവേ, നിന്റെ അറിവ് കൊണ്ട് ഞാൻ നല്ലത് തിരഞ്ഞെടുക്കുന്നു; നിന്റെ ശക്തി കൊണ്ട് ശക്തി ചോദിക്കുന്നു; നിന്റെ മഹത്തായ ഔദാര്യം ഞാൻ ചോദിക്കുന്നു. നിനക്ക് കഴിയും, എനിക്ക് കഴിയില്ല; നീ അറിയുന്നു, ഞാൻ അറിയുന്നില്ല; നീ അദൃശ്യജ്ഞാനിയായവനാണ്.',
		reference: 'Sahih al-Bukhari 6382'
	},
	{
		id: 'daily-seeking-knowledge',
		category: 'daily',
		title: 'Seeking Beneficial Knowledge',
		titleML: 'ഉപകാരപ്രദമായ അറിവ് തേടൽ',
		arabic:
			'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',
		transliteration:
			"Allahumma anfa'ni bima 'allamtani, wa 'allimni ma yanfa'uni, wa zidni 'ilma",
		malayalam:
			'അല്ലാഹുവേ, നീ എനിക്ക് പഠിപ്പിച്ചതു കൊണ്ട് എനിക്ക് ഉപകാരമുണ്ടാക്കേണമേ. എനിക്ക് ഉപകാരപ്പെടുന്നതു പഠിപ്പിക്കേണമേ. എന്റെ അറിവ് വർദ്ധിപ്പിക്കേണമേ.',
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





