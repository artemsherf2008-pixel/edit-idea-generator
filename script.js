const formatNames = {
  shorts: "Вертикальный ролик",
  youtube: "Горизонтальный ролик",
  music: "Музыкальный эдит",
  teaser: "Тизер / трейлер",
};

const formatSpecs = {
  shorts: "1080×1920, 9:16, 30 или 60 fps",
  youtube: "1920×1080, 16:9, 24 или 30 fps",
  music: "под платформу: 1080×1920 или 1920×1080, 30/60 fps",
  teaser: "1920×1080 или 1080×1920, 24/30 fps",
};

const themePacks = [
  {
    id: "morning",
    keywords: ["утр", "рутин", "завтрак", "кофе", "будильник", "просн", "постел", "зубн"],
    hooks: [
      "Будильник дребезжит на тумбочке — рука смахивает его, не открывая глаз",
      "Щель в шторах режет тёмную комнату полоской света, пыль в луче",
      "Крупно: палец гасит экран телефона с 6:12",
    ],
    scenes: [
      { shot: "деталь", action: "ноги касаются холодного пола, тапочки не сразу находятся" },
      { shot: "крупный", action: "вода в раковине, брызги на зеркале, сонное лицо в отражении" },
      { shot: "средний", action: "чайник/турка, пар, кружка двигается к камере" },
      { shot: "деталь", action: "тост выскакивает, масло тает, крошки на столе" },
      { shot: "общий", action: "окно, улица ещё пустая, человек собирает сумку одним движением" },
      { shot: "средний", action: "шнурки, ключи, дверь закрывается, щелчок замка" },
    ],
    peaks: [
      "Резкий выход из подъезда: тёплый свет квартиры сменяется холодным уличным",
      "Первый глоток кофа крупно, глаза наконец открываются",
    ],
    endings: [
      "Дверь захлопывается, в кадре остаётся пустая кружка на столе",
      "Шаги в подъезде затихают, титр с временем ухода",
    ],
    transitions: [
      "match cut: смахивание будильника → смахивание шторок",
      "smash cut по звуку тостера или щелчку чайника",
      "склейка по движению: рука тянется за кружкой / за дверной ручкой",
    ],
    overlays: ["6:12", "ещё 5 минут", "первый глоток", "пора выходить"],
    sounds: [
      "будильник → вода → кипение → щелчок замка, без музыки первые 2 сек",
      "тихий lo-fi только после первого глотка, комнатные шумы громче музыки",
    ],
    techniques: [
      "каждый бытовой звук = точка склейки, не режь в тишине",
      "цветовая дуга: синий холод комнаты → тёплый свет кухни → нейтральный подъезд",
    ],
    grade: "утро: холодные тени в комнате, тёплый ключ на кухне, лёгкий fade-up экспозиции к финалу",
  },
  {
    id: "workout",
    keywords: ["спорт", "зал", "тренир", "бег", "качал", "workout", "gym", "отжим", "йог", "футбол"],
    hooks: [
      "Кроссовки шнуруются крупно, вдох носом, выдох — и резкий старт движения",
      "Повтор последнего тяжёлого повторения: дрожь в руках, гриф чуть не падает",
      "Секундомер или часы запускаются, сразу склейка на первый шаг/повтор",
    ],
    scenes: [
      { shot: "деталь", action: "пот на полу, мел на ладонях, капли на грифе" },
      { shot: "средний", action: "подход: 3 кадра одного упражнения с разных сторон" },
      { shot: "крупный", action: "лицо на усилии, зубы, взгляд вниз" },
      { shot: "общий", action: "зал или улица целиком, человек маленький в кадре — масштаб работы" },
      { shot: "деталь", action: "бутылка, капля воды, полотенце на шее" },
      { shot: "средний", action: "отдых 8 секунд реального времени сжать до 1 секунды jump-cut" },
    ],
    peaks: [
      "Последний повтор: замедление 70%, на пике усилия — нормальная скорость и удар",
      "Спринт или рывок: камера едет рядом, кадр трясётся в ритме шагов",
    ],
    endings: [
      "Человек садится на пол, тяжёлое дыхание, экран темнеет от выдоха на объектив",
      "Шнурки развязываются, зал пустой, остаётся только эхо железа",
    ],
    transitions: [
      "склейка на выдохе/грнте — каждый звук усилия режет кадр",
      "whip pan между подходами",
      "smash cut: подготовка → сразу рабочий вес, без разминки в кадре",
    ],
    overlays: ["ещё раз", "последний", "не сбавляй", "работа"],
    sounds: [
      "железо, кроссовки, дыхание громче трека; бас только на пиковых повторах",
      "метроном или хай-хэт в темпе упражнения, без мелодии до дропа",
    ],
    techniques: [
      "ритм-кат: 1 кадр = 1 повтор или 1 шаг",
      "не используй плавные диссолвы — только жёсткие склейки и ускорения",
    ],
    grade: "контраст выше среднего, чуть суши кожу, тёплый хайлайт на коже, холодный фон зала",
  },
  {
    id: "travel",
    keywords: ["поездк", "travel", "дорог", "аэропорт", "чемодан", "город", "улиц", "путеше", "вокзал"],
    hooks: [
      "Билет/посадочный в руках, пальцы его сгибают, сразу гул зала",
      "Окно поезда/самолёта: пейзаж сменяется jump-cut каждые 4 кадра",
      "Чемодан едет по плитке, колёсико крупно, камера низко",
    ],
    scenes: [
      { shot: "общий", action: "табло рейсов или карта, человек ищет глазами свою строку" },
      { shot: "деталь", action: "замок чемодана, бирка, ключи от чужого города" },
      { shot: "средний", action: "шаги в новом районе, камера сзади на плече" },
      { shot: "общий", action: "витрина / вывеска / транспорт — один кадр «это не дома»" },
      { shot: "крупный", action: "еда, которую едят руками, пар, крошки" },
      { shot: "деталь", action: "отражение в трамвае/луже: лицо и новый фон вместе" },
    ],
    peaks: [
      "Выход к виду: с тёмного коридора/перехода — на открытое пространство города",
      "Золотой час на крыше/набережной, ветер в микрофон, не чистить его полностью",
    ],
    endings: [
      "Обратный билет или закат в окне, город уезжает",
      "Ключ от номера на тумбочке, шторы открыты, город шумит за кадром",
    ],
    transitions: [
      "wipe окном транспорта: один город выезжает, другой въезжает",
      "match cut по шагам в разных локациях",
      "карта/навигатор как джамп-кат между районами",
    ],
    overlays: ["день 1", "не здесь", "ещё один поворот", "с собой"],
    sounds: [
      "слой: объявления вокзала + колёса + обрывки чужих голосов, музыка тише полевых шумов",
      "один локальный звук на локацию (трамвай, рынок, прибой) — не универсальный луп",
    ],
    techniques: [
      "повторяй один и тот же жест (смотреть в карту, пить из бутылки) в 3 разных местах",
      "не ставь все красивые виды подряд — вставляй «грязные» кадры очереди и ожидания",
    ],
    grade: "чуть плёночный контраст, тёплые окна вечером, холодные станции и утро",
  },
  {
    id: "cooking",
    keywords: ["готов", "кухн", "еда", "рецепт", "завтрак", "ужин", "выпечк", "пицц", "суп", "нож"],
    hooks: [
      "Нож стукает по доске — с этого звука начинается ролик, картинка на долю секунды позже",
      "Масло вспыхивает на сковороде, камера чуть отшатывается",
      "Руки моют продукт крупно, вода и земля/кожура",
    ],
    scenes: [
      { shot: "деталь", action: "нарезка: ритм ножа = ритм монтажа, не сбивай темп" },
      { shot: "средний", action: "сборка миски/сковороды сверху (top-down) 2–3 действия" },
      { shot: "крупный", action: "текстура: кипение, тянущийся сыр, крошка, пар" },
      { shot: "деталь", action: "специи сыпятся, пальцы растирают соль" },
      { shot: "общий", action: "кухня целиком, беспорядок как доказательство процесса" },
      { shot: "средний", action: "перекладывание в тарелку, соус неидеальной линией" },
    ],
    peaks: [
      "Первый кусок в кадре: пар в объектив, звук хруста/ножа по тарелке",
      "Сыр тянется или соус стекает — держи 1 секунду без склейки",
    ],
    endings: [
      "Пустая тарелка, вилка, пальцы вытирают соус — кухня в тишине",
      "Готовое блюдо по центру, рука убирает кадр как в кукбуке, но живее",
    ],
    transitions: [
      "склейка по удару ножа или хлопку крышки",
      "whip pan от ингредиента к сковороде",
      "jump-cut только внутри одной точки съёмки, не прыгай по кухне хаотично",
    ],
    overlays: ["огонь", "щепотка", "ещё минута", "готов"],
    sounds: [
      "ASMR кухни громче трека: нож, масло, кипение; музыку держи на заднем плане",
      "без голоса, только действия — или один короткий VO с дозировкой",
    ],
    techniques: [
      "top-down для процесса, глазной уровень для еды, макро для текстуры — три высоты камеры",
      "не используй стоковые whoosh на каждом кадре, максимум 1 переходный свист",
    ],
    grade: "тёплые света, насыщенный оранжевый масла, зелень чуть сочнее, кожа рук не уводи в серый",
  },
  {
    id: "study",
    keywords: ["учёб", "урок", "экзамен", "конспект", "ноутб", "работ", "дедлайн", "книг", "офис", "код"],
    hooks: [
      "Курсор мигает в пустом файле / чистая страница — тишина 1 секунду",
      "Таймер Pomodoro или часы, сразу стопка книг/вкладок",
      "Зачёркивание пункта в списке крупно, бумага шуршит",
    ],
    scenes: [
      { shot: "деталь", action: "ручка, хайлайтер, отпечаток на полях" },
      { shot: "средний", action: "экран и руки, лицо не нужно — только работа" },
      { shot: "крупный", action: "глаза устали, протирание, глоток воды" },
      { shot: "общий", action: "стол сверху: хаос черновиков, одна горящая лампа" },
      { shot: "деталь", action: "клавиатура ночью, отражение кода/текста в очках" },
      { shot: "средний", action: "короткая прогулка по комнате, возврат в кресло" },
    ],
    peaks: [
      "Момент, когда получается: кивок, сохранение файла, закрытие ноутбука",
      "Рассвет за окном, человек всё ещё за столом — время сжато jump-cut’ами",
    ],
    endings: [
      "Гаснет лампа, в кадре остаётся закрытый ноут и кружка",
      "Галочка в списке, страница переворачивается, чёрный кадр",
    ],
    transitions: [
      "jump-cut по часам: 22:14 → 00:40 → 03:02",
      "склейка по щелчку клавиши Enter / захлопыванию книги",
      "fade через свет монитора",
    ],
    overlays: ["ещё час", "не отвлекайся", "сохранено", "почти"],
    sounds: [
      "клавиши, бумага, холодильник, редкий город за окном — минимальный пэд",
      "наушники персонажа: приглушённый бит, снаружи — тишина комнаты",
    ],
    techniques: [
      "сжимай часы в 10 jump-cut’ов по одному жесту (пить, писать, листать)",
      "не делай мотивационный грейд «огонь» — оставь усталость в кадре",
    ],
    grade: "тёмная комната, тёплый ключ лампы 3200K, синий монитор, низкая насыщенность",
  },
  {
    id: "love",
    keywords: ["люб", "свидан", "роман", "поцел", "вместе", "пара", "парн", "влюб"],
    hooks: [
      "Две руки в одном кадре, ещё не касаются — пауза",
      "Взгляд мимо камеры на кого-то за кадром, улыбка с задержкой",
      "Сообщение на экране «я на месте», сразу склейка на встречу",
    ],
    scenes: [
      { shot: "деталь", action: "пальцы, чашки, общая еда, край одежды другого человека" },
      { shot: "средний", action: "шагают не в ногу, потом синхронно — оставь это" },
      { shot: "крупный", action: "смех, который начинается у одного и подхватывается" },
      { shot: "общий", action: "двое маленькие в большом месте (мост, кухня, парк)" },
      { shot: "деталь", action: "отражение в витрине: два силуэта" },
      { shot: "средний", action: "тишина после шутки, смотрят в разные стороны, потом друг на друга" },
    ],
    peaks: [
      "Сближение: камера не кружит 360, просто чуть ближе и ниже",
      "Общий наушник / одна куртка / один зонтик — предмет, который связывает",
    ],
    endings: [
      "Один уходит из кадра, второй остаётся, свет не меняется",
      "Дверь, два голоса за ней, камера остаётся в коридоре",
    ],
    transitions: [
      "склейка по взгляду: он смотрит вправо — она входит слева в следующем кадре",
      "мягкий dissolve только один раз, на самом тихом жесте",
      "match cut двух похожих движений (поправить волосы / поправить воротник)",
    ],
    overlays: ["подожди", "ты", "ещё минута", "останься"],
    sounds: [
      "голоса близко к микрофону, город далеко; музыка без слов",
      "одна песня на всём ролике, не нарезай её — подрезай картинку под дыхание фразы",
    ],
    techniques: [
      "держи планы длиннее, чем привык для рилсов: 1.5–2.5 сек на эмоцию",
      "не ставь сердечки и частицы; смысл в паузах между жестами",
    ],
    grade: "мягкий тёплый, приглушённые красные, кожа живая, не пластик beauty-фильтра",
  },
  {
    id: "night",
    keywords: ["ноч", "неон", "клуб", "вечер", "огон", "фонар", "тусов", "бар", "луна"],
    hooks: [
      "Неон включается, гул лампы, лицо красится розовым",
      "Сигарета / пар изо рта / выдох в холод, сразу бас из-за стены",
      "Шаги по мокрому асфальту, отражения вывесок",
    ],
    scenes: [
      { shot: "общий", action: "улица после дождя, человек идёт по кромке света" },
      { shot: "деталь", action: "стакан, лёд, пальцы в кольцах, экран телефона в баре" },
      { shot: "средний", action: "толпа, вспышки, камера handheld" },
      { shot: "крупный", action: "глаза в цветном свете, моргание под вспышку" },
      { shot: "деталь", action: "ключи, зажигалка, наушник выпадает" },
      { shot: "общий", action: "такси / последний автобус / пустая остановка" },
    ],
    peaks: [
      "Пик света и звука: строб, один замороженный кадр на 4 кадра, потом снова движ",
      "Выход из шумного помещения в тихую улицу — звук обрезать резко",
    ],
    endings: [
      "Рассвет против воли, грим света уже дневной, человек один",
      "Лифт/подъезд, неоновый цвет с одежды ещё держится на коже",
    ],
    transitions: [
      "flash frame (1 кадр белого) на бас",
      "склейка по отражению в луже / в стекле машины",
      "звук клуба продолжает играть поверх тихого следующего кадра 0.5 сек",
    ],
    overlays: ["ещё не утро", "громче", "не спрашивай", "last call"],
    sounds: [
      "низкий гул + обрывки баса, голоса неразборчиво; на улице — шины и капли",
      "один дроп, не три; после него почти тишина",
    ],
    techniques: [
      "экспозицию не выравнивай: пусть неон выбивает, тени проваливаются",
      "handheld + короткий shutter для дёрганости, не стабилизируй всё до плашки",
    ],
    grade: "teal/purple или чистое красное пятно, чёрный настоящий, не серый lift",
  },
  {
    id: "rain",
    keywords: ["дожд", "ливень", "луж", "зонт", "мокры", "груст", "осень", "серо"],
    hooks: [
      "Первая капля на объектив, не вытирай — оставь",
      "Стекло автобуса, размытый город, палец рисует линию",
      "Капюшон натягивается, мир сужается до щели",
    ],
    scenes: [
      { shot: "деталь", action: "капли на рукаве, ткань темнеет" },
      { shot: "общий", action: "пустая улица, человек один с зонтом" },
      { shot: "крупный", action: "ременьцы воды на лице, не актёрская слеза — дождь" },
      { shot: "деталь", action: "лужа: ноги проходят, отражение ломается" },
      { shot: "средний", action: "ожидание под козырьком, люди решают бежать или стоять" },
      { shot: "общий", action: "окно изнутри, конденсат, рука стирает кружок" },
    ],
    peaks: [
      "Ливень усиливается, звук перекрывает музыку полностью на 1–2 секунды",
      "Человек перестаёт прятаться и идёт под открытое небо",
    ],
    endings: [
      "Дождь стих, капает с козырька, в кадре никого",
      "Мокрые волосы, полотенце, чай — тепло как контраст, не как хэппи-энд",
    ],
    transitions: [
      "dissolve через мокрое стекло",
      "склейка по вспышке молнии или по удару капли",
      "L-cut: звук дождя продолжается на сухом следующем кадре",
    ],
    overlays: ["не спеши", "ещё капля", "подождём", "мокро"],
    sounds: [
      "слой дождя записать отдельно (или взять качественный foley), музыка — только пианино/пэд",
      "не ставь sad violin по умолчанию; лучше почти тишина и вода",
    ],
    techniques: [
      "длинные планы 2–4 сек, редкие склейки — дождь сам монтирует ритм",
      "слегка снизь saturation, добавь синий в тени, не делай «инстаграм-плёнку»",
    ],
    grade: "низкая насыщенность, сине-серые тени, блики на мокром асфальте оставь яркими",
  },
  {
    id: "car",
    keywords: ["машин", "ночн", "драйв", "трасс", "руль", "авто", "поезд", "метро", "велосипед"],
    hooks: [
      "Ключ в замке / Start Engine, стрелка тахометра, фары зажигаются",
      "Разметка бежит под камеру, низкая точка у бампера",
      "Рука на рычаге, щелчок, сразу движение",
    ],
    scenes: [
      { shot: "деталь", action: "руль, приборки, отражение огней на стекле" },
      { shot: "средний", action: "профиль водителя, город бежит за ним" },
      { shot: "общий", action: "машина в кадре целиком на пустой дороге" },
      { shot: "деталь", action: "зеркало: то, что осталось позади" },
      { shot: "крупный", action: "глаза в зеркале, моргание под фары" },
      { shot: "средний", action: "пассажир молчит, смотрит в окно, палец на стекле" },
    ],
    peaks: [
      "Разгон: кадры короче, линии длиннее, звук двигателя поверх трека",
      "Тоннель: свет-тьма-свет как естественный монтажный эффект",
    ],
    endings: [
      "Мотор глохнет, тишина звенит, рука снимает ключ",
      "Машина уезжает из кадра, остаётся пустой перекрёсток",
    ],
    transitions: [
      "склейка по столбу/фонарю, который пролетает через кадр",
      "whip по повороту руля",
      "match cut спидометра и метронома музыки",
    ],
    overlays: ["не останавливайся", "ещё км", "ночь", "держи скорость"],
    sounds: [
      "двигатель и ветер как основа, трек в такт оборотам, не наоборот",
      "радио в машине чуть плохо ловит — это атмосфера, не дефект",
    ],
    techniques: [
      "чередуй низ у колеса и глаза водителя — не сиди только на «красивом закате с капота»",
      "стабилизация лёгкая: дорога должна чувствоваться",
    ],
    grade: "оранжевые натриевые фонари, холодные тени салона, блики на стекле не убирай",
  },
  {
    id: "fashion",
    keywords: ["образ", "одежд", "outfit", "мод", "грим", "макияж", "стиль", "лук", "примерк"],
    hooks: [
      "Вешалка едет, ткань мелькает, выбирается один цвет",
      "Молния, пуговица, ремень — звук одевания как бит",
      "Лицо ещё без образа, сырое, сразу склейка на готовый взгляд в зеркало",
    ],
    scenes: [
      { shot: "деталь", action: "фактура ткани, шов, бирка, кольцо" },
      { shot: "средний", action: "сборка лука: 3 вещи, 3 склейки, одно зеркало" },
      { shot: "крупный", action: "макияж или волосы, одно точное движение" },
      { shot: "общий", action: "полный рост, шаг к камере, остановка" },
      { shot: "деталь", action: "обувь по полу, след, поворот каблука/подошвы" },
      { shot: "средний", action: "выход из дома, ветер поднимает край одежды" },
    ],
    peaks: [
      "Hero-shot: один ракурс, один свет, без нарезки 1.5 сек — запомнить силуэт",
      "Поворот на 180, ткань догоняет тело",
    ],
    endings: [
      "Дверь, силуэт, свет с улицы обрисовывает контур одежды",
      "Вещи снова на полу — образ прожит, не музей",
    ],
    transitions: [
      "match cut цвета: губа → ткань → вывеска того же оттенка",
      "склейка по хлопку молнии / каблука",
      "whip через зеркало",
    ],
    overlays: ["этот", "не тот", "выйти", "цвет"],
    sounds: [
      "ткань, молнии, шаги по дереву; трек модный, но тише фактуры",
      "один vocal chop на hero-shot, не на каждый кадр",
    ],
    techniques: [
      "повтори один и тот же шаг в 3 локациях — лук работает, если держится в движении",
      "не злоупотребляй speed ramping, один раз на повороте",
    ],
    grade: "кожа натуральная, чёрный глубокий, один акцентный цвет костюма подними в Hue vs Hue",
  },
  {
    id: "pet",
    keywords: ["кот", "кошк", "собак", "пёс", "щенок", "питом", "хомяк", "попуга"],
    hooks: [
      "Лапки / нос крупно, сразу звук: мурлыканье, скребок, звяканье адреса",
      "Пустая комната, потом в кадр врывается животное",
      "Миска, корм сыплется, глаза следят",
    ],
    scenes: [
      { shot: "деталь", action: "шерсть, усы, капли воды после питья" },
      { shot: "средний", action: "игра: рука и лапа, неудачный прыжок оставь" },
      { shot: "общий", action: "животное маленькое в большой квартире" },
      { shot: "крупный", action: "глаза, моргание, ухо дёрнулось на звук за кадром" },
      { shot: "деталь", action: "следы на подоконнике / шерсть на диване" },
      { shot: "средний", action: "сон в пятне солнца, дыхание живота" },
    ],
    peaks: [
      "Прыжок в камеру или внезапный спринт по коридору — не режь, пусть будет размытие",
      "Контакт: лоб в лоб / рука в шерсти, звук очень близко",
    ],
    endings: [
      "Животное уходит из кадра по своим делам, человек остаётся",
      "Темнота, светятся только глаза",
    ],
    transitions: [
      "склейка по повороту головы животного",
      "match cut двух прыжков",
      "звук игрушки/колокольчика как маркер смены плана",
    ],
    overlays: ["к себе", "ещё раз", "не мешай", "тут"],
    sounds: [
      "живые звуки питомца громче музыки; никакого cartoon boing",
      "тихий дом: холодильник, батарея, лапы по полу",
    ],
    techniques: [
      "уровень глаз животного, не сверху «с телефона над миской» весь ролик",
      "оставь промахи фокуса, если они случились на живом движении",
    ],
    grade: "мягкий, тёплый на шерсти, не перешарпень усы до пластиковых линий",
  },
  {
    id: "dance",
    keywords: ["танц", "хорео", "dance", "движен", "ритм", "балет", "хип-хоп", "k-pop"],
    hooks: [
      "Тишина, вдох, первый звук трека и сразу первая фаза движения",
      "Ноги в исходной позиции крупно, щелчок пальцев, старт",
      "Обрывок припева с середины — не с интро песни",
    ],
    scenes: [
      { shot: "общий", action: "полный рост, чтобы читалась хореография" },
      { shot: "деталь", action: "стопы, кисти, волосы — акцент на сложном месте" },
      { shot: "средний", action: "корпус и руки, камера едет вдоль линии танца" },
      { shot: "крупный", action: "лицо в припеве, не улыбка по заказу — концентрация" },
      { shot: "общий", action: "репетиция: ошибка, повтор, попали" },
      { shot: "деталь", action: "пот, ткань липнет, обувь скрипит" },
    ],
    peaks: [
      "Припев: камера на штативе, танцор двигается в кадре, без суеты склеек",
      "Hit: на сильную долю — смена плана или резкий зум 105%",
    ],
    endings: [
      "Последняя поза держится дольше музыки на 0.4 сек",
      "Выдох, плечи падают, свет не гаснет сразу",
    ],
    transitions: [
      "cut on hit: только на сильные доли, слабые не режь",
      "match cut одного и того же движения в другой одежде/локации",
      "whip в направлении корпуса",
    ],
    overlays: ["hit", "ещё раз", "держи", "сейчас"],
    sounds: [
      "трек в приоритете, шаги и дыхание чуть слышны в паузах",
      "не накладывай второй бит поверх песни",
    ],
    techniques: [
      "сначала выложи хорео одним дублем, потом врезай детали — не собирай танец из обрывков без базы",
      "speed ramp максимум на одном движении",
    ],
    grade: "контраст под свет площадки, не выравнивай все дубли в один плоский look",
  },
  {
    id: "product",
    keywords: ["обзор", "распак", "товар", "гаджет", "unbox", "продукт", "телефон", "наушник"],
    hooks: [
      "Коробка на столе, тишина, палец поддевает скотч",
      "Предмет уже в руках в деле — коробку покажи потом",
      "Проблема, которую он решает, за 1 секунду без слов",
    ],
    scenes: [
      { shot: "деталь", action: "фактура, швы, разъёмы, комплект сверху" },
      { shot: "средний", action: "включение, первый экран/звук/свет" },
      { shot: "крупный", action: "руки пользуются, не позируют" },
      { shot: "общий", action: "предмет в реальной среде (стол, улица, сумка)" },
      { shot: "деталь", action: "сравнение «было / стало» одним жестом" },
      { shot: "средний", action: "убрать в карман/сумку — проверка размера" },
    ],
    peaks: [
      "Главная фича в деле, не слайд текстом — действие",
      "Макро блик на корпусе, 1 сек hero",
    ],
    endings: [
      "Предмет лежит, рука уходит, офер/цена если нужно — коротко",
      "Коробка пустая, изделие уже живёт на столе",
    ],
    transitions: [
      "склейка по щелчку крышки / кнопки питания",
      "match cut размера: коробка → ладонь → карман",
      "jump-cut распаковки без whoosh на каждый слой бумаги",
    ],
    overlays: ["в деле", "вот это", "карман", "щелчок"],
    sounds: [
      "клики, пластик, ткань — честные; голос сухой, без эха «ютуб-подвала»",
      "музыка очень тихая или её нет до момента «в деле»",
    ],
    techniques: [
      "один свет, одна поверхность, не прыгай по 5 локациям для одного предмета",
      "текст только с цифрой/фактом, не «лучший гаджет 2026»",
    ],
    grade: "чистый, чуть холодный на металле, руки не серые, блики контролируй, не убивай",
  },
  {
    id: "nature",
    keywords: ["лес", "море", "гор", "природ", "рассвет", "закат", "поле", "озер", "поход", "пляж"],
    hooks: [
      "Ветер в микрофон 0.5 сек до картинки, потом пейзаж",
      "Деталь: кора, ракушка, камень — и только потом ширь",
      "Шаг на тропу, рюкзак, дыхание в подъём",
    ],
    scenes: [
      { shot: "общий", action: "масштаб: человек маленький или его нет" },
      { shot: "деталь", action: "вода, трава, насекомое, фактура земли" },
      { shot: "средний", action: "путь: ноги, тропа, рука по ветке" },
      { shot: "крупный", action: "лицо на ветру, без позирования в камеру" },
      { shot: "общий", action: "смена погоды или света — облако, волна" },
      { shot: "деталь", action: "костёр/термос/карта — след человека" },
    ],
    peaks: [
      "Вид, ради которого шли: держи 2–3 сек, не нарезай",
      "Свет меняется на глазах (солнце вышло) — это и есть эффект",
    ],
    endings: [
      "Обратная дорога, свет уже другой",
      "Палатка/берег, звук только природы, титр места и даты",
    ],
    transitions: [
      "L-cut ветра и воды между планами",
      "склейка по движению волны / качанию травы",
      "не ставь zoom transition «в туристическом стиле 2014»",
    ],
    overlays: ["дальше", "здесь", "тише", "ещё час пути"],
    sounds: [
      "полевые записи важнее плейлиста; музыку — тонкий пэд или ничего",
      "шаги и дыхание в подъём оставь, не чисти до студийности",
    ],
    techniques: [
      "чередуй ширь и макро, иначе «просто красиво» не держит",
      "стабилизация умеренная: трава и руки могут жить",
    ],
    grade: "зелень не кислотная, небо не выжженное, тёплый закат не уводи в оранжевый пластик",
  },
];

