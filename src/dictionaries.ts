export const dictionaries = {
  en: {
    nav: {
      aroma: "Find Your Aroma",
      products: "The Collection",
      guide: "Brewing Guide",
      journal: "The Journal",
      showcase: "Works",
    },
    home: {
      heroTitle: "Single\nBush",
      heroSubtitle: "Phoenix Dancong · Wudong Mountain · Chaozhou",
      heroDesc: "The perfume you can drink. Single-origin oolong from the misty peaks of Phoenix Mountain.",
      btnAroma: "Find Your Aroma",
      btnExplore: "Explore Teas",
      scroll: "Scroll",
      philTag: "Our Philosophy",
      philTitle: "Slowness is a\nluxury",
      philDesc1: "In the mountains of Chaozhou, tea masters still practice the art of charcoal roasting — a process that cannot be rushed. Each batch of Single Bush is shaped by patience, altitude, and the quiet attention of hands that know.",
      philDesc2: "We don't sell tea. We share a moment of stillness in a world that has forgotten how to slow down.",
      wudong: "Wudong Mountain",
      originTag: "1,200m · Chaozhou, Guangdong",
      conceptTag: "The Concept",
      conceptTitle: "The perfume you\ncan drink",
      notes: [
        { label: "Top Note", desc: "Bright, floral burst — osmanthus, gardenia, citrus zest", time: "First steep" },
        { label: "Heart Note", desc: "Rich, layered — honeyed orchid, ripe stone fruit, roasted grain", time: "Mid steeps" },
        { label: "Base Note", desc: "Deep, grounding — mineral, amber, lingering sweetness on the palate", time: "Final steeps" }
      ],
      conceptQuote: '"Each infusion reveals a new layer — like a fine fragrance that evolves on your skin, Single Bush transforms in your cup."',
      colTag: "The Collection",
      colTitle: "Three expressions,\none mountain",
      viewAll: "View all →",
      discoverTag: "Discover",
      discoverTitle: "Which aroma\nare you?",
      discoverDesc: "Answer five questions about how you experience scent and taste. We'll match you with your perfect Phoenix Dancong.",
      limitedTag: "Limited Release",
      limitedTitle: "The Ancient\nReserve",
      limitedDesc: "Harvested from just three century-old tea trees at the summit of Wudong Peak. Annual yield under 5kg. When it's gone, it's gone.",
      limitedScarcity: "Annual yield < 5kg",
      limitedCta: "Reserve Your Allocation",
      limitedNote: "Spring harvest pre-order \u00b7 Opens April 2026",
    },
    footer: {
      location: "Wudong Mountain · Chaozhou, GD",
      rights: "© 2026 Single Bush. All rights reserved.",
      legal: "Privacy Policy · Terms of Service",
      credit: "Designed with patience."
    },
    guide: {
      tag: "Brewing Guide",
      title: "Five steps to\nstillness",
      desc: "Gongfu tea is not complicated. It is intentional. Here is the method passed down through generations of Chaozhou tea masters.",
      steps: [
        { num: "01", title: "Warm the vessel", desc: "Rinse your gaiwan (盖碗) with hot water. Pour it out. This wakes the clay and pre-heats the cup — a ritual of respect for the leaf.", detail: "Use a gaiwan of 100-120ml for the ideal leaf-to-water ratio." },
        { num: "02", title: "Awaken the tea", desc: "Add 7-8g of tea. Pour hot water in a circular motion and discard the first infusion within 3 seconds. This is the 'awakening' — it opens the leaf and releases the first whisper of aroma.", detail: "Don't skip this step. The first wash is essential for revealing the true character." },
        { num: "03", title: "The first true steep", desc: "Pour water at 93-98°C and steep for 10-15 seconds. Pour quickly — Dancong is forgiving but rewards precision. Watch the color deepen from pale gold to amber.", detail: "Pour into a fairness pitcher (公道杯) first, then distribute to small cups. This ensures even flavor." },
        { num: "04", title: "Evolution", desc: "Each subsequent steep adds 3-5 seconds. Watch the tea transform: bright florals in early steeps, honeyed depth in the middle, mineral grounding in the finale. A good Dancong will give you 8-15 infusions.", detail: "The best infusions are often in the middle — don't rush past them." },
        { num: "05", title: "Presence", desc: "Hold the cup close. Let the aroma meet you before the liquid. Small sips. Let it coat your palate. Notice how the finish changes — this is where Dancong reveals its soul.", detail: "There is no right way to drink tea. There is only attention." }
      ],
      refTitle: "Quick Reference",
      refItems: [
        { label: "Tea Amount", value: "7-8g" },
        { label: "Water Temp", value: "93-98°C" },
        { label: "Vessel", value: "100-120ml" },
        { label: "Infusions", value: "8-15" }
      ]
    },
    aroma: {
      tag: "5 Questions",
      title: "Which aroma\nare you?",
      desc: "There are no wrong answers — only the one that resonates with how you experience the world.",
      beginBtn: "Begin",
      qProgress: "Question {step} of 5",
      questions: [
        {
          question: "Close your eyes. You're in a garden. What do you smell first?",
          options: [
            { label: "Crisp rain on stone", value: "rain", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "Ripe fruit warming in the sun", value: "fruit", scores: { yashi: 1, milan: 3, laocong: 0 } },
            { label: "Ancient wood and moss", value: "forest", scores: { yashi: 0, milan: 1, laocong: 3 } }
          ]
        },
        {
          question: "You walk into a room. What draws you in?",
          options: [
            { label: "Something unexpected and bold", value: "bold", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "Warmth and gentle sweetness", value: "warm", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "Depth and quiet mystery", value: "deep", scores: { yashi: 0, milan: 1, laocong: 3 } }
          ]
        },
        {
          question: "It's a Sunday morning. What's your pace?",
          options: [
            { label: "Electric — I need stimulation", value: "electric", scores: { yashi: 3, milan: 1, laocong: 0 } },
            { label: "Slow — I'm savoring every moment", value: "slow", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "Still — I'm meditating or reading", value: "still", scores: { yashi: 0, milan: 0, laocong: 3 } }
          ]
        },
        {
          question: "Which perfume note speaks to you?",
          options: [
            { label: "White florals — jasmine, gardenia", value: "floral", scores: { yashi: 3, milan: 1, laocong: 0 } },
            { label: "Gourmand — honey, vanilla, orchid", value: "gourmand", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "Woody — oud, amber, vetiver", value: "woody", scores: { yashi: 1, milan: 0, laocong: 3 } }
          ]
        },
        {
          question: "How do you like your stories?",
          options: [
            { label: "Provocative — challenge my assumptions", value: "provocative", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "Comforting — like a warm blanket", value: "comforting", scores: { yashi: 0, milan: 3, laocong: 0 } },
            { label: "Epic — something ancient and legendary", value: "epic", scores: { yashi: 0, milan: 0, laocong: 3 } }
          ]
        }
      ],
      resultTag: "Your Match",
      exploreBtn: "Explore",
      retakeBtn: "Retake Quiz",
      results: {
        yashi: {
          name: "Ya Shi Xiang",
          subtitle: "The Provocative One",
          desc: "You're drawn to the unexpected — things that challenge convention and reward curiosity. Ya Shi Xiang is your match: a tea with a humble name and an extraordinary presence. Bold floral intensity, electrifying aroma, and a finish that makes you pause.",
          traits: ["Bold", "Curious", "Unconventional"]
        },
        milan: {
          name: "Mi Lan Xiang",
          subtitle: "The Beloved One",
          desc: "You gravitate toward warmth, sweetness, and the things that make a house feel like home. Mi Lan Xiang — Honey Orchid — wraps you in golden nectar and gentle floral notes. It's the tea equivalent of a perfect Sunday morning.",
          traits: ["Warm", "Nurturing", "Harmonious"]
        },
        laocong: {
          name: "Lao Cong",
          subtitle: "The Rare One",
          desc: "You seek depth over surface, substance over spectacle. Lao Cong — from century-old bushes at Wudong's peak — is the rarest expression in our collection. Mineral complexity, extraordinary aging potential, and a finish that lingers for minutes.",
          traits: ["Deep", "Contemplative", "Rarefied"]
        }
      }
    },
    products: {
      tag: "The Collection",
      title: "Three expressions,\none mountain",
      desc: "Each tea is a portrait of its terroir — the soil, the altitude, the mist, and the hands that shaped it.",
      metaOrigin: "Origin",
      metaProcess: "Process",
      metaInfusions: "Infusions",
      aromaProfile: "Aroma Profile",
      tastingNotes: "Tasting Notes",
      recommended: "Recommended:",
      teas: [
        {
          id: "yashi",
          name: "Ya Shi Xiang",
          subtitle: "Phoenix Oolong · Single Bush",
          tagline: "The provocative one",
          origin: "Wudong Mountain, 1,100m",
          process: "Traditional charcoal roast",
          aroma: ["Gardenia", "Lychee", "Almond blossom"],
          taste: ["Intensely floral", "Long sweet finish", "Mineral undertone"],
          story: "The name is a provocation. The tea is a revelation. Despite its humble moniker — literally 'Duck Shit Aroma' in the local Chaozhou dialect — Ya Shi Xiang is the most captivating expression of Phoenix Dancong. Legend says the tea bushes grew in soil so rich it earned the earthy nickname, but the cup tells a completely different story: an explosive, intoxicating bouquet of floral and fruity notes that challenges everything you thought you knew about tea.",
          steep: "8-10 infusions",
          temp: "95°C",
          desc: "Despite its humble name — literally 'Duck Shit Aroma' — this is the most captivating Phoenix Dancong. A stunning burst of floral and fruity intensity that challenges everything you thought you knew about tea.",
        },
        {
          id: "milan",
          name: "Mi Lan Xiang",
          subtitle: "Phoenix Oolong · Single Bush",
          tagline: "The beloved one",
          origin: "Wudong Mountain, 900m",
          process: "Medium charcoal roast",
          aroma: ["Honey", "Orchid", "Ripe apricot"],
          taste: ["Sweet and round", "Nectar-like", "Gentle warmth"],
          story: "Honey Orchid is where most people fall in love with Dancong. It's the gateway — sweet, accessible, and endlessly comforting. Like stepping into a warm kitchen where someone is making honey toast, Mi Lan Xiang wraps you in golden sweetness with every sip. The aroma fills the room before the cup even reaches your lips.",
          steep: "7-9 infusions",
          temp: "93°C",
          desc: "Honey Orchid — the gateway to Dancong. Sweet, accessible, and endlessly comforting. Like a warm embrace in liquid form.",
        },
        {
          id: "laocong",
          name: "Lao Cong",
          subtitle: "Ancient Bush · Ultra Limited",
          tagline: "The rare one",
          origin: "Wudong Peak, 1,200m",
          process: "Deep charcoal roast · Aged",
          aroma: ["Amber", "Dried fruit", "Mountain forest"],
          taste: ["Extraordinary depth", "Mineral complexity", "Minutes-long finish"],
          story: "From century-old tea bushes clinging to the volcanic rock of Wudong's summit. These ancient plants produce leaves of extraordinary concentration — each gram carries decades of accumulated character. Deep charcoal roasting transforms the raw material into something that defies easy description: part tea, part meditation, part time capsule from the mountain.",
          steep: "12-15 infusions",
          temp: "98°C",
          desc: "From century-old tea bushes at the peak of Wudong Mountain. Mineral depth, extraordinary complexity, and a finish that lasts for minutes. Our crown jewel.",
        }
      ]
    },
    journal: {
      hero: {
        tag: "The Journal",
        title: "Patience is a\nMountain",
        desc: "Notes on terroir, craftsmanship, and the silent art of Chaozhou tea.",
      },
      terroir: {
        title: "The Terroir",
        subtitle: "Roots in Volcanic Rock",
        desc1: "Wudong Mountain is not just an origin; it is an active participant in the flavor of every leaf. At 1,200 meters, clouds physically walk through the ancient tea gardens. The soil here is not dirt—it is weathered, mineral-rich volcanic rock.",
        desc2: "This harsh environment forces the tea tree roots deep into the fissures of the stone. The result is 'Yan Yun' (岩韵) — a distinct mineral tension that grounds the high-flying floral aromatics of a true Phoenix Dancong.",
        data: [
          { label: "Altitude", value: "1,200m" },
          { label: "Climate", value: "Subtropical Monsoon" },
          { label: "Soil", value: "Volcanic Rock / Yellow-Red Earth" }
        ]
      },
      craft: {
        title: "The Craft",
        subtitle: "Trial by Fire",
        desc1: "A machine can dry a leaf in minutes, but it cannot teach it how to age. In Phoenix Mountain, true Dancong is subjected to the ancient art of charcoal roasting (炭焙)—a slow, unforgiving process.",
        desc2: "Over glowing lychee-wood embers, the tea master controls the temperature entirely by feel. Too hot, and the delicate floral notes burn away. Too cool, and the moisture remains, spoiling the tea within months. This delicate dance of fire and ash takes weeks, sometimes months, requiring sleepless nights and absolute presence. It is the ultimate expression of our philosophy: slowness is a luxury.",
      },
      academy: {
        title: "The Vessel",
        subtitle: "Clay and Water",
        desc1: "To brew Dancong in glass is to rob it of its soul. For hundreds of years, Chaozhou tea masters have relied on two specific tools: the porous red clay stove (红泥小火炉) and the dense, unglazed Yixing or Chaozhou clay teapot.",
        desc2: "We prefer the gaiwan (盖碗) for its honesty—it absorbs nothing and hides nothing. But to truly round out the sharp edges of a young mountain tea, a well-seasoned clay pot will soften the water, elevating the texture from liquid to velvet.",
        quote: "Boil the water until it resembles 'crab eyes'. Wait for silence."
      },
      timeline: {
        tag: "The Process",
        title: "Thirty steps,\none philosophy",
        steps: [
          { zhName: "\u91c7\u9752", title: "Plucking", desc: "Before dawn, at the peak of Wudong Mountain. Only the top bud and two leaves, only by hand.", detail: "5:00 AM \u00b7 1,200m altitude" },
          { zhName: "\u6652\u9752", title: "Sun Withering", desc: "Spread thinly on bamboo trays under the mountain sun. The leaves lose moisture, soften, and begin their transformation.", detail: "Duration: 15\u201330 min" },
          { zhName: "\u505a\u9752", title: "Bruising", desc: "The master tosses and tumbles the leaves by hand, bruising the edges to trigger oxidation. This is where the aroma is born.", detail: "4\u20135 times \u00b7 8\u201312 hours" },
          { zhName: "\u6740\u9752", title: "Kill-Green", desc: "A blast of high heat in a hand-operated iron wok arrests oxidation at exactly the right moment.", detail: "280\u00b0C \u00b7 Wok-fired" },
          { zhName: "\u63c9\u634b", title: "Rolling", desc: "The warm leaves are rolled into tight, twisted strips, concentrating flavor for future steeping.", detail: "Hand-rolled \u00b7 15\u201320 min" },
          { zhName: "\u521d\u70d8", title: "First Drying", desc: "A gentle initial drying to remove surface moisture and stabilize the leaf before the final trial.", detail: "Low heat \u00b7 Bamboo baskets" },
          { zhName: "\u70ad\u7119", title: "Charcoal Roasting", desc: "Over glowing lychee-wood charcoal, the master controls temperature entirely by feel. This slow fire takes weeks.", detail: "Lychee wood \u00b7 4\u20136 weeks" },
          { zhName: "\u9648\u5316", title: "Aging", desc: "The finished tea rests in sealed clay vessels. Harsh edges soften, flavors deepen into 'chen yun' \u2014 the resonance of time.", detail: "3\u201312 months \u00b7 Clay vessels" }
        ]
      }
    },
    cart: {
      title: "Your Selection",
      empty: "Your cart is empty",
      emptyHint: "Explore our collection to find your perfect tea.",
      total: "Total",
      checkout: "Proceed to Checkout",
      clear: "Clear Cart",
    },
    productDetail: {
      addToCart: "Add to Cart",
      added: "Added ✓",
      alsoLike: "You May Also Enjoy",
      viewDetail: "View Details",
      priceLabel: "Price",
      weightLabel: "Net Weight",
    },
  },
  zh: {
    nav: {
      aroma: "寻找你的香气",
      products: "典藏系列",
      guide: "冲泡指南",
      journal: "品牌志",
      showcase: "作品空间",
    },
    home: {
      heroTitle: "隐丛\n单丛",
      heroSubtitle: "凤凰单丛 · 乌岽山 · 潮州",
      heroDesc: "可以喝的香水。来自凤凰山云雾缭绕之巅的单一产地乌龙茶。",
      btnAroma: "寻找你的香气",
      btnExplore: "探索茶品",
      scroll: "向下滑动",
      philTag: "品牌哲学",
      philTitle: "慢，是最大的奢侈",
      philDesc1: "在潮州深山里，制茶师们依然坚持传统的炭火慢焙——这是一门无法催熟的艺术。每一批“隐丛”的诞生，都由时间、海拔和懂得克制的双手来塑造。",
      philDesc2: "我们贩卖的不仅仅是茶，而是向这个已经忘记如何慢下来的世界，分享片刻的宁静。",
      wudong: "乌岽山",
      originTag: "海拔1200米 · 广东潮州",
      conceptTag: "香水概念",
      conceptTitle: "可以喝的香水",
      notes: [
        { label: "前调", desc: "明亮的花丛爆裂感——桂花、栀子、柑橘皮的清新", time: "首泡" },
        { label: "中调", desc: "丰富且具有层次——蜜韵兰香、熟透的核果、烘焙谷物的温暖", time: "中段" },
        { label: "尾调", desc: "深沉而克制——岩石的矿物感、琥珀、口腔中持久的回甘", time: "尾水" }
      ],
      conceptQuote: '“每一泡都如同剥开一层新的面纱——就像高级香水在肌肤上的氧化与演变，‘隐丛’也在你的杯中变幻无穷。”',
      colTag: "典藏系列",
      colTitle: "一山，三味",
      viewAll: "查看全部 →",
      discoverTag: "探索",
      discoverTitle: "你是哪一种香气？",
      discoverDesc: "回答五个关于你如何感知气味与味觉的问题。我们将为你匹配最适合你的凤凰单丛。",
      limitedTag: "限量发售",
      limitedTitle: "古树\n典藏",
      limitedDesc: "仅采自乌岽山巅三棵百年古茶树。年产量不足5公斤。售罄即止，不再复刻。",
      limitedScarcity: "年产量 < 5kg",
      limitedCta: "预约品鉴",
      limitedNote: "春茶预售 · 2026年4月开启",
    },
    footer: {
      location: "广东潮州 · 乌岽山",
      rights: "© 2026 隐丛 Single Bush. 保留所有权利。",
      legal: "隐私政策 · 服务条款",
      credit: "用心设计，以慢打磨"
    },
    guide: {
      tag: "冲泡指南",
      title: "五步工夫\n回归宁静",
      desc: "工夫茶并不复杂，它需要的是全然的专注。这里是潮州老茶客世代相传的冲泡心法。",
      steps: [
        { num: "01", title: "温杯洁具", desc: "用沸水温烫盖碗并倒出。这不仅是为了唤醒陶土、预热茶器，更是对即将投下的一片片茶叶的尊重仪式。", detail: "建议使用 100-120ml 的盖碗，能达到最理想的茶水比。" },
        { num: "02", title: "润茶醒香", desc: "投入 7-8g 散茶。沸水高冲，沿杯壁快速注水并在 3 秒内倒出。这是“醒茶”——它让茶叶舒展，唤醒第一缕隐秘的香气。", detail: "切勿跳过此步。第一道洗茶是释放单丛真实性格的关键所在。" },
        { num: "03", title: "初识真味", desc: "使用 93-98°C 的水温，浸泡 10-15 秒。出汤要快且尽——单丛虽然包容，但精确的秒数能换来最饱满的回馈。观察茶汤从浅金逐渐向琥珀色加深。", detail: "务必先将茶汤倒入公道杯，再分给小品杯。这确保了每一杯风味的均匀。" },
        { num: "04", title: "风味演变", desc: "之后的每一泡递增 3-5 秒。感受茶汤的变幻：前几泡明亮的花香，中段蜜韵的深度，直至尾水显现出的岩骨矿物感。一款好的单丛可以冲泡 8-15 次。", detail: "最迷人的往往是在中段——请不要急于求成。" },
        { num: "05", title: "专注当下", desc: "把茶杯端近。在茶水触及嘴唇前，先让香气与你相遇。小口啜饮。让茶汤包裹整个口腔。留意饮后持久的回甘——这才是单丛真正的灵魂所在。", detail: "喝茶没有绝对标准的方法，只有专注的当下体验。" }
      ],
      refTitle: "快速参数参考",
      refItems: [
        { label: "投茶量", value: "7-8 克" },
        { label: "水温", value: "93-98°C" },
        { label: "盖碗容量", value: "100-120 毫升" },
        { label: "冲泡次数", value: "8-15 次" }
      ]
    },
    aroma: {
      tag: "5 个问题",
      title: "寻找你的香气",
      desc: "这里没有标准答案——只有哪一种气息能与你看待世界的方式产生共鸣。",
      beginBtn: "点击开始",
      qProgress: "第 {step} 题，共 5 题",
      questions: [
        {
          question: "闭上眼睛，你在一座庭院里。你首先闻到了什么？",
          options: [
            { label: "雨水打在青石板上的清冷", value: "rain", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "阳光下散发着温热的熟透果香", value: "fruit", scores: { yashi: 1, milan: 3, laocong: 0 } },
            { label: "百年古木与苔藓的沉香", value: "forest", scores: { yashi: 0, milan: 1, laocong: 3 } }
          ]
        },
        {
          question: "当你走进一个陌生房间时，什么特质最吸引你？",
          options: [
            { label: "一些出人意料且张扬的亮点", value: "bold", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "温暖且令人亲近的柔和感", value: "warm", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "克制、深邃并带有神秘感", value: "deep", scores: { yashi: 0, milan: 1, laocong: 3 } }
          ]
        },
        {
          question: "这是一个慵懒的周日早晨，你的节奏是怎样的？",
          options: [
            { label: "充满活性——我需要外界的刺激", value: "electric", scores: { yashi: 3, milan: 1, laocong: 0 } },
            { label: "缓慢——我在享受当下的每一刻", value: "slow", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "静止——我在冥想或安静地阅读", value: "still", scores: { yashi: 0, milan: 0, laocong: 3 } }
          ]
        },
        {
          question: "以下哪一种香水香调最能代表你的风格？",
          options: [
            { label: "明亮白花——茉莉、栀子、橙花", value: "floral", scores: { yashi: 3, milan: 1, laocong: 0 } },
            { label: "美食调——蜂蜜、香草、焦糖", value: "gourmand", scores: { yashi: 0, milan: 3, laocong: 1 } },
            { label: "木质调——沉香、琥珀、香根草", value: "woody", scores: { yashi: 1, milan: 0, laocong: 3 } }
          ]
        },
        {
          question: "你更偏爱哪一种叙事风格的故事？",
          options: [
            { label: "挑衅性——挑战我固有的认知碎片", value: "provocative", scores: { yashi: 3, milan: 0, laocong: 1 } },
            { label: "治愈系——像一张在寒夜里裹住我的毛毯", value: "comforting", scores: { yashi: 0, milan: 3, laocong: 0 } },
            { label: "史诗感——古老、宏大、需要时间去消化", value: "epic", scores: { yashi: 0, milan: 0, laocong: 3 } }
          ]
        }
      ],
      resultTag: "你的专属匹配",
      exploreBtn: "探索",
      retakeBtn: "重新测试",
      results: {
        yashi: {
          name: "鸭屎香 (Ya Shi Xiang)",
          subtitle: "破界者 (The Provocative One)",
          desc: "你被那些意料之外的事物深深吸引——你偏爱打破常规，对世界充满了旺盛的好奇心。鸭屎香正是你的灵魂伴侣：它有着最接地气的名字，却拥有最令人惊艳的霸气花香。极具爆发力的香气和令人不禁停顿的浓烈回甘，注定不凡。",
          traits: ["张扬", "好奇", "打破常规"]
        },
        milan: {
          name: "蜜兰香 (Mi Lan Xiang)",
          subtitle: "治愈者 (The Beloved One)",
          desc: "你是不自觉散发温暖的人，追求生活中那些令你感到安定的事物。蜜兰香——如同它名字中带有蜜韵的兰花——用金黄色的茶汤和柔和的花果香将你包裹。喝下它，就像是在一个完美无缺的周日清晨里舒展身心。",
          traits: ["温暖", "治愈", "和谐"]
        },
        laocong: {
          name: "高山老丛 (Lao Cong)",
          subtitle: "隐士 (The Rare One)",
          desc: "你追求水面之下的深度，看重事物的本质而非表象的浮华。高山老丛——采自乌岽山顶树龄百年的古茶树——是我们典藏系列中最稀有的存在。难以言喻的深沉矿物岩韵，极致的耐泡度，以及能在口腔中停留数分钟之久的旷野回味。",
          traits: ["深邃", "沉思", "稀有"]
        }
      }
    },
    products: {
      tag: "典藏系列",
      title: "一山，三味",
      desc: "每一款茶都是当地风土的缩影——土壤、海拔、云雾，以及制茶师倾注的心血。",
      metaOrigin: "产地",
      metaProcess: "工艺",
      metaInfusions: "耐泡度",
      aromaProfile: "香气特征",
      tastingNotes: "风味品鉴",
      recommended: "建议水温：",
      teas: [
        {
          id: "yashi",
          name: "鸭屎香",
          subtitle: "凤凰单丛 · 单株",
          tagline: "破界者",
          origin: "乌岽山, 1,100米",
          process: "传统炭焙",
          aroma: ["栀子花", "荔枝", "杏仁花"],
          taste: ["高扬花香", "持久蜜甜", "矿物岩韵"],
          story: "名字是挑衅，茶汤是启示。尽管在潮州方言中被俗称为“鸭屎香”，但它却是凤凰单丛中最迷人的存在。传说茶农为了防止好茶被偷，故意用这粗鄙的名字来掩饰。然而杯中的风味却讲述着截然不同的故事：极具爆发力和令人陶醉的花果香气，挑战着你对茶的所有固有认知。",
          steep: "8-10 泡",
          temp: "95°C",
          desc: "名字是挑衅，茶汤是启示。极具爆发力和令人陶醉的花果香气，挑战着你对茶的所有固有认知。",
        },
        {
          id: "milan",
          name: "蜜兰香",
          subtitle: "凤凰单丛 · 单株",
          tagline: "治愈者",
          origin: "乌岽山, 900米",
          process: "中度炭焙",
          aroma: ["蜂蜜", "兰花", "熟透杏子"],
          taste: ["甘甜圆润", "醇厚如蜜", "柔和温暖"],
          story: "蜜兰香是大多数人爱上单丛的开始。它是最好的入门之选——甘甜、亲切、带来无尽的抚慰。就像走进一间有人正在烘烤蜂蜜吐司的温暖厨房，蜜兰香的每一口都在用金黄色的甜蜜将你包裹。茶杯还未触碰到嘴唇，香气便已充满整个房间。",
          steep: "7-9 泡",
          temp: "93°C",
          desc: "蜜兰香是大多数人爱上单丛的开始。甘甜、亲切、带来无尽的抚慰，如同温暖的拥抱化作了金黄色的茶汤。",
        },
        {
          id: "laocong",
          name: "高山老丛",
          subtitle: "古茶树 · 极度稀有",
          tagline: "隐士",
          origin: "乌岽山顶, 1,200米",
          process: "深度炭焙 · 陈化",
          aroma: ["琥珀", "果干", "高山森林"],
          taste: ["极致深度", "岩韵复杂", "数分钟回甘"],
          story: "采自扎根在乌岽山顶火山岩上的百年古茶树。这些古老的植物孕育出极度浓缩的叶片——每一克都承载着数十年的风土沉淀。深度的炭焙工艺将这些原料转化为难以用简单言语形容的液体：它是茶，是冥想，是来自高山的时间胶囊。",
          steep: "12-15 泡",
          temp: "98°C",
          desc: "采自扎根在乌岽山顶的百年古茶树。令人惊叹的矿物深度，极致复杂的岩韵结构，以及长达数分钟的旷野回甘。我们的瑰宝。",
        }
      ]
    },
    journal: {
      hero: {
        tag: "品牌志",
        title: "耐心，\n是一座山",
        desc: "关于风土、工艺与潮州单丛茶无声的艺术。",
      },
      terroir: {
        title: "风土印记",
        subtitle: "扎根于火山岩",
        desc1: "乌岽山不仅仅是一个地名，它真实地参与并塑造了每一片茶叶的风味。在海拔1200米的绝顶之上，云雾化穿行于古老的茶园间。这里的茶树并不生长在寻常的泥土里，而是扎根于风化的、富含矿物质的火山岩石之中。",
        desc2: "这种严苛的高山环境迫使茶树的根系深深探入岩石的裂缝中汲取养分。由此造就了单丛茶独有的“岩韵”——一种独特的矿物张力，它将凤凰单丛高扬轻灵的花香，稳稳地扎入深沉的大地。",
        data: [
          { label: "海拔高度", value: "1,200米" },
          { label: "气候条件", value: "亚热带季风气候" },
          { label: "土壤特质", value: "火山岩 / 黄壤红土" }
        ]
      },
      craft: {
        title: "匠造工艺",
        subtitle: "浴火重生",
        desc1: "机器可以在几分钟内烘干一片茶叶，但它无法教导茶叶如何随着时间陈化。在凤凰山，真正的单丛茶必须经历古老而严苛的炭焙工序——这是一个缓慢且毫无捷径可走的过程。",
        desc2: "在暗红的荔枝木炭火之上，制茶师完全凭借感知来掌控温度。火候稍高，娇贵的花香便被焚烧殆尽；温度偏低，茶叶内部的水分无法褪尽，数月内便会变质。这场火与灰的微妙较量往往需要持续数周甚至数月，伴随着无数个不眠之夜和极致的专注。这是对我们理念的最好诠释：慢，是最大的奢侈。",
      },
      academy: {
        title: "器物与仪式",
        subtitle: "泥土与泉水",
        desc1: "用玻璃杯冲泡单丛，无异于扼杀它的灵魂。数百年来，潮州老茶客始终笃信两件器物：透气的红泥小火炉，以及密度极高、不施釉的宜兴紫砂或潮州朱泥壶。",
        desc2: "我们偏爱盖碗的“诚实”——它不吸收任何香气，也不掩饰任何瑕疵。但如果想要磨平一款新茶的锋芒，一把养护得当的紫砂壶能将水质变得极其柔软，使茶汤从单纯的液体升华为如丝绒般的触感。",
        quote: "候汤如蟹眼，静待无声。"
      },
      timeline: {
        tag: "制作工序",
        title: "三十道工序，\n一种哲学",
        steps: [
          { zhName: "采青", title: "采青", desc: "拂晓之前，在乌岽山的绝顶之上。只取一芽二叶，只凭双手。晨雾仍缠绕在枝头。", detail: "凌晨5:00 · 海拔1,200米" },
          { zhName: "晒青", title: "晒青", desc: "薄摊在竹筛上，沐浴高山日光。叶片逐渐失水变软，开始它们的蜕变之旅。", detail: "时长：15-30分钟" },
          { zhName: "做青", title: "做青", desc: "最关键也最神秘的一步。制茶师以双手反复碰撞叶片边缘，激发氧化反应。香气在此诞生。", detail: "反复4-5次 · 持续8-12小时" },
          { zhName: "杀青", title: "杀青", desc: "在手动铁锅中以猛烈高温瞬间终止氧化。数秒的误判便能毁掉整批茶叶。", detail: "280°C · 手工翻炒" },
          { zhName: "揉捻", title: "揉捻", desc: "趁热将茶叶揉成紧实的卷曲条索，为未来的冲泡浓缩风味。", detail: "手工揉制 · 15-20分钟" },
          { zhName: "初烘", title: "初烘", desc: "轻柔地初步干燥，去除表面水分，稳定叶片状态。茶叶在此短暂休憩。", detail: "低温 · 竹笼" },
          { zhName: "炭焙", title: "炭焙", desc: "凤凰单丛的灵魂所在。在荔枝木炭火的微光之上，制茶师仅凭触觉控制温度。历时数周。", detail: "荔枝木炭 · 4-6周" },
          { zhName: "陈化", title: "陈化", desc: "成品茶封存于陶罐中静静等待。锋利的棱角被抚平，风味层层深化，生出行家所称的'陈韵'。", detail: "3-12个月 · 陶罐封存" }
        ]
      }
    },
    cart: {
      title: "您的臻选",
      empty: "购物车尚空",
      emptyHint: "探索我们的典藏系列，寻觅属于您的那杯茶。",
      total: "合计",
      checkout: "前往结算",
      clear: "清空购物车",
    },
    productDetail: {
      addToCart: "加入购物车",
      added: "已添加 ✓",
      alsoLike: "您可能也会喜欢",
      viewDetail: "了解详情",
      priceLabel: "价格",
      weightLabel: "净含量",
    },
  }
};

export type Lang = "en" | "zh";
