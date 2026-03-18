const quizzes = [
    {
        id: 1,
        title: 'Movie Trivia Challenge',
        category: 'Entertainment',
        duration: '10 mins',
        prize: 'Cash Reward',
        difficulty: 'Easy',
        badge: 'Free to Play',
        color: 'purple-pink',
        questions: [
            {
                id: 1,
                question: 'Who directed the movie "Inception"?',
                options: ['Steven Spielberg', 'Christopher Nolan', 'James Cameron', 'Martin Scorsese'],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Which movie won the Oscar for Best Picture in 2020?',
                options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'In which movie does the character "Jack Dawson" appear?',
                options: ['The Titanic', 'The Great Gatsby', 'Catch Me If You Can', 'Inception'],
                correctAnswer: 0
            },
            {
                id: 4,
                question: 'Who played Iron Man in the Marvel Cinematic Universe?',
                options: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Which animated movie features a character named "Simba"?',
                options: ['The Jungle Book', 'Madagascar', 'The Lion King', 'Finding Nemo'],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'What year was the first "Harry Potter" movie released?',
                options: ['1999', '2000', '2001', '2002'],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'Who directed "The Dark Knight" trilogy?',
                options: ['Zack Snyder', 'Christopher Nolan', 'Tim Burton', 'Sam Raimi'],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Which movie features the line "May the Force be with you"?',
                options: ['Star Trek', 'Star Wars', 'Guardians of the Galaxy', 'Interstellar'],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'In "The Matrix", what color pill does Neo take?',
                options: ['Blue', 'Red', 'Green', 'Yellow'],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Who played the Joker in "The Dark Knight"?',
                options: ['Jared Leto', 'Joaquin Phoenix', 'Heath Ledger', 'Jack Nicholson'],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 2,
        title: 'Sports Champions Quiz',
        category: 'Sports',
        difficulty: 'Medium',
        badge: 'Guaranteed Win',
        color: 'green-emerald',
        questions: [
            {
                id: 1,
                question: 'How many players are there in a cricket team?',
                options: ['10', '11', '12', '13'],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Which country hosted the 2016 Summer Olympics?',
                options: ['China', 'UK', 'Brazil', 'Japan'],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'Who has won the most Grand Slam titles in tennis (men)?',
                options: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Pete Sampras'],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'In which sport would you perform a "slam dunk"?',
                options: ['Volleyball', 'Basketball', 'Tennis', 'Badminton'],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'How many rings are on the Olympic flag?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'Which country won the FIFA World Cup 2018?',
                options: ['Brazil', 'Germany', 'France', 'Argentina'],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'What is the national sport of India?',
                options: ['Cricket', 'Hockey', 'Football', 'Kabaddi'],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'How many points is a touchdown worth in American football?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 2
            },
            {
                id: 9,
                question: 'Which athlete is known as "The Lightning Bolt"?',
                options: ['Carl Lewis', 'Usain Bolt', 'Mo Farah', 'Jesse Owens'],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'In which year were the first modern Olympics held?',
                options: ['1892', '1896', '1900', '1904'],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'What is the maximum break in snooker?',
                options: ['147', '150', '155', '160'],
                correctAnswer: 0
            },
            {
                id: 12,
                question: 'Which sport uses the terms "love", "deuce", and "advantage"?',
                options: ['Badminton', 'Squash', 'Tennis', 'Table Tennis'],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 3,
        title: 'Science & Technology',
        category: 'Science',
        difficulty: 'Medium',
        badge: 'Free to Play',
        color: 'cyan-blue',
        questions: [
            {
                id: 1,
                question: 'What is the chemical symbol for gold?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correctAnswer: 2
            },
            {
                id: 2,
                question: 'What planet is known as the Red Planet?',
                options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'What is the speed of light?',
                options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
                correctAnswer: 0
            },
            {
                id: 4,
                question: 'Who invented the telephone?',
                options: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Guglielmo Marconi'],
                correctAnswer: 2
            },
            {
                id: 5,
                question: 'What is the powerhouse of the cell?',
                options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'What does DNA stand for?',
                options: ['Deoxyribonucleic Acid', 'Dinitrogen Acid', 'Dynamic Nuclear Acid', 'Double Nitrogen Acid'],
                correctAnswer: 0
            },
            {
                id: 7,
                question: 'What is the hardest natural substance on Earth?',
                options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
                correctAnswer: 2
            },
            {
                id: 8,
                question: 'How many bones are in the adult human body?',
                options: ['196', '206', '216', '226'],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What gas do plants absorb from the atmosphere?',
                options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'What is the largest organ in the human body?',
                options: ['Heart', 'Brain', 'Liver', 'Skin'],
                correctAnswer: 3
            }
        ]
    },
    {
        id: 4,
        title: 'World History Masters',
        category: 'History',
        difficulty: 'Hard',
        badge: 'Guaranteed Win',
        color: 'orange-red',
        questions: [
            {
                id: 1,
                question: 'In which year did World War II end?',
                options: ['1943', '1944', '1945', '1946'],
                correctAnswer: 2
            },
            {
                id: 2,
                question: 'Who was the first President of the United States?',
                options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'The Great Wall of China was built to protect against invasions from which group?',
                options: ['Mongols', 'Japanese', 'Koreans', 'Russians'],
                correctAnswer: 0
            },
            {
                id: 4,
                question: 'Who painted the Mona Lisa?',
                options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Which ancient wonder of the world still stands today?',
                options: ['Hanging Gardens of Babylon', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Lighthouse of Alexandria'],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'Who was known as the "Iron Lady"?',
                options: ['Margaret Thatcher', 'Queen Elizabeth II', 'Indira Gandhi', 'Angela Merkel'],
                correctAnswer: 0
            },
            {
                id: 7,
                question: 'In which year did India gain independence?',
                options: ['1945', '1946', '1947', '1948'],
                correctAnswer: 2
            },
            {
                id: 8,
                question: 'Who discovered America?',
                options: ['Ferdinand Magellan', 'Christopher Columbus', 'Amerigo Vespucci', 'Vasco da Gama'],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'The French Revolution began in which year?',
                options: ['1776', '1789', '1799', '1804'],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Who was the first man to walk on the moon?',
                options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'John Glenn'],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'The Renaissance began in which country?',
                options: ['France', 'Spain', 'Italy', 'England'],
                correctAnswer: 2
            },
            {
                id: 12,
                question: 'Who wrote "The Communist Manifesto"?',
                options: ['Vladimir Lenin', 'Joseph Stalin', 'Karl Marx', 'Friedrich Engels'],
                correctAnswer: 2
            },
            {
                id: 13,
                question: 'The Berlin Wall fell in which year?',
                options: ['1987', '1988', '1989', '1990'],
                correctAnswer: 2
            },
            {
                id: 14,
                question: 'Who was the longest-reigning British monarch before Elizabeth II?',
                options: ['Queen Victoria', 'King George III', 'Queen Elizabeth I', 'King Henry VIII'],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'The Battle of Waterloo was fought in which year?',
                options: ['1805', '1810', '1815', '1820'],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 5,
        title: 'Music Legends Quiz',
        category: 'Music',
        difficulty: 'Easy',
        badge: 'Free to Play',
        color: 'purple-indigo',
        questions: [
            {
                id: 1,
                question: 'Who is known as the "King of Pop"?',
                options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'Madonna'],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Which band sang "Bohemian Rhapsody"?',
                options: ['The Beatles', 'Led Zeppelin', 'Queen', 'Pink Floyd'],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'What instrument does a drummer play?',
                options: ['Guitar', 'Piano', 'Drums', 'Violin'],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'Who sang "Shape of You"?',
                options: ['Justin Bieber', 'Ed Sheeran', 'Shawn Mendes', 'Bruno Mars'],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Which city is known as the birthplace of Jazz?',
                options: ['New York', 'Chicago', 'New Orleans', 'Memphis'],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'What does "DJ" stand for?',
                options: ['Disco Jockey', 'Disc Jockey', 'Dance Jockey', 'Digital Jockey'],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Who is the lead singer of Coldplay?',
                options: ['Bono', 'Chris Martin', 'Thom Yorke', 'Brandon Flowers'],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Which female artist has won the most Grammy Awards?',
                options: ['Taylor Swift', 'Beyoncé', 'Adele', 'Lady Gaga'],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What year did Elvis Presley die?',
                options: ['1975', '1977', '1979', '1980'],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Which band is Freddie Mercury associated with?',
                options: ['The Rolling Stones', 'The Who', 'Queen', 'The Beatles'],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 6,
        title: 'Geography Explorer',
        category: 'Geography',
        difficulty: 'Medium',
        badge: 'Guaranteed Win',
        color: 'teal-cyan',
        questions: [
            {
                id: 1,
                question: 'What is the capital of France?',
                options: ['London', 'Berlin', 'Paris', 'Madrid'],
                correctAnswer: 2
            },
            {
                id: 2,
                question: 'Which is the largest ocean on Earth?',
                options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
                correctAnswer: 3
            },
            {
                id: 3,
                question: 'Mount Everest is located in which mountain range?',
                options: ['Alps', 'Andes', 'Himalayas', 'Rockies'],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'Which country has the most population?',
                options: ['India', 'China', 'USA', 'Indonesia'],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'What is the smallest country in the world?',
                options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'The Sahara Desert is located in which continent?',
                options: ['Asia', 'Australia', 'Africa', 'South America'],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'Which river is the longest in the world?',
                options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Which country is known as the Land of the Rising Sun?',
                options: ['China', 'Japan', 'Thailand', 'South Korea'],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What is the capital of Australia?',
                options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'How many continents are there?',
                options: ['5', '6', '7', '8'],
                correctAnswer: 2
            },
            {
                id: 11,
                question: 'Which is the largest country by area?',
                options: ['Canada', 'China', 'USA', 'Russia'],
                correctAnswer: 3
            },
            {
                id: 12,
                question: 'The Statue of Liberty was a gift from which country?',
                options: ['England', 'France', 'Italy', 'Spain'],
                correctAnswer: 1
            }
        ]
    }
];