const form = document.getElementById("planner-form");
const formatField = document.getElementById("format");
const durationField = document.getElementById("duration");
const result = document.getElementById("result");
const planTitle = document.getElementById("plan-title");
const planMeta = document.getElementById("plan-meta");
const planSteps = document.getElementById("plan-steps");
const copyBtn = document.getElementById("copy-btn");
const exportBtn = document.getElementById("export-btn");
const rerollBtn = document.getElementById("reroll-btn");
const saveBtn = document.getElementById("save-btn");
const editBtn = document.getElementById("edit-btn");
const planEditor = document.getElementById("plan-editor");
const planActions = document.getElementById("plan-actions");
const editActions = document.getElementById("edit-actions");
const saveEditsBtn = document.getElementById("save-edits-btn");
const cancelEditsBtn = document.getElementById("cancel-edits-btn");
const projectsList = document.getElementById("projects-list");
const projectsEmpty = document.getElementById("projects-empty");

const STORAGE_KEY = "edit-planner-projects";
const CHECKLIST_KEY = "edit-planner-checklists";
const CHECKLIST_ITEMS = ["sources", "rough", "sound", "text", "color", "review"];

const checklistProgress = document.getElementById("checklist-progress");
const checklistBar = document.getElementById("checklist-bar");
const checklistInputs = Array.from(document.querySelectorAll("[data-check]"));

