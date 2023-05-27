BEGIN;

INSERT INTO products (title, image, price) 
VALUES
    ('Chroma Fantasia','https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/347251588_1090372561921191_96724510624296027_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=UYOE8y9yei8AX8kS6z0&_nc_ht=scontent.fgza2-3.fna&oh=00_AfAtwFY5ZzGAEJTdOyPn0d7BzfGlNTCD1BNp4WHjnVp4zg&oe=6470ED74',50),
    ('Synthetic Symphony','https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/347281881_261150726450175_2598110336866284168_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=UuCNCF7Rdd0AX-9HcWd&_nc_ht=scontent.fgza2-3.fna&oh=00_AfCTXVtg5P0YPzYJulHY33C3gUdb7tceqLCyGmMDF_rJjA&oe=6471CF68',10),
    ('Abstract Chronicles','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347385158_1396921244584003_4818776967184256898_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=3pAq0M-4fyYAX8ktdS2&_nc_ht=scontent.fgza2-1.fna&oh=00_AfCXxYb3Mwf6hZhDGB2x_uTGPhnhkyR8LjJcIbZIlFrATQ&oe=6470B99B',30),
    ('Neo-Genesis','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347580634_774419950883914_8442041735750562151_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ASQ1CvXbyKcAX-xtTfm&_nc_ht=scontent.fgza2-1.fna&oh=00_AfD6dDmTW1FmGALp7jqwQ4oYPoxyCkj7_cIgTh0DEqsxtA&oe=64712D22',40),
    ('Technicolor Dreams','https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/347235972_552789663717121_836281371119930872_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=o_raJabR6ygAX_OWPOI&_nc_ht=scontent.fgza2-3.fna&oh=00_AfDIzIykCrUCk0Y_LaL8zmr6sCWFOIz9Z6jGg0iB5itnyg&oe=6471E150',50),
    ('Enchanted Realms','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347257442_765249635294912_9032224204514174303_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DHVkpAynXQ4AX_3t_za&_nc_ht=scontent.fgza2-1.fna&oh=00_AfCV-8M-5odgr27OwDkRqHx7rugX9soroQjVkXk1PxNHOA&oe=6471F912',60),
    ('Digital Essence','https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/347239680_986023742578658_4815144733912331201_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=jA_bLYmOJnYAX-sznVk&_nc_ht=scontent.fgza2-3.fna&oh=00_AfC6Lgd0Ke6AXIdjwjqbzTe1loZ5nyUKe5kBCRKNyhMcWg&oe=64711B02',20),
    ('Pixelated Whispers','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347601985_905723697395073_2533069278130935484_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=cuPmyeQLoYIAX-z3sEG&_nc_ht=scontent.fgza2-1.fna&oh=00_AfCyQFmD4No0fx9nmdhGKY-H0YYvpCPXg8H1rIHkYDVu-w&oe=64723FD3',40),
    ('Vivid Imagination','https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/347234141_788373015950336_2344053597479176890_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=8y-d7z-6OcYAX_W0P6W&_nc_ht=scontent.fgza2-3.fna&oh=00_AfCA0UzF-Oekvap2FwLJqTDa_WTzHZOAwGF3aitBFdXbig&oe=6471F8D2',30),
    ('Quantum Reflections','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347411755_195328416743030_1264578416268977463_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=b3ocHDwe4y8AX8Q3G19&_nc_ht=scontent.fgza2-1.fna&oh=00_AfDCU7r0W4qGIQxyylplb8MJrlg7bDE_EOAukWroMfRGZw&oe=647171B2',70),
    ('Cyber Enigma','https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0JTIwYXJ0fGVufDB8fDB8fHww&w=1000&q=80',20),
    ('Mystic Kaleidoscope','https://khamsat.hsoubcdn.com/images/services/2411770/32b94ff7f8c472ab26c560c131796c03.jpg',40),
    ('Artistic Fusion','https://qph.cf2.quoracdn.net/main-qimg-034782caca355cfad79fff9eb3b3d325',50),
    ('Neon Odyssey','https://d3-invdn-com.investing.com/content/pic72486b318ca49a9600eca3b65f5a2913.jpg',54),
    ('Techno Mirage','https://dinasoor.tech/wp-content/uploads/2022/01/%D8%B5%D9%88%D8%B1-nft.jpeg',50),
    ('Pixel Perfection','https://www.nok6a.net/wp-content/uploads/2021/12/Screen_Shot_2021_03_02_at_3.21.50_PM.0.webp',70),
    ('Ethereal Visions','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSR-dZIfDIO_0p2vmYPXcWIoS11WCvT8c3TA&usqp=CAU',45),
    ('Digital Symphony','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbt_yqPlfNF-kohZJTHlv2_DtSiSosoFU8iw&usqp=CAU',60),
    ('Cosmic Dreams','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_Uhlh7G5pDkN4YsZyJBnmA9wMvams8q9Kg&usqp=CAU',48),
    ('Virtual Serenity','https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/347407604_189254583643733_3030263003594537966_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=eRTQaotpvhsAX-adAs0&_nc_ht=scontent.fgza2-1.fna&oh=00_AfC1S44R3hbA4aOisvg_lowDZc9KHKCA7-cSq97qNCfw6g&oe=64714E7C',10);

COMMIT;