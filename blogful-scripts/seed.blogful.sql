BEGIN;

INSERT INTO blogful_articles (title,date_published,content)
VALUES
    ('Fish trucks',now() - '29 days'::INTERVAL, 'fish and trucks, what more do you want'),
    ('Aston Villa',now() - '28 days'::INTERVAL, 'the rise and fall of Aston Villa'),
    ('Washington Football Team',now() - '35 days'::INTERVAL,'From 1932 to 2020'),
    ('Felix Felices',now() - '45 days'::INTERVAL, 'Lucky or Coinicidental'),
    ('Rocket League',now() - '15 days'::INTERVAL, 'What is the Ceiling?'),
    ('Minecraft',now() - '510 days'::INTERVAL, 'Greatest Game of All Time?'),
    ('Prius', now() - '90 days'::INTERVAL,'Safest Hybrid?'),
    ('Riot or Protest',now() - '110 days'::INTERVAL,'The Days Since'),
    ('Ultimate Frisbee Today',now() - '201 days'::INTERVAL,'How the game is changing'),
    ('Corona Virus Evolution',now() - '54 days'::INTERVAL,'How are things changing around us'),
    ('Riding the Beat',now()- '109 days'::INTERVAL,'How do you serve your community'),
    ('Family Values',now() - '121 days'::INTERVAL,'What is important to you'),
    ('NC State Campus',now() - '21 days'::INTERVAL,'Visit the Wolfpack today!'),
    ('ACC Versus SEC',now() - '375 days'::INTERVAL,'Which one is better, you decide'),
    ('Mandolorian: Snacks or Baby Yoda',now() - '365 days'::INTERVAL,'What is the name of the child?'),
    ('Dark Magic',now() - '12 days'::INTERVAL,'What makes magic dark?'),
    ('Philosophy of Everything',now() - '24 days'::INTERVAL,'Question everything you can'),
    ('Craft Beer',now() - '5 days'::INTERVAL,'IS there any better craft?'),
    ('Autumn is Upon Us',now() - '7 days'::INTERVAL,'Autumn is finally here, are you happy?'),
    ('Among US',now() - '2 days'::INTERVAL,'Your Strategy source for getting away with murder');

COMMIT;