let applyingPreset = false;
const presetButtons = Array.from(document.querySelectorAll(".preset-btn"));

function setActivePreset(button) {
  presetButtons.forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
}

function clearActivePreset() {
  presetButtons.forEach((item) => {
    item.classList.remove("is-active");
  });
}

function applyPreset(button) {
  applyingPreset = true;
  formatField.value = button.dataset.format;
  durationField.value = button.dataset.duration;
  applyingPreset = false;
  setActivePreset(button);
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyPreset(button);
  });
});

formatField.addEventListener("change", () => {
  if (!applyingPreset) {
    clearActivePreset();
  }
});

durationField.addEventListener("input", () => {
  if (!applyingPreset) {
    clearActivePreset();
  }
});
durationField.addEventListener("change", () => {
  if (!applyingPreset) {
    clearActivePreset();
  }
});
let variant = 0;
let lastInputs = null;
let currentPlan = null;
let currentProjectId = null;

function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRng(seed) {
  let state = seed || 1;
  return function rng() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(list, rng) {
  return list[Math.floor(rng() * list.length)];
}

function pickMany(list, count, rng) {
  const copy = [...list];
  const chosen = [];
  while (copy.length && chosen.length < count) {
    const index = Math.floor(rng() * copy.length);
    chosen.push(copy.splice(index, 1)[0]);
  }
  return chosen;
}

function formatTime(seconds) {
  const total = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function splitDuration(duration, count) {
  const weights = Array.from({ length: count }, (_, index) => {
    if (index === 0) return 1.1;
    if (index === count - 1) return 1;
    if (index === Math.floor(count / 2)) return 1.4;
    return 1.2;
  });
  const totalWeight = weights.reduce((sum, value) => sum + value, 0);
  let cursor = 0;
  return weights.map((weight, index) => {
    const length =
      index === count - 1
        ? duration - cursor
        : Math.max(2, Math.round((duration * weight) / totalWeight));
    const start = cursor;
    const end = Math.min(duration, start + length);
    cursor = end;
    return { start, end };
  });
}

function scorePack(pack, theme) {
  return pack.keywords.reduce((score, keyword) => {
    return theme.includes(keyword) ? score + keyword.length : score;
  }, 0);
}

function buildCustomPack(theme) {
  return {
    id: "custom",
    hooks: [
      `Деталь, по которой сразу читается «${theme}», без лица и без текста`,
      `Звук «${theme}» раньше картинки на 0.4 сек, потом резкое появление кадра`,
      `Человек готовится к «${theme}» — руки, не общий план`,
    ],
    scenes: [
      { shot: "общий", action: `место, где живёт «${theme}»: один широкий кадр, зритель понимает пространство` },
      { shot: "деталь", action: `предмет-ключ темы «${theme}» в руках, фактура, следы использования` },
      { shot: "средний", action: `процесс: главное действие «${theme}» без объяснений` },
      { shot: "крупный", action: `реакция на лице, когда «${theme}» получается или ломается` },
      { shot: "деталь", action: `ошибка или пауза внутри «${theme}» — не вырезай, это правда` },
      { shot: "средний", action: `повтор жеста «${theme}» в другом свете или с другой стороны` },
    ],
    peaks: [
      `Кульминация «${theme}»: один длинный кадр 1.5–2 сек, без эффекта поверх`,
      `Контраст: то, каким «${theme}» было в начале, и каким стало сейчас — в двух соседних кадрах`,
    ],
    endings: [
      `Послевкусие: «${theme}» уже закончилось, в кадре только следствие (пустой стол, следы, тишина)`,
      `Человек уходит, камера остаётся с объектом «${theme}»`,
    ],
    transitions: [
      `склейка по жесту, который повторяется внутри «${theme}»`,
      `smash cut с тишины в самый громкий звук темы`,
      `match cut двух похожих форм в кадре «${theme}»`,
    ],
    overlays: [theme.split(" ")[0], "сейчас", "смотри", "ещё"],
    sounds: [
      `сначала натуральные шумы «${theme}», музыку впусти только после первого полного действия`,
      `один характерный звук темы как метроном склеек`,
    ],
    techniques: [
      `собери «${theme}» как историю: подготовка → действие → сбой → попадание`,
      `не закрывай тему универсальным zoom и whoosh — ищи склейку в самом действии`,
    ],
    grade: `грейд под палитру «${theme}»: сначала определи, тёплый это мир или холодный, и не смешивай оба сразу`,
  };
}

function choosePack(theme) {
  const lower = theme.toLowerCase();
  const ranked = themePacks
    .map((pack) => ({ pack, score: scorePack(pack, lower) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) {
    return { main: buildCustomPack(theme), extra: null, label: "разбор самой формулировки темы" };
  }

  const extra =
    ranked[1] && ranked[1].score >= ranked[0].score * 0.5 ? ranked[1].pack : null;

  return {
    main: ranked[0].pack,
    extra,
    label: extra ? `${ranked[0].pack.id} + ${extra.id}` : ranked[0].pack.id,
  };
}

function formatCutNote(format, rng) {
  if (format === "shorts") {
    return pick(
      [
        "Вертикаль: хук в первую секунду, текст в нижней трети, лица не перекрывать.",
        "Вертикаль: безопасные поля 80 px сверху и снизу под UI TikTok/Reels.",
      ],
      rng
    );
  }
  if (format === "youtube") {
    return pick(
      [
        "Горизонталь: после хука можно 1 фразу голосом, дальше только картинка и действие.",
        "Горизонталь: B-roll закрывает каждую паузу речи; talking head не дольше 6–8 сек подряд.",
      ],
      rng
    );
  }
  if (format === "music") {
    return pick(
      [
        "Музыкальный эдит: каждая склейка на долю. Если кадр не попадает в бит — подрежь, не растягивай трек.",
        "Музыкальный эдит: куплет = более длинные планы, припев = вдвое короче.",
      ],
      rng
    );
  }
  return pick(
    [
      "Тизер: не показывай финальную сцену целиком, только обломки деталей до последнего удара.",
      "Тизер: чёрные кадры 2–3 фрейма между вспышками, звук обрывай раньше картинки.",
    ],
    rng
  );
}

function sceneCount(duration) {
  if (duration < 20) return 4;
  if (duration < 45) return 5;
  if (duration < 90) return 6;
  return 7;
}

function buildStory(pack, extra, theme, rng, count) {
  const midFromMain = pickMany(pack.scenes, Math.max(2, count - 3), rng);
  const mid =
    extra && extra.scenes.length
      ? [...midFromMain.slice(0, -1), pick(extra.scenes, rng)]
      : midFromMain;

  const hook = { shot: "хук", action: pick(pack.hooks, rng) };
  const peak = { shot: "пик", action: pick(pack.peaks, rng) };
  const ending = { shot: "финал", action: pick(pack.endings, rng) };

  const story = [hook, ...mid];
  if (story.length < count - 1) {
    story.push(peak);
  } else {
    story.splice(Math.max(2, story.length - 1), 0, peak);
  }
  story.push(ending);
  return story.slice(0, count);
}

function describeScene(scene, index, total, transition, overlay, format) {
  const overlayNote =
    format === "shorts" || format === "teaser"
      ? ` Текст на экране: «${overlay}».`
      : overlay && index === 0
        ? ` Тихий нижний титр: «${overlay}».`
        : "";

  const transitionNote =
    index < total - 1 ? ` Переход дальше: ${transition}.` : "";

  return `${scene.shot}. ${scene.action}.${overlayNote}${transitionNote}`;
}

function buildPlan(format, theme, duration, planVariant) {
  const rng = createRng(
    hashString(`${theme}|${format}|${duration}|${planVariant}`) + planVariant * 9973
  );
  const chosen = choosePack(theme);
  const pack = chosen.main;
  const count = sceneCount(duration);
  const story = buildStory(pack, chosen.extra, theme, rng, count);
  const times = splitDuration(duration, story.length);
  const transitions = pickMany(pack.transitions, story.length, rng);
  const overlays = pickMany(pack.overlays, story.length, rng);
  const technique = pick(pack.techniques, rng);
  const sound = pick(pack.sounds, rng);
  const extraTransition = chosen.extra ? pick(chosen.extra.transitions, rng) : null;

  const steps = story.map((scene, index) => {
    const time = times[index];
    const overlay = overlays[index % overlays.length];
    const transition =
      extraTransition && index === Math.floor(story.length / 2)
        ? extraTransition
        : transitions[index % transitions.length];
    const body = describeScene(scene, index, story.length, transition, overlay, format);

    if (format === "teaser" && index < story.length - 1) {
      return `${formatTime(time.start)}–${formatTime(time.end)} Обломок: покажи только часть — ${body}`;
    }
    if (format === "music") {
      return `${formatTime(time.start)}–${formatTime(time.end)} На долю: ${body}`;
    }
    return `${formatTime(time.start)}–${formatTime(time.end)} ${body}`;
  });

  steps.push(`Приём: ${technique}`);
  steps.push(`Звук: ${sound}`);
  steps.push(`Цвет: ${pack.grade}`);
  steps.push(formatCutNote(format, rng));
  steps.push(
    `Экспорт: ${formatSpecs[format]}, H.264. Перед сдачей прогони ролик без звука — склейки «${theme}» должны читаться по картинке.`
  );

  return {
    title: `«${theme}» · ${duration} сек · вариант ${planVariant + 1}`,
    meta: `${formatNames[format]} · ${chosen.label}`,
    steps,
  };
}

function setEditMode(isEditing) {
  planSteps.hidden = isEditing;
  planEditor.hidden = !isEditing;
  planActions.hidden = isEditing;
  editActions.hidden = !isEditing;
}

function getStepsFromPlan() {
  if (currentPlan?.steps) {
    return currentPlan.steps;
  }

  return Array.from(planSteps.children).map((item) => item.textContent);
}

function parseEditedSteps(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*\d+[.)]\s*/, "").trim())
    .filter(Boolean);
}

function startEditing() {
  if (!currentPlan) {
    return;
  }

  planEditor.value = getStepsFromPlan()
    .map((step, index) => `${index + 1}. ${step}`)
    .join("\n");
  setEditMode(true);
  planEditor.focus();
}

function cancelEditing() {
  setEditMode(false);
}

function updateStoredProjectPlan() {
  if (!currentProjectId || !currentPlan) {
    return;
  }

  const projects = loadProjects();
  const index = projects.findIndex((item) => item.id === currentProjectId);
  if (index === -1) {
    return;
  }

  projects[index] = {
    ...projects[index],
    plan: currentPlan,
  };
  saveProjects(projects);
  renderProjects();
}

function saveEdits() {
  const steps = parseEditedSteps(planEditor.value);
  if (!steps.length || !currentPlan) {
    return;
  }

  renderPlan({
    ...currentPlan,
    steps,
  });
  updateStoredProjectPlan();
}

function emptyChecklist() {
  return {
    sources: false,
    rough: false,
    sound: false,
    text: false,
    color: false,
    review: false,
  };
}

function loadChecklists() {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    const data = raw ? JSON.parse(raw) : {};
    return data && typeof data === "object" ? data : {};
  } catch (error) {
    return {};
  }
}

function saveChecklists(checklists) {
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(checklists));
}

function getChecklistState() {
  const state = emptyChecklist();
  checklistInputs.forEach((input) => {
    state[input.dataset.check] = input.checked;
  });
  return state;
}

function applyChecklist(state) {
  const next = { ...emptyChecklist(), ...(state || {}) };
  checklistInputs.forEach((input) => {
    input.checked = Boolean(next[input.dataset.check]);
  });
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const done = checklistInputs.filter((input) => input.checked).length;
  const total = CHECKLIST_ITEMS.length;
  const percent = Math.round((done / total) * 100);
  checklistProgress.textContent = `${done} из ${total} готово · ${percent}%`;
  checklistBar.style.width = `${percent}%`;
}

function persistCurrentChecklist() {
  if (!currentProjectId) {
    return;
  }

  const checklists = loadChecklists();
  checklists[currentProjectId] = getChecklistState();
  saveChecklists(checklists);
}

function removeChecklist(id) {
  const checklists = loadChecklists();
  delete checklists[id];
  saveChecklists(checklists);
}

function renderPlan(plan) {
  currentPlan = plan;
  planTitle.textContent = plan.title;
  planMeta.textContent = plan.meta;
  planSteps.replaceChildren();

  plan.steps.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    planSteps.append(item);
  });

  result.hidden = false;
  setEditMode(false);
  copyBtn.textContent = "Скопировать план";
  saveBtn.textContent = "Сохранить проект";
}

function loadProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function renderProjects() {
  const projects = loadProjects();
  projectsList.replaceChildren();
  projectsEmpty.hidden = projects.length > 0;

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.className = "project-item";
    item.innerHTML = `
      <h3></h3>
      <p class="meta"></p>
      <div class="actions">
        <button type="button" class="secondary" data-action="open">Открыть</button>
        <button type="button" class="secondary" data-action="delete">Удалить</button>
      </div>
    `;
    item.querySelector("h3").textContent = project.name;
    item.querySelector(".meta").textContent =
      `${formatNames[project.format] || project.format} · ${project.theme} · ${project.duration} сек`;
    item.querySelector('[data-action="open"]').addEventListener("click", () => {
      openProject(project.id);
    });
    item.querySelector('[data-action="delete"]').addEventListener("click", () => {
      deleteProject(project.id);
    });
    projectsList.append(item);
  });
}

function openProject(id) {
  const project = loadProjects().find((item) => item.id === id);
  if (!project) {
    return;
  }

  document.getElementById("format").value = project.format;
  document.getElementById("theme").value = project.theme;
  document.getElementById("duration").value = project.duration;
  clearActivePreset();

  variant = 0;
  currentProjectId = project.id;
  lastInputs = {
    format: project.format,
    theme: project.theme,
    duration: Number(project.duration),
  };
  renderPlan(project.plan);
  applyChecklist(loadChecklists()[project.id]);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteProject(id) {
  const projects = loadProjects().filter((item) => item.id !== id);
  saveProjects(projects);
  removeChecklist(id);
  if (currentProjectId === id) {
    currentProjectId = null;
  }
  renderProjects();
}

function saveCurrentProject() {
  if (!currentPlan || !lastInputs) {
    return;
  }

  const project = {
    id: String(Date.now()),
    name: lastInputs.theme,
    format: lastInputs.format,
    theme: lastInputs.theme,
    duration: lastInputs.duration,
    plan: currentPlan,
  };
  const projects = loadProjects();
  projects.unshift(project);
  saveProjects(projects);
  currentProjectId = project.id;
  persistCurrentChecklist();
  renderProjects();
  saveBtn.textContent = "Сохранено";
}

function generateFromForm(nextVariant, scroll) {
  const format = document.getElementById("format").value;
  const theme = document.getElementById("theme").value.trim();
  const duration = Number(document.getElementById("duration").value);

  if (!theme || duration < 8) {
    return;
  }

  variant = nextVariant;
  currentProjectId = null;
  lastInputs = { format, theme, duration };
  renderPlan(buildPlan(format, theme, duration, variant));
  applyChecklist(emptyChecklist());

  if (scroll) {
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateFromForm(0, true);
});

rerollBtn.addEventListener("click", () => {
  if (!lastInputs) {
    return;
  }
  generateFromForm(variant + 1, false);
});

saveBtn.addEventListener("click", saveCurrentProject);
editBtn.addEventListener("click", startEditing);
saveEditsBtn.addEventListener("click", saveEdits);
cancelEditsBtn.addEventListener("click", cancelEditing);

checklistInputs.forEach((input) => {
  input.addEventListener("change", () => {
    updateChecklistProgress();
    persistCurrentChecklist();
  });
});

updateChecklistProgress();

renderProjects();

function getPlanText() {
  const name = lastInputs?.theme || planTitle.textContent || "Без названия";
  const formatLabel = lastInputs
    ? formatNames[lastInputs.format] || lastInputs.format
    : "";
  const header = [
    `Название проекта: ${name}`,
    lastInputs
      ? `Формат: ${formatLabel}`
      : null,
    lastInputs ? `Тема: ${lastInputs.theme}` : null,
    lastInputs ? `Длительность: ${lastInputs.duration} сек` : null,
    "",
    currentPlan?.title || planTitle.textContent,
    currentPlan?.meta || planMeta.textContent,
    "",
    ...getStepsFromPlan().map(
      (step, index) => `${index + 1}. ${step}`
    ),
  ];

  return header.filter((line) => line !== null).join("\n");
}

function safeFileName(name) {
  const cleaned = name.replace(/[<>:"/\\|?*]/g, " ").replace(/\s+/g, " ").trim();
  return cleaned || "edit-plan";
}

function exportPlan() {
  if (!currentPlan) {
    return;
  }

  const name = lastInputs?.theme || "edit-plan";
  const blob = new Blob([getPlanText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeFileName(name)}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

exportBtn.addEventListener("click", exportPlan);

copyBtn.addEventListener("click", async () => {
  const lines = [
    planTitle.textContent,
    planMeta.textContent,
    "",
    ...Array.from(planSteps.children).map(
      (item, index) => `${index + 1}. ${item.textContent}`
    ),
  ];

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    copyBtn.textContent = "Скопировано";
  } catch (error) {
    copyBtn.textContent = "Не удалось скопировать";
  }
});
